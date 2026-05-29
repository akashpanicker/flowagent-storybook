type TypeSampleProps = {
  label: string;
  className: string;
  size: number;
  lineHeight: number;
  sample?: string;
};

export function TypeSample({
  label,
  className,
  size,
  lineHeight,
  sample = "The quick brown fox jumps over the lazy dog",
}: TypeSampleProps) {
  return (
    <div className="flex flex-col gap-1.5 border-b border-neutral-200 py-4 font-sans last:border-b-0">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="text-body-14 font-semibold text-neutral-800">{label}</span>
        <span className="text-caption-12 text-neutral-500">{className}</span>
        <span className="text-caption-12 text-neutral-400">
          {size}px / {lineHeight}px
        </span>
      </div>
      <p
        className="font-sans text-neutral-900"
        style={{ fontSize: `${size}px`, lineHeight: `${lineHeight}px` }}
      >
        {sample}
      </p>
    </div>
  );
}
