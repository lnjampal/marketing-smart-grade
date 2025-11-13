import { ArrowLeft, Users, Target, Lightbulb, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Dr. Priya Sharma",
      role: "CEO & Co-Founder",
      bio: "Former educator with 15+ years in AI research. PhD in Machine Learning from IIT Delhi.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Rajesh Kumar",
      role: "CTO & Co-Founder", 
      bio: "Previously at Google AI. Expert in computer vision and natural language processing.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Anita Verma",
      role: "Head of Education",
      bio: "20+ years in curriculum development. Former Principal at Delhi Public School.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Vikash Reddy",
      role: "Head of Product",
      bio: "Product leader from EdTech unicorn BYJU'S. Specialist in user experience design.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const values = [
    {
      icon: Users,
      title: "Student-Centric",
      description: "Every decision we make puts student learning outcomes first."
    },
    {
      icon: Target,
      title: "Accuracy & Trust",
      description: "We deliver reliable AI insights that educators and parents can depend on."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly pushing the boundaries of what's possible in educational technology."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards in everything we build and deliver."
    }
  ];

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

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">About AI Learning Insights</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're transforming education through AI-powered analysis of handwritten work, 
            helping students achieve their full potential with personalized learning insights.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To democratize personalized education by making advanced AI analysis accessible 
                to every student, parent, and educator. We believe that understanding how 
                students think and learn is key to unlocking their potential.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2023 by educators and AI researchers, we've analyzed over 500,000 
                answer sheets and helped thousands of students improve their learning outcomes 
                through data-driven insights.
              </p>
            </div>
            <div className="bg-primary/10 p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">500K+</div>
                  <div className="text-sm text-muted-foreground">Answer Sheets Analyzed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Students Helped</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2,000+</div>
                  <div className="text-sm text-muted-foreground">Schools Using Platform</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <Card key={value.title} className="text-center">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-muted-foreground">
              Meet the experts driving innovation in educational technology
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Technology</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Built on cutting-edge AI models specifically trained for educational content, 
            our platform combines computer vision, natural language processing, and 
            machine learning to provide accurate analysis of handwritten work.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Computer Vision</h3>
              <p className="text-sm text-muted-foreground">Advanced OCR and handwriting recognition</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">AI Analysis</h3>
              <p className="text-sm text-muted-foreground">Deep learning models for concept understanding</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Insights Engine</h3>
              <p className="text-sm text-muted-foreground">Personalized recommendations and analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Mission</h2>
          <p className="text-muted-foreground mb-8">
            Ready to transform education with AI? Get in touch to learn more about our platform.
          </p>
          <Button 
            size="lg"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              window.location.href = '/';
            }}
            data-testid="button-contact"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}