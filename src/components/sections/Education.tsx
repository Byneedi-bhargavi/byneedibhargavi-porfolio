import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";
import { Section } from "../Section";

const education = [
  {
    title: "B.Tech in Artificial Intelligence and Machine Learning",
    place: "Panimalar Engineering College",
    detail: "CGPA: 8.02 / 10",
  },
  {
    title: "Higher Secondary (State Board)",
    place: "K C Sankaralinga Nadar Higher Secondary School",
    detail: "Class XII: 85.33%",
  },
];

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic Journey">
      <div className="max-w-3xl mx-auto space-y-8">
        {education.map((edu, i) => (
          <motion.div
            key={edu.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative glass rounded-3xl p-8 md:p-10"
          >
            <div className="absolute -top-5 left-8 grid place-items-center w-12 h-12 rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-glow)]">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="mt-3">
              <h3 className="font-display font-bold text-2xl md:text-3xl mb-3">
                {edu.title}
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" /> {edu.place}
                </span>
                <span className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent" /> {edu.detail}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
