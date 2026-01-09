import { motion } from "framer-motion";
import { TrendingUp, Clock, Fingerprint, Zap } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Reply Rates",
    description:
      "Our AI-crafted emails see 3-5x higher response rates compared to generic templates.",
    stat: "340%",
    statLabel: "avg. increase",
  },
  {
    icon: Clock,
    title: "Save Hours Daily",
    description:
      "Automate the research and writing process. What took hours now takes seconds.",
    stat: "10x",
    statLabel: "faster",
  },
  {
    icon: Fingerprint,
    title: "Hyper-Personalization",
    description:
      "Every email feels hand-crafted with prospect-specific insights and context.",
    stat: "100%",
    statLabel: "personalized",
  },
  {
    icon: Zap,
    title: "Scale Your Outreach",
    description:
      "Send personalized emails to hundreds of prospects without sacrificing quality.",
    stat: "100+",
    statLabel: "emails/batch",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />

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
            <span className="gradient-text">Why Teams Love PitchAI</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of sales professionals who've transformed their outreach
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-primary/30">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Stat */}
                <div className="mb-4">
                  <div className="font-display text-4xl font-bold gradient-text">
                    {benefit.stat}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {benefit.statLabel}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
