import { motion } from "framer-motion";
import { Music, Salad } from "lucide-react";
import { Section } from "../Section";

const projects = [
  {
    icon: Salad,
    title: "NutriAI – AI-Powered Nutrition Prediction",
    tag: "Machine Learning",
    desc: "AI-powered web app that predicts nutritional values and calorie content of food items using ML. Includes an interactive dashboard with nutrition analytics and real-time predictions from a trained model.",
    stack: ["Java", "HTML5", "CSS3", "JavaScript"],
  },
  {
    icon: Music,
    title: "Music Web Application",
    tag: "Web Development",
    desc: "Modern music streaming/player web application built with responsive frontend technologies.",
    stack: ["React", "Vite", "Tailwind"],
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Portfolio" title="Featured Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group glass glass-hover rounded-3xl p-7 relative overflow-hidden"
          >
            <div className="flex items-start justify-between mb-5">
              <div className="grid place-items-center w-14 h-14 rounded-2xl bg-primary/20 text-accent group-hover:rotate-6 transition-transform">
                <p.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono tracking-wider text-accent uppercase">
                {p.tag}
              </span>
            </div>
            <h3 className="font-display font-bold text-2xl mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-md bg-muted/60 border border-border text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
