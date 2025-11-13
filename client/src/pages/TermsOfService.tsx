import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TermsOfService() {
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
        <h1 className="text-3xl font-bold text-foreground mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <p className="text-muted-foreground">
            Last updated: January 1, 2025
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using AI Learning Insights ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              AI Learning Insights provides an AI-powered platform for analyzing handwritten answer sheets and generating personalized learning insights. The Service includes content analysis, progress tracking, and educational recommendations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Accounts</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                To use certain features of the Service, you must register for an account. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security of your password</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Acceptable Use</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Violate any applicable laws or regulations</li>
                <li>Upload inappropriate or harmful content</li>
                <li>Infringe on intellectual property rights</li>
                <li>Attempt to gain unauthorized access to systems</li>
                <li>Interfere with the Service's operation</li>
                <li>Share content that violates privacy rights</li>
                <li>Use the Service for commercial purposes without authorization</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Educational Content and Privacy</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                When using our Service with student data, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>You have authority to upload and analyze the content</li>
                <li>You have obtained necessary consents from students/parents</li>
                <li>You comply with applicable educational privacy laws (FERPA, COPPA, etc.)</li>
                <li>You will not upload personally identifiable information unless necessary</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The Service and its original content, features, and functionality are owned by AI Learning Insights and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You retain ownership of the content you upload, but grant us a license to process and analyze it for providing our services.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Payment and Subscriptions</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Paid features of the Service are billed on a subscription basis. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Pay all fees according to your selected plan</li>
                <li>Provide accurate billing information</li>
                <li>Accept automatic renewal unless cancelled</li>
                <li>Understand that refunds are subject to our refund policy</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Service Availability</h2>
            <p className="text-muted-foreground leading-relaxed">
              We strive to provide reliable service but cannot guarantee 100% uptime. We reserve the right to modify, suspend, or discontinue the Service with or without notice. We are not liable for any downtime or service interruptions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Disclaimers</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The Service is provided "as is" without warranties of any kind. We disclaim all warranties, express or implied, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Accuracy of AI analysis and recommendations</li>
                <li>Suitability for specific educational purposes</li>
                <li>Uninterrupted or error-free operation</li>
                <li>Security of data transmission</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by law, AI Learning Insights shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or use, arising from your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may terminate or suspend your account and access to the Service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by and construed in accordance with the laws of the jurisdiction where AI Learning Insights is incorporated, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">13. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on our website. Your continued use constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">14. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-muted p-4 rounded-lg mt-4">
              <p className="text-foreground">Email: legal@ailearninginsights.com</p>
              <p className="text-foreground">Address: AI Learning Insights, Legal Department</p>
              <p className="text-foreground">Phone: +1 (555) 123-4567</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}