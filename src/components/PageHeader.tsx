/**
 * PageHeader — used at the top of each information page.
 * Eyebrow + display headline + intro.
 */
export default function PageHeader({
  eyebrow,
  title,
  titleAccent,
  intro,
}: {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  intro?: string;
}) {
  return (
    <section className="grain relative border-b border-border bg-bg">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="label flex items-center gap-3">
          <span className="inline-block h-px w-10 bg-accent" />
          {eyebrow}
        </div>
        <h1 className="display mt-6 text-[clamp(3rem,8vw,7rem)] leading-[0.9]">
          {title}
          {titleAccent && (
            <>
              <br />
              <span className="text-accent">{titleAccent}</span>
            </>
          )}
        </h1>
        {intro && (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-fg-muted">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
