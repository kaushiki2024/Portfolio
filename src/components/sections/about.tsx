"use client";
import site from "@/content/site.json";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="container grid md:grid-cols-3 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:col-span-2 space-y-4"
        >
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="opacity-90 leading-relaxed">{site.bio}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="card p-6">
            <h3 className="font-medium mb-3">Skills Overview</h3>
            <ul className="space-y-1 text-sm opacity-90">
              {Object.keys(site.skills).slice(0, 3).map((k) => (
                <li key={k}>
                  <span className="font-medium">{k}: </span>
                  {(site.skills as any)[k].slice(0, 4).join(", ")} ...
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
