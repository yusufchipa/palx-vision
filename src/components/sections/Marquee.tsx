const items = [
  "Web Development",
  "Mobile Apps",
  "Brand Identity",
  "Digital Marketing",
  "Photography",
  "Film & Motion",
];

export const Marquee = () => {
  const loop = [...items, ...items, ...items];
  return (
    <section className="bg-primary text-primary-foreground py-6 hairline hairline-b border-foreground/40 overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap">
        {loop.map((it, i) => (
          <span key={i} className="font-display text-5xl md:text-7xl mx-8 inline-flex items-center gap-8">
            {it}
            <span className="text-primary-foreground/70">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
};
