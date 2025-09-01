"use client";

import site from "@/content/site.json";
import { motion } from "framer-motion";
import { useState } from "react";

export function Skills() {
  const [activeTab, setActiveTab] = useState(Object.keys(site.skills)[0]);

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Enhanced Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {Object.keys(site.skills).map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-500 ${
                activeTab === category
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-xl"
                  : "bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:scale-105"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Skills Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {(site.skills as any)[activeTab].map((skill: string, index: number) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="skill-tag text-center cursor-pointer hover-scale"
              whileHover={{ scale: 1.05, y: -3 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 gradient-text">Programming</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Python</span>
                  <span>95%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>C++</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "90%" }}
                    transition={{ duration: 1, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Machine Learning</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 gradient-text">Data Science</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Pandas/NumPy</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "90%" }}
                    transition={{ duration: 1, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>scikit-learn</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Data Visualization</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "80%" }}
                    transition={{ duration: 1, delay: 1.0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 gradient-text">Soft Skills</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Problem Solving</span>
                  <span>95%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    transition={{ duration: 1, delay: 1.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Team Collaboration</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "90%" }}
                    transition={{ duration: 1, delay: 1.2 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Communication</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1, delay: 1.3 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
