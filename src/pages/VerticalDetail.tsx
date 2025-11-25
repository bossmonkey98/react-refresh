import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Users, FolderKanban, Clock, Trophy, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedNumber } from "@/components/AnimatedNumber";

const VerticalDetail = () => {
  const { vertical } = useParams();
  const navigate = useNavigate();

  const verticalData: Record<string, any> = {
    "sie": {
      name: "SIE - Sony Interactive Entertainment",
      tagline: "Gaming & PlayStation Excellence",
      description: "Leading the development of next-generation gaming experiences for PlayStation platforms. Our team of 180+ engineers works on system software, game engines, and innovative gaming technologies.",
      engineers: "180",
      projects: "8",
      experience: "6",
      techStack: ["C++", "C#", "Unity", "Unreal Engine", "Python", "React", "Node.js", "AWS"],
      keyProjects: [
        {
          title: "PlayStation 5 System Software",
          description: "Core system features including UI/UX components, storage management, and network services",
          impact: "Delivered 25+ features for PS5 launch"
        },
        {
          title: "PlayStation Network Integration",
          description: "Cloud gaming services, multiplayer infrastructure, and social features",
          impact: "Supporting 10M+ concurrent users"
        },
        {
          title: "Game Development Tools",
          description: "Internal tools and SDKs for game developers and studios",
          impact: "Used by 100+ game studios"
        }
      ],
      achievements: [
        "Delivered 50+ major features for PlayStation platforms",
        "Maintained 99.9% uptime for critical network services",
        "Reduced deployment time by 60% through automation",
        "Filed 8 patents in gaming technology"
      ],
      teamStructure: [
        { role: "System Software Engineers", count: "85" },
        { role: "Game Engine Developers", count: "45" },
        { role: "DevOps & Cloud Engineers", count: "30" },
        { role: "QA & Testing", count: "20" }
      ]
    },
    "sss": {
      name: "SSS - Sony Semiconductor Solutions",
      tagline: "Image Sensors & Semiconductor Technology",
      description: "Pioneering advanced imaging solutions and semiconductor technologies. Our 95+ engineers develop cutting-edge image sensors, embedded systems, and vision processing algorithms.",
      engineers: "95",
      projects: "4",
      experience: "4",
      techStack: ["C", "C++", "Python", "FPGA", "Embedded Systems", "Linux", "Computer Vision"],
      keyProjects: [
        {
          title: "AI-Powered Image Sensor",
          description: "Next-generation image sensors with on-chip AI processing capabilities",
          impact: "30% improvement in low-light performance"
        },
        {
          title: "Vision Processing Platform",
          description: "Real-time image processing and computer vision algorithms",
          impact: "Processing 120fps at 4K resolution"
        },
        {
          title: "Embedded Firmware Development",
          description: "Firmware for various sensor modules and imaging systems",
          impact: "Deployed in 50+ product lines"
        }
      ],
      achievements: [
        "Developed 12 new image sensor variants",
        "Reduced power consumption by 40% in latest sensors",
        "Achieved industry-leading dynamic range performance",
        "Contributed to 15+ patent applications"
      ],
      teamStructure: [
        { role: "Embedded Systems Engineers", count: "40" },
        { role: "Computer Vision Engineers", count: "25" },
        { role: "FPGA Developers", count: "20" },
        { role: "Validation Engineers", count: "10" }
      ]
    },
    "sony-home-entertainment": {
      name: "Sony Home Entertainment",
      tagline: "BRAVIA TV & Smart Home Solutions",
      description: "Creating immersive home entertainment experiences through BRAVIA TVs and smart home integration. Our 110+ engineers develop Android TV applications, streaming services, and IoT solutions.",
      engineers: "110",
      projects: "6",
      experience: "5",
      techStack: ["Java", "Android TV", "React Native", "Kotlin", "Node.js", "AWS", "Docker"],
      keyProjects: [
        {
          title: "BRAVIA Smart TV Platform",
          description: "Android TV based smart TV platform with advanced features",
          impact: "Deployed on 5M+ TVs globally"
        },
        {
          title: "Content Streaming Services",
          description: "Integration with major streaming platforms and content delivery",
          impact: "Supporting 20+ streaming services"
        },
        {
          title: "Voice Control & AI Assistant",
          description: "Voice recognition and AI-powered smart TV features",
          impact: "95% accuracy in voice commands"
        }
      ],
      achievements: [
        "Launched 30+ TV models with our software",
        "Achieved 4.5+ star rating on Google Play",
        "Reduced app load time by 50%",
        "Won innovation award for smart home integration"
      ],
      teamStructure: [
        { role: "Android TV Developers", count: "50" },
        { role: "Backend Engineers", count: "30" },
        { role: "UI/UX Developers", count: "20" },
        { role: "QA Engineers", count: "10" }
      ]
    },
    "sony-imaging-products-&-solutions": {
      name: "Sony Imaging Products & Solutions",
      tagline: "Professional Cameras & Imaging Systems",
      description: "Developing professional imaging solutions for content creators and enterprises. Our 45+ engineers work on camera control software, image processing, and professional video workflows.",
      engineers: "45",
      projects: "3",
      experience: "4",
      techStack: ["C++", "Python", "OpenCV", "TensorFlow", "Embedded C", "Image Processing"],
      keyProjects: [
        {
          title: "Camera Control Application",
          description: "Professional camera control software for Sony Alpha series",
          impact: "Used by 100K+ professional photographers"
        },
        {
          title: "Image Processing Pipeline",
          description: "Advanced RAW processing and color science algorithms",
          impact: "Industry-leading image quality"
        },
        {
          title: "Remote Production Tools",
          description: "Cloud-based video production and editing workflows",
          impact: "Enabled remote production for 500+ studios"
        }
      ],
      achievements: [
        "Launched camera software for 15+ camera models",
        "Reduced processing time by 70% with GPU acceleration",
        "Received technical Emmy award nomination",
        "Contributed to 10+ imaging patents"
      ],
      teamStructure: [
        { role: "Image Processing Engineers", count: "20" },
        { role: "Software Developers", count: "15" },
        { role: "Algorithm Engineers", count: "8" },
        { role: "Test Engineers", count: "2" }
      ]
    },
    "sony-audio-&-music": {
      name: "Sony Audio & Music",
      tagline: "Audio Technology & Entertainment Systems",
      description: "Delivering premium audio experiences through advanced DSP algorithms and wireless audio technologies. Our 20+ engineers develop audio processing software and mobile applications.",
      engineers: "20",
      projects: "2",
      experience: "3",
      techStack: ["C", "C++", "DSP", "Audio Codecs", "Bluetooth", "Mobile SDKs"],
      keyProjects: [
        {
          title: "Adaptive Sound Control",
          description: "AI-powered audio optimization for headphones",
          impact: "Featured in flagship headphone models"
        },
        {
          title: "LDAC Codec Enhancement",
          description: "High-resolution audio streaming over Bluetooth",
          impact: "Best-in-class wireless audio quality"
        }
      ],
      achievements: [
        "Implemented adaptive noise cancellation algorithms",
        "Reduced audio latency by 40%",
        "Achieved audiophile-grade wireless audio quality",
        "Won CES Innovation Award"
      ],
      teamStructure: [
        { role: "DSP Engineers", count: "8" },
        { role: "Mobile Developers", count: "6" },
        { role: "Audio Engineers", count: "4" },
        { role: "QA Engineers", count: "2" }
      ]
    }
  };

  const data = verticalData[vertical || "sie"];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Vertical Not Found</h1>
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
              Back to Verticals
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {data.name}
              </h1>
              <p className="text-xl text-primary font-medium mb-6">
                {data.tagline}
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl">
                {data.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-soft text-center"
              >
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <AnimatedNumber value={data.engineers} suffix="+" />
                <div className="text-sm text-muted-foreground uppercase">
                  Engineers
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-soft text-center"
              >
                <FolderKanban className="w-12 h-12 mx-auto mb-4 text-primary" />
                <AnimatedNumber value={data.projects} suffix="+" />
                <div className="text-sm text-muted-foreground uppercase">
                  Active Projects
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-soft text-center"
              >
                <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
                <AnimatedNumber value={data.experience} suffix="+" />
                <div className="text-sm text-muted-foreground uppercase">
                  Years Experience
                </div>
              </motion.div>
            </div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-soft mb-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-primary" />
                Technology Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {data.techStack.map((tech: string, index: number) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-sm px-4 py-2"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* Key Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                Key Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.keyProjects.map((project: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-medium transition-all"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="bg-primary/10 rounded-lg p-3">
                      <p className="text-sm font-medium text-primary">
                        {project.impact}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-soft mb-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Trophy className="w-6 h-6 text-primary" />
                Key Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.achievements.map((achievement: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Team Structure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-soft"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-primary" />
                Team Structure
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.teamStructure.map((team: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-secondary rounded-lg"
                  >
                    <span className="text-foreground font-medium">{team.role}</span>
                    <span className="text-2xl font-bold text-primary">{team.count}</span>
                  </div>
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

export default VerticalDetail;
