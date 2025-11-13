import { BookOpen, Mail, Twitter, Linkedin, Github } from 'lucide-react';

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Demo', href: '#contact' },
  ],
  company: [
    { name: 'About Us', href: '/about-us' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'News', href: '/news' },
  ],
  support: [
    { name: 'Help Center', href: '#' },
    { name: 'Contact', href: '#contact' },
    { name: 'Documentation', href: '#' },
    { name: 'Status', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
    { name: 'GDPR', href: '/gdpr' },
  ],
};

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ailearninginsights' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ai-learning-insights' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/ai-learning-insights' },
];

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Logo & Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-primary rounded-lg p-2">
                  <BookOpen className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-semibold text-foreground">AI Learning Insights</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Transform handwritten answer sheets into powerful learning insights with 
                AI-powered analysis. Helping students, parents, and educators unlock true potential.
              </p>
              
              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h4 className="font-medium text-foreground">Stay Updated</h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    data-testid="input-newsletter"
                  />
                  <button 
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover-elevate"
                    data-testid="button-subscribe"
                    onClick={() => {
                      const email = document.querySelector('[data-testid="input-newsletter"]') as HTMLInputElement;
                      if (email?.value) {
                        alert(`Thank you for subscribing! We'll send updates to ${email.value}`);
                        email.value = '';
                      } else {
                        alert('Please enter your email address');
                      }
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-${link.name.toLowerCase().replace(' ', '-')}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} AI Learning Insights. All rights reserved.</span>
              <div className="flex gap-6">
                {footerLinks.legal.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover-elevate transition-colors"
                    data-testid={`link-${social.name.toLowerCase()}`}
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}