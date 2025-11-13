import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function GDPR() {
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
        <h1 className="text-3xl font-bold text-foreground mb-8">GDPR Compliance</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <p className="text-muted-foreground">
            Last updated: January 1, 2025
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              AI Learning Insights is committed to compliance with the General Data Protection Regulation (GDPR). This page explains how we process personal data in accordance with GDPR requirements and your rights as a data subject.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Legal Basis for Processing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We process personal data under the following legal bases:
            </p>
            
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium text-foreground mb-2">Consent (Article 6(1)(a))</h3>
                <p className="text-sm text-muted-foreground">
                  When you provide explicit consent for marketing communications, newsletter subscriptions, or optional features.
                </p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium text-foreground mb-2">Contract Performance (Article 6(1)(b))</h3>
                <p className="text-sm text-muted-foreground">
                  To provide our AI analysis services, process payments, and fulfill our contractual obligations.
                </p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium text-foreground mb-2">Legitimate Interests (Article 6(1)(f))</h3>
                <p className="text-sm text-muted-foreground">
                  For service improvement, security measures, fraud prevention, and business analytics.
                </p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium text-foreground mb-2">Legal Obligation (Article 6(1)(c))</h3>
                <p className="text-sm text-muted-foreground">
                  To comply with legal requirements, such as tax obligations and regulatory compliance.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Your GDPR Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Under GDPR, you have the following rights regarding your personal data:
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-medium text-foreground mb-1">Right to Information (Article 13-14)</h3>
                <p className="text-sm text-muted-foreground">
                  Right to be informed about how we collect and use your personal data.
                </p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-medium text-foreground mb-1">Right of Access (Article 15)</h3>
                <p className="text-sm text-muted-foreground">
                  Right to obtain confirmation and access to your personal data we process.
                </p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-medium text-foreground mb-1">Right to Rectification (Article 16)</h3>
                <p className="text-sm text-muted-foreground">
                  Right to correct inaccurate or incomplete personal data.
                </p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-medium text-foreground mb-1">Right to Erasure (Article 17)</h3>
                <p className="text-sm text-muted-foreground">
                  Right to have your personal data deleted in certain circumstances.
                </p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-medium text-foreground mb-1">Right to Restrict Processing (Article 18)</h3>
                <p className="text-sm text-muted-foreground">
                  Right to limit how we use your personal data in specific situations.
                </p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-medium text-foreground mb-1">Right to Data Portability (Article 20)</h3>
                <p className="text-sm text-muted-foreground">
                  Right to obtain and reuse your personal data in a machine-readable format.
                </p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-medium text-foreground mb-1">Right to Object (Article 21)</h3>
                <p className="text-sm text-muted-foreground">
                  Right to object to processing based on legitimate interests or direct marketing.
                </p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-medium text-foreground mb-1">Rights Related to Automated Decision Making (Article 22)</h3>
                <p className="text-sm text-muted-foreground">
                  Right not to be subject to solely automated decision-making, including profiling.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. How to Exercise Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To exercise any of your GDPR rights, you can:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Email us at gdpr@ailearninginsights.com</li>
              <li>Contact our Data Protection Officer (DPO)</li>
              <li>Use the data management tools in your account settings</li>
              <li>Submit a request through our online form</li>
            </ul>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg mt-4">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Response Time:</strong> We will respond to your request within 30 days (or 90 days for complex requests).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When we transfer personal data outside the European Economic Area (EEA), we ensure adequate protection through:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>European Commission adequacy decisions</li>
              <li>Standard Contractual Clauses (SCCs)</li>
              <li>Binding Corporate Rules (BCRs)</li>
              <li>Certification schemes and codes of conduct</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Retention</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We retain personal data only as long as necessary for the purposes for which it was collected:
              </p>
              
              <div className="bg-muted p-4 rounded-lg space-y-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-foreground">Account Data</h4>
                    <p className="text-sm text-muted-foreground">Until account deletion + 7 years for legal compliance</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Educational Content</h4>
                    <p className="text-sm text-muted-foreground">3 years after last access or as requested</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Marketing Data</h4>
                    <p className="text-sm text-muted-foreground">Until consent withdrawal + 6 months</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Technical Logs</h4>
                    <p className="text-sm text-muted-foreground">12 months for security and analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Data Protection Officer (DPO)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We have appointed a Data Protection Officer to oversee our GDPR compliance:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-foreground">Data Protection Officer</p>
              <p className="text-foreground">Email: dpo@ailearninginsights.com</p>
              <p className="text-foreground">Address: AI Learning Insights, DPO Office</p>
              <p className="text-foreground">Phone: +1 (555) 123-4567</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Supervisory Authority</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you believe we have not handled your personal data in accordance with GDPR, you have the right to lodge a complaint with your local supervisory authority. For EU residents, you can find your supervisory authority at the European Data Protection Board website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Automated Decision Making</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our AI analysis involves automated processing to generate learning insights. However, we do not make solely automated decisions that significantly affect you without human oversight. Our educational recommendations are designed to assist, not replace, human judgment in educational settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Updates to GDPR Compliance</h2>
            <p className="text-muted-foreground leading-relaxed">
              We regularly review and update our GDPR compliance measures. Any significant changes will be communicated through our Privacy Policy updates and direct notifications when required.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For GDPR-related questions or to exercise your rights, contact us:
            </p>
            <div className="bg-muted p-4 rounded-lg mt-4">
              <p className="text-foreground">Email: gdpr@ailearninginsights.com</p>
              <p className="text-foreground">Address: AI Learning Insights, GDPR Compliance Office</p>
              <p className="text-foreground">Phone: +1 (555) 123-4567</p>
              <p className="text-foreground">Response Time: Within 30 days</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}