import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';

// todo: remove mock functionality - replace with real pricing
const plans = [
  {
    name: 'Basic',
    subtitle: 'Perfect for trying out',
    price: 'Free',
    period: '',
    description: 'Get started with basic analysis features',
    features: [
      'Up to 5 answer sheet analyses per month',
      'Basic concept understanding insights',
      'Simple progress tracking',
      'Email support',
    ],
    buttonText: 'Get Started Free',
    buttonVariant: 'outline' as const,
    popular: false,
  },
  {
    name: 'Premium',
    subtitle: 'Most popular for families',
    price: '$19',
    period: '/month',
    description: 'Complete analysis with personalized reports',
    features: [
      'Unlimited answer sheet analyses',
      'Detailed concept understanding reports',
      'Formula recall tracking',
      'Reading comprehension analysis',
      'Personalized improvement recommendations',
      'Progress tracking over time',
      'Priority email & chat support',
      'Parent-teacher collaboration tools',
    ],
    buttonText: 'Start Premium',
    buttonVariant: 'default' as const,
    popular: true,
  },
  {
    name: 'Institutional',
    subtitle: 'For schools & coaching centers',
    price: 'Custom',
    period: '',
    description: 'Advanced features for educational institutions',
    features: [
      'Everything in Premium',
      'Bulk student analysis',
      'Class-wide performance insights',
      'Teacher dashboard & analytics',
      'Custom branding options',
      'Advanced reporting & exports',
      'Integration with school systems',
      'Dedicated account manager',
      'On-site training & support',
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'outline' as const,
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent{' '}
            <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your learning journey. All plans include 
            our core AI analysis features with no hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`hover-elevate transition-all duration-300 border-0 shadow-sm relative ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
              data-testid={`card-pricing-${index}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.subtitle}
                  </p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <Button 
                  variant={plan.buttonVariant}
                  className="w-full mb-8"
                  size="lg"
                  data-testid={`button-${plan.name.toLowerCase()}-plan`}
                  onClick={() => {
                    if (plan.name === 'Institutional') {
                      window.open('mailto:sales@ailearninginsights.com?subject=Institutional Plan Inquiry', '_blank');
                    } else {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {plan.buttonText}
                </Button>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <button className="text-primary font-medium hover:underline">
            Compare all features →
          </button>
        </div>
      </div>
    </section>
  );
}