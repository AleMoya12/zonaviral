type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.32em] text-orange-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-balance text-3xl font-black tracking-[-0.03em] text-stone-50 md:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-lg leading-8 text-stone-300/90">{description}</p> : null}
    </div>
  );
}
