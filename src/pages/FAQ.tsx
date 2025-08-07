import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  HelpCircle, 
  MessageCircle, 
  Book, 
  Phone,
  Mail,
  Shield,
  Zap,
  Database,
  CreditCard
} from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: Zap,
      questions: [
        {
          q: "What is AI Hunter and how does it work?",
          a: "AI Hunter is an AI-powered B2B contact discovery and enrichment platform. It uses advanced algorithms to find verified email addresses, phone numbers, and company data across multiple sources, ensuring 95% accuracy and deliverability."
        },
        {
          q: "How do I get started with AI Hunter?",
          a: "Simply sign up for a free trial, connect your CRM or upload your prospect list, and start finding contacts immediately. Our onboarding process takes less than 5 minutes."
        },
        {
          q: "Do you offer a free trial?",
          a: "Yes! We offer a 14-day free trial with access to all Professional plan features and up to 100 contact lookups. No credit card required."
        }
      ]
    },
    {
      title: "Data & Accuracy",
      icon: Database,
      questions: [
        {
          q: "How accurate is your contact data?",
          a: "We guarantee 95% email deliverability and verify all contacts in real-time. Our AI aggregates data from multiple sources and validates each contact before delivery."
        },
        {
          q: "How often is your database updated?",
          a: "Our database is updated in real-time. We continuously monitor and refresh contact information, with most records updated within 30 days."
        },
        {
          q: "What sources do you use for contact data?",
          a: "We aggregate data from public sources, social networks, company websites, and our proprietary AI algorithms while maintaining full compliance with privacy regulations."
        }
      ]
    },
    {
      title: "Pricing & Plans",
      icon: CreditCard,
      questions: [
        {
          q: "What's included in each pricing plan?",
          a: "Starter ($49/month): 500 contacts, basic features. Professional ($149/month): 2,500 contacts, advanced features, API access. Enterprise: Custom pricing with unlimited contacts and dedicated support."
        },
        {
          q: "Can I change my plan anytime?",
          a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
        },
        {
          q: "Do you offer volume discounts?",
          a: "Yes, we offer custom pricing for teams that need higher contact volumes or enterprise features. Contact our sales team for a quote."
        }
      ]
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      questions: [
        {
          q: "Is AI Hunter GDPR compliant?",
          a: "Yes, we are fully GDPR compliant. We only collect and process data from public sources and provide tools for data subject requests and consent management."
        },
        {
          q: "How do you protect my data?",
          a: "We use bank-grade encryption, SOC 2 Type II compliance, and strict access controls. All data is encrypted in transit and at rest."
        },
        {
          q: "Can I delete my data?",
          a: "Yes, you have full control over your data. You can delete individual contacts or your entire account at any time through our dashboard."
        }
      ]
    }
  ];

  const quickHelp = [
    {
      title: "Live Chat",
      description: "Chat with our support team",
      icon: MessageCircle,
      link: "https://salescentri.com/contact/support-request/live-chat"
    },
    {
      title: "Documentation",
      description: "Browse our help docs",
      icon: Book,
      link: "https://salescentri.com/docs/user-guide"
    },
    {
      title: "Contact Support",
      description: "Email our support team",
      icon: Mail,
      link: "https://salescentri.com/contact/support-request"
    },
    {
      title: "Phone Support",
      description: "Call for immediate help",
      icon: Phone,
      link: "tel:+1-555-0123"
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
              <HelpCircle className="h-4 w-4 mr-1" />
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              How Can We Help?
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Find answers to common questions about AI Hunter, or contact our support team 
              for personalized assistance.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search FAQs..." 
                className="pl-10 bg-card border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Need Immediate Help?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {quickHelp.map((help, index) => (
              <Card key={index} className="bg-gradient-card border-border hover-lift animate-scale-in text-center">
                <CardHeader className="pb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <help.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{help.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4">{help.description}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={help.link}>Get Help</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse our most common questions by category
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="bg-gradient-card border-border shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <category.icon className="h-5 w-5 text-white" />
                    </div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                        <AccordionTrigger className="text-left font-medium hover:text-primary">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-primary text-white">
            <CardContent className="p-8">
              <HelpCircle className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-4">
                Still Have Questions?
              </h3>
              <p className="mb-6 opacity-90">
                Our support team is here to help. Get personalized assistance with your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" asChild>
                  <a href="https://salescentri.com/get-started/book-demo">
                    Book a Demo
                  </a>
                </Button>
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                  <a href="https://salescentri.com/contact">
                    Contact Support
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore more ways to get the most out of AI Hunter
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-border hover-lift text-center">
              <CardHeader>
                <div className="p-4 bg-gradient-primary rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Book className="h-8 w-8 text-white" />
                </div>
                <CardTitle>User Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive documentation and tutorials
                </p>
                <Button variant="outline" asChild>
                  <a href="https://salescentri.com/docs/user-guide">
                    Browse Docs
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border hover-lift text-center">
              <CardHeader>
                <div className="p-4 bg-gradient-secondary rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Join our user community for tips and tricks
                </p>
                <Button variant="outline" asChild>
                  <a href="https://salescentri.com/company/partners-affiliates">
                    Join Community
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border hover-lift text-center">
              <CardHeader>
                <div className="p-4 bg-gradient-primary rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle>API Reference</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Technical documentation for developers
                </p>
                <Button variant="outline" asChild>
                  <a href="https://salescentri.com/docs/api-reference">
                    View API Docs
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;