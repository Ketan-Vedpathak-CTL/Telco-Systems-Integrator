import { motion } from "framer-motion";
import { Award, GraduationCap, Briefcase, Target } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import teamImg from "@/assets/team-software.jpg";

const certifications = [
  "Harvard Business School – Entrepreneurial & Executive Leadership",
  "Wharton CTO Executive Education – Technology Strategy & Execution",
  "AWS Cloud Practitioner – ML & AI Specialization",
  "PMP® – Project Management Professional",
  "CCNP – Cisco Certified Network Professional",
];

const coreCompetencies = [
  { icon: Target, title: "Systems Engineering", desc: "Requirements capture, feasibility analysis, PoC design, solution architecture using UML, use cases, and user stories." },
  { icon: Briefcase, title: "Project Management", desc: "Initiative planning, execution, and delivery of enterprise-scale telecom programs with cross-functional teams." },
  { icon: Award, title: "Client Advisory", desc: "Strategic consulting for C-suite stakeholders, bridging IT capabilities with business transformation goals." },
];

const About = () => (
  <div className="min-h-screen pt-16">
    {/* Hero */}
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 hero-gradient" />
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block rounded-full border border-primary/30 px-4 py-1 font-body text-xs font-semibold uppercase tracking-widest text-primary">
              About Vishwamitra
            </span>
            <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              Telecom Expertise.{" "}
              <span className="text-gradient">Enterprise Scale.</span>
            </h1>
            <p className="mt-6 text-muted-foreground">
              Vishwamitra Technologies is a specialized IT systems integration consultancy 
              serving the global telecommunications industry. With over two decades of hands-on 
              experience across major Tier-1 service providers, we deliver end-to-end solutions 
              spanning OSS/BSS, network engineering, 5G, and cloud transformation.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <img src={teamImg} alt="Team at work" className="rounded-lg border border-border shadow-lg" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Leadership */}
    <section className="border-y border-border bg-card py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading tag="Leadership" title="Meet Our CTO" subtitle="Driving innovation at the intersection of telecom and technology." />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl card-gradient rounded-lg border border-border p-8"
        >
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="font-display text-2xl font-bold">KV</span>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground">Ketan Vedpathak</h3>
              <p className="text-primary">Chief Technology Officer</p>
              <p className="mt-3 text-sm text-muted-foreground">
                B.E. in Electronics &amp; Telecommunications with 20+ years of experience in product/systems engineering, 
                business analysis, and telecom &amp; IP/data networking. Proven track record across Tier-1 US and global 
                service providers delivering OSS/BSS, SDN/NFV, and 5G solutions at enterprise scale.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Core Competencies */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading tag="Expertise" title="Core Competencies" />
        <div className="grid gap-6 md:grid-cols-3">
          {coreCompetencies.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-gradient rounded-lg border border-border p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <c.icon size={24} />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-foreground">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications */}
    <section className="border-y border-border bg-card/50 py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading tag="Credentials" title="Certifications & Accreditations" />
        <div className="mx-auto grid max-w-3xl gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 rounded-lg border border-border bg-card p-4"
            >
              <GraduationCap size={20} className="shrink-0 text-primary" />
              <span className="text-sm text-foreground">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
