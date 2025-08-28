"use client";
import site from "@/content/site.json";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="container space-y-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {site.projects.map((p) => (
            <motion.div
              key={p.title}
              className="card p-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-medium">{p.title}</h3>
                {p.status ? (
                  <span className="text-xs px-2 py-1 rounded bg-secondary">{p.status}</span>
                ) : null}
              </div>
              <p className="mt-2 opacity-90 text-sm">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-accent">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
