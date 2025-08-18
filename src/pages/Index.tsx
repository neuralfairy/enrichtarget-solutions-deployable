import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ai-hunter.jpg";
import teamImage from "@/assets/team-ai-analytics.jpg";
import dashboardImage from "@/assets/dashboard-contact-discovery.jpg";
import aiDashboardImage from "@/assets/ai-dashboard-analytics.jpg";
import salesTeamImage from "@/assets/sales-team-working.jpg";
import contactNetworkImage from "@/assets/contact-network-flow.jpg";
import roiChartImage from "@/assets/roi-growth-chart.jpg";
import securityImage from "@/assets/security-compliance.jpg";
import integrationImage from "@/assets/integration-ecosystem.jpg";
import { 
  Zap, 
  Target, 
  Brain, 
  Shield, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Star,
  ArrowRight,
  Play,
  Award,
  Globe,
  Database,
  Search,
  Mail,
  Phone
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Discovery",
      description: "Advanced AI finds verified contacts with 95% accuracy across multiple data sources"
    },
    {
      icon: Target,
      title: "Smart Prospecting",
      description: "Intelligent filters and search to identify your ideal customer profiles instantly"
    },
    {
      icon: Database,
      title: "Real-Time Enrichment",
      description: "Enrich existing contacts with comprehensive business intelligence data"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II compliant with bank-grade encryption and data protection"
    }
  ];

  const stats = [
    { number: "50M+", label: "Verified Contacts" },
    { number: "95%", label: "Data Accuracy" },
    { number: "10K+", label: "Active Users" },
    { number: "3x", label: "Faster Prospecting" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "VP of Sales",
      company: "TechCorp",
      quote: "AI Hunter transformed our prospecting process. We're finding 3x more qualified leads in half the time.",
      avatar: "👩‍💼"
    },
    {
      name: "Mike Chen",
      role: "SDR Manager", 
      company: "GrowthCo",
      quote: "The data quality is incredible. 95% deliverability means our outreach actually reaches decision makers.",
      avatar: "👨‍💻"
    },
    {
      name: "Lisa Rodriguez",
      role: "Sales Director",
      company: "ScaleUp",
      quote: "Best ROI we've seen from any sales tool. AI Hunter paid for itself in the first month.",
      avatar: "👩‍🚀"
    }
  ];

  const integrations = [
    "Salesforce", "HubSpot", "Pipedrive", "LinkedIn Sales Navigator", "Outreach", "SalesLoft"
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-gradient-primary text-white animate-pulse-glow">
                <Zap className="h-4 w-4 mr-1" />
                AI-Powered Contact Discovery
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-gradient-primary animate-slide-up">
                Find Any Contact.
                <br />
                <span className="text-gradient-secondary">Instantly.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
                Transform your B2B sales with AI Hunter's verified contact discovery 
                and intelligent lead enrichment. Find decision-makers, verify emails, 
                and boost conversions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-start mb-8 animate-scale-in">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-primary hover-lift" asChild>
                  <Link to="/contact">
                    <Play className="mr-2 h-5 w-5" />
                    Start Free Trial
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10" asChild>
                  <Link to="/contact">
                    Watch Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="text-sm text-muted-foreground">
                ✓ 14-day free trial • ✓ No credit card required • ✓ Setup in 60 seconds
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src={heroImage} 
                alt="AI Hunter Dashboard - Contact Discovery Interface" 
                className="rounded-lg shadow-2xl border border-border w-full"
              />
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="p-3 bg-gradient-primary rounded-full shadow-glow">
            <Search className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="absolute top-40 right-10 animate-float" style={{ animationDelay: "2s" }}>
          <div className="p-3 bg-gradient-secondary rounded-full shadow-glow">
            <Mail className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: "4s" }}>
          <div className="p-3 bg-gradient-primary rounded-full shadow-glow">
            <Phone className="h-6 w-6 text-white" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-scale-in">
                <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Why Choose AI Hunter?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The most advanced AI-powered prospecting platform for modern sales teams
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-border hover-lift animate-scale-in shadow-card">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-lg">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              How AI Hunter Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, powerful, and intelligent contact discovery in three easy steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center animate-scale-in">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Search & Discover</h3>
              <p className="text-muted-foreground">
                Enter company details or prospect criteria. Our AI instantly searches across 50+ million verified contacts.
              </p>
            </div>
            
            <div className="text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. AI Enrichment</h3>
              <p className="text-muted-foreground">
                Advanced AI enriches contact data with verified emails, phone numbers, and comprehensive business intelligence.
              </p>
            </div>
            
            <div className="text-center animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Export & Convert</h3>
              <p className="text-muted-foreground">
                Export qualified leads directly to your CRM or outreach tools. Start converting prospects into customers.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <img 
              src={contactNetworkImage} 
              alt="AI Hunter contact discovery workflow visualization" 
              className="mx-auto rounded-lg shadow-xl border border-border max-w-4xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Trusted by Leading Sales Teams
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of professionals who trust AI Hunter to accelerate their sales pipeline
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-border hover-lift animate-scale-in shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div className="text-left">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="animate-scale-in">
              <img 
                src={salesTeamImage} 
                alt="Professional sales team using AI Hunter for prospecting" 
                className="rounded-lg shadow-xl border border-border w-full"
              />
            </div>
            <div className="animate-scale-in">
              <img 
                src={aiDashboardImage} 
                alt="AI Hunter analytics dashboard showing performance metrics" 
                className="rounded-lg shadow-xl border border-border w-full"
              />
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-success" />
              <span>SOC 2 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-success" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-success" />
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect with your existing sales stack in minutes
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="animate-scale-in">
              <img 
                src={integrationImage} 
                alt="AI Hunter integration ecosystem with popular CRM and sales tools" 
                className="rounded-lg shadow-xl border border-border w-full"
              />
            </div>
            
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-heading font-bold">
                Connect Your Entire Sales Stack
              </h3>
              <p className="text-muted-foreground text-lg">
                AI Hunter integrates seamlessly with 50+ popular sales and marketing tools. 
                No complex setup required - get started in under 5 minutes.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {integrations.slice(0, 6).map((integration, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-card border border-border rounded-lg hover-lift">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                    <span className="font-medium text-sm">{integration}</span>
                  </div>
                ))}
              </div>
              
              <Button className="bg-gradient-primary hover:opacity-90" asChild>
                <Link to="/features">
                  View All Integrations
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-scale-in">
                <img 
                  src={roiChartImage} 
                  alt="ROI growth chart showing AI Hunter business impact" 
                  className="rounded-lg shadow-xl border border-border w-full"
                />
              </div>
              
              <Card className="bg-gradient-primary text-white overflow-hidden animate-fade-in">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                    Proven ROI Impact
                  </h2>
                  <p className="text-xl opacity-90 mb-8">
                    AI Hunter delivers measurable results from day one. Our customers 
                    achieve significant pipeline growth and revenue acceleration.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold">3x</div>
                      <div className="text-sm opacity-90">ROI in Q1</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold">40%</div>
                      <div className="text-sm opacity-90">More Leads</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold">60%</div>
                      <div className="text-sm opacity-90">Time Saved</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold">95%</div>
                      <div className="text-sm opacity-90">Data Accuracy</div>
                    </div>
                  </div>
                  
                  <Button size="lg" variant="secondary" asChild>
                    <Link to="/contact">
                      Calculate Your ROI
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Enterprise-Grade Security
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Your data security is our priority. AI Hunter meets the highest 
                  industry standards for data protection and compliance.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-success" />
                    <span className="font-semibold">SOC 2 Type II Certified</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-success" />
                    <span className="font-semibold">GDPR Compliant</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-success" />
                    <span className="font-semibold">256-bit SSL Encryption</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-6 w-6 text-success" />
                    <span className="font-semibold">99.9% Uptime SLA</span>
                  </div>
                </div>
                
                <Button className="bg-gradient-primary hover:opacity-90" asChild>
                  <Link to="/about">
                    Learn About Security
                  </Link>
                </Button>
              </div>
              
              <div className="animate-scale-in">
                <img 
                  src={securityImage} 
                  alt="Enterprise security and compliance certifications" 
                  className="rounded-lg shadow-xl border border-border w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Ready to Transform Your Sales?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of sales professionals who trust AI Hunter to accelerate their pipeline. 
              Start your free trial today and see results immediately.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-primary hover-lift" asChild>
                <Link to="/contact">
                  Start Free Trial
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">
                  Book a Demo
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;