"use client";

import site from "@/content/site.json";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="hero" className="pt-16 md:pt-24">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{site.name}</h1>
          <p className="text-lg opacity-90">{site.tagline}</p>
          <div className="flex gap-4">
            <a href="#projects"><Button>View My Work</Button></a>
            <a href="#contact"><Button variant="outline">Contact Me</Button></a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="card aspect-square max-w-sm mx-auto flex items-center justify-center">
            <span className="opacity-70">Profile Image</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
