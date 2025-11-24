import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Trophy, Lightbulb, Target } from "lucide-react";

const MetricsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const metrics = [
    {
      icon: Users,
      value: "800+",
      label: "Expert Engineers",
      description: "Highly skilled professionals driving innovation across multiple domains",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Trophy,
      value: "50+",
      label: "Patents Filed",
      description: "Cutting-edge innovations protecting intellectual property",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      value: "100+",
      label: "Active Projects",
      description: "Concurrent development initiatives across all verticals",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Target,
      value: "15+",
      label: "Years Excellence",
      description: "Proven track record of delivering world-class solutions",
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
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building excellence through innovation, dedication, and world-class engineering talent
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
                  <p className="text-sm text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {metric.description}
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
