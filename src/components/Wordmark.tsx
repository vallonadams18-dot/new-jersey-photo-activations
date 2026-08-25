/**
 * A typographic wordmark rather than an image file.
 *
 * There is no New Jersey Photo Activations logo yet — see
 * docs/OPEN-QUESTIONS.md. Setting the name in Cormorant with a champagne rule
 * is a deliberate holding position rather than a placeholder: it reads as a
 * luxury identity on its own, and it means nothing here borrows the parent
 * company's mark.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex flex-col leading-none ${className}`}>
      <span className="font-display text-[1.35rem] font-normal tracking-[0.01em] text-ivory sm:text-[1.55rem]">
        New Jersey
      </span>
      <span className="mt-1 flex items-center gap-2">
        <span
          className="h-px w-5 gradient-gold shrink-0"
          aria-hidden="true"
        />
        <span className="font-sans text-[0.58rem] font-medium uppercase tracking-[0.3em] text-champagne sm:text-[0.62rem]">
          Photo Activations
        </span>
      </span>
    </span>
  );
}
