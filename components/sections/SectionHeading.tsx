import { MaskedLines } from "@/components/motion/MaskedLines";

type Props = {
  index: string;
  label: string;
  lines: React.ReactNode[];
  className?: string;
};

/** Consistent section opener: mono index + hairline + masked display headline. */
export function SectionHeading({ index, label, lines, className = "" }: Props) {
  return (
    <div className={className}>
      <div className="mb-10 flex items-baseline gap-4 md:mb-14">
        <span className="label-mono !text-brass">{index}</span>
        <span className="label-mono">{label}</span>
        <span className="rule mt-[0.35em] flex-1 self-start" />
      </div>
      <MaskedLines
        lines={lines}
        as="h2"
        className="display text-[clamp(2.2rem,5.5vw,4.5rem)]"
      />
    </div>
  );
}
