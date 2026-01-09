import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-accent/80 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-accent-foreground">
              AI-Powered Email Generation
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-foreground">Hyper-Personalized</span>
            <br />
            <span className="gradient-text">Cold Email Generator</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Upload your leads, let AI scrape company context and LinkedIn insights,
            then generate winning cold email pitches that actually convert.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/signup">
              <Button variant="hero" size="xl" className="group">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="heroOutline" size="xl" className="group">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Product Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 relative"
          >
            <div className="relative mx-auto max-w-4xl">
              {/* Glow effect */}
              <div className="absolute inset-0 gradient-bg opacity-20 blur-3xl rounded-3xl" />
              
              {/* Mockup Card */}
              <div className="relative glass-card rounded-2xl p-1 shadow-2xl">
                <div className="bg-background rounded-xl overflow-hidden">
                  {/* Browser Header */}
                  <div className="bg-secondary/50 px-4 py-3 flex items-center gap-2 border-b border-border">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-background rounded-lg px-4 py-1.5 text-sm text-muted-foreground text-center">
                        app.pitchai.com/generate
                      </div>
                    </div>
                  </div>
                  
                  {/* Mockup Content */}
                  <div className="p-8 bg-gradient-to-br from-background to-secondary/20">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Left: Input */}
                      <div className="space-y-4">
                        <div className="text-sm font-medium text-muted-foreground">Prospect Data</div>
                        <div className="bg-secondary/50 rounded-lg p-4 space-y-3">
                          <div className="h-3 bg-primary/20 rounded w-3/4" />
                          <div className="h-3 bg-primary/20 rounded w-1/2" />
                          <div className="h-3 bg-primary/20 rounded w-2/3" />
                        </div>
                        <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                          <Sparkles className="w-4 h-4" />
                          AI analyzing context...
                        </div>
                      </div>
                      
                      {/* Right: Output */}
                      <div className="space-y-4">
                        <div className="text-sm font-medium text-muted-foreground">Generated Email</div>
                        <div className="bg-card rounded-lg p-4 border border-primary/20 space-y-3">
                          <div className="h-3 bg-foreground/10 rounded w-full" />
                          <div className="h-3 bg-foreground/10 rounded w-5/6" />
                          <div className="h-3 bg-foreground/10 rounded w-4/5" />
                          <div className="h-3 bg-foreground/10 rounded w-3/4" />
                          <div className="h-3 bg-primary/30 rounded w-1/3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
