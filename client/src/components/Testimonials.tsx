import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

// todo: remove mock functionality - replace with real testimonials
const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Parent of Grade 10 Student',
    content: 'Finally, I can understand exactly where my daughter needs help. The detailed analysis goes beyond just grades and shows me her actual learning patterns.',
    rating: 5,
    initials: 'SJ',
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Math Teacher, Lincoln High School',
    content: 'This platform has revolutionized how I understand my students\' needs. The insights help me tailor my teaching approach for each student.',
    rating: 5,
    initials: 'MC',
  },
  {
    name: 'Emma Thompson',
    role: 'Grade 9 Student',
    content: 'I love seeing exactly what I\'m good at and what I need to work on. It helps me study smarter, not just harder.',
    rating: 5,
    initials: 'ET',
  },
  {
    name: 'Principal David Wilson',
    role: 'Roosevelt Middle School',
    content: 'The data insights have helped us identify school-wide learning gaps and implement targeted interventions. Amazing results!',
    rating: 5,
    initials: 'DW',
  },
  {
    name: 'Lisa Rodriguez',
    role: 'Parent of Grade 8 Student',
    content: 'The progress tracking feature shows my son\'s improvement over time. It\'s incredibly motivating for both of us.',
    rating: 5,
    initials: 'LR',
  },
  {
    name: 'Ms. Ashley Kumar',
    role: 'Science Teacher',
    content: 'The concept understanding analysis is phenomenal. I can see exactly which scientific principles students struggle with.',
    rating: 5,
    initials: 'AK',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Real Stories, Real{' '}
            <span className="text-primary">Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from students, parents, and educators who have experienced the 
            transformative power of AI-driven learning insights.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover-elevate transition-all duration-300 border-0 shadow-sm"
              data-testid={`card-testimonial-${index}`}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/30" />
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="text-center mt-16 pt-16 border-t">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-muted-foreground">Average rating from users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Positive testimonials</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Would recommend to others</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}