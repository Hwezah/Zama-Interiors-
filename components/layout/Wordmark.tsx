import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/**
 * The client's name with a capitalised line (e.g. INTERIORS) spread underneath to the same width.
 * Text comes from `site.wordmark`; `size` sets the name's font size and the line scales with it.
 * `mark: "roof"` adds the thin double roof line from the Zama logo in front of the text.
 */
export function Wordmark({ className, size = "header" }: { className?: string; size?: "header" | "panel" | "footer" }) {
  const caps = site.wordmark.name === site.wordmark.name.toUpperCase();
  const text = (
    <span className={cn("inline-flex min-w-0 flex-col", !site.wordmark.mark && className)}>
      <span
        className={cn(
          "whitespace-nowrap font-serif font-light", // one notch above the 200 used for headings
          caps ? "tracking-[.04em]" : "tracking-[-.02em]",
          { header: "text-[30px] mp:text-[26px]", panel: "text-[28px] mp:text-[26px]", footer: "text-[34px]" }[size],
          // after the size: tailwind-merge drops a line-height that comes before a font-size
          "leading-none",
        )}
      >
        {site.wordmark.name}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "-mt-0.5 flex justify-between font-light leading-none",
          size === "footer" ? "mt-0 text-[12px]" : "text-[11px] mp:-mt-px mp:text-[10px]",
        )}
      >
        {site.wordmark.sub.split("").map((ch, i) => (
          <span key={i}>{ch}</span>
        ))}
      </span>
    </span>
  );
  if (site.wordmark.mark !== "roof") return text;
  return (
    <span className={cn("inline-flex min-w-0 items-center gap-2.5", className)}>
      <svg
        aria-hidden="true"
        viewBox="0 0 40 30"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinejoin="round"
        className={cn("shrink-0", size === "footer" ? "h-[38px] w-[50px]" : "h-[32px] w-[42px] mp:h-[28px] mp:w-[37px]")}
      >
        <path d="M2 27 20 4l18 23" />
        <path d="M9 27 20 13l11 14" />
        <path d="M14 2l6 7 6-7" />
      </svg>
      {text}
    </span>
  );
}
