import { Card, CardContent } from '@/components/ui/card';
import { Upload, Brain, BarChart, FileCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    number: '01',
    title: 'Upload Answer Sheet',
    description: 'Simply scan or upload your handwritten answer sheets using our easy-to-use interface.',
    color: 'bg-blue-500',
  },
  {
    icon: Brain,
    number: '02', 
    title: 'AI Processing',
    description: 'Our advanced AI analyzes the content, evaluating conceptual understanding and learning patterns.',
    color: 'bg-purple-500',
  },
  {
    icon: BarChart,
    number: '03',
    title: 'Insights Dashboard',
    description: 'View comprehensive analytics and insights through an intuitive, easy-to-understand dashboard.',
    color: 'bg-green-500',
  },
  {
    icon: FileCheck,
    number: '04',
    title: 'Personalized Report',
    description: 'Receive detailed reports with actionable recommendations for targeted learning improvement.',
    color: 'bg-orange-500',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It{' '}
            <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform traditional answer sheets into powerful learning insights 
            with our simple 4-step process.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="relative">
                    <Card className="hover-elevate transition-all duration-300 border-0 shadow-sm">
                      <CardContent className="p-8 text-center">
                        <div className="mb-6">
                          <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                            <IconComponent className="h-8 w-8 text-white" />
                          </div>
                          <div className="text-sm font-bold text-muted-foreground mb-2">
                            STEP {step.number}
                          </div>
                          <h3 className="text-xl font-semibold text-foreground mb-3">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    {/* Arrow between steps */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <div className="w-8 h-8 bg-background border-2 border-border rounded-full flex items-center justify-center">
                          <ArrowRight className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="hover-elevate transition-all duration-300 border-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-muted-foreground mb-1">
                            STEP {step.number}
                          </div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center my-4">
                      <div className="w-8 h-8 bg-background border-2 border-border rounded-full flex items-center justify-center">
                        <ArrowRight className="h-4 w-4 text-primary rotate-90" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to get started with AI-powered learning insights?
          </p>
          <button 
            className="text-primary font-medium hover:underline"
            data-testid="button-start-process"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start your first analysis →
          </button>
        </div>
      </div>
    </section>
  );
}