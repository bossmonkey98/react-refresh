import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Users, Target, Lightbulb, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCountUp } from "@/hooks/use-count-up";

const JourneyDetail = () => {
  const { year } = useParams();
  const navigate = useNavigate();

  const journeyData: Record<string, any> = {
    "2015": {
      title: "Established",
      description: "Started with 25 engineers",
      details: "SARD India was established in 2015 with a vision to create a world-class offshore development center for Sony. The initial team of 25 engineers laid the foundation for what would become one of Sony's most strategic ODCs.",
      highlights: [
        "Established ODC in Bangalore with state-of-the-art infrastructure",
        "Built initial team of 25 talented engineers across multiple domains",
        "Set up development processes and quality standards",
        "Launched first pilot projects with PlayStation division"
      ],
      metrics: [
        { label: "Engineers", value: "25", icon: Users },
        { label: "Projects", value: "2", icon: Target },
        { label: "Domains", value: "1", icon: Lightbulb },
        { label: "Certifications", value: "5", icon: Award },
      ]
    },
    "2017": {
      title: "PlayStation Excellence",
      description: "Expanded to 50+ engineers, first PS4 project",
      details: "A pivotal year marked by significant growth and our first major PlayStation 4 project. The team doubled in size and established SARD as a trusted partner for Sony Interactive Entertainment.",
      highlights: [
        "Successfully delivered first PS4 system software features",
        "Team expanded to 50+ engineers with specialized gaming expertise",
        "Established 24/7 support model for global teams",
        "Received recognition for code quality and delivery excellence"
      ],
      metrics: [
        { label: "Engineers", value: "50+", icon: Users },
        { label: "Projects", value: "4", icon: Target },
        { label: "Domains", value: "2", icon: Lightbulb },
        { label: "PS4 Features", value: "15+", icon: Award },
      ]
    },
    "2019": {
      title: "Multi-Domain Growth",
      description: "120 engineers across TV, Camera, PS",
      details: "SARD expanded into multiple Sony business verticals, including Television and Camera divisions, showcasing versatility and technical depth across different product lines.",
      highlights: [
        "Expanded to TV and Camera divisions with dedicated teams",
        "Grew to 120 engineers across multiple technology stacks",
        "Implemented agile methodologies and DevOps practices",
        "Launched innovation lab for emerging technologies"
      ],
      metrics: [
        { label: "Engineers", value: "120", icon: Users },
        { label: "Projects", value: "8", icon: Target },
        { label: "Domains", value: "5", icon: Lightbulb },
        { label: "Products Shipped", value: "25+", icon: Award },
      ]
    },
    "2021": {
      title: "Cloud & AI Integration",
      description: "200+ engineers, launched AI initiatives",
      details: "A transformative year focused on cloud technologies and artificial intelligence. SARD became Sony's key partner for next-generation technologies and digital transformation initiatives.",
      highlights: [
        "Launched AI and machine learning center of excellence",
        "Migrated multiple projects to cloud-native architectures",
        "Team grew to 200+ engineers with specialized cloud expertise",
        "Implemented advanced CI/CD pipelines and automation"
      ],
      metrics: [
        { label: "Engineers", value: "200+", icon: Users },
        { label: "Projects", value: "12", icon: Target },
        { label: "AI Models", value: "8", icon: Lightbulb },
        { label: "Cloud Migrations", value: "15", icon: Award },
      ]
    },
    "2023": {
      title: "Center of Excellence",
      description: "350+ engineers, 15+ active projects",
      details: "SARD achieved recognition as a Center of Excellence, managing 15+ concurrent projects across all Sony business verticals with a team of 350+ highly skilled engineers.",
      highlights: [
        "Designated as Sony's Center of Excellence for software development",
        "Managing 15+ active projects across 5 Sony verticals",
        "Team expanded to 350+ engineers with diverse expertise",
        "Achieved highest quality and delivery metrics in Sony ODC network"
      ],
      metrics: [
        { label: "Engineers", value: "350+", icon: Users },
        { label: "Projects", value: "15+", icon: Target },
        { label: "Domains", value: "8", icon: Lightbulb },
        { label: "Quality Score", value: "98%", icon: Award },
      ]
    },
    "2025": {
      title: "Global Recognition",
      description: "450+ engineers, working with 5 Sony verticals",
      details: "SARD has evolved into Sony's largest and most trusted offshore development center, with 450+ engineers contributing to innovations across all major Sony business verticals.",
      highlights: [
        "Reached milestone of 450+ talented engineers",
        "Contributing to all 5 major Sony business verticals",
        "Leading AI/ML initiatives for next-generation products",
        "Recognized globally for engineering excellence and innovation"
      ],
      metrics: [
        { label: "Engineers", value: "450+", icon: Users },
        { label: "Active Projects", value: "15+", icon: Target },
        { label: "Verticals", value: "5", icon: Lightbulb },
        { label: "Tech Domains", value: "8", icon: Award },
      ]
    }
  };

  const data = journeyData[year || "2015"];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Journey Not Found</h1>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-6">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Timeline
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-6xl font-bold text-primary font-mono">
                  {year}
                </span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                    {data.title}
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    {data.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {data.metrics.map((metric: any, index: number) => {
                const Icon = metric.icon;
                const numericValue = parseFloat(metric.value.replace(/[^0-9.]/g, ''));
                const suffix = metric.value.replace(/[0-9.]/g, '');
                const count = useCountUp({ end: numericValue });
                
                return (
                  <motion.div
                    key={index}
                    ref={count.ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-6 border border-border shadow-soft text-center"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {count.count}{suffix}
                    </div>
                    <div className="text-sm text-muted-foreground uppercase">
                      {metric.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-soft mb-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {data.details}
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-soft"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Key Highlights
              </h2>
              <div className="space-y-4">
                {data.highlights.map((highlight: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JourneyDetail;
