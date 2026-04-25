import { useMemo, useState } from "react";

const projectOptions = [
  { v: "a website", k: "website" },
  { v: "a mobile app", k: "mobile app" },
  { v: "a brand identity", k: "branding" },
  { v: "a photoshoot", k: "photoshoot" },
  { v: "a marketing campaign", k: "marketing" },
];

const budgets = [
  { v: "under ₹1L", k: "<1L" },
  { v: "₹1L–5L", k: "1-5L" },
  { v: "₹5L+", k: "5L+" },
  { v: "let's talk", k: "open" },
];

// Replace with real number
const WHATSAPP_NUMBER = "919999999999";

export const Contact = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [project, setProject] = useState(projectOptions[0].v);
  const [budget, setBudget] = useState(budgets[1].v);
  const [email, setEmail] = useState("");

  const message = useMemo(() => {
    const n = name || "[your name]";
    const c = company || "[company]";
    const e = email || "[email]";
    return `Hi PalX, I'm ${n} from ${c}. I'd love to talk about ${project} project with a budget around ${budget}. You can reach me at ${e}.`;
  }, [name, company, project, budget, email]);

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  const Field = ({
    value,
    onChange,
    placeholder,
    type = "text",
    width = "w-44",
  }: {
    value: string;
    onChange: (v: string) => void;
    placeholder: string;
    type?: string;
    width?: string;
  }) => (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type={type}
      placeholder={placeholder}
      className={`${width} bg-transparent border-b-2 border-foreground/60 focus:border-primary outline-none px-1 font-display text-primary placeholder:text-foreground/30 placeholder:font-serif-display placeholder:italic transition-colors`}
    />
  );

  return (
    <section id="contact" className="bg-foreground text-background py-24 md:py-40">
      <div className="editorial">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <p className="col-span-12 md:col-span-2 font-mono-label text-background/60">— 07 / Contact</p>
          <h2 className="col-span-12 md:col-span-10 font-display text-5xl md:text-8xl">
            Write us<br />
            <span className="font-serif-display italic font-normal text-primary">a letter.</span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-9">
            <p className="font-serif-display text-2xl md:text-4xl leading-[1.5] text-pretty">
              Hi PalX, I'm{" "}
              <Field value={name} onChange={setName} placeholder="your name" />{" "}
              from{" "}
              <Field value={company} onChange={setCompany} placeholder="company" />.
              I'd love to talk about a{" "}
              <select
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="bg-transparent border-b-2 border-background/60 focus:border-primary outline-none px-1 font-display text-primary cursor-pointer"
              >
                {projectOptions.map((o) => (
                  <option key={o.k} value={o.v} className="bg-foreground text-background">{o.v}</option>
                ))}
              </select>{" "}
              project with a budget around{" "}
              <span className="inline-flex flex-wrap gap-2 align-middle">
                {budgets.map((b) => (
                  <button
                    key={b.k}
                    onClick={() => setBudget(b.v)}
                    className={`font-mono-label px-3 py-1 border-2 transition-colors ${
                      budget === b.v
                        ? "bg-primary border-primary text-primary-foreground"
                        : "border-background/40 hover:border-background"
                    }`}
                  >
                    {b.v}
                  </button>
                ))}
              </span>
              . You can reach me at{" "}
              <Field value={email} onChange={setEmail} placeholder="email@domain.com" type="email" width="w-64" />.
            </p>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-6 bg-primary text-primary-foreground font-display text-2xl md:text-4xl px-8 md:px-12 py-6 md:py-8 hover:bg-orange-soft transition-colors group"
            >
              SEND VIA WHATSAPP
              <span className="transition-transform group-hover:translate-x-2">→</span>
            </a>
          </div>

          <aside className="col-span-12 lg:col-span-3 space-y-8 lg:pt-4">
            <div>
              <p className="font-mono-label text-background/50 mb-2">Studio</p>
              <p className="font-grotesk">Lake Pichola Road<br />Udaipur, Rajasthan 313001<br />India</p>
            </div>
            <div>
              <p className="font-mono-label text-background/50 mb-2">Direct</p>
              <p className="font-grotesk">hello@palx.studio<br />+91 99999 99999</p>
            </div>
            <div>
              <p className="font-mono-label text-background/50 mb-2">Hours</p>
              <p className="font-grotesk">Mon — Fri<br />10:00 — 19:00 IST</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
