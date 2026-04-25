const steps = [
  { n: "01", title: "Listen", desc: "We start with questions, not pitches. Coffee, a long call, and a real understanding of where you want to go." },
  { n: "02", title: "Shape", desc: "Strategy, sketches, moodboards. We carve the idea into something with clear edges before a single pixel is placed." },
  { n: "03", title: "Build", desc: "Design and code grow together — weekly demos, no surprises, every detail considered twice." },
  { n: "04", title: "Launch", desc: "We ship it cleanly, train your team, and stay on call. The end of the project is the start of the relationship." },
];

export const Process = () => {
  return (
    <section className="bg-secondary hairline border-foreground/40 py-24 md:py-32">
      <div className="editorial">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <p className="col-span-12 md:col-span-2 sec-num">— 04 / Process</p>
          <h2 className="col-span-12 md:col-span-10 font-display text-5xl md:text-7xl">
            How we work<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="bg-background hairline border-foreground/40 p-6 min-h-[260px] flex flex-col justify-between">
              <span className="font-display text-7xl text-primary">{s.n}</span>
              <div>
                <h3 className="font-display text-3xl uppercase mb-3">{s.title}</h3>
                <p className="font-grotesk text-sm text-foreground/70 text-pretty">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
