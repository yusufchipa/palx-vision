import { motion } from "framer-motion";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

export const Work = () => {
  return (
    <section id="work" className="editorial py-24 md:py-32 space-y-32">
      <div className="grid grid-cols-12 gap-8">
        <p className="col-span-12 md:col-span-2 sec-num">— 03 / Selected Work</p>
        <h2 className="col-span-12 md:col-span-10 font-display text-5xl md:text-7xl">
          Recent things<br />
          <span className="font-serif-display italic font-normal text-primary">we're proud of.</span>
        </h2>
      </div>

      {/* PROJECT 01 — full bleed image left, tall meta right */}
      <motion.article {...reveal} className="grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 md:col-span-8 relative">
          <div className="aspect-[4/3] overflow-hidden grain">
            <img src={p1} alt="Vanal — fashion e-commerce" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 space-y-4">
          <p className="font-mono-label text-foreground/60">01 / E-commerce · 2025</p>
          <h3 className="font-serif-display italic text-4xl md:text-5xl">Vanal Studio</h3>
          <p className="font-grotesk text-foreground/70">A slow-fashion label needed a homepage that felt like opening a fashion magazine. We delivered.</p>
          <p className="font-mono-label">→ View Case</p>
        </div>
      </motion.article>

      {/* PROJECT 02 — phone center, floating details */}
      <motion.article {...reveal} className="relative grid grid-cols-12 gap-8 items-center bg-secondary py-20 -mx-6 md:-mx-10 lg:-mx-14 px-6 md:px-10 lg:px-14">
        <div className="col-span-6 md:col-span-3 space-y-2">
          <p className="font-mono-label text-foreground/60">Client</p>
          <p className="font-display text-2xl">Solace Wellness</p>
          <p className="font-mono-label text-foreground/60 pt-4">Year</p>
          <p className="font-display text-2xl">2024</p>
        </div>
        <div className="col-span-12 md:col-span-6 order-first md:order-none">
          <div className="aspect-[4/5] overflow-hidden grain max-w-md mx-auto">
            <img src={p2} alt="Solace mobile app" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
        <div className="col-span-6 md:col-span-3 space-y-2 md:text-right">
          <p className="font-mono-label text-foreground/60">Discipline</p>
          <p className="font-display text-2xl">iOS App</p>
          <p className="font-mono-label text-foreground/60 pt-4">Stack</p>
          <p className="font-display text-2xl">Swift</p>
        </div>
        <h3 className="col-span-12 text-center font-serif-display italic text-5xl md:text-7xl mt-8">
          A wellness app, distilled.
        </h3>
      </motion.article>

      {/* PROJECT 03 — branding flatlay */}
      <motion.article {...reveal} className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-5 md:pt-20">
          <p className="font-mono-label text-foreground/60 mb-4">03 / Brand Identity · 2024</p>
          <h3 className="font-display text-5xl md:text-6xl mb-6">LUW BOTANICALS</h3>
          <p className="font-serif-display italic text-xl md:text-2xl text-pretty">
            "An identity that smells like fresh paper and wet clay. PalX understood the brand before we did."
          </p>
          <p className="font-mono-label text-foreground/60 mt-6">— Aanya R., Founder</p>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div className="aspect-[4/3] overflow-hidden grain">
            <img src={p3} alt="Luw Botanicals brand identity" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>
        </div>
      </motion.article>

      {/* PROJECT 04 — Massive number as visual */}
      <motion.article {...reveal} className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-12 md:col-span-7 relative">
          <div className="font-display text-[24vw] md:text-[18vw] leading-none text-primary select-none">
            04
          </div>
          <p className="font-mono-label text-foreground/60 mt-2">Photography & Film · 2025</p>
        </div>
        <div className="col-span-12 md:col-span-5">
          <div className="aspect-[4/5] overflow-hidden grain">
            <img src={p4} alt="Studio photography work" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <h3 className="font-serif-display italic text-4xl mt-4">Terra Series</h3>
          <p className="font-grotesk text-foreground/70 mt-2">A campaign shoot for a ceramics atelier. Six rolls of Portra, one long afternoon.</p>
        </div>
      </motion.article>

      {/* PROJECT 05 — editorial spread */}
      <motion.article {...reveal} className="grid grid-cols-12 gap-8 items-start">
        <div className="col-span-12 md:col-span-7">
          <div className="aspect-[5/4] overflow-hidden grain">
            <img src={p5} alt="Bamnu restaurant website" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 space-y-6">
          <p className="font-mono-label text-foreground/60">05 / Web · Hospitality · 2024</p>
          <h3 className="font-display text-5xl uppercase">Bamnu</h3>
          <p className="font-serif-display italic text-xl text-pretty">
            A heritage restaurant in old Udaipur. We built a site as warm as their kitchen.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Web", "CMS", "SEO", "Photography"].map((t) => (
              <span key={t} className="font-mono-label border border-foreground/60 px-3 py-1">{t}</span>
            ))}
          </div>
        </div>
      </motion.article>

      {/* PROJECT 06 — diagonal offset */}
      <motion.article {...reveal} className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8 md:col-start-3 relative">
          <div className="aspect-[16/10] overflow-hidden grain rotate-[-1.5deg] origin-bottom-left">
            <img src={p6} alt="Pulse fitness app" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="mt-8 grid grid-cols-12">
            <div className="col-span-8">
              <p className="font-mono-label text-foreground/60">06 / Mobile · Fitness · 2025</p>
              <h3 className="font-display text-5xl uppercase mt-2">Pulse Tracker</h3>
            </div>
            <div className="col-span-4 text-right self-end">
              <p className="font-mono-label">View Case →</p>
            </div>
          </div>
        </div>
      </motion.article>
    </section>
  );
};
