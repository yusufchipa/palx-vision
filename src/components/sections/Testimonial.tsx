export const Testimonial = () => {
  return (
    <section className="editorial py-24 md:py-40 hairline hairline-b border-foreground/40">
      <div className="grid grid-cols-12 gap-8">
        <p className="col-span-12 md:col-span-2 sec-num">— 06 / Word of mouth</p>
        <div className="col-span-12 md:col-span-10 relative">
          <span className="absolute -top-12 -left-4 md:-left-12 font-serif-display text-[12rem] md:text-[16rem] leading-none text-primary opacity-90 select-none">
            "
          </span>
          <blockquote className="font-serif-display italic text-3xl md:text-5xl lg:text-6xl leading-[1.15] text-pretty relative">
            PalX feels less like an agency and more like a creative co-founder. They sweat the details we'd never think of, and the result speaks for itself — every single time.
          </blockquote>
          <p className="mt-10 font-mono-label text-foreground/60">
            — Karan M. · Founder, Vanal Studio · Mumbai
          </p>
        </div>
      </div>
    </section>
  );
};
