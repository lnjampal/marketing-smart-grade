import { ArrowLeft, MapPin, Clock, Users, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Careers() {
  const jobOpenings = [
    {
      id: 1,
      title: "Intern - Software Development",
      department: "Engineering",
      location: "Remote / Bangalore",
      type: "Internship",
      experience: "0-1 years",
      description: "Join our engineering team to work on cutting-edge AI technology for education. You'll contribute to our platform development, learn from experienced engineers, and gain hands-on experience with machine learning and web development.",
      requirements: [
        "Currently pursuing or recently completed degree in Computer Science/Engineering",
        "Basic knowledge of programming languages (Python, JavaScript, or Java)",
        "Understanding of web development concepts",
        "Passion for education technology and AI",
        "Strong problem-solving skills"
      ],
      responsibilities: [
        "Assist in developing and testing AI models for handwriting analysis",
        "Support frontend and backend development tasks",
        "Participate in code reviews and team meetings",
        "Document features and contribute to technical documentation",
        "Work on bug fixes and feature enhancements"
      ]
    },
    {
      id: 2,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Bangalore / Remote",
      type: "Full-time",
      experience: "2-4 years",
      description: "Lead our marketing efforts to reach students, parents, and educational institutions. You'll develop and execute marketing campaigns, create content, and help establish our brand in the EdTech space.",
      requirements: [
        "Bachelor's degree in Marketing, Communications, or related field",
        "2-4 years of experience in digital marketing",
        "Experience with EdTech or education sector preferred",
        "Strong content creation and copywriting skills",
        "Knowledge of SEO, SEM, and social media marketing"
      ],
      responsibilities: [
        "Develop and execute comprehensive marketing strategies",
        "Create engaging content for various marketing channels",
        "Manage social media presence and community engagement",
        "Analyze marketing metrics and optimize campaigns",
        "Collaborate with sales team on lead generation"
      ]
    },
    {
      id: 3,
      title: "Sales Representative",
      department: "Sales",
      location: "Tirupati, Puttur, Andhra Pradesh",
      type: "Full-time",
      experience: "1-3 years",
      description: "Drive sales growth in Andhra Pradesh by building relationships with schools, coaching centers, and educational institutions. You'll be responsible for demonstrating our AI platform and converting prospects into customers.",
      requirements: [
        "Bachelor's degree in any field",
        "1-3 years of sales experience, preferably in education sector",
        "Excellent communication skills in Telugu, Hindi, and English",
        "Strong relationship-building abilities",
        "Willingness to travel within Tirupati and Puttur regions"
      ],
      responsibilities: [
        "Identify and prospect new educational institutions in assigned territory",
        "Conduct product demonstrations and presentations",
        "Build and maintain relationships with key decision makers",
        "Achieve monthly and quarterly sales targets",
        "Provide market feedback to product and marketing teams"
      ]
    },
    {
      id: 4,
      title: "Business Development Manager",
      department: "Business Development",
      location: "Bangalore / Hybrid",
      type: "Full-time",
      experience: "5-8 years",
      description: "Lead strategic partnerships and business expansion initiatives. You'll identify new market opportunities, negotiate partnerships, and drive growth across institutional and B2B segments.",
      requirements: [
        "MBA or equivalent with 5-8 years of business development experience",
        "Proven track record in EdTech or SaaS business development",
        "Experience with institutional sales and partnerships",
        "Strong analytical and strategic thinking skills",
        "Excellent presentation and negotiation abilities"
      ],
      responsibilities: [
        "Develop and execute business development strategy",
        "Identify and pursue strategic partnerships",
        "Lead negotiations for enterprise and institutional deals",
        "Analyze market trends and competitive landscape",
        "Collaborate with cross-functional teams on growth initiatives"
      ]
    }
  ];

  const benefits = [
    "Competitive salary and equity options",
    "Comprehensive health insurance",
    "Flexible working hours and remote work options",
    "Learning and development budget",
    "Modern office spaces with great amenities",
    "Team outings and company retreats"
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
          <h1 className="text-4xl font-bold text-foreground mb-6">Join Our Team</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Help us transform education through AI. We're looking for passionate individuals 
            who want to make a meaningful impact on student learning worldwide.
          </p>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Work With Us?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At AI Learning Insights, you'll be part of a mission-driven team that's 
                revolutionizing education through technology. We value innovation, 
                collaboration, and continuous learning.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Collaborative and inclusive culture</span>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Meaningful work with real impact</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Work-life balance and flexibility</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">Benefits & Perks</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Current Openings</h2>
            <p className="text-muted-foreground">
              Find the perfect role to start or advance your career with us
            </p>
          </div>

          <div className="space-y-8">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="hover-elevate">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge variant="outline">{job.type}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                    <Button 
                      data-testid={`button-apply-${job.id}`}
                      onClick={() => {
                        window.open(`mailto:careers@ailearninginsights.com?subject=Application for ${job.title}&body=Hi,%0A%0AI am interested in applying for the ${job.title} position. Please find my resume attached.%0A%0AThank you!`, '_blank');
                      }}
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-sm text-muted-foreground">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Responsibilities</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-sm text-muted-foreground">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Application Process</h2>
            <p className="text-muted-foreground">
              Our hiring process is designed to be transparent and efficient
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-semibold">
                1
              </div>
              <h3 className="font-semibold text-foreground mb-2">Apply</h3>
              <p className="text-sm text-muted-foreground">Submit your resume and cover letter</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-semibold">
                2
              </div>
              <h3 className="font-semibold text-foreground mb-2">Screen</h3>
              <p className="text-sm text-muted-foreground">Initial review and phone screening</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-semibold">
                3
              </div>
              <h3 className="font-semibold text-foreground mb-2">Interview</h3>
              <p className="text-sm text-muted-foreground">Technical and cultural fit interviews</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-semibold">
                4
              </div>
              <h3 className="font-semibold text-foreground mb-2">Offer</h3>
              <p className="text-sm text-muted-foreground">Reference check and job offer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Questions About Working Here?</h2>
          <p className="text-muted-foreground mb-8">
            Don't see the right position? We're always looking for talented individuals to join our team.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => {
              window.open('mailto:careers@ailearninginsights.com?subject=General Career Inquiry', '_blank');
            }}
            data-testid="button-general-inquiry"
          >
            Send Us Your Resume
          </Button>
        </div>
      </section>
    </div>
  );
}