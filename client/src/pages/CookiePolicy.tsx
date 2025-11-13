import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button 
            variant="ghost" 
            className="mb-2"
            onClick={() => window.history.back()}
            data-testid="button-back"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold text-foreground mb-8">Cookie Policy</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <p className="text-muted-foreground">
            Last updated: January 1, 2025
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. What Are Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              AI Learning Insights uses cookies for several purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>To keep you logged in to your account</li>
              <li>To remember your preferences and settings</li>
              <li>To analyze website traffic and usage patterns</li>
              <li>To improve our services and user experience</li>
              <li>To provide personalized content and recommendations</li>
              <li>To prevent fraud and enhance security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Essential Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                </p>
                <div className="bg-muted p-4 rounded-lg mt-2">
                  <p className="text-sm text-muted-foreground">Examples: Session management, authentication, load balancing</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Performance Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
                <div className="bg-muted p-4 rounded-lg mt-2">
                  <p className="text-sm text-muted-foreground">Examples: Google Analytics, page load times, error tracking</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Functional Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
                </p>
                <div className="bg-muted p-4 rounded-lg mt-2">
                  <p className="text-sm text-muted-foreground">Examples: Language preferences, theme settings, form data</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Marketing Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These cookies track your activity across websites to help us deliver more relevant advertising and measure campaign effectiveness.
                </p>
                <div className="bg-muted p-4 rounded-lg mt-2">
                  <p className="text-sm text-muted-foreground">Examples: Advertising platforms, social media integration, remarketing</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Third-Party Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may use third-party services that set cookies on our website:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
              <li><strong>Payment Processors:</strong> To securely process transactions</li>
              <li><strong>Customer Support:</strong> To provide chat and support services</li>
              <li><strong>Social Media:</strong> To enable social sharing and login features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cookie Duration</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Session Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These are temporary cookies that expire when you close your browser. They help maintain your session while navigating our website.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Persistent Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These cookies remain on your device for a specified period or until you delete them. They remember your preferences across visits.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Managing Cookies</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                You have several options for managing cookies:
              </p>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Browser Settings</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Most browsers allow you to control cookies through their settings:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Block all cookies</li>
                  <li>Block third-party cookies only</li>
                  <li>Delete existing cookies</li>
                  <li>Get notifications before cookies are set</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Cookie Preferences</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You can manage your cookie preferences through our cookie consent banner when you first visit our website, or by adjusting your account settings.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Impact of Disabling Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Disabling cookies may affect your experience on our website:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>You may need to log in more frequently</li>
              <li>Your preferences and settings may not be saved</li>
              <li>Some features may not work properly</li>
              <li>Personalized content may not be available</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Updates to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about our use of cookies, please contact us:
            </p>
            <div className="bg-muted p-4 rounded-lg mt-4">
              <p className="text-foreground">Email: privacy@ailearninginsights.com</p>
              <p className="text-foreground">Address: AI Learning Insights, Privacy Office</p>
              <p className="text-foreground">Phone: +1 (555) 123-4567</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}