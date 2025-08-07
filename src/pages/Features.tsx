import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  CheckCircle
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
                <a href="https://salescentri.com/solutions/use-case-navigator/demo">
                  Interactive Demo
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://salescentri.com/get-started/free-trial">
                  Start Free Trial
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Powerful Features for Modern Sales Teams
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to find, verify, and engage with your ideal prospects
            </p>
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

      {/* Contact Types Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Find Any Business Contact
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access verified contact information across all professional channels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-6 bg-gradient-primary rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Mail className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Email Addresses</h3>
              <p className="text-muted-foreground">
                Verified business email addresses with 95% deliverability guarantee
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-6 bg-gradient-secondary rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Phone Numbers</h3>
              <p className="text-muted-foreground">
                Direct dial and mobile numbers for key decision makers
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-6 bg-gradient-primary rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Company Data</h3>
              <p className="text-muted-foreground">
                Comprehensive company profiles with technographic insights
              </p>
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
              <a href="https://salescentri.com/solutions/psa-suite/integrations">
                View All Integrations
              </a>
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
              <a href="https://salescentri.com/get-started/book-demo">
                Book Demo
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <a href="https://salescentri.com/get-started/free-trial">
                Start Free Trial
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;