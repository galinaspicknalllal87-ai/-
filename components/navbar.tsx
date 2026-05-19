import { navItems } from '@/data/content';

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/60 bg-white/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#home" className="text-sm font-semibold tracking-[0.2em] text-accent">TIM ENGINEER</a>
        <ul className="flex flex-wrap items-center gap-4 text-sm text-slate-600 md:gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a className="transition hover:text-ink" href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
