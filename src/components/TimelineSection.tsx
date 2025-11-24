import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Award, Rocket, Zap } from "lucide-react";

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const milestones = [
    {
      year: "2008",
      title: "SARD India Founded",
      description: "Established as Sony's premier R&D center in India, focusing on audio and video technologies.",
      icon: Rocket,
    },
    {
      year: "2012",
      title: "PlayStation Integration",
      description: "Expanded capabilities to include PlayStation development, becoming a key contributor to gaming innovation.",
      icon: Award,
    },
    {
      year: "2016",
      title: "Camera Excellence",
      description: "Launched dedicated camera division, contributing to Alpha series and professional imaging solutions.",
      icon: Zap,
    },
    {
      year: "2020",
      title: "AI & Machine Learning",
      description: "Pioneered AI-driven features across all domains, setting new standards for smart technology.",
      icon: Calendar,
    },
    {
      year: "2024",
      title: "800+ Engineers Strong",
      description: "Reached milestone of 800+ engineers, making us one of Sony's largest R&D centers globally.",
      icon: Award,
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Our Journey of Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            15+ years of innovation, growth, and technological breakthroughs
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary-light to-accent hidden lg:block" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center gap-8 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col lg:flex-row`}
                >
                  {/* Content */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className={`w-full lg:w-5/12 bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border ${
                      isLeft ? "lg:text-right" : "lg:text-left"
                    } text-left`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center ${
                        isLeft ? "lg:ml-auto" : ""
                      }`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-3xl font-bold text-primary font-mono">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </motion.div>

                  {/* Center Marker */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                    className="hidden lg:block relative"
                  >
                    <div className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-medium" />
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 w-6 h-6 bg-primary rounded-full"
                    />
                  </motion.div>

                  {/* Spacer for alignment */}
                  <div className="w-full lg:w-5/12 hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
