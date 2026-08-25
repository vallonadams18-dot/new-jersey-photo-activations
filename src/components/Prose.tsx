import type { ProseBlock } from "@/data/types";

/**
 * Renders authored prose blocks.
 *
 * Paragraphs may open with a `**bolded lead**`, which is the only markup the
 * content model supports — enough for a defined-term list, not enough for
 * authors to smuggle arbitrary HTML into a static page.
 */
function Paragraph({ text, tone }: { text: string; tone: "dark" | "light" }) {
  // [\s\S] rather than the `s` flag — the tsconfig target predates dotAll.
  const match = text.match(/^\*\*([\s\S]+?)\*\*\s*([\s\S]*)$/);
  if (match) {
    return (
      <p>
        <strong
          className={`font-sans font-medium ${tone === "dark" ? "text-ivory" : "text-charcoal"}`}
        >
          {match[1]}
        </strong>{" "}
        {match[2]}
      </p>
    );
  }
  return <p>{text}</p>;
}

export function Prose({
  blocks,
  tone = "dark",
  className = "",
}: {
  blocks: ProseBlock[];
  tone?: "dark" | "light";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={`flex flex-col gap-12 ${className}`}>
      {blocks.map((block) => (
        <div key={block.heading} className="flex flex-col gap-5">
          <h3
            className={`text-[1.6rem] leading-tight sm:text-[1.9rem] ${dark ? "text-ivory" : "text-charcoal"}`}
          >
            {block.heading}
          </h3>
          <div
            className={`flex max-w-2xl flex-col gap-4 text-[15px] leading-[1.75] sm:text-base ${dark ? "text-mute" : "text-charcoal/72"}`}
          >
            {block.paragraphs.map((p, i) => (
              <Paragraph key={i} text={p} tone={tone} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/** A checked list, used for "what's included" and capability lists. */
export function CheckList({
  items,
  tone = "dark",
}: {
  items: string[];
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";
  return (
    <ul className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={`mt-2 size-1 shrink-0 rounded-full ${dark ? "bg-champagne" : "bg-champagne-deep"}`}
            aria-hidden="true"
          />
          <span
            className={`text-[14px] leading-relaxed ${dark ? "text-ivory/80" : "text-charcoal/75"}`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
