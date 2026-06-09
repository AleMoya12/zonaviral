type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-viral-yellow">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-black tracking-normal text-white md:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-lg leading-8 text-gray-300">{description}</p> : null}
    </div>
  );
}
