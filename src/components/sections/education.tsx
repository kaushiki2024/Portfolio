"use client";

import site from "@/content/site.json";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="section-padding gradient-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            My academic journey in computer science and artificial intelligence
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {site.education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="glass p-6 rounded-xl hover-glow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center gap-3 mb-2 md:mb-0">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground">{edu.college}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.years}</span>
                    </div>
                    {edu.meta && (
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        <span>{edu.meta}</span>
                      </div>
                    )}
                  </div>
                </div>

                {edu.meta && (
                  <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{edu.meta}</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold gradient-text mb-2">78.89</div>
            <div className="text-muted-foreground">CGPA</div>
          </div>
          
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold gradient-text mb-2">AI & ML</div>
            <div className="text-muted-foreground">Specialization</div>
          </div>
          
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold gradient-text mb-2">2026</div>
            <div className="text-muted-foreground">Expected Graduation</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
