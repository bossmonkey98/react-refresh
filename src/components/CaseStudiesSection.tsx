import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Award, Zap } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const caseStudies = [
    {
      title: "PlayStation 5 Audio Engine",
      vertical: "PlayStation",
      challenge: "Deliver immersive 3D audio experience with minimal latency for next-gen gaming.",
      solution: "Developed custom Tempest 3D AudioTech engine with ray-tracing based audio processing.",
      result: "30% reduction in audio processing latency, supporting 100+ simultaneous audio sources.",
      impact: "Enhanced gameplay immersion across all PS5 titles",
      gradient: "from-blue-600 to-purple-600",
      icon: Zap
    },
    {
      title: "AI-Powered Image Upscaling",
      vertical: "Television",
      challenge: "Improve HD content quality on 4K/8K displays without significant processing overhead.",
      solution: "Implemented neural network-based upscaling with real-time edge enhancement.",
      result: "4x improvement in perceived image quality with 50% less processing power.",
      impact: "Deployed across BRAVIA XR series globally",
      gradient: "from-cyan-600 to-blue-600",
      icon: TrendingUp
    },
    {
      title: "Real-time Eye Autofocus",
      vertical: "Camera",
      challenge: "Achieve consistent eye-tracking AF for fast-moving subjects in professional photography.",
      solution: "Developed machine learning model for real-time eye detection with predictive tracking.",
      result: "99.7% eye detection accuracy at 30fps, even with partial occlusion.",
      impact: "Industry-leading AF performance in Alpha series",
      gradient: "from-amber-600 to-orange-600",
      icon: Award
    },
  ];

  return (
    <section ref={ref} id="case-studies" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world impact through innovative engineering solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 shadow-soft hover:shadow-strong">
                  {/* Gradient Header */}
                  <CardHeader className={`bg-gradient-to-br ${study.gradient} text-white p-6`}>
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="secondary" className="bg-white/20 text-white border-0">
                        {study.vertical}
                      </Badge>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">{study.title}</h3>
                  </CardHeader>

                  <CardContent className="p-6 space-y-4">
                    {/* Challenge */}
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Challenge
                      </div>
                      <p className="text-sm text-foreground leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Solution
                      </div>
                      <p className="text-sm text-foreground leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    {/* Result */}
                    <div className="bg-primary/5 rounded-lg p-4">
                      <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                        Result
                      </div>
                      <p className="text-sm font-semibold text-foreground">
                        {study.result}
                      </p>
                    </div>

                    {/* Impact */}
                    <div className="pt-2 border-t border-border">
                      <p className="text-xs text-muted-foreground italic">
                        {study.impact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
