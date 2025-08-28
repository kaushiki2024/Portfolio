"use client";
import site from "@/content/site.json";
import { motion } from "framer-motion";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24">
      <div className="container space-y-6">
        <h2 className="text-2xl font-semibold">Education</h2>
        <div className="grid gap-6">
          {site.education.map((e) => (
            <motion.div
              key={e.degree + e.years}
              className="card p-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-medium">{e.degree}</h3>
                <span className="text-xs px-2 py-1 rounded bg-secondary">{e.years}</span>
              </div>
              <p className="opacity-90 text-sm mt-1">{e.college}</p>
              {(e as any).meta ? <p className="text-xs opacity-70 mt-1">{(e as any).meta}</p> : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
