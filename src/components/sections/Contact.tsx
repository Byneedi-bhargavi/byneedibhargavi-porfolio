import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, FileDown, Send } from "lucide-react";
import { Section } from "../Section";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Get in touch" title="Let's Build Something Intelligent">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
        <div className="space-y-4">
          {[
            { icon: Mail, label: "Email", value: "bharubhargavi220@gmail.com", href: "mailto:bharubhargavi220@gmail.com" },
            { icon: MapPin, label: "Location", value: "Chennai, India" },
            { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/byneedibhargavi", href: "https://www.linkedin.com/in/byneedibhargavi" },
            { icon: Github, label: "GitHub", value: "github.com/bhargavi", href: "#" },
            { icon: FileDown, label: "Resume", value: "Download PDF", href: "#" },
          ].map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href ?? "#"}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-4 glass glass-hover rounded-2xl p-4"
            >
              <div className="grid place-items-center w-11 h-11 rounded-xl bg-primary/20 text-accent">
                <c.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">{c.label}</div>
                <div className="font-medium">{c.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="glass rounded-3xl p-7 space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Name" id="name" />
            <Field label="Email" id="email" type="email" />
          </div>
          <Field label="Subject" id="subject" />
          <div>
            <label htmlFor="msg" className="block text-sm text-muted-foreground mb-1.5">Message</label>
            <textarea
              id="msg"
              rows={5}
              className="w-full rounded-xl bg-muted/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:shadow-[var(--shadow-glow)] transition-all"
          >
            <Send className="w-4 h-4" /> Send Message
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, id, type = "text" }: { label: string; id: string; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-muted-foreground mb-1.5">{label}</label>
      <input
        id={id}
        type={type}
        className="w-full rounded-xl bg-muted/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
      />
    </div>
  );
}
