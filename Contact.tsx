import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // mailto fallback
    const subject = encodeURIComponent(`Inquiry from ${form.name} - ${form.company}`);
    const body = encodeURIComponent(form.message);
    window.location.href = `mailto:info@vishwamitra.us?subject=${subject}&body=${body}`;
    toast({ title: "Opening email client", description: "Your default email app will open shortly." });
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container relative z-10 mx-auto px-4 text-center lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="mb-4 inline-block rounded-full border border-primary/30 px-4 py-1 font-body text-xs font-semibold uppercase tracking-widest text-primary">
              Contact Us
            </span>
            <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Ready to discuss your next telecom initiative? Reach out and let's build something remarkable together.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="mb-6 font-display text-2xl font-bold text-foreground">Get in Touch</h2>
              <div className="space-y-6">
                <a href="mailto:info@vishwamitra.us" className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:glow-border">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Mail size={20} /></div>
                  <div>
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="text-sm font-medium text-foreground">info@vishwamitra.us</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Phone size={20} /></div>
                  <div>
                    <div className="text-xs text-muted-foreground">Phone</div>
                    <div className="text-sm font-medium text-foreground">Available upon request</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><MapPin size={20} /></div>
                  <div>
                    <div className="text-xs text-muted-foreground">Location</div>
                    <div className="text-sm font-medium text-foreground">Philadelphia, Pennsylvania, USA</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <form onSubmit={handleSubmit} className="card-gradient rounded-lg border border-border p-6 md:p-8">
                <h3 className="mb-6 font-display text-xl font-semibold text-foreground">Send a Message</h3>
                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-muted-foreground">Full Name</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-muted-foreground">Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-muted-foreground">Company</label>
                    <input
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-muted-foreground">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full resize-none rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    Send Message <Send size={16} />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
