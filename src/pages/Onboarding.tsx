import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Building2,
  Globe,
  Package,
  Users,
  Target,
  Lightbulb,
  Rocket,
  ArrowRight,
  ArrowLeft,
  Check,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Company Basics",
    description: "Tell us about your company",
    icon: Building2,
    fields: [
      { name: "companyName", label: "Company Name", type: "input", placeholder: "Acme Inc." },
      { name: "websiteUrl", label: "Website URL", type: "input", placeholder: "https://acme.com" },
    ],
  },
  {
    id: 2,
    title: "Products & Services",
    description: "What do you offer?",
    icon: Package,
    fields: [
      {
        name: "products",
        label: "Products / Services",
        type: "textarea",
        placeholder: "Describe your main products or services...",
      },
      {
        name: "items",
        label: "Specific Items Offered",
        type: "textarea",
        placeholder: "List specific items, plans, or packages you want to pitch...",
      },
    ],
  },
  {
    id: 3,
    title: "Target Audience",
    description: "Who are you reaching?",
    icon: Users,
    fields: [
      {
        name: "targetAudience",
        label: "Target Audience",
        type: "textarea",
        placeholder: "E.g., SaaS companies with 50-500 employees, B2B marketers...",
      },
      {
        name: "icpDescription",
        label: "Ideal Customer Profile (ICP)",
        type: "textarea",
        placeholder: "Describe your ideal customer in detail...",
      },
    ],
  },
  {
    id: 4,
    title: "Value & Goals",
    description: "Your unique value and outreach goals",
    icon: Target,
    fields: [
      {
        name: "valueProposition",
        label: "Value Proposition",
        type: "textarea",
        placeholder: "What makes your offering unique? What problem do you solve?",
      },
      {
        name: "outreachGoal",
        label: "Outreach Goal",
        type: "textarea",
        placeholder: "E.g., Book demo calls, start free trials, close deals...",
      },
    ],
  },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentStepData = steps.find((s) => s.id === currentStep)!;
  const isLastStep = currentStep === steps.length;

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (isLastStep) {
      handleSubmit();
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    localStorage.setItem("onboarding_complete", "true");
    navigate("/dashboard");
  };

  const isStepValid = () => {
    return currentStepData.fields.every(
      (field) => formData[field.name] && formData[field.name].trim() !== ""
    );
  };

  return (
    <div className="min-h-screen bg-background dark flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-background to-background" />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-2xl"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Company Profile Setup</span>
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">
            Let's personalize your experience
          </h1>
          <p className="text-muted-foreground">
            Help our AI understand your business to generate perfect pitches
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex items-center gap-2 transition-colors ${
                  step.id === currentStep
                    ? "text-primary"
                    : step.id < currentStep
                    ? "text-primary/60"
                    : "text-muted-foreground"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                    step.id === currentStep
                      ? "gradient-bg text-primary-foreground"
                      : step.id < currentStep
                      ? "bg-primary/20 text-primary"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {step.id < currentStep ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    step.id
                  )}
                </div>
                <span className="hidden sm:inline text-sm font-medium">{step.title}</span>
              </div>
            ))}
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full gradient-bg"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / steps.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Form Card */}
        <div className="glass-card-dark rounded-2xl p-8 shadow-2xl border border-primary/20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Step Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center">
                  <currentStepData.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground">
                    {currentStepData.title}
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    {currentStepData.description}
                  </p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                {currentStepData.fields.map((field) => (
                  <div key={field.name} className="space-y-2">
                    <Label htmlFor={field.name} className="text-foreground">
                      {field.label}
                    </Label>
                    {field.type === "input" ? (
                      <Input
                        id={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name] || ""}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    ) : (
                      <Textarea
                        id={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name] || ""}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        className="bg-background/50 border-border/50 focus:border-primary min-h-[100px]"
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>

            <Button
              variant="hero"
              onClick={handleNext}
              disabled={!isStepValid() || isSubmitting}
              className="gap-2 group"
            >
              {isSubmitting ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin" />
                  Setting up...
                </>
              ) : isLastStep ? (
                <>
                  <Rocket className="w-4 h-4" />
                  Complete Setup
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Onboarding;
