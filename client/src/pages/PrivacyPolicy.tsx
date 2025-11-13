import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PrivacyPolicy() {
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
        <h1 className="text-3xl font-bold text-foreground mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <p className="text-muted-foreground">
            Last updated: January 1, 2025
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              AI Learning Insights ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered educational analysis platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Personal Information</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Educational institution or role</li>
                  <li>Account credentials</li>
                  <li>Billing and payment information</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Educational Data</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Uploaded answer sheets and academic content</li>
                  <li>Analysis results and insights</li>
                  <li>Learning progress and performance data</li>
                  <li>Student information (when provided by educators)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Technical Information</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Usage data and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Provide and improve our AI analysis services</li>
              <li>Generate personalized learning insights</li>
              <li>Process payments and manage accounts</li>
              <li>Communicate about our services and updates</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Encryption in transit and at rest</li>
              <li>Regular security audits and assessments</li>
              <li>Access controls and authentication</li>
              <li>Secure data storage and processing</li>
              <li>Staff training on data protection</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Sharing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell your personal information. We may share data only in these circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>With your explicit consent</li>
              <li>With service providers who assist our operations</li>
              <li>When required by law or legal process</li>
              <li>To protect our rights or prevent harm</li>
              <li>In connection with a business transaction</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Delete your data (right to erasure)</li>
              <li>Restrict processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
              <li>Object to processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We take special care to protect children's privacy. When processing student data, we comply with applicable laws including COPPA and FERPA. Educational institutions using our service are responsible for obtaining necessary consents and ensuring compliance with local regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. International Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place, including standard contractual clauses and adequacy decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy or how we handle your data, please contact us at:
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