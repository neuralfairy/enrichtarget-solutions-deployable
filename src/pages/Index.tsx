import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-gradient-primary text-white animate-pulse-glow">
              <Zap className="h-4 w-4 mr-1" />
              AI-Powered Contact Discovery
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-gradient-primary animate-slide-up">
              Find Any Contact.
              <br />
              <span className="text-gradient-secondary">Instantly.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
              Transform your B2B sales with AI Hunter's verified contact discovery 
              and intelligent lead enrichment. Find decision-makers, verify emails, 
              and boost conversions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-primary hover-lift" asChild>
                <a href="https://salescentri.com/get-started/free-trial">
                  <Play className="mr-2 h-5 w-5" />
                  Start Free Trial
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10" asChild>
                <a href="https://salescentri.com/solutions/use-case-navigator/demo">
                  Watch Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            
            <div className="text-sm text-muted-foreground">
              ✓ 14-day free trial • ✓ No credit card required • ✓ Setup in 60 seconds
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

      {/* Social Proof */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Trusted by Leading Sales Teams
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of professionals who trust AI Hunter
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
          
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
            {integrations.map((integration, index) => (
              <div key={index} className="px-6 py-3 bg-gradient-card border border-border rounded-lg hover-lift">
                <span className="font-medium">{integration}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button className="bg-gradient-primary hover:opacity-90" asChild>
              <a href="https://salescentri.com/solutions/psa-suite/integrations">
                View All Integrations
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-primary text-white overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                      Calculate Your ROI
                    </h2>
                    <p className="text-xl opacity-90 mb-8">
                      See how AI Hunter can impact your sales pipeline and revenue. 
                      Our customers typically see 3x ROI within the first quarter.
                    </p>
                    <Button size="lg" variant="secondary" asChild>
                      <a href="https://salescentri.com/contact/sales-inquiry/request-quote">
                        Get ROI Analysis
                      </a>
                    </Button>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold">40%</div>
                      <div className="text-sm opacity-90">Increase in qualified leads</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold">60%</div>
                      <div className="text-sm opacity-90">Reduction in research time</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold">300%</div>
                      <div className="text-sm opacity-90">Average ROI in first quarter</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                <a href="https://salescentri.com/get-started/free-trial">
                  Start Free Trial
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://salescentri.com/get-started/book-demo">
                  Book a Demo
                </a>
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