import { motion } from "framer-motion";
import hero from "@/assets/hero-workspace.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-28 pb-20 editorial overflow-hidden">
      {/* Top meta row */}
      <div className="grid grid-cols-12 gap-4 mb-12 font-mono-label text-foreground/60">
        <div className="col-span-12 md:col-span-3">— Palx / Creative & Code Studio</div>
        <div className="col-span-6 md:col-span-3">Udaipur, IN</div>
        <div className="hidden md:block col-span-3">Est. 2021</div>
        <div className="col-span-6 md:col-span-3 md:text-right">Available · Q3 / 2025</div>
      </div>

      <div className="grid grid-cols-12 gap-6 items-end">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 lg:col-span-8 font-display text-[clamp(3.5rem,12vw,11rem)]"
        >
          WE BUILD<br />
          <span className="font-serif-display italic font-normal text-primary">digital</span>{" "}
          <span>THINGS</span>
          <br />
          <span className="font-serif-display italic font-normal">that feel</span>{" "}
          <span>ALIVE.</span>
        </motion.h1>

        {/* Image card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 lg:col-span-4 relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden grain">
            <img
              src={hero}
              alt="A creative studio workspace in warm light"
              className="w-full h-full object-cover"
              width={1024}
              height={1280}
            />
          </div>
          <p className="mt-3 font-mono-label text-foreground/60">
            Fig. 01 — The studio at golden hour
          </p>
        </motion.div>
      </div>

      {/* Bottom row */}
      <div className="mt-20 grid grid-cols-12 gap-6 items-end">
        <p className="col-span-12 md:col-span-5 font-serif-display text-xl md:text-2xl leading-snug text-pretty">
          A small, sharp studio crafting <em>websites, apps, brand systems</em> and <em>photography</em> for people who give a damn.
        </p>
        <div className="col-span-12 md:col-span-4 md:col-start-9 flex md:justify-end items-center gap-4">
          <span className="font-mono-label">Scroll</span>
          <div className="relative w-20 h-20">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
              <defs>
                <path id="circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
              </defs>
              <text className="font-mono-label fill-current" style={{ fontSize: 9, letterSpacing: "0.18em" }}>
                <textPath href="#circle">SCROLL · TO · EXPLORE · SCROLL · TO · EXPLORE · </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-primary text-xl">↓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
