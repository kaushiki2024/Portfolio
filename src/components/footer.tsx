"use client";

import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail } from "lucide-react";
import site from "@/content/site.json";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-background via-muted/20 to-background border-t border-border">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="text-2xl font-bold gradient-text mb-2">
              {site.name}
            </div>
            <p className="text-muted-foreground text-sm">
              Aspiring Data Scientist passionate about AI/ML and problem-solving
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="font-semibold mb-4 gradient-text">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h3 className="font-semibold mb-4 gradient-text">Connect</h3>
            <div className="flex justify-center md:justify-end gap-4">
              <motion.a
                href={site.contact.social.find(s => s.name === "LinkedIn")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 rounded-lg hover:bg-primary hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={site.contact.social.find(s => s.name === "GitHub")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 rounded-lg hover:bg-primary hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={`mailto:${site.contact.email}`}
                className="p-2 bg-primary/10 rounded-lg hover:bg-primary hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border mt-8 pt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} {site.name}. Made with{" "}
            <Heart className="inline w-4 h-4 text-red-500" /> using Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
