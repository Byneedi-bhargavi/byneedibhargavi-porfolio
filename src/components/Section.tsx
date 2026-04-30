import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 px-4 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          {eyebrow && (
            <div className="inline-block text-xs font-mono tracking-[0.3em] text-accent uppercase mb-3">
              {eyebrow}
            </div>
          )}
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            <span className="text-gradient">{title}</span>
          </h2>
          {subtitle && (
            <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
