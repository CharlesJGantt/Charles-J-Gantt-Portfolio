import type { Article } from "@/data/articles";

const TIMEOUT_MS = 8000;
const RETRIES = 3;
const CONCURRENCY = 8;

function parseOgImage(html: string): string | null {
  const match =
    html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ??
    html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
  return match?.[1] ?? null;
}

/**
 * Fetches an article's og:image at build time (CLAUDE.md §12). Retries on
 * network/timeout failures so a transient stall under concurrent load doesn't
 * drop a card to the placeholder. Returns null only when a page genuinely has
 * no parseable og:image, or after all retries fail. Responses are cached 24h.
 */
export async function fetchOgImage(pageUrl: string): Promise<string | null> {
  for (let attempt = 0; attempt < RETRIES; attempt++) {
    try {
      const res = await fetch(pageUrl, {
        next: { revalidate: 60 * 60 * 24 },
        signal: AbortSignal.timeout(TIMEOUT_MS),
        headers: { "user-agent": "Mozilla/5.0 (charlesjgantt.online portfolio build)" },
      });
      if (!res.ok) continue; // transient server error - retry
      // Page fetched successfully; its og:image is stable, so don't retry the parse.
      return parseOgImage(await res.text());
    } catch {
      // timeout / network error - fall through to the next attempt
    }
  }
  return null;
}

/** Runs an async mapper over items with a bounded concurrency pool. */
async function mapPool<T, R>(items: T[], limit: number, fn: (item: T) => Promise<R>): Promise<R[]> {
  const results = new Array<R>(items.length);
  let cursor = 0;
  async function worker() {
    while (cursor < items.length) {
      const index = cursor++;
      results[index] = await fn(items[index]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

/** Resolves og:images for a list of articles with bounded concurrency. */
export async function withOgImages(articles: Article[]): Promise<Article[]> {
  return mapPool(articles, CONCURRENCY, async (a) => ({
    ...a,
    ogImage: a.ogImage ?? (await fetchOgImage(a.url)) ?? undefined,
  }));
}
