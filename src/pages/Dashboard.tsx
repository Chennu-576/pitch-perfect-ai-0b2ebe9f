import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Upload,
  FileText,
  BarChart3,
  Settings,
  LogOut,
  Plus,
  Clock,
  TrendingUp,
  Users,
  Sparkles,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const statCards = [
  {
    label: "Emails Generated",
    value: "0",
    icon: Mail,
    color: "from-blue-500 to-blue-600",
  },
  {
    label: "Leads Processed",
    value: "0",
    icon: Users,
    color: "from-indigo-500 to-indigo-600",
  },
  {
    label: "Avg. Reply Rate",
    value: "0%",
    icon: TrendingUp,
    color: "from-purple-500 to-purple-600",
  },
  {
    label: "Time Saved",
    value: "0h",
    icon: Clock,
    color: "from-cyan-500 to-cyan-600",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();

  const handleLogout = async () => {
    await signOut();
    localStorage.removeItem("onboarding_complete");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background dark">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-card border-r border-border p-6 flex flex-col">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 mb-8">
          <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
            <Mail className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold gradient-text">
            PitchAI
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-medium"
          >
            <BarChart3 className="w-5 h-5" />
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors"
          >
            <Upload className="w-5 h-5" />
            Upload Leads
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors"
          >
            <FileText className="w-5 h-5" />
            Generated Emails
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors"
          >
            <Settings className="w-5 h-5" />
            Settings
          </a>
        </nav>

        {/* Logout */}
        <Button
          variant="ghost"
          className="justify-start gap-3 text-muted-foreground hover:text-foreground"
          onClick={handleLogout}
        >
          <LogOut className="w-5 h-5" />
          Log Out
        </Button>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-1">
              Welcome to your Dashboard
            </h1>
            <p className="text-muted-foreground">
              Start generating personalized cold emails that convert
            </p>
          </div>
          <Button variant="hero" className="gap-2">
            <Plus className="w-5 h-5" />
            New Campaign
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card-dark rounded-2xl p-6 border border-primary/10"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-display font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card-dark rounded-2xl p-12 border border-primary/10 text-center"
        >
          <div className="w-20 h-20 mx-auto gradient-bg rounded-2xl flex items-center justify-center mb-6">
            <Sparkles className="w-10 h-10 text-primary-foreground" />
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">
            Ready to Generate Your First Emails?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Upload your leads CSV file and let our AI create hyper-personalized cold
            emails that get responses.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="gap-2">
              <Upload className="w-5 h-5" />
              Upload Leads CSV
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <FileText className="w-5 h-5" />
              View Sample
            </Button>
          </div>
        </motion.div>

        {/* Recent Activity Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 glass-card-dark rounded-2xl p-6 border border-primary/10"
        >
          <h3 className="font-display text-lg font-semibold text-foreground mb-4">
            Recent Activity
          </h3>
          <div className="text-center py-8 text-muted-foreground">
            <Clock className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>No recent activity yet</p>
            <p className="text-sm">Your generated emails will appear here</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
