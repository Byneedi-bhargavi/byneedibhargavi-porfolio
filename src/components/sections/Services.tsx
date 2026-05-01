import { motion } from "framer-motion";
import { Brain, Code, Globe, Database, Wrench } from "lucide-react";
import { Section } from "../Section";

const services = [
  {
    icon: Brain,
    title: "Machine Learning Solutions",
    desc: "Predictive modeling, ML algorithm implementation, and intelligent systems development.",
  },
  {
    icon: Code,
    title: "Python & Java Development",
    desc: "Scalable software development and efficient backend / problem-solving applications.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    desc: "Responsive modern web apps with React, Vite, and Tailwind CSS.",
  },
  {
    icon: Database,
    title: "Data Analysis & Processing",
    desc: "Data cleaning, feature engineering, and meaningful insight extraction.",
  },
  {
    icon: Wrench,
    title: "Custom Project Development",
    desc: "End-to-end tailored software and engineering project solutions.",
  },
];

export function Services() {
  return (
    <Section id="services" eyebrow="Services" title="What I Offer">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group glass glass-hover rounded-3xl p-7 relative overflow-hidden"
          >
            <div
              className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-60 transition-opacity"
              style={{ background: "var(--gradient-glow)" }}
            />
            <div className="relative">
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-primary/20 text-accent mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-cyan-400 text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
