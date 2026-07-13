import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import { Section } from "../Section";

const certifications = [
  {
    title: "Oracle Cloud Infrastructure (OCI) Generative AI Professional",
    issuer: "Oracle",
  },
  { title: "Python", issuer: "NASSCOM" },
  { title: "SQL", issuer: "NASSCOM" },
  { title: "Data Structures & Algorithms (DSA)", issuer: "NASSCOM" },
  { title: "Acquiring Data", issuer: "NASSCOM" },
  { title: "Programming in Java", issuer: "NPTEL" },
  { title: "Machine Learning for Engineering & Science Applications", issuer: "NPTEL" },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Credentials"
      title="Certifications"
      subtitle="Continuous learning through industry-recognized programs."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass glass-hover rounded-2xl p-6 flex gap-4 items-start"
          >
            <div className="grid place-items-center w-12 h-12 rounded-xl bg-primary/20 text-accent shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-accent mb-1">
                <BadgeCheck className="w-3.5 h-3.5" />
                {c.issuer}
              </div>
              <h3 className="font-display font-semibold text-base leading-snug">
                {c.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
