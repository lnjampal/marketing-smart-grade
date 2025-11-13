import { Card, CardContent } from '@/components/ui/card';
import { Brain, Calculator, BookOpen, Target, FileCheck, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Concept Understanding Analysis',
    description: 'AI evaluates how well students grasp fundamental concepts beyond just correct answers, identifying knowledge gaps and strengths.',
  },
  {
    icon: Calculator,
    title: 'Formula Recall Tracking',
    description: 'Track student ability to remember and correctly apply mathematical formulas across different problem types and contexts.',
  },
  {
    icon: Target,
    title: 'Accuracy in Calculations',
    description: 'Detailed analysis of computational accuracy, identifying patterns in calculation errors and areas for improvement.',
  },
  {
    icon: BookOpen,
    title: 'Reading & Question Interpretation',
    description: 'Assess comprehension skills and ability to understand question requirements, crucial for problem-solving success.',
  },
  {
    icon: FileCheck,
    title: 'Personalized Strengths & Weakness Reports',
    description: 'Comprehensive reports highlighting individual learning patterns, strengths to build on, and specific areas needing attention.',
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking Over Time',
    description: 'Monitor learning progress with detailed analytics showing improvement trends and skill development patterns.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Features that{' '}
            <span className="text-primary">Transform Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered platform goes beyond traditional grading to provide deep insights 
            into student learning patterns and conceptual understanding.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="hover-elevate transition-all duration-300 border-0 shadow-sm"
                data-testid={`card-feature-${index}`}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to see these features in action?
          </p>
          <button 
            className="text-primary font-medium hover:underline"
            data-testid="button-learn-more-features"
          >
            Learn more about our AI analysis →
          </button>
        </div>
      </div>
    </section>
  );
}