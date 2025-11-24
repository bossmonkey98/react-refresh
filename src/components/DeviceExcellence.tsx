import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gamepad2, Tv, Camera, Focus, Glasses, Headphones, Cpu, Smartphone } from "lucide-react";

const DeviceExcellence = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const devices = [
    { icon: Gamepad2, name: "PlayStation Consoles", engineers: "120+", color: "from-blue-500 to-purple-500" },
    { icon: Tv, name: "BRAVIA TVs", engineers: "85+", color: "from-cyan-500 to-blue-500" },
    { icon: Camera, name: "Alpha Cameras", engineers: "45+", color: "from-amber-500 to-orange-500" },
    { icon: Focus, name: "Professional Lenses", engineers: "30+", color: "from-green-500 to-emerald-500" },
    { icon: Glasses, name: "PlayStation VR", engineers: "40+", color: "from-indigo-500 to-violet-500" },
    { icon: Headphones, name: "Audio Products", engineers: "35+", color: "from-pink-500 to-rose-500" },
    { icon: Cpu, name: "Semiconductor Components", engineers: "25+", color: "from-purple-500 to-pink-500" },
    { icon: Smartphone, name: "Mobile Xperia", engineers: "20+", color: "from-teal-500 to-cyan-500" },
  ];

  return (
    <section ref={ref} id="devices" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Device Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized teams dedicated to Sony's premium product lines
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {devices.map((device, index) => {
            const Icon = device.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${device.color} flex items-center justify-center mb-4 shadow-soft`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-sm font-semibold text-foreground mb-3">
                  {device.name}
                </h3>

                <div className="text-3xl font-bold text-primary mb-1">
                  {device.engineers}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  Engineers
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DeviceExcellence;
