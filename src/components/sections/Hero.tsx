import { motion } from "framer-motion";
import hero from "@/assets/hero-workspace.jpg";
import detail from "@/assets/hero-detail.jpg";

const tickerItems = [
  "◉ Currently shipping — Vanal Studio v2",
  "◆ Booking Q3 / 2025",
  "◉ Now hiring — Junior Designer",
  "◆ Featured in Sidebar.io · Awwwards",
  "◉ 42 projects · 4 years · 1 city",
];

export const Hero = () => {
  return (
    <section id="top" className="relative pt-28 pb-0 overflow-hidden">
      {/* Top meta row */}
      <div className="editorial grid grid-cols-12 gap-4 mb-10 font-mono-label text-foreground/60">
        <div className="col-span-6 md:col-span-3">— Palx / Studio</div>
        <div className="col-span-6 md:col-span-3">Udaipur, IN</div>
        <div className="hidden md:block col-span-3">Est. 2021</div>
        <div className="col-span-12 md:col-span-3 md:text-right">Available · Q3 / 2025</div>
      </div>

      <div className="editorial grid grid-cols-12 gap-6 lg:gap-10 items-start">
        {/* Headline — smaller, with rich side content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 lg:col-span-7"
        >
          <h1 className="font-display text-[clamp(2.75rem,8vw,7.5rem)] text-balance">
            We build{" "}
            <span className="font-serif-display italic font-light text-primary">digital</span>{" "}
            things<br />
            that feel{" "}
            <span className="font-serif-display italic font-light">alive.</span>
          </h1>

          {/* Sub-grid under headline */}
          <div className="mt-12 grid grid-cols-12 gap-6 hairline border-foreground/30 pt-8">
            <p className="col-span-12 md:col-span-7 font-serif-display italic text-lg md:text-xl text-foreground/80 text-pretty leading-snug">
              A small, sharp studio crafting websites, mobile apps, brand systems and photography for people who give a damn about details.
            </p>
            <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col gap-3">
              <a
                href="#work"
                className="group flex items-center justify-between bg-foreground text-background px-5 py-4 hover:bg-primary transition-colors"
              >
                <span className="font-mono-label">See selected work</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#contact"
                className="group flex items-center justify-between border-2 border-foreground px-5 py-4 hover:bg-foreground hover:text-background transition-colors"
              >
                <span className="font-mono-label">Start a project</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Featured-now strip */}
          <div className="mt-10 grid grid-cols-12 gap-6">
            <div className="col-span-4 md:col-span-3 aspect-square overflow-hidden grain">
              <img src={detail} alt="Sketching wireframes" className="w-full h-full object-cover" width={400} height={400} />
            </div>
            <div className="col-span-8 md:col-span-9 flex flex-col justify-between">
              <div>
                <p className="font-mono-label text-foreground/50">Now in the studio · 04 / 25</p>
                <p className="font-serif-display italic text-2xl md:text-3xl mt-2 text-pretty">
                  Wireframing the second draft of an editorial commerce site for a Mumbai-based slow-fashion label.
                </p>
              </div>
              <p className="font-mono-label text-primary mt-4">Read journal entry →</p>
            </div>
          </div>
        </motion.div>

        {/* Image card column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden grain">
            <img
              src={hero}
              alt="The PalX studio at golden hour"
              className="w-full h-full object-cover"
              width={1024}
              height={1280}
            />
            {/* Floating badge */}
            <div className="absolute top-4 left-4 bg-background/95 backdrop-blur px-3 py-2 font-mono-label">
              Fig. 01 — The studio
            </div>
            <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-3 py-2 font-mono-label">
              24.58° N · 73.71° E
            </div>
          </div>

          {/* Vertical mini-stats */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { n: "42+", l: "Projects" },
              { n: "12", l: "Industries" },
              { n: "08", l: "Awards" },
            ].map((s) => (
              <div key={s.l} className="border-2 border-foreground/80 p-3">
                <p className="font-display text-3xl">{s.n}</p>
                <p className="font-mono-label text-foreground/60 mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom ticker — replaces the awkward scroll badge */}
      <div className="mt-16 hairline border-foreground/40 bg-secondary overflow-hidden">
        <div className="flex marquee-track-slow whitespace-nowrap py-3">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((t, i) => (
            <span key={i} className="font-mono-label mx-8 text-foreground/80">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
