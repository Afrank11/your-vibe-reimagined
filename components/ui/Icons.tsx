/** Hand-drawn 1.5px-stroke icon set — one visual language, no icon library. */

type IconProps = { size?: number; className?: string };

export function ArrowUpRight({ size = 14, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <path d="M4 12L12 4M12 4H5.5M12 4v6.5" strokeLinecap="square" />
    </svg>
  );
}

export function ArrowDown({ size = 14, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <path d="M8 2v11M3.5 8.5L8 13l4.5-4.5" strokeLinecap="square" />
    </svg>
  );
}

export function Download({ size = 14, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <path d="M8 2v8M4.5 7L8 10.5 11.5 7M3 13h10" strokeLinecap="square" />
    </svg>
  );
}

export function Plus({ size = 14, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <path d="M8 3v10M3 8h10" strokeLinecap="square" />
    </svg>
  );
}
