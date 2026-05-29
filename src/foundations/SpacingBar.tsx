type SpacingBarProps = {
  step: number;
  px: number;
};

export function SpacingBar({ step, px }: SpacingBarProps) {
  return (
    <div className="flex items-center gap-4 py-1.5 font-sans">
      <span className="w-20 shrink-0 text-body-14 font-semibold text-neutral-800">
        gap-{step}
      </span>
      <span className="w-12 shrink-0 text-caption-12 text-neutral-500">{px}px</span>
      <div
        className="h-4 rounded-sm bg-brand-bright-blue"
        style={{ width: `${px}px` }}
      />
    </div>
  );
}
