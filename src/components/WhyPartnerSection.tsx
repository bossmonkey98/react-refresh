import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Shield, Globe, GraduationCap, Zap, ClipboardCheck, Lightbulb, DollarSign } from "lucide-react";

const WhyPartnerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const differentiators = [
    {
      icon: Users,
      title: "Resource Management",
      description: "Strong bench strength with flexible scaling capabilities. Rapid team ramp-up and seamless resource allocation.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Secure Infrastructure",
      description: "ISO 27001 certified ODC labs with stringent security protocols and data protection measures.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Global Support",
      description: "24/7 coverage across Japan (JST), US (PST/EST), UK (GMT), and India (IST) time zones.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: GraduationCap,
      title: "Certified Teams",
      description: "PMP, AWS, Azure, and Scrum certified professionals ensuring best practices and industry standards.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Zap,
      title: "Agile Methodology",
      description: "Scrum, Kanban, and SAFe certified teams with proven agile delivery track record.",
      color: "from-indigo-500 to-violet-500"
    },
    {
      icon: ClipboardCheck,
      title: "Proven SDLC",
      description: "Well-defined development processes with comprehensive quality gates and automated testing.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Dedicated R&D team with POC capabilities for emerging technologies and rapid prototyping.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      description: "Competitive rates with optimized delivery models ensuring maximum value for investment.",
      color: "from-teal-500 to-cyan-500"
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Why Partner With SARD?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic advantages that set us apart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-soft`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="text-lg font-bold text-foreground mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;
