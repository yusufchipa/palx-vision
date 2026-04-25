const logos = ["VANAL", "SOLACE", "LUW", "BAMNU", "PULSE", "TERRA", "NORD", "MAYA", "KIRAN", "OASIS", "INDIGO", "SAGE"];

export const Clients = () => {
  return (
    <section className="editorial py-20">
      <div className="grid grid-cols-12 gap-8 mb-10">
        <p className="col-span-12 md:col-span-2 sec-num">— 05 / Trusted by</p>
        <p className="col-span-12 md:col-span-10 font-grotesk text-foreground/70 max-w-xl">
          A small selection of the brands and founders who've trusted us with their work.
        </p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 hairline hairline-b border-foreground/40">
        {logos.map((l, i) => (
          <div
            key={l}
            className={`py-10 flex items-center justify-center font-display text-2xl md:text-3xl text-foreground/40 hover:text-foreground transition-colors border-foreground/40 ${
              i % 6 !== 5 ? "md:border-r" : ""
            } ${i % 3 !== 2 ? "border-r md:border-r" : ""} ${i < logos.length - 6 ? "md:border-b" : ""} ${i < logos.length - 3 ? "border-b md:border-b" : ""}`}
          >
            {l}
          </div>
        ))}
      </div>
    </section>
  );
};
