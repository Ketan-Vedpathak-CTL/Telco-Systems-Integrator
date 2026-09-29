import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Network, Radio, Satellite, Code, Shield, BarChart3, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-telecom.jpg";
import networkingImg from "@/assets/networking-theme.jpg";
import wirelessImg from "@/assets/wireless-5g-theme.jpg";
import satelliteImg from "@/assets/satellite-theme.jpg";
import teamImg from "@/assets/team-software.jpg";
import SectionHeading from "@/components/SectionHeading";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "10+", label: "Telecom Clients" },
  { value: "50+", label: "Projects Delivered" },
  { value: "5", label: "Certifications" },
];

const services = [
  { icon: Network, title: "OSS/BSS Solutions", desc: "End-to-end design, integration and management of Operations & Business Support Systems for service fulfillment and assurance." },
  { icon: Radio, title: "5G & Wireless Networks", desc: "RAN architecture, network slicing, mobile edge computing, and next-gen wireless infrastructure enablement." },
  { icon: Satellite, title: "Satellite Communications", desc: "GEO, MEO, and LEO satellite network planning, integration, and service delivery solutions." },
  { icon: Code, title: "Software & SaaS", desc: "Custom telecom software development, API integration, and cloud-native SaaS platform engineering." },
  { icon: Shield, title: "Cloud & SDN/NFV", desc: "AWS, Azure, GCP deployments with software-defined networking and network function virtualization." },
  { icon: BarChart3, title: "Systems Integration", desc: "Multi-vendor platform integration, data migration, and end-to-end solution architecture." },
];

const themes = [
  { img: networkingImg, title: "IP/Networking & SDN", desc: "Enterprise-grade routing, switching, and software-defined network architectures." },
  { img: wirelessImg, title: "5G Wireless & RAN", desc: "Next-generation wireless with network slicing and mobile edge computing." },
  { img: satelliteImg, title: "Satellite Communications", desc: "Multi-orbit satellite constellation planning and ground segment integration." },
  { img: teamImg, title: "Software Enablement", desc: "Agile development teams delivering scalable SaaS platforms for telecom." },
];

const Index = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Telecom network visualization" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
      </div>
      <div className="container relative z-10 mx-auto px-4 pt-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/30 px-4 py-1 font-body text-xs font-semibold uppercase tracking-widest text-primary">
            Telecom Systems Integrator
          </span>
          <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Engineering the Networks of{" "}
            <span className="text-gradient">Tomorrow</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Strategic IT consulting and systems integration for telecommunications. 
            From OSS/BSS to 5G and satellite — we architect, build, and deliver.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Our Services <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 font-body text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="border-y border-border bg-card py-12">
      <div className="container mx-auto grid grid-cols-2 gap-8 px-4 md:grid-cols-4 lg:px-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="font-display text-3xl font-bold text-primary md:text-4xl">{s.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Services preview */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading tag="What We Do" title="Comprehensive Telecom Solutions" subtitle="End-to-end IT systems integration tailored for the telecommunications industry." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group card-gradient rounded-lg border border-border p-6 transition-all hover:glow-border"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <svc.icon size={24} />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-foreground">{svc.title}</h3>
              <p className="text-sm text-muted-foreground">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Domain themes */}
    <section className="border-y border-border bg-card/50 py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading tag="Our Domains" title="Across the Telecom Spectrum" subtitle="Deep expertise spanning wireline, wireless, satellite, and software platforms." />
        <div className="grid gap-6 md:grid-cols-2">
          {themes.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-lg border border-border"
            >
              <img src={t.img} alt={t.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Ready to Transform Your Network?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Let's discuss how Vishwamitra can architect, integrate, and deliver your next telecom initiative.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 font-body text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            Schedule a Consultation <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Index;
