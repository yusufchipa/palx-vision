import { useMemo, useState } from "react";

const projectTypes = [
  "Website",
  "Mobile App",
  "Brand Identity",
  "Photography",
  "Marketing",
  "Other",
];

const budgets = ["< ₹1L", "₹1–5L", "₹5–15L", "₹15L+", "Let's talk"];
const timelines = ["ASAP", "1–3 months", "3–6 months", "Flexible"];

const WHATSAPP_NUMBER = "916375788511";

export const Contact = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState(projectTypes[0]);
  const [budget, setBudget] = useState(budgets[1]);
  const [timeline, setTimeline] = useState(timelines[1]);
  const [details, setDetails] = useState("");

  const message = useMemo(() => {
    const lines = [
      `Hi PalX,`,
      ``,
      `My name is ${name || "[name]"} from ${company || "[company]"}.`,
      ``,
      `Project type: ${type}`,
      `Budget: ${budget}`,
      `Timeline: ${timeline}`,
      ``,
      `About the project:`,
      details || "[a few words about what we want to build]",
      ``,
      `Reach me at: ${email || "[email]"}`,
    ];
    return lines.join("\n");
  }, [name, company, email, type, budget, timeline, details]);

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  const inputCls =
    "w-full bg-transparent border-b-2 border-background/30 focus:border-primary outline-none py-3 font-grotesk text-lg text-background placeholder:text-background/40 transition-colors";

  const Pill = ({
    active,
    onClick,
    children,
  }: {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`font-mono-label px-3 py-2 border-2 transition-colors ${active
          ? "bg-primary border-primary text-primary-foreground"
          : "border-background/30 text-background/80 hover:border-background"
        }`}
    >
      {children}
    </button>
  );

  return (
    <section id="contact" className="bg-foreground text-background">
      {/* Header strip */}
      <div className="editorial pt-24 pb-16 hairline-b border-background/20">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-8">
            <p className="font-mono-label text-background/60 mb-6">— 07 / Contact</p>
            <h2 className="font-display text-5xl md:text-7xl">
              Let's start{" "}
              <span className="font-serif-display italic font-light text-primary">something good.</span>
            </h2>
          </div>
          <p className="col-span-12 md:col-span-4 font-serif-display italic text-lg md:text-xl text-background/70 text-pretty">
            Fill the brief — we reply on WhatsApp within 24 hours, every weekday.
          </p>
        </div>
      </div>

      {/* Form + sidebar */}
      <div className="editorial py-16 grid grid-cols-12 gap-8 lg:gap-16">
        {/* FORM */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.open(href, "_blank");
          }}
          className="col-span-12 lg:col-span-8 space-y-12"
        >
          {/* Section: who */}
          <fieldset className="space-y-6">
            <legend className="font-mono-label text-background/50 mb-4">01 — About you</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              <div>
                <label className="font-mono-label text-background/60">Your name</label>
                <input className={inputCls} value={name} onChange={(e) => setName(e.target.value)} placeholder="Aanya Reddy" required />
              </div>
              <div>
                <label className="font-mono-label text-background/60">Company</label>
                <input className={inputCls} value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Vanal Studio" />
              </div>
              <div className="md:col-span-2">
                <label className="font-mono-label text-background/60">Email</label>
                <input type="email" className={inputCls} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="hello@yourdomain.com" required />
              </div>
            </div>
          </fieldset>

          {/* Section: project */}
          <fieldset className="space-y-6">
            <legend className="font-mono-label text-background/50 mb-4">02 — The project</legend>
            <div>
              <p className="font-mono-label text-background/60 mb-3">What do you need?</p>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((t) => (
                  <Pill key={t} active={type === t} onClick={() => setType(t)}>{t}</Pill>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono-label text-background/60 mb-3">Budget range</p>
              <div className="flex flex-wrap gap-2">
                {budgets.map((b) => (
                  <Pill key={b} active={budget === b} onClick={() => setBudget(b)}>{b}</Pill>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono-label text-background/60 mb-3">Timeline</p>
              <div className="flex flex-wrap gap-2">
                {timelines.map((t) => (
                  <Pill key={t} active={timeline === t} onClick={() => setTimeline(t)}>{t}</Pill>
                ))}
              </div>
            </div>
          </fieldset>

          {/* Section: details */}
          <fieldset className="space-y-4">
            <legend className="font-mono-label text-background/50 mb-4">03 — Tell us more</legend>
            <label className="font-mono-label text-background/60">A few sentences about what you're building</label>
            <textarea
              className={`${inputCls} resize-none`}
              rows={4}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="We're launching a new label for handwoven textiles and need a homepage that feels like a magazine spread…"
            />
          </fieldset>

          {/* Submit */}
          <div className="pt-4 hairline border-background/20">
            <button
              type="submit"
              className="mt-8 w-full md:w-auto group inline-flex items-center justify-between gap-8 bg-primary text-primary-foreground font-display text-2xl md:text-3xl px-8 md:px-12 py-6 hover:bg-orange-soft transition-colors"
            >
              <span>Send via WhatsApp</span>
              <span className="text-3xl group-hover:translate-x-2 transition-transform">→</span>
            </button>
            <p className="font-mono-label text-background/50 mt-4">
              Opens WhatsApp with your brief pre-filled. No spam, ever.
            </p>
          </div>
        </form>

        {/* SIDEBAR */}
        <aside className="col-span-12 lg:col-span-4 space-y-10">
          {/* Direct */}
          <div className="border-2 border-background/30 p-6">
            <p className="font-mono-label text-background/50 mb-4">Prefer the old way?</p>
            <div className="space-y-4">
              <a href="mailto:palx.hub@gmail.com" className="block group">
                <p className="font-mono-label text-background/50">Email</p>
                <p className="font-serif-display text-2xl group-hover:text-primary transition-colors">palx.hub@gmail.com</p>
              </a>
              <a href="tel:+916375788511" className="block group">
                <p className="font-mono-label text-background/50">Phone</p>
                <p className="font-serif-display text-2xl group-hover:text-primary transition-colors">+91 63757 88511</p>
              </a>
            </div>
          </div>

          {/* Studio */}
          <div>
            <p className="font-mono-label text-background/50 mb-3">Studio</p>
            <p className="font-serif-display text-xl leading-snug">
              Sector-14,<br />
              Udaipur, Rajasthan 313001<br />
              India
            </p>
            <p className="font-mono-label text-background/50 mt-3">24.5854° N · 73.7125° E</p>
          </div>

          {/* Hours */}
          <div>
            <p className="font-mono-label text-background/50 mb-3">Hours</p>
            <p className="font-serif-display text-xl">Mon — Fri</p>
            <p className="font-serif-display text-xl">10:00 — 19:00 IST</p>
          </div>

          {/* FAQ mini */}
          <div className="space-y-4 pt-6 border-t border-background/20">
            <p className="font-mono-label text-background/50">FAQ</p>
            <div>
              <p className="font-grotesk font-medium">Do you work with overseas clients?</p>
              <p className="font-serif-display italic text-background/70 text-sm mt-1">Yes — most of our work is remote.</p>
            </div>
            <div>
              <p className="font-grotesk font-medium">What's the smallest project you take?</p>
              <p className="font-serif-display italic text-background/70 text-sm mt-1">Around ₹1L — usually a brand mark or a one-pager.</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
