type RadiusTileProps = {
  name: string;
  px: string;
  radius: string;
};

export function RadiusTile({ name, px, radius }: RadiusTileProps) {
  return (
    <div className="flex flex-col items-center gap-2 font-sans">
      <div
        className="h-16 w-16 border-2 border-brand-bright-blue bg-brand-bright-blue-50"
        style={{ borderRadius: radius }}
      />
      <span className="text-body-14 font-semibold text-neutral-800">{name}</span>
      <span className="text-caption-12 text-neutral-500">{px}</span>
    </div>
  );
}
