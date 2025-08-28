"use client";
import site from "@/content/site.json";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="container space-y-6">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="grid gap-6">
          {site.experience.map((e) => (
            <motion.div
              key={e.role}
              className="card p-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-medium">{e.role} @ {e.company}</h3>
                <span className="text-xs px-2 py-1 rounded bg-secondary">{e.year}</span>
              </div>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-sm opacity-90">
                {e.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
