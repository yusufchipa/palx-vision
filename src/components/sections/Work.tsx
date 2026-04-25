import { motion } from "framer-motion";
import palx from "@/assets/proj-palx.jpg";
import nyoto from "@/assets/proj-nyoto.jpg";
import tohc from "@/assets/proj-tohc.jpg";
import amantra from "@/assets/proj-amantra.jpg";
import travco from "@/assets/proj-travco.jpg";
import travco2 from "@/assets/proj-travco2.jpg";
import turant from "@/assets/proj-turant.jpg";
import mumal from "@/assets/proj-mumal.jpg";
import insta from "@/assets/proj-insta.jpg";

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

      {/* 01 — PalX (Self) — full bleed left */}
      <motion.article {...reveal} className="grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 md:col-span-8">
          <div className="aspect-[4/3] overflow-hidden grain bg-foreground">
            <img src={palx} alt="PalX brand identity system" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 space-y-4">
          <p className="font-mono-label text-foreground/60">01 / Brand Identity · 2025</p>
          <h3 className="font-serif-display italic text-4xl md:text-5xl">PalX</h3>
          <p className="font-grotesk text-foreground/70">A versatile identity for our own studio — bold visuals, clear messaging, modern systems. Innovation, adaptability and impact.</p>
          <p className="font-mono-label">→ Branding · Web · Systems</p>
        </div>
      </motion.article>

      {/* 02 — Nyoto — restaurant, dark warm */}
      <motion.article {...reveal} className="relative grid grid-cols-12 gap-8 items-center bg-foreground text-background py-20 -mx-6 md:-mx-10 lg:-mx-14 px-6 md:px-10 lg:px-14">
        <div className="col-span-6 md:col-span-3 space-y-2">
          <p className="font-mono-label text-background/60">Client</p>
          <p className="font-display text-2xl">Nyoto</p>
          <p className="font-mono-label text-background/60 pt-4">Year</p>
          <p className="font-display text-2xl">2024</p>
        </div>
        <div className="col-span-12 md:col-span-6 order-first md:order-none">
          <div className="aspect-[4/3] overflow-hidden grain">
            <img src={nyoto} alt="Nyoto restaurant brand identity" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
        <div className="col-span-6 md:col-span-3 space-y-2 md:text-right">
          <p className="font-mono-label text-background/60">Discipline</p>
          <p className="font-display text-2xl">Identity</p>
          <p className="font-mono-label text-background/60 pt-4">Sector</p>
          <p className="font-display text-2xl">Hospitality</p>
        </div>
        <h3 className="col-span-12 text-center font-serif-display italic text-5xl md:text-7xl mt-8">
          A Mewari invitation, retold.
        </h3>
      </motion.article>

      {/* 03 — T.O.H.C. — healthcare, quote left, image right */}
      <motion.article {...reveal} className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-5 md:pt-20">
          <p className="font-mono-label text-foreground/60 mb-4">03 / Healthcare · Brand · 2024</p>
          <h3 className="font-display text-5xl md:text-6xl mb-6">T.O.H.C.</h3>
          <p className="font-serif-display italic text-xl md:text-2xl text-pretty">
            "Compassion meets clinical precision — an identity built on 15 years of expertise in respiratory care."
          </p>
          <p className="font-mono-label text-foreground/60 mt-6">— Puneet Ameta, Founder</p>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div className="aspect-[4/3] overflow-hidden grain">
            <img src={tohc} alt="The Oxygen Health Care brand and campaign" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>
        </div>
      </motion.article>

      {/* 04 — Amantra — massive number + image */}
      <motion.article {...reveal} className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-12 md:col-span-7 relative">
          <div className="font-display text-[24vw] md:text-[18vw] leading-none text-primary select-none">
            04
          </div>
          <p className="font-mono-label text-foreground/60 mt-2">Hospitality · Resort · 2024</p>
        </div>
        <div className="col-span-12 md:col-span-5">
          <div className="aspect-[4/5] overflow-hidden grain">
            <img src={amantra} alt="Amantra Shilpi resort campaign" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <h3 className="font-serif-display italic text-4xl mt-4">Amantra Shilpi</h3>
          <p className="font-grotesk text-foreground/70 mt-2">Colonial elegance meets Rajasthan's timeless charm. A resort identity for serene escapes in Udaipur.</p>
        </div>
      </motion.article>

      {/* 05 — Travco — editorial spread */}
      <motion.article {...reveal} className="grid grid-cols-12 gap-8 items-start">
        <div className="col-span-12 md:col-span-7">
          <div className="aspect-[5/4] overflow-hidden grain">
            <img src={travco} alt="Travco travel brand campaign" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 space-y-6">
          <p className="font-mono-label text-foreground/60">05 / Travel · Brand · Social · 2025</p>
          <h3 className="font-display text-5xl uppercase">Travco</h3>
          <p className="font-serif-display italic text-xl text-pretty">
            A modern travel companion — every journey crafted to be seamless, memorable, inspiring.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Identity", "Social", "Campaigns", "Print"].map((t) => (
              <span key={t} className="font-mono-label border border-foreground/60 px-3 py-1">{t}</span>
            ))}
          </div>
        </div>
      </motion.article>

      {/* 06 — Travco. — diagonal/offset */}
      <motion.article {...reveal} className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8 md:col-start-3 relative">
          <div className="aspect-[16/10] overflow-hidden grain rotate-[-1.5deg] origin-bottom-left">
            <img src={travco2} alt="Travco. brochure and Dubai campaign" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="mt-8 grid grid-cols-12">
            <div className="col-span-8">
              <p className="font-mono-label text-foreground/60">06 / Print · Web · 2025</p>
              <h3 className="font-display text-5xl uppercase mt-2">Travco.</h3>
              <p className="font-grotesk text-foreground/70 mt-2 max-w-md">A travel brochure system pairing destination photography with confident editorial layouts.</p>
            </div>
            <div className="col-span-4 text-right self-end">
              <p className="font-mono-label">View Case →</p>
            </div>
          </div>
        </div>
      </motion.article>

      {/* 07 — Turant — tall product, side meta */}
      <motion.article {...reveal} className="grid grid-cols-12 gap-8 items-center">
        <div className="col-span-12 md:col-span-4 space-y-4 md:order-2">
          <p className="font-mono-label text-foreground/60">07 / Mobile App · 2025</p>
          <h3 className="font-display text-5xl md:text-6xl">Turant</h3>
          <p className="font-serif-display italic text-xl text-pretty">
            An all-in-one delivery app — groceries, pharmacy, food and parcels from a single, calm interface.
          </p>
          <p className="font-mono-label">→ iOS · Android · Brand</p>
        </div>
        <div className="col-span-12 md:col-span-8 md:order-1">
          <div className="aspect-[16/10] overflow-hidden grain bg-secondary">
            <img src={turant} alt="Turant delivery app brand and product" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>
        </div>
      </motion.article>

      {/* 08 — Mumal — packaging full bleed */}
      <motion.article {...reveal} className="grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 md:col-span-5 md:pb-12 space-y-4">
          <p className="font-mono-label text-foreground/60">08 / Packaging · FMCG · 2024</p>
          <h3 className="font-serif-display italic text-5xl md:text-6xl">Mumal</h3>
          <p className="font-grotesk text-foreground/70">A popcorn brand built on the joy of sharing — playful, colourful packaging that holds its own on a crowded shelf.</p>
          <div className="flex flex-wrap gap-2">
            {["Packaging", "Identity", "Range System"].map((t) => (
              <span key={t} className="font-mono-label border border-foreground/60 px-3 py-1">{t}</span>
            ))}
          </div>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div className="aspect-[4/3] overflow-hidden grain">
            <img src={mumal} alt="Mumal popcorn packaging range" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>
        </div>
      </motion.article>

      {/* 09 — Insta Story — centered hero */}
      <motion.article {...reveal} className="grid grid-cols-12 gap-8">
        <div className="col-span-12 text-center space-y-4 mb-4">
          <p className="font-mono-label text-foreground/60">09 / Social Design · Ongoing</p>
          <h3 className="font-display text-6xl md:text-8xl uppercase">Insta Stories</h3>
          <p className="font-serif-display italic text-xl md:text-2xl max-w-2xl mx-auto">
            Festival posters and event graphics for clients across India — vibrant visuals tuned for the feed.
          </p>
        </div>
        <div className="col-span-12 md:col-span-10 md:col-start-2">
          <div className="aspect-[16/9] overflow-hidden grain">
            <img src={insta} alt="Insta Story festival design system" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>
        </div>
      </motion.article>
    </section>
  );
};
