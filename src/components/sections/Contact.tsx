import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, FileDown, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Section } from "../Section";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_b97qqjf";
const EMAILJS_TEMPLATE_ID = "template_xqmkiis";
const EMAILJS_PUBLIC_KEY = "QUrsaOkq3heMrkgS2";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <Section id="contact" eyebrow="Get in touch" title="Let's Build Something Intelligent">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
        <div className="space-y-4">
          {[
            { icon: Mail, label: "Email", value: "bharubhargavi220@gmail.com", href: "mailto:bharubhargavi220@gmail.com" },
            { icon: MapPin, label: "Location", value: "Chennai, India" },
            { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/byneedibhargavi", href: "https://www.linkedin.com/in/byneedibhargavi" },
            { icon: Github, label: "GitHub", value: "github.com/Byneedi-bhargavi", href: "https://github.com/Byneedi-bhargavi" },
            { icon: FileDown, label: "Resume", value: "Download PDF", href: "https://collection.cloudinary.com/ddmbsfuqi/9a0dd2b85d067f458df3d7c4611cc28d" },
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
          ref={formRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass rounded-3xl p-7 space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Name" id="name" name="from_name" required />
            <Field label="Email" id="email" name="from_email" type="email" required />
          </div>
          <Field label="Subject" id="subject" name="subject" required />
          <div>
            <label htmlFor="msg" className="block text-sm text-muted-foreground mb-1.5">Message</label>
            <textarea
              id="msg"
              name="message"
              rows={5}
              required
              className="w-full rounded-xl bg-muted/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
            />
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:shadow-[var(--shadow-glow)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <span className="inline-flex items-center gap-2 text-sm text-accent">
                <CheckCircle2 className="w-4 h-4" /> Message sent successfully!
              </span>
            )}
            {status === "error" && (
              <span className="inline-flex items-center gap-2 text-sm text-destructive">
                <AlertCircle className="w-4 h-4" /> Failed to send. Try again.
              </span>
            )}
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  id,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  id: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-muted-foreground mb-1.5">{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl bg-muted/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
      />
    </div>
  );
}
