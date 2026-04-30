import { motion } from "framer-motion";
import { Briefcase, Plane } from "lucide-react";
import { Section } from "../Section";

const items = [
  {
    icon: Briefcase,
    role: "Machine Learning Intern",
    org: "Retech Solutions",
    bullets: [
      "Worked on real-world Machine Learning projects",
      "Built predictive models and derived insights from data",
      "Implemented ML algorithms using Python",
      "Performed data preprocessing and model evaluation",
      "Improved understanding of deployment, feature selection, and model building",
    ],
  },
  {
    icon: Plane,
    role: "Intern",
    org: "Chennai International Airport",
    bullets: [
      "Gained exposure to operational systems and workflows",
      "Observed technology-driven airport operations",
      "Learned practical system processes and data handling",
      "Improved analytical thinking and adaptability in professional environments",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've Worked">
      <div className="relative grid md:grid-cols-2 gap-6">
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
