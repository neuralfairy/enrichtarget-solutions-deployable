import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Star, Shield } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small sales teams getting started",
      features: [
        "500 verified contacts/month",
        "Basic email finder",
        "CRM integration",
        "Email support",
        "Standard data exports",
        "Basic analytics"
      ],
      popular: false,
      cta: "Start Free Trial",
      link: "https://salescentri.com/pricing/free-trial"
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "For growing teams that need advanced features",
      features: [
        "2,500 verified contacts/month",
        "Advanced search filters",
        "Bulk enrichment",
        "Phone number finder",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Team collaboration tools"
      ],
      popular: true,
      cta: "Get Started",
      link: "https://salescentri.com/pricing/plans-overview"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited contacts",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Advanced security features",
        "Custom reporting",
        "SLA guarantees",
        "Training & onboarding"
      ],
      popular: false,
      cta: "Contact Sales",
      link: "https://salescentri.com/pricing/enterprise-custom"
    }
  ];

  const faqs = [
    {
      question: "What's included in the free trial?",
      answer: "The free trial includes access to all Professional plan features for 14 days, with up to 100 contact lookups."
    },
    {
      question: "How accurate is the contact data?",
      answer: "We guarantee 95% email deliverability and verify all contacts in real-time using multiple data sources."
    },
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
    },
    {
      question: "Do you offer volume discounts?",
      answer: "Yes, we offer custom pricing for teams that need higher contact volumes. Contact our sales team for details."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-gradient-primary text-white">
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              Choose Your
              <br />AI Hunter Plan
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Flexible pricing designed to grow with your sales team. Start free, 
              upgrade when you're ready.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-gradient-card border-border hover-lift animate-scale-in shadow-card ${
                  plan.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-white px-4 py-1">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-heading font-bold">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gradient-primary">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-success flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-primary hover:opacity-90' 
                        : 'bg-gradient-secondary hover:opacity-90'
                    }`}
                    asChild
                  >
                    <a href={plan.link}>{plan.cta}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              See how AI Hunter can impact your sales pipeline and revenue
            </p>
            
            <Card className="bg-gradient-primary text-white p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">3x</div>
                  <div>Faster prospect research</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <div>Email deliverability rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">40%</div>
                  <div>Increase in qualified leads</div>
                </div>
              </div>
            </Card>
            
            <div className="mt-8">
              <Button size="lg" variant="outline" asChild>
                <a href="https://salescentri.com/contact/sales-inquiry/request-quote">
                  Get Custom ROI Analysis
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Feature Comparison
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what's included in each plan
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-gradient-card rounded-lg border border-border">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4">Feature</th>
                  <th className="text-center p-4">Starter</th>
                  <th className="text-center p-4">Professional</th>
                  <th className="text-center p-4">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Monthly Contact Credits", starter: "500", pro: "2,500", enterprise: "Unlimited" },
                  { feature: "Email Finder", starter: "✓", pro: "✓", enterprise: "✓" },
                  { feature: "Phone Finder", starter: "—", pro: "✓", enterprise: "✓" },
                  { feature: "Bulk Enrichment", starter: "—", pro: "✓", enterprise: "✓" },
                  { feature: "API Access", starter: "—", pro: "✓", enterprise: "✓" },
                  { feature: "Custom Integrations", starter: "—", pro: "—", enterprise: "✓" },
                  { feature: "Dedicated Support", starter: "—", pro: "—", enterprise: "✓" }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.starter}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.pro}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-success" />
                <span className="text-sm font-medium">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-success" />
                <span className="text-sm font-medium">GDPR Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-success" />
                <span className="text-sm font-medium">99.9% Uptime</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of sales teams already using AI Hunter
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90" asChild>
                <a href="https://salescentri.com/get-started/free-trial">
                  Start Free Trial
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://salescentri.com/contact/sales-inquiry">
                  Talk to Sales
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;