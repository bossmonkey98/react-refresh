import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Bot, Palette, Settings, Database, Rocket, Boxes, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TechnicalExcellence = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      tags: ["Java", "C#", "Python", "C++", "JavaScript", "TypeScript", "Kotlin", "Swift"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Cloud Platforms",
      tags: ["AWS", "Azure", "Google Cloud", "Oracle Cloud", "IBM Cloud"],
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: Bot,
      title: "AI/ML",
      tags: ["TensorFlow", "PyTorch", "Computer Vision", "NLP", "Deep Learning"],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Palette,
      title: "Frontend",
      tags: ["React", "Angular", "Vue.js", "React Native", "Flutter"],
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Settings,
      title: "Backend",
      tags: [".NET Core", "Node.js", "Spring Boot", "Django", "FastAPI"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Database",
      tags: ["SQL Server", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Rocket,
      title: "DevOps",
      tags: ["Jenkins", "GitLab CI/CD", "GitHub Actions", "Ansible", "Terraform"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Boxes,
      title: "Architecture Layers",
      tags: ["UI/UX", "Middleware", "Backend Services", "Security", "Data Layer"],
      color: "from-purple-500 to-pink-500"
    },
  ];

  return (
    <section ref={ref} id="technical" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Technical Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technologies and comprehensive technical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-soft`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="text-lg font-bold text-foreground mb-4">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs font-medium hover:bg-primary hover:text-white transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnicalExcellence;
