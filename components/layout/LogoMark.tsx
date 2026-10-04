import { useId } from "react";
import { cn } from "@/lib/utils";

/** Zama logo symbol, redrawn from the client's badge: crossed gold roof lines and eave over the orange/yellow window. */
export function LogoMark({ className }: { className?: string }) {
  const id = useId();
  return (
    <svg aria-hidden="true" viewBox="0 0 60 56" className={cn("shrink-0", className)}>
      <defs>
        <linearGradient id={`${id}-a`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F9D23C" />
          <stop offset="1" stopColor="#F08A1C" />
        </linearGradient>
        <linearGradient id={`${id}-b`} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F4A62A" />
          <stop offset="1" stopColor="#F7C933" />
        </linearGradient>
      </defs>
      <g stroke="#B07A2A" strokeWidth="1.7" strokeLinecap="round" fill="none">
        <path d="M1.5 31 34 2.5" />
        <path d="M4.2 32.2 35.6 4.6" />
        <path d="M58.5 31 26 2.5" />
        <path d="M55.8 32.2 24.4 4.6" />
      </g>
      <path d="M11 26.5 34 20.5 50 26.5" stroke="#B07A2A" strokeWidth="3.2" strokeLinejoin="round" strokeLinecap="round" fill="none" />
      <rect x="14" y="29" width="9.6" height="10.4" fill={`url(#${id}-a)`} />
      <rect x="24.8" y="28.2" width="9.6" height="11.2" fill={`url(#${id}-b)`} />
      <rect x="14" y="40.6" width="9.6" height="10.4" fill={`url(#${id}-b)`} />
      <rect x="24.8" y="40.6" width="9.6" height="12" fill={`url(#${id}-a)`} />
      <path
        d="M14 36c3.5-2.5 7-3 9.6-1.6M24.8 35c3-2.2 6.4-2.8 9.6-1.2M14 48c3.6-2.4 7-2.8 9.6-1.4M24.8 49c3-2.2 6.4-2.6 9.6-1.2"
        stroke="#fff"
        strokeOpacity=".55"
        strokeWidth=".9"
        fill="none"
      />
    </svg>
  );
}
