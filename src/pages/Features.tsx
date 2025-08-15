import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import dashboardImage from "@/assets/dashboard-contact-discovery.jpg";
import aiNetworkImage from "@/assets/ai-network-brain.jpg";
import { 
  Brain, 
  Search, 
  Shield, 
  Zap, 
  Target, 
  Database, 
  ChartBar, 
  Users,
  Mail,
  Phone,
  Building2,
  CheckCircle,
  Workflow,
  Lock,
  BarChart3
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Contact Discovery",
      description: "Advanced AI algorithms find and verify contact information with 95% accuracy",
      benefits: ["Real-time verification", "GDPR compliant", "Multi-source aggregation"]
    },
    {
      icon: Search,
      title: "Smart Prospecting Engine",
      description: "Intelligent search filters to find your ideal customer profiles instantly",
      benefits: ["Boolean search", "Intent data signals", "Lookalike modeling"]
    },
    {
      icon: Database,
      title: "Data Enrichment Suite",
      description: "Enrich existing contacts with comprehensive business intelligence",
      benefits: ["Company insights", "Technology stack", "Funding information"]
    },
    {
      icon: Target,
      title: "Lead Scoring & Prioritization",
      description: "AI-driven lead scoring to focus on your highest-value prospects",
      benefits: ["Predictive scoring", "Buying intent signals", "Custom scoring models"]
    },
    {
      icon: ChartBar,
      title: "Advanced Analytics",
      description: "Deep insights into your prospecting performance and ROI",
      benefits: ["Campaign tracking", "Conversion metrics", "Performance dashboards"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with SOC 2 Type II compliance",
      benefits: ["Data encryption", "Access controls", "Audit trails"]
    }
  ];

  const integrations = [
    { name: "Salesforce", logo: "🔗" },
    { name: "HubSpot", logo: "🔗" },
    { name: "Pipedrive", logo: "🔗" },
    { name: "LinkedIn Sales Navigator", logo: "🔗" },
    { name: "Outreach", logo: "🔗" },
    { name: "SalesLoft", logo: "🔗" }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-gradient-primary text-white">
              AI Hunter Features
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              Supercharge Your Sales
              <br />with AI Intelligence
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover how AI Hunter transforms your prospecting workflow with cutting-edge 
              artificial intelligence and verified contact data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90" asChild>
                <Link to="/contact">
                  Interactive Demo
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">
                  Start Free Trial
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Powerful Features for Modern Sales Teams
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Everything you need to find, verify, and engage with your ideal prospects using cutting-edge AI technology.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>99.9% uptime guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Real-time data enrichment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Advanced API integrations</span>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src={dashboardImage} 
                alt="AI Hunter Features Dashboard" 
                className="rounded-lg shadow-2xl border border-border w-full"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-border hover-lift animate-scale-in shadow-card">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-primary rounded-lg">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-foreground">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Workflow Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-scale-in">
              <img 
                src={aiNetworkImage} 
                alt="AI Hunter Neural Network Technology" 
                className="rounded-lg shadow-2xl border border-border w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                AI-Powered Intelligence Engine
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our advanced neural networks continuously learn and adapt to provide the most accurate contact discovery and data enrichment.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold mb-2">Machine Learning Algorithms</h3>
                    <p className="text-muted-foreground">
                      Advanced ML models trained on billions of data points to predict and verify contact information with 95% accuracy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Workflow className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold mb-2">Automated Workflows</h3>
                    <p className="text-muted-foreground">
                      Set up intelligent workflows that automatically enrich, score, and route leads to your sales team in real-time.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold mb-2">Predictive Analytics</h3>
                    <p className="text-muted-foreground">
                      Leverage predictive models to identify high-value prospects and optimize your outreach timing for maximum conversion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Types Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Find Any Business Contact
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access verified contact information across all professional channels with enterprise-grade security
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-6 bg-gradient-primary rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Mail className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Email Addresses</h3>
              <p className="text-muted-foreground mb-4">
                Verified business email addresses with 95% deliverability guarantee and real-time validation
              </p>
              <div className="text-sm text-primary">
                ✓ Real-time verification ✓ Catch-all detection ✓ Role-based filtering
              </div>
            </div>
            
            <div className="text-center">
              <div className="p-6 bg-gradient-secondary rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Phone Numbers</h3>
              <p className="text-muted-foreground mb-4">
                Direct dial and mobile numbers for key decision makers with caller ID verification
              </p>
              <div className="text-sm text-primary">
                ✓ Direct dial numbers ✓ Mobile verification ✓ Do-not-call compliance
              </div>
            </div>
            
            <div className="text-center">
              <div className="p-6 bg-gradient-primary rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Company Intelligence</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive company profiles with technographic insights and financial data
              </p>
              <div className="text-sm text-primary">
                ✓ Technology stack ✓ Funding history ✓ Growth indicators
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with your existing sales stack in minutes
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="p-6 text-center bg-gradient-card border-border hover-lift">
                <div className="text-2xl mb-2">{integration.logo}</div>
                <p className="text-sm font-medium">{integration.name}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-gradient-primary hover:opacity-90" asChild>
              <Link to="/pricing">
                View All Integrations
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
            Ready to Transform Your Prospecting?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of sales teams already using AI Hunter to accelerate their pipeline
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Book Demo
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <Link to="/contact">
                Start Free Trial
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;