export const Footer = () => {
  return (
    <footer className="bg-background text-foreground">
      <div className="editorial pt-20 pb-10">
        <div className="grid grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono-label text-foreground/50 mb-3">Studio</p>
            <p className="font-grotesk">PalX Creative & Code Studio<br />Udaipur · Rajasthan · India</p>
            <p className="font-mono-label text-foreground/50 mt-4">24.5854° N, 73.7125° E</p>
          </div>
          <div className="col-span-6 md:col-span-4">
            <p className="font-mono-label text-foreground/50 mb-3">Elsewhere</p>
            <ul className="font-grotesk space-y-1">
              <li><a className="hover:text-primary transition-colors" href="#">Instagram ↗</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Behance ↗</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Dribbble ↗</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">LinkedIn ↗</a></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-4">
            <p className="font-mono-label text-foreground/50 mb-3">Contact</p>
            <p className="font-grotesk">hello@palx.studio<br />+91 99999 99999</p>
          </div>
        </div>
      </div>

      {/* Massive wordmark */}
      <div className="overflow-hidden hairline border-foreground/40">
        <h2 className="font-display text-[28vw] leading-[0.85] tracking-tighter text-foreground select-none px-2">
          PalX<span className="text-primary">.</span>
        </h2>
      </div>

      <div className="editorial py-6 flex flex-col md:flex-row gap-2 justify-between font-mono-label text-foreground/50 hairline border-foreground/40">
        <span>© 2025 PalX Studio · All rights reserved</span>
        <span>Made with care in Udaipur · 🇮🇳</span>
      </div>
    </footer>
  );
};
