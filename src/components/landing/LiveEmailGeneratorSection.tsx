import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RefreshCw, Copy, Check, Sparkles } from "lucide-react";

const emailTemplates = [
  {
    subject: "Quick question about {company}'s growth strategy",
    body: `Hi {name},

I noticed {company} recently expanded into {market} – congrats on that move! 

Given your focus on {focus}, I thought you'd be interested in how companies like yours are using AI to 10x their outreach efficiency.

We helped {similar_company} increase their reply rates by 340% in just 3 weeks.

Worth a quick 15-min chat?

Best,
Alex`,
    variables: {
      company: "TechFlow",
      name: "Sarah",
      market: "enterprise sales",
      focus: "scaling B2B outreach",
      similar_company: "SalesForce Pro",
    },
  },
  {
    subject: "Saw your LinkedIn post about {topic}",
    body: `Hi {name},

Your recent post about {topic} really resonated with me – especially the part about {insight}.

At {our_company}, we're helping leaders like you automate the tedious parts of prospecting while keeping the human touch that makes outreach effective.

{mutual_connection} suggested I reach out. Would you be open to exploring how we could help {company} hit their Q1 targets faster?

Cheers,
Jordan`,
    variables: {
      name: "Michael",
      topic: "sales automation challenges",
      insight: "balancing personalization with scale",
      our_company: "PitchAI",
      mutual_connection: "David Chen",
      company: "GrowthLabs",
    },
  },
  {
    subject: "Idea for {company}'s outbound strategy",
    body: `Hey {name},

I was researching {industry} leaders and {company} stood out – particularly your work on {achievement}.

Quick question: How are you currently handling cold email personalization at scale?

We've built something that might interest you – AI that reads prospect websites and LinkedIn to craft emails that feel hand-written.

{reference_client} saw a 5x increase in meetings booked. Happy to share the playbook if useful.

Talk soon,
Chris`,
    variables: {
      name: "Emma",
      company: "NexGen Solutions",
      industry: "B2B SaaS",
      achievement: "the new product launch",
      reference_client: "Acme Corp",
    },
  },
];

const LiveEmailGeneratorSection = () => {
  const [currentEmail, setCurrentEmail] = useState(emailTemplates[0]);
  const [displayedSubject, setDisplayedSubject] = useState("");
  const [displayedBody, setDisplayedBody] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [copied, setCopied] = useState(false);

  const fillVariables = (text: string, variables: Record<string, string>) => {
    let result = text;
    Object.entries(variables).forEach(([key, value]) => {
      result = result.replace(new RegExp(`\\{${key}\\}`, "g"), value);
    });
    return result;
  };

  const typeText = useCallback(async () => {
    setIsTyping(true);
    setDisplayedSubject("");
    setDisplayedBody("");

    const fullSubject = fillVariables(currentEmail.subject, currentEmail.variables);
    const fullBody = fillVariables(currentEmail.body, currentEmail.variables);

    // Type subject
    for (let i = 0; i <= fullSubject.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 30));
      setDisplayedSubject(fullSubject.slice(0, i));
    }

    // Small pause before body
    await new Promise((resolve) => setTimeout(resolve, 200));

    // Type body faster
    const words = fullBody.split(" ");
    let currentBody = "";
    for (let i = 0; i < words.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 40));
      currentBody += (i > 0 ? " " : "") + words[i];
      setDisplayedBody(currentBody);
    }

    setIsTyping(false);
  }, [currentEmail]);

  useEffect(() => {
    typeText();
  }, [typeText]);

  const regenerate = () => {
    const currentIndex = emailTemplates.indexOf(currentEmail);
    const nextIndex = (currentIndex + 1) % emailTemplates.length;
    setCurrentEmail(emailTemplates[nextIndex]);
  };

  const copyToClipboard = () => {
    const fullText = `Subject: ${displayedSubject}\n\n${displayedBody}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-accent/80 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-accent-foreground">Live Demo</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">See AI in Action</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Watch as our AI generates personalized cold emails in real-time
          </p>
        </motion.div>

        {/* Email Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-1 shadow-2xl">
            <div className="bg-background rounded-xl overflow-hidden">
              {/* Email Header */}
              <div className="bg-secondary/50 px-6 py-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">AI Email Generator</div>
                    <div className="text-sm text-muted-foreground">Generating personalized pitch...</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyToClipboard}
                    disabled={isTyping}
                    className="gap-2"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    {copied ? "Copied!" : "Copy"}
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={regenerate}
                    disabled={isTyping}
                    className="gap-2"
                  >
                    <RefreshCw className={`w-4 h-4 ${isTyping ? "animate-spin" : ""}`} />
                    Regenerate
                  </Button>
                </div>
              </div>

              {/* Email Content */}
              <div className="p-6 space-y-4 min-h-[400px]">
                {/* Subject Line */}
                <div>
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Subject
                  </label>
                  <div className="mt-1 p-3 bg-secondary/30 rounded-lg border border-border">
                    <span className="text-foreground font-medium">
                      {displayedSubject}
                    </span>
                    {isTyping && displayedBody === "" && (
                      <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-pulse" />
                    )}
                  </div>
                </div>

                {/* Email Body */}
                <div>
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Body
                  </label>
                  <div className="mt-1 p-4 bg-secondary/30 rounded-lg border border-border min-h-[280px]">
                    <pre className="whitespace-pre-wrap font-sans text-foreground text-sm leading-relaxed">
                      {displayedBody}
                      {isTyping && displayedSubject.length > 0 && (
                        <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-pulse" />
                      )}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveEmailGeneratorSection;
