import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Trophy, TrendingUp, Cloud, Award, Globe } from "lucide-react";

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const milestones = [
    {
      year: "2015",
      title: "Established",
      description: "Started with 25 engineers",
      icon: Rocket,
    },
    {
      year: "2017",
      title: "PlayStation Excellence",
      description: "Expanded to 50+ engineers, first PS4 project",
      icon: Trophy,
    },
    {
      year: "2019",
      title: "Multi-Domain Growth",
      description: "120 engineers across TV, Camera, PS",
      icon: TrendingUp,
    },
    {
      year: "2021",
      title: "Cloud & AI Integration",
      description: "200+ engineers, launched AI initiatives",
      icon: Cloud,
    },
    {
      year: "2023",
      title: "Center of Excellence",
      description: "350+ engineers, 15+ active projects",
      icon: Award,
    },
    {
      year: "2025",
      title: "Global Recognition",
      description: "450+ engineers, working with 5 Sony verticals",
      icon: Globe,
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
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
