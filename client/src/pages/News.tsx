import { ArrowLeft, Calendar, ExternalLink, Trophy, Newspaper, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "AI Learning Insights Raises $10M Series A to Expand EdTech Platform",
      excerpt: "The funding round led by Sequoia Capital India will help us scale our AI-powered handwriting analysis platform to reach more students across India and Southeast Asia.",
      date: "December 20, 2024",
      category: "Funding",
      type: "Press Release",
      image: "https://images.unsplash.com/photo-1556565661-3523262bcc07?w=400&h=250&fit=crop",
      featured: true,
      external: false
    },
    {
      id: 2,
      title: "Partnership with Central Board of Secondary Education (CBSE)",
      excerpt: "We're proud to announce our official partnership with CBSE to integrate AI-powered analysis tools into their assessment framework, benefiting over 20,000 schools.",
      date: "December 12, 2024",
      category: "Partnership", 
      type: "Company News",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop",
      featured: false,
      external: false
    },
    {
      id: 3,
      title: "AI Learning Insights Wins 'EdTech Innovation of the Year' Award",
      excerpt: "Recognized at the India Education Summit 2024 for our groundbreaking approach to personalized learning through handwriting analysis.",
      date: "November 30, 2024",
      category: "Awards",
      type: "Press Release",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      featured: false,
      external: false
    },
    {
      id: 4,
      title: "Launch of Mobile App for Parents and Students",
      excerpt: "Introducing our new mobile application that allows parents and students to access AI-powered learning insights anytime, anywhere.",
      date: "November 15, 2024",
      category: "Product Launch",
      type: "Product Update",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      featured: false,
      external: false
    },
    {
      id: 5,
      title: "Expansion to Tamil Nadu: 500+ Schools Onboarded",
      excerpt: "Our rapid expansion continues as we welcome over 500 schools across Tamil Nadu to our platform, serving more than 100,000 students.",
      date: "October 28, 2024",
      category: "Expansion",
      type: "Company News",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=250&fit=crop",
      featured: false,
      external: false
    },
    {
      id: 6,
      title: "Featured in TechCrunch: 'The Future of Educational Assessment'",
      excerpt: "Our CEO discusses how AI is transforming educational assessment and the role of handwriting analysis in personalized learning.",
      date: "October 15, 2024",
      category: "Media Coverage",
      type: "External Article",
      image: "https://images.unsplash.com/photo-1586953135573-4a0c7e7ed2a7?w=400&h=250&fit=crop",
      featured: false,
      external: true,
      link: "https://techcrunch.com"
    }
  ];

  const categories = [
    "All News",
    "Funding",
    "Partnership", 
    "Awards",
    "Product Launch",
    "Expansion",
    "Media Coverage"
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Awards":
        return <Trophy className="h-4 w-4" />;
      case "Media Coverage":
        return <Newspaper className="h-4 w-4" />;
      case "Partnership":
        return <Users className="h-4 w-4" />;
      default:
        return <Newspaper className="h-4 w-4" />;
    }
  };

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
          <h1 className="text-4xl font-bold text-foreground mb-6">Company News & Updates</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Stay informed about the latest developments, partnerships, and milestones 
            in our journey to transform education through AI.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="text-sm"
                data-testid={`filter-${category.toLowerCase().replace(' ', '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      {newsItems.filter(item => item.featured).map((item) => (
        <section key={item.id} className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <Badge className="mb-4">Breaking News</Badge>
              <h2 className="text-2xl font-bold text-foreground mb-4">Latest Updates</h2>
            </div>
            <Card className="overflow-hidden hover-elevate">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="order-2 md:order-1">
                  <CardHeader className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        {getCategoryIcon(item.category)}
                        {item.category}
                      </Badge>
                      <Badge variant="outline">{item.type}</Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{item.excerpt}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                      <Calendar className="h-4 w-4" />
                      {item.date}
                    </div>
                    <Button data-testid={`read-news-${item.id}`}>
                      Read Full Story
                      {item.external && <ExternalLink className="ml-2 h-4 w-4" />}
                    </Button>
                  </CardHeader>
                </div>
                <div className="order-1 md:order-2">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          </div>
        </section>
      ))}

      {/* News Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Recent News</h2>
            <p className="text-muted-foreground">
              Catch up on our latest announcements and company updates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.filter(item => !item.featured).map((item) => (
              <Card key={item.id} className="overflow-hidden hover-elevate">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs flex items-center gap-1">
                      {getCategoryIcon(item.category)}
                      {item.category}
                    </Badge>
                    {item.external && (
                      <Badge variant="secondary" className="text-xs">External</Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{item.excerpt}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-0">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    data-testid={`read-news-${item.id}`}
                    onClick={() => {
                      if (item.external && item.link) {
                        window.open(item.link, '_blank');
                      }
                    }}
                  >
                    {item.external ? 'Read External Article' : 'Read More'}
                    {item.external && <ExternalLink className="ml-2 h-3 w-3" />}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Company Milestones</h2>
            <p className="text-muted-foreground">
              Key achievements in our journey to transform education
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">$10M</div>
                <div className="text-sm text-muted-foreground">Series A Funding Raised</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">2,500+</div>
                <div className="text-sm text-muted-foreground">Schools Using Platform</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">150K+</div>
                <div className="text-sm text-muted-foreground">Students Impacted</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className="text-sm text-muted-foreground">States Expanded To</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Kit & Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Media & Press Inquiries</h2>
          <p className="text-muted-foreground mb-8">
            For press inquiries, interviews, or access to our media kit, please contact our PR team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline"
              onClick={() => {
                window.open('mailto:press@ailearninginsights.com?subject=Media Inquiry', '_blank');
              }}
              data-testid="button-press-contact"
            >
              Contact Press Team
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                window.open('mailto:press@ailearninginsights.com?subject=Media Kit Request', '_blank');
              }}
              data-testid="button-media-kit"
            >
              Download Media Kit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}