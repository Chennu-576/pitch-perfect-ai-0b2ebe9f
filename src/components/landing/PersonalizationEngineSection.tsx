import { motion } from "framer-motion";
import { Globe, User, Target } from "lucide-react";

const nodes = [
  {
    icon: Globe,
    title: "Company Signals",
    description: "Website & public business context",
  },
  {
    icon: User,
    title: "Prospect Context",
    description: "Role, seniority & relevance",
  },
  {
    icon: Target,
    title: "Offer Alignment",
    description: "Matches offer to prospect pain points",
  },
];

const PersonalizationEngineSection = () => {
  return (
    <section id="features" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Personalization Engine</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our AI continuously analyzes multiple data points to craft the perfect pitch
          </p>
        </motion.div>

        {/* Flowing Line with Nodes */}
        <div className="relative py-12">
          {/* The animated flowing line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2">
            <div className="relative w-full h-full overflow-hidden">
              {/* Base dashed line */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, hsl(var(--primary) / 0.3) 0, hsl(var(--primary) / 0.3) 10px, transparent 10px, transparent 20px)",
                }}
              />
              {/* Animated glow overlay */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 w-1/3"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)",
                }}
              />
            </div>
          </div>

          {/* Nodes */}
          <div className="relative flex justify-between items-center max-w-4xl mx-auto">
            {nodes.map((node, index) => (
              <motion.div
                key={node.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center group"
              >
                {/* Node Circle */}
                <div className="relative">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full gradient-bg flex items-center justify-center shadow-xl pulse-glow">
                    <node.icon className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
                  </div>
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/30 -m-2 group-hover:border-primary/50 transition-colors" />
                </div>

                {/* Label */}
                <div className="mt-6 text-center">
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {node.title}
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-[140px]">
                    {node.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Connection dots for visual effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalizationEngineSection;
