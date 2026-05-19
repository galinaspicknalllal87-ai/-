'use client';

import { motion } from 'framer-motion';

type Project = {
  title: string;
  background: string;
  myWork: string;
  result: string;
  keywords: string[];
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="glass-card h-full"
    >
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
        <p><span className="font-semibold text-slate-800">Background: </span>{project.background}</p>
        <p><span className="font-semibold text-slate-800">My Work: </span>{project.myWork}</p>
        <p><span className="font-semibold text-slate-800">Result: </span>{project.result}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.keywords.map((k) => (
          <span key={k} className="rounded-full border border-line bg-white px-3 py-1 text-xs text-slate-600">{k}</span>
        ))}
      </div>
    </motion.article>
  );
}
