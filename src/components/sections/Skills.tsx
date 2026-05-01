import { motion } from "framer-motion";
import { Brain, Code2, Layout } from "lucide-react";
import { Section } from "../Section";

const groups = [
  {
    icon: Brain,
    title: "Machine Learning & Data",
    skills: [
      { name: "Machine Learning", level: 88 },
      { name: "Data Analysis & Model Building", level: 85 },
      { name: "Data Processing & Preprocessing", level: 82 },
    ],
  },
  {
    icon: Code2,
    title: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 82 },
      { name: "Data Structures & Algorithms", level: 85 },
    ],
  },
  {
    icon: Layout,
    title: "Web Development",
    skills: [
      { name: "React", level: 85 },
      { name: "Tailwind CSS", level: 88 },
      { name: "JavaScript", level: 82 },
      { name: "HTML / CSS", level: 90 },
      { name: "Vite", level: 80 },
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools & Technologies">
      <div className="grid lg:grid-cols-3 gap-6">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: gi * 0.1 }}
            className="glass glass-hover rounded-3xl p-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="grid place-items-center w-11 h-11 rounded-xl bg-primary/20 text-accent">
                <g.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-cyan-400 text-lg">{g.title}</h3>
            </div>
            <div className="space-y-4">
              {g.skills.map((s, i) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span>{s.name}</span>
                    <span className="text-accent font-mono text-xs">{s.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: "var(--gradient-hero)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
