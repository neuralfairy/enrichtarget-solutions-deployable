import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Calendar,
  Users,
  Headphones,
  Building2
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Calendar,
      title: "Book a Demo",
      description: "Schedule a personalized demo with our sales team",
      action: "Schedule Now",
      link: "/contact",
      color: "bg-gradient-primary"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team for immediate assistance",
      action: "Start Chat",
      link: "/contact",
      color: "bg-gradient-secondary"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our customer success team",
      action: "Call Now",
      link: "tel:+1-555-0123",
      color: "bg-gradient-primary"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message and we'll respond quickly",
      action: "Send Email",
      link: "/contact",
      color: "bg-gradient-secondary"
    }
  ];

  const offices = [
    {
      city: "Atlanta (HQ)",
      address: "Technology Square, Atlanta, GA 30308",
      phone: "+1 (555) 012-3456",
      email: "atlanta@enrichtarget.com"
    },
    {
      city: "San Francisco",
      address: "123 Market St, San Francisco, CA 94105",
      phone: "+1 (555) 012-3457",
      email: "sf@enrichtarget.com"
    },
    {
      city: "New York",
      address: "456 Broadway, New York, NY 10013",
      phone: "+1 (555) 012-3458",
      email: "ny@enrichtarget.com"
    }
  ];

  const departments = [
    {
      name: "Sales Inquiries",
      description: "Get pricing, request quotes, or speak with our sales team",
      link: "https://salescentri.com/contact/sales-inquiry"
    },
    {
      name: "Technical Support",
      description: "Get help with your AI Hunter account or integrations",
      link: "https://salescentri.com/contact/support-request"
    },
    {
      name: "Partnerships",
      description: "Explore partnership opportunities and integrations",
      link: "https://salescentri.com/contact/partnerships"
    },
    {
      name: "Media & Press",
      description: "Press inquiries and media kit requests",
      link: "mailto:press@enrichtarget.com"
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
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              We're Here to Help
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Have questions about AI Hunter? Need help getting started? 
              Our team is ready to assist you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-gradient-card border-border hover-lift animate-scale-in text-center">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 ${method.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                  <Button className="bg-gradient-primary hover:opacity-90 w-full" asChild>
                    <a href={method.link}>{method.action}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Send Us a Message
              </h2>
              <Card className="bg-gradient-card border-border">
                <CardContent className="p-6">
                  <form className="space-y-6" action="https://salescentri.com/contact" method="GET">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <Input placeholder="John" className="bg-muted border-border" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <Input placeholder="Doe" className="bg-muted border-border" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="john@company.com" className="bg-muted border-border" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <Input placeholder="Your Company" className="bg-muted border-border" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <Input placeholder="How can we help?" className="bg-muted border-border" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea 
                        placeholder="Tell us more about your needs..." 
                        rows={4}
                        className="bg-muted border-border"
                      />
                    </div>
                    
                    <Button type="submit" className="bg-gradient-primary hover:opacity-90 w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Get In Touch
              </h2>
              
              {/* Business Hours */}
              <Card className="bg-gradient-card border-border mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://salescentri.com/get-started/free-trial">
                      <Users className="h-4 w-4 mr-2" />
                      Start Free Trial
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://salescentri.com/solutions/use-case-navigator/demo">
                      <Building2 className="h-4 w-4 mr-2" />
                      View Interactive Demo
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://salescentri.com/docs/user-guide">
                      <Headphones className="h-4 w-4 mr-2" />
                      Help Documentation
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Contact by Department
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with the right team for your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="bg-gradient-card border-border hover-lift animate-scale-in">
                <CardHeader>
                  <CardTitle>{dept.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{dept.description}</p>
                  <Button variant="outline" asChild>
                    <a href={dept.link}>Contact {dept.name}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Locations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visit us at one of our offices across the United States
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="bg-gradient-card border-border hover-lift animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{office.city}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm text-muted-foreground">
                    {office.address}
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href={`tel:${office.phone}`} className="hover:text-primary">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href={`mailto:${office.email}`} className="hover:text-primary">
                      {office.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-primary text-white">
            <CardContent className="p-8">
              <Headphones className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-4">
                Need Immediate Help?
              </h3>
              <p className="mb-6 opacity-90">
                For urgent technical issues or account problems, our priority support team is standing by.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" asChild>
                  <a href="https://salescentri.com/contact/support-request/live-chat">
                    Live Chat Support
                  </a>
                </Button>
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                  <a href="tel:+1-555-0123">Call Emergency Line</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;