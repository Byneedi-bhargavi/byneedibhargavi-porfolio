import { motion } from "framer-motion";
import { Brain, Lightbulb, RefreshCw, TrendingUp } from "lucide-react";
import { Section } from "../Section";

const strengths = [
  { icon: Brain, label: "Analytical Thinking" },
  { icon: Lightbulb, label: "Problem Solving" },
  { icon: RefreshCw, label: "Adaptability" },
  { icon: TrendingUp, label: "Continuous Learning" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Designing Intelligence with Code">
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 space-y-5 text-muted-foreground leading-relaxed"
        >
          <p>
            I am an <span className="text-foreground font-medium">Artificial Intelligence and Machine Learning</span> engineering student with a strong focus on Machine Learning as my core area of interest. I enjoy working with data to build predictive models, uncover patterns, and develop intelligent solutions for real-world problems.
          </p>
          <p>
            I have solid programming skills in <span className="text-accent">Java</span> and <span className="text-accent">Python</span>, along with a strong foundation in data structures and algorithms, enabling me to build efficient and scalable applications. I also have experience in web development using React, Vite, Tailwind CSS, HTML, and JavaScript, which allows me to create user-friendly and responsive interfaces.
          </p>
          <p>
            I am continuously improving my skills in Machine Learning and software development, with the goal of building impactful, real-world applications and growing as a skilled engineer.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {strengths.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass glass-hover rounded-2xl p-5 text-center"
            >
              <div className="mx-auto w-12 h-12 grid place-items-center rounded-xl bg-primary/15 text-accent mb-3">
                <s.icon className="w-5 h-5" />
              </div>
              <div className="font-display font-semibold text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
