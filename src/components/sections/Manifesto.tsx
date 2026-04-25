import { motion } from "framer-motion";
import team from "@/assets/studio-team.jpg";

const dossier = [
  { k: "Founded", v: "2021, Udaipur" },
  { k: "Team", v: "6 humans · 1 dog" },
  { k: "Languages", v: "Hindi · English · CSS" },
  { k: "Coffee/day", v: "≈ 14 cups" },
  { k: "Disciplines", v: "Code · Design · Lens" },
  { k: "Currently", v: "Booking Q3 2025" },
];

export const Manifesto = () => {
  return (
    <section id="studio" className="relative bg-secondary hairline border-foreground/40 py-24 md:py-32 overflow-hidden">
      <div className="editorial">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-8 mb-16">
          <p className="col-span-12 md:col-span-2 sec-num">— 01 / The studio</p>
          <div className="col-span-12 md:col-span-10">
            <h2 className="font-display text-4xl md:text-6xl text-balance">
              A small studio with{" "}
              <span className="font-serif-display italic font-light text-primary">a long memory</span>{" "}
              and a short list of clients.
            </h2>
          </div>
        </div>

        {/* Editorial spread */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          {/* LEFT — photo with caption like a magazine */}
          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="col-span-12 md:col-span-7 relative"
          >
            <div className="aspect-[4/5] md:aspect-[5/6] overflow-hidden grain bg-background">
              <img src={team} alt="The PalX team at work" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <figcaption className="mt-4 grid grid-cols-12 gap-4">
              <span className="col-span-2 font-mono-label text-foreground/60">Plate II</span>
              <span className="col-span-10 font-serif-display italic text-foreground/70">
                Aanya & Karan reviewing the second draft of the Vanal homepage. Photographed on a Tuesday.
              </span>
            </figcaption>
          </motion.figure>

          {/* RIGHT — dossier card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="col-span-12 md:col-span-5 flex flex-col gap-6"
          >
            {/* Manifesto card */}
            <div className="bg-background border-2 border-foreground p-6 md:p-8 relative">
              <div className="absolute -top-3 left-6 bg-primary text-primary-foreground font-mono-label px-3 py-1">
                Manifesto
              </div>
              <p className="font-serif-display italic text-xl md:text-2xl leading-snug text-pretty mt-2">
                We believe in <span className="text-primary not-italic font-display">slow work</span>, fewer clients, and the kind of craft that holds up after the launch tweet has faded.
              </p>
              <p className="font-grotesk text-foreground/70 text-sm mt-4">
                We say no to most projects. The ones we say yes to, we treat like our own.
              </p>
            </div>

            {/* Dossier specimen */}
            <div className="bg-foreground text-background p-6 md:p-8 relative">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-background/30">
                <span className="font-mono-label text-background/60">DOSSIER</span>
                <span className="font-mono-label text-background/60">№ PALX-001</span>
              </div>
              <dl className="space-y-3">
                {dossier.map((d) => (
                  <div key={d.k} className="grid grid-cols-12 gap-4 items-baseline">
                    <dt className="col-span-5 font-mono-label text-background/50">{d.k}</dt>
                    <dd className="col-span-7 font-serif-display text-lg leading-tight">{d.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Signature */}
            <div className="flex items-center justify-between pt-2">
              <span className="font-serif-display italic text-2xl">— The PalX team</span>
              <span className="font-mono-label text-foreground/50">Udaipur · India</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
