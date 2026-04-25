import { useState } from "react";

const services = [
  {
    n: "01",
    title: "Web Development",
    desc: "Custom marketing sites, web apps and e-commerce. React, Next, headless CMS.",
    tools: "React · Next · Tailwind · Supabase",
  },
  {
    n: "02",
    title: "Mobile Applications",
    desc: "Native-feel iOS & Android products from prototype to App Store.",
    tools: "React Native · Expo · Swift · Kotlin",
  },
  {
    n: "03",
    title: "Brand Identity",
    desc: "Logos, type systems, guidelines and the small details that hold it all together.",
    tools: "Figma · Illustrator · Print",
  },
  {
    n: "04",
    title: "Digital Marketing",
    desc: "Performance, SEO, content and social — measured, not guessed.",
    tools: "Meta · Google · GA4 · SEO",
  },
  {
    n: "05",
    title: "Photography & Film",
    desc: "Product, lifestyle and brand films shot in our studio or on location.",
    tools: "Hasselblad · Sony · DJI",
  },
];

export const Services = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="services" className="hairline border-foreground/40">
      <div className="editorial pt-20 pb-10 grid grid-cols-12 gap-8">
        <p className="col-span-12 md:col-span-2 sec-num">— 02 / Services</p>
        <h2 className="col-span-12 md:col-span-10 font-display text-5xl md:text-7xl">
          What we do<span className="text-primary">.</span>
        </h2>
      </div>

      <div className="hairline border-foreground/40">
        {services.map((s, i) => {
          const isOpen = open === i;
          return (
            <button
              key={s.n}
              onClick={() => setOpen(isOpen ? null : i)}
              className={`w-full hairline-b border-foreground/40 text-left transition-colors duration-500 ${
                isOpen ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
              }`}
            >
              <div className="editorial py-8 md:py-10 grid grid-cols-12 gap-4 items-center">
                <span className="col-span-2 md:col-span-1 font-mono-label opacity-70">{s.n}</span>
                <h3 className="col-span-8 md:col-span-7 font-display text-3xl md:text-5xl uppercase">
                  {s.title}
                </h3>
                <span
                  className={`col-span-2 md:col-span-4 text-right font-display text-3xl md:text-5xl transition-transform duration-500 ${
                    isOpen ? "rotate-90" : ""
                  }`}
                >
                  →
                </span>
              </div>
              <div
                className={`grid transition-all duration-500 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="editorial pb-10 grid grid-cols-12 gap-4">
                    <p className="col-span-12 md:col-span-7 md:col-start-2 font-serif-display italic text-xl md:text-2xl text-pretty">
                      {s.desc}
                    </p>
                    <p className="col-span-12 md:col-span-4 font-mono-label opacity-80 md:text-right">
                      {s.tools}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
