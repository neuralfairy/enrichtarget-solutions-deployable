import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  MapPin, 
  Mail, 
  Linkedin,
  Globe,
  Shield,
  Zap
} from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former VP of Sales at Fortune 500 SaaS company with 15+ years in B2B sales.",
      linkedin: "#"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder", 
      bio: "AI/ML expert with background at Google and Tesla, PhD in Computer Science.",
      linkedin: "#"
    },
    {
      name: "Jennifer Kim",
      role: "VP of Product",
      bio: "Product leader with experience building sales tools at Salesforce and HubSpot.",
      linkedin: "#"
    },
    {
      name: "David Thompson",
      role: "VP of Engineering",
      bio: "Engineering leader with expertise in scalable data platforms and AI systems.",
      linkedin: "#"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Customer Success First",
      description: "Every decision we make is guided by our commitment to customer success and ROI."
    },
    {
      icon: Shield,
      title: "Data Privacy & Security",
      description: "We maintain the highest standards of data protection and privacy compliance."
    },
    {
      icon: Zap,
      title: "Innovation & Excellence",
      description: "We continuously push the boundaries of what's possible with AI and data science."
    },
    {
      icon: Users,
      title: "Transparency & Trust",
      description: "We believe in honest communication and building long-term partnerships."
    }
  ];

  const stats = [
    { number: "50M+", label: "Verified Contacts" },
    { number: "10K+", label: "Active Customers" },
    { number: "95%", label: "Data Accuracy" },
    { number: "150+", label: "Integrations" }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-gradient-primary text-white">
              About Enrichtarget
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              Empowering Sales Teams
              <br />with AI Intelligence
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We're on a mission to transform B2B sales through artificial intelligence, 
              helping sales professionals find and connect with their ideal prospects faster than ever.
            </p>
          </div>
        </div>
      </section>

      {/* Company Stats */}
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

      {/* Our Story */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Our Story
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-heading font-semibold">
                  Founded on a Simple Belief
                </h3>
                <p className="text-muted-foreground">
                  In 2020, our founders experienced firsthand the frustration of manual prospecting. 
                  Hours spent searching for contact information, outdated databases, and low-quality leads 
                  were holding back even the most talented sales professionals.
                </p>
                <p className="text-muted-foreground">
                  We knew there had to be a better way. By combining artificial intelligence with 
                  real-time data verification, we created AI Hunter – the first truly intelligent 
                  prospecting platform that thinks like a sales professional.
                </p>
                <p className="text-muted-foreground">
                  Today, we're proud to serve over 10,000 sales professionals across 50+ countries, 
                  helping them discover and connect with their ideal prospects at scale.
                </p>
              </div>
              
              <div className="space-y-6">
                <Card className="bg-gradient-primary text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Award className="h-8 w-8" />
                      <div>
                        <h4 className="font-semibold">Industry Recognition</h4>
                        <p className="text-sm opacity-90">SaaS Breakthrough Award 2023</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-secondary text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <TrendingUp className="h-8 w-8" />
                      <div>
                        <h4 className="font-semibold">Rapid Growth</h4>
                        <p className="text-sm opacity-90">300% YoY customer growth</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card border-border hover-lift animate-scale-in shadow-card">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-primary rounded-lg">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the experts driving AI Hunter's innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-gradient-card border-border hover-lift animate-scale-in text-center">
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={member.linkedin} className="inline-flex items-center space-x-2">
                      <Linkedin className="h-4 w-4" />
                      <span>LinkedIn</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Atlanta Headquarters
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Technology Square, Atlanta, GA 30308</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:info@enrichtarget.com" className="hover:text-primary">
                      info@enrichtarget.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <span>Global remote team</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-heading font-semibold mb-4">
                    Join Our Team
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We're always looking for talented individuals to join our mission of transforming B2B sales.
                  </p>
                  <Button className="bg-gradient-primary hover:opacity-90" asChild>
                    <a href="https://salescentri.com/company/careers">
                      View Open Positions
                    </a>
                  </Button>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Company Milestones
                </h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-6">
                    <div className="text-sm text-primary font-medium">2024</div>
                    <div className="font-semibold">Series A Funding</div>
                    <div className="text-sm text-muted-foreground">
                      Raised $15M to accelerate AI development
                    </div>
                  </div>
                  <div className="border-l-2 border-primary pl-6">
                    <div className="text-sm text-primary font-medium">2023</div>
                    <div className="font-semibold">10K Customers Milestone</div>
                    <div className="text-sm text-muted-foreground">
                      Reached 10,000 active customers worldwide
                    </div>
                  </div>
                  <div className="border-l-2 border-primary pl-6">
                    <div className="text-sm text-primary font-medium">2022</div>
                    <div className="font-semibold">Product Launch</div>
                    <div className="text-sm text-muted-foreground">
                      AI Hunter platform officially launched
                    </div>
                  </div>
                  <div className="border-l-2 border-primary pl-6">
                    <div className="text-sm text-primary font-medium">2020</div>
                    <div className="font-semibold">Company Founded</div>
                    <div className="text-sm text-muted-foreground">
                      Enrichtarget Solutions established in Atlanta
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
            Ready to Experience AI Hunter?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of sales professionals who trust Enrichtarget to power their prospecting
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="https://salescentri.com/get-started/book-demo">
                Book a Demo
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <a href="https://salescentri.com/contact">
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;