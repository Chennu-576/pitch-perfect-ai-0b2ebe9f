import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Search, Wand2, Download } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: Upload,
    title: "Upload Your Leads",
    description:
      "Simply upload a CSV file with your prospect list. We support up to 100 rows per batch for optimal AI processing quality.",
    image: "upload",
  },
  {
    id: 2,
    icon: Search,
    title: "AI Context Scraping",
    description:
      "Our AI analyzes company websites and LinkedIn profiles to understand business context, pain points, and decision-maker roles.",
    image: "analyze",
  },
  {
    id: 3,
    icon: Wand2,
    title: "Generate Personalized Pitches",
    description:
      "Using advanced language models, we craft hyper-personalized cold emails tailored to each prospect's unique situation.",
    image: "generate",
  },
  {
    id: 4,
    icon: Download,
    title: "Export & Send",
    description:
      "Download your polished emails and import them into your favorite email platform. Start getting replies instantly.",
    image: "export",
  },
];

const StepImage = ({ type, isActive }: { type: string; isActive: boolean }) => {
  const baseClass = `w-full h-full rounded-2xl transition-all duration-500 ${
    isActive ? "opacity-100 scale-100" : "opacity-0 scale-95"
  }`;

  const renderContent = () => {
    switch (type) {
      case "upload":
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-24 h-24 rounded-2xl gradient-bg flex items-center justify-center mb-6 floating">
              <Upload className="w-12 h-12 text-primary-foreground" />
            </div>
            <div className="space-y-2 w-full max-w-xs">
              <div className="h-3 bg-primary/20 rounded-full w-full" />
              <div className="h-3 bg-primary/30 rounded-full w-4/5" />
              <div className="h-3 bg-primary/20 rounded-full w-3/4" />
              <div className="h-3 bg-primary/40 rounded-full w-2/3" />
            </div>
          </div>
        );
      case "analyze":
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="relative">
              <div className="w-24 h-24 rounded-full gradient-bg flex items-center justify-center pulse-glow">
                <Search className="w-12 h-12 text-primary-foreground" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                style={{ margin: "-8px" }}
              />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-16 h-16 rounded-lg bg-card border border-primary/20 flex items-center justify-center"
                >
                  <div className="w-8 h-8 rounded bg-primary/20" />
                </div>
              ))}
            </div>
          </div>
        );
      case "generate":
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-24 h-24 rounded-2xl gradient-bg flex items-center justify-center mb-6">
              <Wand2 className="w-12 h-12 text-primary-foreground animate-pulse" />
            </div>
            <div className="bg-card rounded-xl p-4 border border-primary/20 w-full max-w-xs space-y-2">
              <div className="h-2 bg-primary/30 rounded-full w-full animate-pulse" />
              <div className="h-2 bg-primary/20 rounded-full w-5/6" />
              <div className="h-2 bg-primary/30 rounded-full w-4/5 animate-pulse" />
              <div className="h-2 bg-primary/20 rounded-full w-3/4" />
            </div>
          </div>
        );
      case "export":
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-24 h-24 rounded-2xl gradient-bg flex items-center justify-center mb-6 floating">
              <Download className="w-12 h-12 text-primary-foreground" />
            </div>
            <div className="flex gap-3">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-12 h-16 bg-card rounded-lg border border-primary/20 flex items-center justify-center"
                >
                  <div className="w-6 h-2 bg-primary/40 rounded" />
                </motion.div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={baseClass}>
      <div className="bg-gradient-to-br from-secondary/50 to-accent/30 rounded-2xl h-80 p-8 flex items-center justify-center">
        {renderContent()}
      </div>
    </div>
  );
};

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />

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
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Four simple steps to transform your cold outreach
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveStep(step.id)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeStep === step.id
                    ? "bg-primary/10 border-2 border-primary shadow-lg"
                    : "bg-card border border-border hover:border-primary/30 hover:bg-secondary/50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      activeStep === step.id
                        ? "gradient-bg text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3
                      className={`font-display text-lg font-semibold mb-2 transition-colors ${
                        activeStep === step.id ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-sm transition-all duration-300 ${
                        activeStep === step.id
                          ? "text-foreground opacity-100 max-h-24"
                          : "text-muted-foreground opacity-70 max-h-0 overflow-hidden lg:max-h-24 lg:opacity-70"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="relative hidden lg:block">
            <AnimatePresence mode="wait">
              {steps.map(
                (step) =>
                  activeStep === step.id && (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <StepImage type={step.image} isActive={true} />
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
