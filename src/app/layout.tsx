import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const SITE_URL = "https://charlesjgantt.online";
const TITLE = "Charles J. Gantt: B2B Technical Content, CKEditor Specialist & Drupal Developer";
const DESCRIPTION =
  "Technical content marketer and Drupal developer specializing in CKEditor 5. 825+ published articles across CKEditor, TweakTown, and Element14. Available for content strategy, technical writing, and Drupal consulting.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "CKEditor technical writer",
    "Drupal developer portfolio",
    "B2B technical content marketing",
    "CKEditor 5 consultant",
    "technical content marketer",
  ],
  authors: [{ name: "Charles J. Gantt" }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Charles J. Gantt",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Charles J. Gantt",
  url: SITE_URL,
  jobTitle: "Technical Content Marketer & Drupal Developer",
  description: DESCRIPTION,
  sameAs: [
    "https://ckeditor.com/blog/authors/charles-gantt/",
    "https://github.com/CharlesJGantt",
    "https://www.linkedin.com/in/charles-gantt-b5aa8351",
    "https://www.drupal.org/u/charles-gantt",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={roboto.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
