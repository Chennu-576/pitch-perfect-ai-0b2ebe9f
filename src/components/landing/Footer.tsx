import { Link } from "react-router-dom";
import { Mail, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#" },
      { label: "Demo", href: "#" },
    ],
    Company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
    Legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Github, href: "#" },
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold gradient-text">
                PitchAI
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Generate hyper-personalized cold emails that convert. Powered by AI
              that understands your prospects.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 PitchAI. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Made with ❤️ for sales teams everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
