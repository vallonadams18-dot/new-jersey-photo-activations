import type { Metadata } from "next";
import { PageHeader } from "@/components/Hero";
import { Prose } from "@/components/Prose";
import { pageMeta } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Terms of Use | New Jersey Photo Activations",
  description:
    "Terms governing use of the New Jersey Photo Activations website. Booking terms are set out separately in your event contract.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        h1="Terms of Use"
        sub="Last updated 25 August 2026."
        trail={[{ name: "Home", href: "/" }, { name: "Terms" }]}
      />
      <section className="cv-auto bg-obsidian px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[46rem]">
          <Prose
            blocks={[
              {
                heading: "About these terms",
                paragraphs: [
                  "These terms govern your use of this website. They are not your booking contract — if you book an event with us, the terms of that booking are set out in the contract and quote we send you, and those take precedence for anything to do with the event itself.",
                ],
              },
              {
                heading: "Information on this site",
                paragraphs: [
                  "We describe our experiences, capabilities and coverage as accurately as we can. Space requirements, lead times and inclusions are stated in good faith and represent how we normally work, but every venue and every event differs — the specifics that apply to you are the ones confirmed in your quote.",
                  "Nothing on this site is an offer capable of acceptance. Availability, pricing and scope are confirmed only in a written quote.",
                ],
              },
              {
                heading: "Third-party venues",
                paragraphs: [
                  "Venues named on this site are identified as public landmarks of the local event scene to describe where we work and what those rooms require. Naming a venue does not imply any partnership, endorsement, preferred-vendor status or other relationship with it, and none should be inferred.",
                  "Requirements at any venue are set by that venue and can change. Always confirm current supplier requirements directly with your venue.",
                ],
              },
              {
                heading: "Intellectual property",
                paragraphs: [
                  "The photographs, video, text and design on this site are ours or used with permission, and may not be reproduced without our consent. Client names and logos shown are the property of their respective owners and appear to identify work we have delivered.",
                ],
              },
              {
                heading: "Links",
                paragraphs: [
                  "This site links to other websites, including our parent business. We are not responsible for the content or practices of any site we link to.",
                ],
              },
              {
                heading: "Contact",
                paragraphs: [
                  `Questions about these terms can go to ${SITE.email}.`,
                ],
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
