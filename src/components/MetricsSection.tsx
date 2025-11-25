import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Users, FolderKanban, Building2, Code2 } from "lucide-react";

const MetricsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [tiltStyle, setTiltStyle] = useState({});

  const metrics = [
    {
      icon: Users,
      value: "450+",
      label: "Engineers",
      description: "Specialized engineers across PlayStation, TV, Camera, Audio and emerging tech delivering end‑to‑end product development.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FolderKanban,
      value: "15+",
      label: "Active Projects",
      description: "Ongoing product innovation programs covering cloud, AI/ML, platform engineering and experience modernization.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Building2,
      value: "5",
      label: "Sony Verticals",
      description: "Strategic engagements with key Sony business units including SIE, SSS, Home Entertainment and Imaging.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Code2,
      value: "8",
      label: "Technology Domains",
      description: "Expertise spanning cloud, embedded, AI/ML, DevOps, frontend, backend, mobile and platform engineering.",
      color: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A decade of innovation, growth, and excellence in engineering
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 10;
                  const rotateY = (centerX - x) / 10;
                  setTiltStyle({
                    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                    transition: "transform 0.1s ease-out"
                  });
                }}
                onMouseLeave={() => {
                  setTiltStyle({
                    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
                    transition: "transform 0.5s ease-out"
                  });
                }}
                style={index === 0 ? tiltStyle : {}}
                className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-300 border border-border overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-6 shadow-medium`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-5xl font-bold text-primary mb-2"
                  >
                    {metric.value}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {metric.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {metric.description} <strong className="text-primary">View more</strong>
                  </p>
                </div>

                {/* Decorative element */}
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
