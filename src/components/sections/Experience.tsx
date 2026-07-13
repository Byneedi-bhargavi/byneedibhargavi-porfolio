import { motion } from "framer-motion";
import { Briefcase, Code2, Plane } from "lucide-react";
import { Section } from "../Section";

const items = [
  {
    icon: Briefcase,
    role: "Machine Learning Intern",
    org: "Great Minds Technology",
    duration: "2 Jun 2025 – 30 Jun 2025",
    bullets: [
      "Worked on machine learning fundamentals through hands-on projects",
      "Performed data preprocessing, feature engineering, and model training",
      "Built end-to-end ML workflows using Python and Scikit-learn",
      "Evaluated models and generated predictions from real datasets",
      "Gained practical experience analyzing datasets and interpreting results",
    ],
  },
  {
    icon: Code2,
    role: "Web Development Intern",
    org: "Test Yantra Software Solutions",
    duration: "27 Feb 2025 – 4 Apr 2025",
    bullets: [
      "Developed responsive web applications using HTML, CSS, and JavaScript",
      "Built reusable UI components with React.js",
      "Integrated Firebase for authentication and cloud-based data storage",
      "Implemented responsive layouts following modern web practices",
    ],
  },
  {
    icon: Plane,
    role: "Intern – CNS Directorate",
    org: "Airports Authority of India (AAI), Chennai Airport",
    duration: "12 Dec 2024 – 30 Dec 2024",
    bullets: [
      "Gained exposure to Communication, Navigation & Surveillance (CNS) systems",
      "Studied aviation communication infrastructure and navigation equipment",
      "Learned surveillance technologies used in airport operations",
      "Observed operational safety procedures and airport technical systems",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've Worked">
      <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.org}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass glass-hover rounded-3xl p-7"
          >
            <div className="flex items-start gap-4 mb-5">
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-primary/20 text-accent shrink-0">
                <it.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">{it.role}</h3>
                <div className="text-accent text-sm">{it.org}</div>
                <div className="text-xs font-mono text-muted-foreground mt-1">{it.duration}</div>
              </div>
            </div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {it.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
