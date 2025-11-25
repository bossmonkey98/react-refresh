import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "@/hooks/use-count-up";

const CapabilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const capabilities = [
    { value: "450+", label: "Total Engineers" },
    { value: "85+", label: "Certified Professionals\n(AWS, Azure, PMP, Scrum)" },
    { value: "45+", label: "Master's Degree Holders" },
    { value: "120+", label: "Technical Certifications" },
    { value: "25+", label: "Domain Experts\n(10+ years experience)" },
    { value: "15+", label: "AI/ML Specialists" },
    { value: "98%", label: "Project Success Rate" },
    { value: "4.8/5", label: "Client Satisfaction Score" },
  ];

  return (
    <section ref={ref} id="capabilities" className="py-24 bg-gradient-to-br from-primary-dark via-primary to-primary-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(30deg, rgba(255,255,255,0.1) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.1) 87.5%),
            linear-gradient(150deg, rgba(255,255,255,0.1) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.1) 87.5%)
          `,
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 40px 70px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Capabilities
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            World-class engineering talent and proven track record
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => {
            const numericValue = parseFloat(capability.value.replace(/[^0-9.]/g, ''));
            const hasDecimal = capability.value.includes('.');
            const count = useCountUp({ end: numericValue, decimals: hasDecimal ? 1 : 0 });
            const suffix = capability.value.replace(/[0-9.]/g, '');
            
            return (
              <motion.div
                key={index}
                ref={count.ref}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-strong"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">
                  {count.count}{suffix}
                </div>
                <div className="text-sm text-white/90 leading-relaxed whitespace-pre-line">
                  {capability.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
