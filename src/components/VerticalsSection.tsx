import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const VerticalsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedVertical, setExpandedVertical] = useState<number | null>(null);

  const verticals = [
    {
      name: "SIE - Sony Interactive Entertainment",
      subtitle: "Gaming & PlayStation Excellence",
      engineers: "180",
      projects: "8",
      experience: "6",
      techStack: ["C++", "C#", "Unity", "Unreal Engine", "Python", "React", "Node.js", "AWS"],
    },
    {
      name: "SSS - Sony Semiconductor Solutions",
      subtitle: "Image Sensors & Semiconductor Technology",
      engineers: "95",
      projects: "4",
      experience: "4",
      techStack: ["C", "C++", "Python", "FPGA", "Embedded Systems", "Linux", "Computer Vision"],
    },
    {
      name: "Sony Home Entertainment",
      subtitle: "BRAVIA TV & Smart Home Solutions",
      engineers: "110",
      projects: "6",
      experience: "5",
      techStack: ["Java", "Android TV", "React Native", "Kotlin", "Node.js", "AWS", "Docker"],
    },
    {
      name: "Sony Imaging Products & Solutions",
      subtitle: "Professional Cameras & Imaging Systems",
      engineers: "45",
      projects: "3",
      experience: "4",
      techStack: ["C++", "Python", "OpenCV", "TensorFlow", "Embedded C", "Image Processing"],
    },
    {
      name: "Sony Audio & Music",
      subtitle: "Audio Technology & Entertainment Systems",
      engineers: "20",
      projects: "2",
      experience: "3",
      techStack: ["C", "C++", "DSP", "Audio Codecs", "Bluetooth", "Mobile SDKs"],
    },
  ];

  return (
    <section ref={ref} id="verticals" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Our Verticals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated teams for each Sony business vertical
          </p>
        </motion.div>

        <div className="space-y-4 max-w-5xl mx-auto">
          {verticals.map((vertical, index) => {
            const isExpanded = expandedVertical === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-medium transition-all duration-300"
              >
                {/* Header */}
                <motion.div
                  onClick={() => setExpandedVertical(isExpanded ? null : index)}
                  className="cursor-pointer p-6 flex items-center justify-between hover:bg-secondary/50 transition-colors"
                  whileHover={{ scale: 1.01 }}
                >
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {vertical.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {vertical.subtitle}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-primary" />
                  </motion.div>
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
                  <div className="p-6 pt-0 space-y-6">
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-secondary rounded-lg p-4 text-center">
                        <div className="text-3xl font-bold text-primary">
                          {vertical.engineers}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase mt-1">
                          Engineers
                        </div>
                      </div>
                      <div className="bg-secondary rounded-lg p-4 text-center">
                        <div className="text-3xl font-bold text-primary">
                          {vertical.projects}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase mt-1">
                          Active Projects
                        </div>
                      </div>
                      <div className="bg-secondary rounded-lg p-4 text-center">
                        <div className="text-3xl font-bold text-primary">
                          {vertical.experience}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase mt-1">
                          Years Experience
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {vertical.techStack.map((tech, idx) => (
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

export default VerticalsSection;
