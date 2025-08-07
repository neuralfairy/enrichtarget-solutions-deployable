import { Link } from "react-router-dom";
import { Zap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-heading font-bold text-gradient-primary">
                Enrichtarget
              </span>
            </div>
            <p className="text-muted-foreground">
              AI-powered B2B contact discovery and lead enrichment solutions for modern sales teams.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Atlanta, GA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@enrichtarget.com" className="hover:text-primary">
                  info@enrichtarget.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+1-555-0123" className="hover:text-primary">
                  +1 (555) 012-3456
                </a>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://salescentri.com/solutions/psa-suite" className="text-muted-foreground hover:text-primary">
                  PSA Suite
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/platforms/contact-intelligence/ai-aggregator" className="text-muted-foreground hover:text-primary">
                  AI Aggregator
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/platforms/lead-management/lead-generation" className="text-muted-foreground hover:text-primary">
                  Lead Generation
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/services/data-enrichment" className="text-muted-foreground hover:text-primary">
                  Data Enrichment
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <a href="https://salescentri.com/resources/case-studies" className="text-muted-foreground hover:text-primary">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/resources/whitepapers-ebooks" className="text-muted-foreground hover:text-primary">
                  Whitepapers
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/docs/user-guide" className="text-muted-foreground hover:text-primary">
                  Documentation
                </a>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <a href="https://salescentri.com/company/careers" className="text-muted-foreground hover:text-primary">
                  Careers
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/company/partners-affiliates" className="text-muted-foreground hover:text-primary">
                  Partners
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <a href="https://salescentri.com/trust/security-privacy" className="text-muted-foreground hover:text-primary">
                  Security & Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Enrichtarget Solutions. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="/privacy" className="text-muted-foreground hover:text-primary">
                Privacy Policy
              </a>
              <a href="/terms" className="text-muted-foreground hover:text-primary">
                Terms of Service
              </a>
              <a 
                href="https://salescentri.com?utm_source=enrichtarget.com&utm_medium=footer&utm_campaign=partner_network" 
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by Sales Intelligence Platform
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;