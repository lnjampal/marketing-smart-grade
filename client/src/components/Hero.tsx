import { Button } from '@/components/ui/button';
import { ArrowRight, Play, FileText, BarChart3 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Let AI Assist Your Child's{' '}
                <span className="text-primary">Learning</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Unlock every student's true potential with AI-powered analysis of handwritten answer sheets. 
                Get deeper insights beyond grades into conceptual understanding, formula recall, and learning patterns.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6"
                data-testid="button-get-early-access"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
                data-testid="button-watch-demo"
                onClick={() => {
                  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
                }}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Sheets Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">School Partners</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/10 to-chart-2/10 rounded-3xl p-8 lg:p-12">
              {/* Mock Answer Sheet */}
              <div className="bg-background rounded-xl shadow-lg p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Answer Sheet</span>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-muted rounded w-full"></div>
                  <div className="h-2 bg-muted rounded w-4/5"></div>
                  <div className="h-2 bg-muted rounded w-3/4"></div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="h-8 bg-primary/20 rounded flex items-center justify-center">
                      <span className="text-xs text-primary font-medium">Math: 85%</span>
                    </div>
                    <div className="h-8 bg-chart-2/20 rounded flex items-center justify-center">
                      <span className="text-xs text-chart-2 font-medium">Physics: 92%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
                <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
              </div>

              {/* Mock Dashboard */}
              <div className="bg-background rounded-xl shadow-lg p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-6">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="h-5 w-5 text-chart-2" />
                  <span className="text-sm font-medium">AI Insights</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs">Concept Understanding</span>
                    <span className="text-xs font-medium text-chart-2">Strong</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs">Formula Recall</span>
                    <span className="text-xs font-medium text-primary">Good</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs">Calculation Accuracy</span>
                    <span className="text-xs font-medium text-chart-2">Excellent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}