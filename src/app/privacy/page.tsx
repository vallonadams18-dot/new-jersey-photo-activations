import type { Metadata } from "next";
import { PageHeader } from "@/components/Hero";
import { Prose } from "@/components/Prose";
import { pageMeta } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy | New Jersey Photo Activations",
  description:
    "How New Jersey Photo Activations collects, uses and stores personal information from enquiries and from photo experiences at events.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        h1="Privacy Policy"
        sub="Last updated 25 August 2026."
        trail={[{ name: "Home", href: "/" }, { name: "Privacy" }]}
      />
      <section className="cv-auto bg-obsidian px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[46rem]">
          <Prose
            blocks={[
              {
                heading: "What we collect from enquiries",
                paragraphs: [
                  `When you submit the quote or contact form we collect the details you enter — name, company, email, phone, event date, venue ZIP code, county, guest count, the experience you are interested in and your message. We also record the page you arrived on, the referring site, and any campaign parameters in the URL, so we know which marketing is working.`,
                  `We use this only to respond to your enquiry, prepare a quote and, if you book, deliver your event. We do not sell it, and we do not share it with third parties other than the service providers described below.`,
                ],
              },
              {
                heading: "What we collect at events",
                paragraphs: [
                  "Photo experiences capture images and, on some experiences, video of guests who choose to use them. Guests may also choose to enter an email address or phone number to receive their own copy, and may be asked to answer a short survey.",
                  "That contact capture is always opt-in and always in exchange for delivering something the guest has asked for. Where a client has commissioned an activation, opt-in contact data is provided to that client after the event, and the guest is told so at the point of opting in.",
                ],
              },
              {
                heading: "Event galleries",
                paragraphs: [
                  "Images from an event are hosted in an online gallery so guests and clients can access them. If you would like an image of yourself removed from a gallery, email us and we will remove it.",
                  "We may use photographs from events in our portfolio, including on this website. If you or your organisation would prefer we did not, tell us and we will honour that.",
                ],
              },
              {
                heading: "Service providers",
                paragraphs: [
                  "We use third parties to operate the site and the business — form delivery and email, website hosting, gallery hosting, and analytics. They process data on our behalf and are not permitted to use it for their own purposes.",
                ],
              },
              {
                heading: "Retention and your rights",
                paragraphs: [
                  "We keep enquiry data for as long as needed to respond and to keep proper business records. You can ask us what we hold about you, ask for it to be corrected, or ask for it to be deleted.",
                  `For any privacy request, email ${SITE.email} and we will action it.`,
                ],
              },
              {
                heading: "Cookies",
                paragraphs: [
                  "This site uses browser session storage to remember how you arrived, so an enquiry can be attributed to the right campaign. That data stays in your browser for the session and is sent only with a form you choose to submit. Any analytics we run is configured to avoid collecting more than is needed to understand traffic.",
                ],
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
