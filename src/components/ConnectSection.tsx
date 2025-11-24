import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ConnectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  };

  const onboardingSteps = [
    {
      number: 1,
      title: "Initial Consultation",
      duration: "Duration: 1 week",
      description: "Understanding your project requirements, technical needs, and business objectives.",
    },
    {
      number: 2,
      title: "Requirement Analysis",
      duration: "Duration: 2 weeks",
      description: "Detailed technical assessment, feasibility study, and solution architecture design.",
    },
    {
      number: 3,
      title: "Team Setup",
      duration: "Duration: 2-3 weeks",
      description: "Assembling the right team, infrastructure setup, and tool configuration.",
    },
    {
      number: 4,
      title: "Project Kickoff",
      duration: "Duration: 1 week",
      description: "Sprint planning, knowledge transfer, and beginning active development.",
    },
  ];

  return (
    <section ref={ref} id="connect" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Start Your Journey With SARD
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's build something exceptional together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Onboarding Process */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 shadow-soft border border-border"
          >
            <h3 className="text-2xl font-bold text-primary-dark mb-8">
              Onboarding Process
            </h3>

            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-[14px] top-4 bottom-4 w-0.5 bg-primary/30" />

              {onboardingSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-1 w-7 h-7 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold shadow-soft z-10">
                    {step.number}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    {step.title}
                  </h4>
                  <p className="text-sm text-primary font-medium mb-2">
                    {step.duration}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-border space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  sard.india@sony.com
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  +91 80 4040 8000
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  Sony India Software Centre Pvt. Ltd.<br />
                  Bangalore, Karnataka, India
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card rounded-2xl p-8 shadow-soft border border-border"
          >
            <h3 className="text-2xl font-bold text-primary-dark mb-6">
              Get In Touch
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Full Name *
                </label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email Address *
                </label>
                <Input
                  type="email"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Company Name
                </label>
                <Input
                  type="text"
                  placeholder="Sony Corporation"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Sony Vertical
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Vertical" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sie">Sony Interactive Entertainment</SelectItem>
                    <SelectItem value="sss">Sony Semiconductor Solutions</SelectItem>
                    <SelectItem value="home">Sony Home Entertainment</SelectItem>
                    <SelectItem value="imaging">Sony Imaging Products & Solutions</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Project Type
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Project Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New Development</SelectItem>
                    <SelectItem value="enhancement">Enhancement/Feature Add</SelectItem>
                    <SelectItem value="maintenance">Maintenance & Support</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message *
                </label>
                <Textarea
                  placeholder="Tell us about your project requirements..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
