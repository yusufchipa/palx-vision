import { useEffect, useRef, useState } from "react";

const useCount = (target: number, duration = 1500) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - start) / duration, 1);
            setVal(Math.floor(p * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return { val, ref };
};

const Stat = ({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) => {
  const { val, ref } = useCount(value);
  return (
    <div className="hairline border-foreground/40 py-6 flex items-baseline justify-between gap-4">
      <span ref={ref} className="font-display text-5xl md:text-7xl">{val}{suffix}</span>
      <span className="font-mono-label text-right text-foreground/60">{label}</span>
    </div>
  );
};

export const Manifesto = () => {
  return (
    <section id="studio" className="editorial py-24 md:py-32">
      <div className="grid grid-cols-12 gap-8 mb-16">
        <p className="col-span-12 md:col-span-2 sec-num">— 01 / Studio</p>
        <h2 className="col-span-12 md:col-span-10 font-mono-label text-foreground/60">A note from us</h2>
      </div>

      <div className="grid grid-cols-12 gap-8 md:gap-16">
        <div className="col-span-12 md:col-span-6">
          <p className="font-serif-display text-3xl md:text-5xl leading-[1.15] italic text-balance">
            We are a small studio in Udaipur. We <span className="not-italic font-display text-primary">build</span>, we <span className="not-italic font-display">design</span>, and we <span className="not-italic font-display">photograph</span> — for brands that prefer craft over noise. Less, but better.
          </p>
        </div>

        <div className="col-span-12 md:col-span-5 md:col-start-8">
          <Stat value={42} label="Projects shipped" suffix="+" />
          <Stat value={12} label="Industries served" />
          <Stat value={8} label="Awards & mentions" />
          <Stat value={4} label="Years in practice" />
        </div>
      </div>
    </section>
  );
};
