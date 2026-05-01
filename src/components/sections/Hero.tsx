import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { NeuralBackground } from "../NeuralBackground";
import portrait from "@/assets/bhargavi-portrait.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <NeuralBackground />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
           style={{ background: "var(--gradient-glow)" }} />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full"
           style={{ background: "var(--gradient-glow)" }} />

      <div className="relative mx-auto max-w-6xl px-4 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-sm">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="text-muted-foreground">Available for opportunities</span>
          </div>

          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-5">
            Hi, I'm <span className="text-gradient">Byneedi Bhargavi</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-foreground/90 font-display mb-5">
            Artificial Intelligence & Machine Learning Engineer
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed mb-8">
            AIML engineering student passionate about Machine Learning, data-driven
            solutions, and intelligent application development.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:shadow-[var(--shadow-glow)] transition-all"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover font-medium"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-accent/40 text-accent font-medium hover:bg-accent/10 transition-all"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "3rd", v: "Year B.Tech" },
              { k: "2+", v: "Internships" },
              { k: "10+", v: "Projects" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-3xl font-display font-bold text-gradient">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 rounded-full blur-3xl"
               style={{ background: "var(--gradient-hero)" }} />
          <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full glow-ring overflow-hidden animate-float">
            <img
              src={portrait}
              alt="Byneedi Bhargavi"
              width={1024}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-2 -right-2 glass rounded-2xl px-4 py-3 animate-pulse-glow">
            <div className="text-xs text-muted-foreground">Focus</div>
            <div className="font-display font-semibold text-cyan-400 text-accent">ML Engineer</div>
          </div>
          <div className="absolute -bottom-4 -left-6 glass rounded-2xl px-4 py-3">
            <div className="text-xs text-muted-foreground">Tech Stack</div>
            <div className="font-display font-semibold text-cyan-400">Python and java</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
