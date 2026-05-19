import { Navbar } from '@/components/navbar';
import { ProjectCard } from '@/components/project-card';
import { Reveal } from '@/components/section';
import { projects, skills } from '@/data/content';

export default function Home() {
  return (
    <main className="min-h-screen bg-hero">
      <Navbar />

      <section id="home" className="section-shell pt-24">
        <Reveal className="glass-card p-10 md:p-14">
          <p className="text-sm uppercase tracking-[0.25em] text-accent">Materials R&D Portfolio</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Thermal Interface Materials<br />
            Epoxy Composite R&D<br />
            Materials Engineer
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            I focus on translating formulation science into production-feasible thermal solutions,
            spanning resin architecture, filler integration, and process control for consistent, reliable performance.
          </p>
        </Reveal>
      </section>

      <section id="about" className="section-shell">
        <Reveal>
          <h2 className="section-title">About</h2>
          <p className="mt-6 glass-card text-slate-600 leading-relaxed">
            I specialize in end-to-end sample development workflows for thermal interface and epoxy composite systems:
            from formula design, mixing and dispersion, vacuum degassing, coating, drying, hot pressing,
            to complete performance verification. This integrated perspective helps me shorten iteration cycles
            while preserving manufacturability and reliability.
          </p>
        </Reveal>
      </section>

      <section id="skills" className="section-shell">
        <Reveal>
          <h2 className="section-title">Skills</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill} className="glass-card py-4 text-sm text-slate-700">{skill}</div>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="projects" className="section-shell">
        <Reveal>
          <h2 className="section-title">Projects</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </Reveal>
      </section>

      <section id="experience" className="section-shell">
        <Reveal>
          <h2 className="section-title">Experience</h2>
          <article className="mt-8 glass-card">
            <p className="text-sm uppercase tracking-wide text-accent">Materials Engineer · Thermal Interface Materials</p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Led formulation and process development for thermal pads, gels, and film-based interface materials.
              Coordinated DOE-driven iteration across R&D, process, and quality teams to improve thermal performance,
              adhesion durability, and pilot-line reproducibility. Built standardized testing workflows covering
              thermal conductivity, adhesion, mechanical compliance, and reliability under thermal cycling.
            </p>
          </article>
        </Reveal>
      </section>

      <section id="contact" className="section-shell pb-28">
        <Reveal className="glass-card text-center">
          <h2 className="section-title">Contact</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Open to materials R&D and thermal management engineering opportunities.
          </p>
          <a
            href="mailto:your-email@example.com"
            className="mt-8 inline-flex rounded-full border border-line bg-white px-8 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Email me
          </a>
        </Reveal>
      </section>
    </main>
  );
}
