type ColorSwatchProps = {
  name: string;
  className: string;
  hex: string;
};

export function ColorSwatch({ name, className, hex }: ColorSwatchProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-neutral-200 p-3 font-sans">
      <div
        className="h-12 w-12 shrink-0 rounded-md border border-neutral-200"
        style={{ backgroundColor: hex }}
      />
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className="text-body-14 font-semibold text-neutral-800">{name}</span>
        <span className="text-caption-12 text-neutral-500">{className}</span>
        <span className="text-caption-12 uppercase text-neutral-400">{hex}</span>
      </div>
    </div>
  );
}
