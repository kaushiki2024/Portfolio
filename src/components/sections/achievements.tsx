"use client";
import site from "@/content/site.json";
import { motion } from "framer-motion";

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-24">
      <div className="container space-y-6">
        <h2 className="text-2xl font-semibold">Achievements</h2>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-3"
        >
          {site.achievements.map((a) => (
            <motion.li
              key={a}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="card p-4 text-sm"
            >
              {a}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
