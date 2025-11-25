import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Users, Shield, Globe, GraduationCap, Zap, ClipboardCheck, Lightbulb, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyPartnerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

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
    <section id="why-partner" ref={ref} className="py-24 bg-background relative overflow-hidden">
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

        <div className="relative max-w-4xl mx-auto" style={{ height: "600px" }}>
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            const offset = index - activeIndex;
            const isActive = index === activeIndex;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isInView ? (Math.abs(offset) < 3 ? 1 - Math.abs(offset) * 0.3 : 0) : 0,
                  scale: isActive ? 1 : 0.9 - Math.abs(offset) * 0.05,
                  y: offset * 20,
                  zIndex: differentiators.length - Math.abs(offset),
                  rotateX: offset * -2,
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 mx-auto w-full max-w-2xl"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border h-full flex flex-col">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-soft`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {item.title}
                  </h3>

                  <p className="text-base text-muted-foreground leading-relaxed flex-grow">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      {index + 1} of {differentiators.length}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <Button
            variant="outline"
            onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
            disabled={activeIndex === 0}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={() => setActiveIndex((prev) => Math.min(differentiators.length - 1, prev + 1))}
            disabled={activeIndex === differentiators.length - 1}
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;
