import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Search,
  TrendingUp,
  Brain,
  Target,
  Zap
} from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Future of AI-Powered Sales: 5 Trends Reshaping B2B Prospecting",
    excerpt: "Discover how artificial intelligence is transforming the way sales teams identify, research, and engage with prospects in 2024.",
    author: "Sarah Chen",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "AI & Sales",
    image: "🤖"
  };

  const recentPosts = [
    {
      title: "How to Build a High-Converting Email Outreach Sequence",
      excerpt: "Step-by-step guide to creating email sequences that prospects actually respond to.",
      author: "Marcus Rodriguez",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Email Marketing",
      image: "📧"
    },
    {
      title: "Data Quality: Why 95% Accuracy Matters in B2B Sales",
      excerpt: "The hidden costs of bad data and how verified contact information transforms your pipeline.",
      author: "Jennifer Kim",
      date: "December 5, 2024",
      readTime: "5 min read",
      category: "Data Quality",
      image: "📊"
    },
    {
      title: "Integration Spotlight: Connecting AI Hunter with Salesforce",
      excerpt: "Maximize your CRM investment with seamless AI Hunter integration.",
      author: "David Thompson",
      date: "November 28, 2024",
      readTime: "4 min read",
      category: "Integrations",
      image: "🔗"
    },
    {
      title: "Cold Outreach That Works: 10 Templates That Get Responses",
      excerpt: "Proven email and LinkedIn message templates for different industries and use cases.",
      author: "Sarah Chen",
      date: "November 20, 2024",
      readTime: "7 min read",
      category: "Templates",
      image: "💬"
    },
    {
      title: "Compliance and Privacy in AI-Powered Prospecting",
      excerpt: "Navigate GDPR, CCPA, and other regulations while building your prospect database.",
      author: "Marcus Rodriguez",
      date: "November 15, 2024",
      readTime: "6 min read",
      category: "Compliance",
      image: "🛡️"
    },
    {
      title: "ROI Calculator: Measuring Success with AI Hunter",
      excerpt: "How to calculate and demonstrate the return on investment from your prospecting tools.",
      author: "Jennifer Kim",
      date: "November 8, 2024",
      readTime: "5 min read",
      category: "Analytics",
      image: "📈"
    }
  ];

  const categories = [
    { name: "AI & Sales", count: 15, icon: Brain },
    { name: "Email Marketing", count: 12, icon: Target },
    { name: "Data Quality", count: 8, icon: TrendingUp },
    { name: "Integrations", count: 6, icon: Zap },
    { name: "Templates", count: 10, icon: Target },
    { name: "Compliance", count: 5, icon: Brain }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-gradient-primary text-white">
              Sales Intelligence Blog
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-gradient-primary">
              Learn. Grow. Sell.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Expert insights, actionable strategies, and the latest trends in AI-powered 
              B2B sales and prospecting.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 bg-card border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading font-bold mb-8 text-center">Featured Article</h2>
            
            <Card className="bg-gradient-card border-border hover-lift animate-scale-in shadow-card">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  <Badge className="mb-4 bg-gradient-primary text-white">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <Button className="bg-gradient-primary hover:opacity-90 group" asChild>
                    <a href="https://salescentri.com/resources/case-studies">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
                
                <div className="bg-gradient-primary rounded-r-lg flex items-center justify-center text-6xl">
                  {featuredPost.image}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find articles tailored to your interests and expertise level
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="bg-gradient-card border-border hover-lift animate-scale-in text-center p-4">
                <div className="p-3 bg-gradient-primary rounded-lg w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} articles</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our latest insights and strategies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <Card key={index} className="bg-gradient-card border-border hover-lift animate-scale-in shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <div className="text-2xl">{post.image}</div>
                  </div>
                  <CardTitle className="text-lg hover:text-primary transition-colors">
                    <a href="https://salescentri.com/resources/case-studies">
                      {post.title}
                    </a>
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <a href="https://salescentri.com/resources/whitepapers-ebooks">
                View All Articles
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
            Never Miss an Insight
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly sales tips, AI updates, and exclusive content.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button variant="secondary" asChild>
                <a href="https://salescentri.com/resources/tutorials-webinars">
                  Subscribe
                </a>
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-2">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Resources CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Explore More Resources
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Dive deeper with our comprehensive resource library
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-card border-border hover-lift text-center p-6">
                <div className="text-3xl mb-4">📚</div>
                <h3 className="font-heading font-semibold mb-2">Whitepapers</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  In-depth research and analysis
                </p>
                <Button variant="outline" asChild>
                  <a href="https://salescentri.com/resources/whitepapers-ebooks">
                    Browse Library
                  </a>
                </Button>
              </Card>
              
              <Card className="bg-gradient-card border-border hover-lift text-center p-6">
                <div className="text-3xl mb-4">🎥</div>
                <h3 className="font-heading font-semibold mb-2">Webinars</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Live and on-demand training
                </p>
                <Button variant="outline" asChild>
                  <a href="https://salescentri.com/resources/tutorials-webinars">
                    Watch Now
                  </a>
                </Button>
              </Card>
              
              <Card className="bg-gradient-card border-border hover-lift text-center p-6">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="font-heading font-semibold mb-2">Case Studies</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Real success stories and results
                </p>
                <Button variant="outline" asChild>
                  <a href="https://salescentri.com/resources/case-studies">
                    Read Stories
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;