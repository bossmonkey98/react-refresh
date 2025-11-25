import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Gamepad2, Tv, Camera, Headphones, Cpu, Glasses } from "lucide-react";

const DomainsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tiltStyle, setTiltStyle] = useState({});

  const domains = [
    {
      icon: Gamepad2,
      title: "Gaming & Interactive Entertainment",
      experience: "8 years experience",
      projects: "25+ projects",
      description: "Comprehensive gaming solutions from console development to cloud gaming platforms, with expertise in real-time multiplayer systems and game optimization.",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: Tv,
      title: "Consumer Electronics",
      experience: "7 years experience",
      projects: "30+ projects",
      description: "Advanced smart TV platforms, Android TV customization, voice control integration, and next-generation display technologies.",
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      icon: Camera,
      title: "Imaging & Photography",
      experience: "6 years experience",
      projects: "15+ projects",
      description: "Professional camera systems, AI-powered image processing, computational photography, and advanced autofocus algorithms.",
      gradient: "from-amber-600 to-orange-600"
    },
    {
      icon: Headphones,
      title: "Audio Technology",
      experience: "5 years experience",
      projects: "12+ projects",
      description: "Spatial audio, noise cancellation, audio codec optimization, and wireless audio streaming technologies.",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      icon: Cpu,
      title: "Semiconductor Solutions",
      experience: "4 years experience",
      projects: "8+ projects",
      description: "Image sensors, embedded systems, firmware development, and hardware-software integration for semiconductor components.",
      gradient: "from-indigo-600 to-violet-600"
    },
    {
      icon: Glasses,
      title: "Virtual Reality & AR",
      experience: "3 years experience",
      projects: "10+ projects",
      description: "Immersive VR experiences, motion tracking, 3D spatial audio, haptic feedback systems, and AR applications.",
      gradient: "from-pink-600 to-rose-600"
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
            Deep expertise across diverse technology domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => {
            const Icon = domain.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onMouseMove={(e) => {
                  setHoveredIndex(index);
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 15;
                  const rotateY = (centerX - x) / 15;
                  setTiltStyle({
                    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                    transition: "transform 0.1s ease-out"
                  });
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setTiltStyle({
                    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
                    transition: "transform 0.5s ease-out"
                  });
                }}
                style={hoveredIndex === index ? tiltStyle : {}}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-300 border border-border group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${domain.gradient} flex items-center justify-center mb-6 shadow-medium group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4">
                  {domain.title}
                </h3>

                <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    📅 {domain.experience}
                  </div>
                  <div className="flex items-center gap-1">
                    📊 {domain.projects}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {domain.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
