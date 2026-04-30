import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Section } from "../Section";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic Journey">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative glass rounded-3xl p-8 md:p-10"
        >
          <div className="absolute -top-5 left-8 grid place-items-center w-12 h-12 rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-glow)]">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="mt-3">
            <div className="text-xs font-mono text-accent tracking-wider mb-2">2023 — 2027</div>
            <h3 className="font-display font-bold text-2xl md:text-3xl mb-2">
              B.Tech in Artificial Intelligence and Machine Learning
            </h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Panimalar Engineering College</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-accent" /> Currently in 3rd Year</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Pursuing a comprehensive curriculum covering machine learning, deep learning, data structures, algorithms, and full-stack development. Expected graduation in 2027.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
