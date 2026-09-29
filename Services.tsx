import { motion } from "framer-motion";
import { Network, Radio, Satellite, Code, Shield, BarChart3, Server, Cpu, Globe, Layers, Workflow, Database } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import networkingImg from "@/assets/networking-theme.jpg";
import wirelessImg from "@/assets/wireless-5g-theme.jpg";
import satelliteImg from "@/assets/satellite-theme.jpg";

const serviceCategories = [
  {
    icon: Network,
    title: "OSS/BSS Engineering",
    bullets: [
      "End-to-end OSS design supporting service fulfillment, network inventory & assurance",
      "Integration of COTS platforms: Amdocs, NetCracker, Ericsson Order Care, MetaSolv",
      "Service delivery chain automation — from pre-sales qualification to billing",
      "eTOM, MTOSI, SID and SOA-compliant architecture design",
    ],
  },
  {
    icon: Radio,
    title: "5G & Wireless Network Solutions",
    bullets: [
      "RAN architecture design including eNodeB, SGW, PGW, HLR/HSS components",
      "Network slicing & mobile edge computing enablement",
      "MVNO & IoT partner integration over 5G infrastructure",
      "SIM activation, number portability & IMEI lifecycle management",
    ],
  },
  {
    icon: Satellite,
    title: "Satellite Communications",
    bullets: [
      "GEO, MEO, and LEO orbit constellation planning & analysis",
      "Ground segment integration with terrestrial networks",
      "Uplink/downlink engineering and capacity management",
      "Hybrid satellite-terrestrial service design",
    ],
  },
  {
    icon: Shield,
    title: "Cloud & SDN/NFV",
    bullets: [
      "AWS, Azure, GCP cloud architecture & Terraform-based IaC",
      "Software-defined networking & network function virtualization",
      "Managed SD-WAN, Multi-LAN, and Security VNF deployments",
      "Cloud-native migration strategies for legacy telecom systems",
    ],
  },
  {
    icon: Code,
    title: "Software & SaaS Development",
    bullets: [
      "Custom telecom application development using Java, Python, Node.js",
      "API integration via REST, SOAP, Kafka, TIBCO, and Apigee",
      "Microservices architecture and CI/CD pipeline engineering",
      "Data analytics dashboards with Tableau, Power BI, and Kibana",
    ],
  },
  {
    icon: BarChart3,
    title: "Systems Integration & Consulting",
    bullets: [
      "Multi-vendor platform integration and data migration strategies",
      "Business analysis, requirements engineering & solution architecture",
      "Project management using Agile/Scrum with PMP® discipline",
      "Network assurance — fault, configuration & change management",
    ],
  },
];

const deliverables = [
  { icon: Server, label: "Network Inventory Management" },
  { icon: Cpu, label: "Service Provisioning & Activation" },
  { icon: Globe, label: "IP/MPLS & Metro Ethernet Design" },
  { icon: Layers, label: "Multi-Platform Integration" },
  { icon: Workflow, label: "Order Management Workflows" },
  { icon: Database, label: "Data Migration & Consolidation" },
];

const clients = [
  { name: "T-Mobile", icon: "📱" },
  { name: "Comcast", icon: "📡" },
  { name: "Verizon", icon: "📶" },
  { name: "AT&T", icon: "🌐" },
  { name: "Lumen Technologies", icon: "💡" },
  { name: "Sprint", icon: "⚡" },
  { name: "Brightspeed", icon: "🔆" },
  { name: "British Telecom", icon: "🇬🇧" },
  { name: "Telus", icon: "🍁" },
  { name: "Tech Mahindra", icon: "🏢" },
  { name: "Reliance", icon: "🔗" },
  { name: "Convergys (Cisco TAC)", icon: "🔧" },
];

const Services = () => (
  <div className="min-h-screen pt-16">
    {/* Hero */}
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 hero-gradient" />
      <div className="container relative z-10 mx-auto px-4 text-center lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="mb-4 inline-block rounded-full border border-primary/30 px-4 py-1 font-body text-xs font-semibold uppercase tracking-widest text-primary">
            Products &amp; Services
          </span>
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            What We <span className="text-gradient">Deliver</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Full-spectrum telecom IT services — from strategy and architecture to implementation and ongoing support.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Themed visuals */}
    <section className="border-b border-border">
      <div className="grid md:grid-cols-3">
        {[
          { img: networkingImg, label: "IP/Networking & SDN" },
          { img: wirelessImg, label: "5G Wireless & RAN" },
          { img: satelliteImg, label: "Satellite Comms" },
        ].map((t) => (
          <div key={t.label} className="group relative h-48 overflow-hidden">
            <img src={t.img} alt={t.label} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-background/70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-lg font-semibold text-foreground">{t.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Service Categories */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading tag="Our Capabilities" title="Service Portfolio" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-gradient rounded-lg border border-border p-6 transition-all hover:glow-border"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svc.icon size={24} />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground">{svc.title}</h3>
              <ul className="space-y-2">
                {svc.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Key Deliverables */}
    <section className="border-y border-border bg-card/50 py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading tag="Deliverables" title="Key Outcomes We Drive" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {deliverables.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-4 text-center"
            >
              <d.icon size={28} className="text-primary" />
              <span className="text-xs font-medium text-foreground">{d.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Clients */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading tag="Our Clients" title="Trusted by Industry Leaders" subtitle="We've delivered mission-critical solutions for top-tier telecommunications providers worldwide." />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-all hover:glow-border"
            >
              <span className="text-2xl">{c.icon}</span>
              <span className="font-display text-sm font-semibold text-foreground">{c.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Services;
