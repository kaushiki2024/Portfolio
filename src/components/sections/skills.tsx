"use client";
import site from "@/content/site.json";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="container space-y-6">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(site.skills).map(([category, list]) => (
            <motion.div
              key={category}
              className="card p-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-medium mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {(list as string[]).map((s) => (
                  <span key={s} className="text-xs px-3 py-1 rounded-full bg-secondary">
                    {s}
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
