import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Heart, School } from 'lucide-react';

const impacts = [
  {
    icon: GraduationCap,
    title: 'For Students',
    subtitle: 'Better Self-Awareness & Focused Improvement',
    benefits: [
      'Understand learning strengths and weaknesses',
      'Get specific recommendations for improvement',
      'Track progress over time with clear metrics',
      'Build confidence through detailed feedback',
    ],
    color: 'bg-blue-500',
  },
  {
    icon: Heart,
    title: 'For Parents',
    subtitle: 'Clearer Picture Beyond Grades',
    benefits: [
      'See detailed insights into child\'s learning patterns',
      'Understand specific areas needing attention',
      'Support targeted learning at home',
      'Make informed decisions about educational support',
    ],
    color: 'bg-green-500',
  },
  {
    icon: School,
    title: 'For Schools',
    subtitle: 'Data-Driven Teaching & Targeted Support',
    benefits: [
      'Identify class-wide learning gaps',
      'Customize teaching strategies based on data',
      'Provide evidence-based parent consultations',
      'Improve overall educational outcomes',
    ],
    color: 'bg-purple-500',
  },
];

export default function Impact() {
  return (
    <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why It{' '}
            <span className="text-primary">Matters</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered insights create meaningful impact for every stakeholder 
            in the learning journey, transforming how we understand and support student growth.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {impacts.map((impact, index) => {
            const IconComponent = impact.icon;
            return (
              <Card 
                key={index} 
                className="hover-elevate transition-all duration-300 border-0 shadow-sm h-full"
                data-testid={`card-impact-${index}`}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="mb-6">
                    <div className={`w-14 h-14 ${impact.color} rounded-2xl flex items-center justify-center mb-4`}>
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {impact.title}
                    </h3>
                    <p className="text-lg font-medium text-primary mb-6">
                      {impact.subtitle}
                    </p>
                  </div>
                  
                  <div className="flex-grow">
                    <ul className="space-y-4">
                      {impact.benefits.map((benefit, benefitIndex) => (
                        <li 
                          key={benefitIndex} 
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">85%</div>
            <div className="text-sm text-muted-foreground">Improvement in targeted areas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">92%</div>
            <div className="text-sm text-muted-foreground">Parent satisfaction rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">78%</div>
            <div className="text-sm text-muted-foreground">Reduction in learning gaps</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">15K+</div>
            <div className="text-sm text-muted-foreground">Students helped</div>
          </div>
        </div>
      </div>
    </section>
  );
}