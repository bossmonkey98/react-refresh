import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Gamepad2, Tv, Camera, Cpu, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const DomainsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedDomain, setExpandedDomain] = useState<number | null>(null);

  const domains = [
    {
      icon: Gamepad2,
      title: "PlayStation",
      engineers: "250+",
      subtitle: "Gaming Innovation & Performance",
      description: "Leading PlayStation development with cutting-edge gaming experiences, performance optimization, and next-gen features.",
      technologies: ["Unreal Engine", "DirectX", "Vulkan", "Audio Processing", "Network Stack"],
      stats: { projects: "30+", patents: "15" },
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: Tv,
      title: "Television",
      engineers: "300+",
      subtitle: "Visual Excellence & Smart TV",
      description: "Pioneering television technology with advanced image processing, AI upscaling, and smart entertainment features.",
      technologies: ["4K/8K Processing", "HDR", "Android TV", "AI Upscaling", "Motion Flow"],
      stats: { projects: "40+", patents: "20" },
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      icon: Camera,
      title: "Camera",
      engineers: "150+",
      subtitle: "Professional Imaging Solutions",
      description: "Developing professional camera systems with advanced autofocus, image stabilization, and computational photography.",
      technologies: ["Image Sensors", "Autofocus AI", "RAW Processing", "Video Codec", "Stabilization"],
      stats: { projects: "25+", patents: "18" },
      gradient: "from-amber-600 to-orange-600"
    },
    {
      icon: Cpu,
      title: "Emerging Tech",
      engineers: "100+",
      subtitle: "AI & Future Technologies",
      description: "Exploring next-generation technologies including AI, IoT, AR/VR, and advanced audio processing systems.",
      technologies: ["Machine Learning", "IoT", "AR/VR", "Edge AI", "Cloud Integration"],
      stats: { projects: "20+", patents: "12" },
      gradient: "from-green-600 to-emerald-600"
    },
  ];

  return (
    <section ref={ref} id="domains" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Domain Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four core verticals driving Sony's technological innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            const isExpanded = expandedDomain === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-strong transition-all duration-300"
              >
                {/* Header */}
                <motion.div
                  onClick={() => setExpandedDomain(isExpanded ? null : index)}
                  className="cursor-pointer p-8 bg-gradient-to-br hover:from-secondary transition-all duration-300"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${domain.gradient} flex items-center justify-center shadow-medium`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-primary" />
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {domain.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {domain.subtitle}
                  </p>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-primary">
                        {domain.engineers}
                      </span>
                      <span className="text-muted-foreground">Engineers</span>
                    </div>
                  </div>
                </motion.div>

                {/* Expandable Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-8 pt-0 space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {domain.description}
                    </p>

                    {/* Stats */}
                    <div className="flex gap-4">
                      <div className="flex-1 bg-secondary rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-primary">
                          {domain.stats.projects}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase">
                          Active Projects
                        </div>
                      </div>
                      <div className="flex-1 bg-secondary rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-primary">
                          {domain.stats.patents}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase">
                          Patents Filed
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                        Key Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {domain.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs font-medium"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
