import Hero from "./hero";
import Contact from "./contact";
import { TrustStrip } from "@/components/trust-strip";
import { CredentialTriangle } from "@/components/credential-triangle";
import { WritingPortfolio } from "@/components/writing-portfolio";
import { TechJournalism } from "@/components/tech-journalism";
import { Consulting } from "@/components/consulting";
import { DrupalDevelopment } from "@/components/drupal-development";
import { Timeline } from "@/components/timeline";
import { About } from "@/components/about";
import { Process } from "@/components/process";
import { MakersWorkbench } from "@/components/makers-workbench";
import { ClientSeries } from "@/components/client-series";
import { ARTICLES } from "@/data/articles";
import { withOgImages } from "@/lib/og";

export default async function Home() {
  const articles = await withOgImages(ARTICLES);
  const featured = articles.find((a) => a.featured);
  const supporting = articles.filter((a) => !a.featured);

  return (
    <>
      <Hero />
      <TrustStrip />
      <CredentialTriangle />
      <WritingPortfolio featured={featured} articles={supporting} />
      <TechJournalism />
      <Consulting />
      <DrupalDevelopment />
      <MakersWorkbench />
      <ClientSeries />
      <Timeline />
      <About />
      <Process />
      <Contact />
    </>
  );
}
