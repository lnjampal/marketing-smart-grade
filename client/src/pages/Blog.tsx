import { ArrowLeft, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Harvard Research: How AI Impacts Children's Development and Learning",
      excerpt: "New research from Harvard Graduate School of Education reveals that children can learn effectively from AI when designed with learning principles in mind. AI companions that ask questions during reading improve comprehension and vocabulary, though they cannot replace human interaction.",
      author: "Dr. Ying Xu",
      date: "October 2, 2024",
      readTime: "8 min read",
      category: "Research",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "U.S. Department of Education Issues Official AI Guidance for Schools",
      excerpt: "Federal guidance outlines four priority areas for AI in education: integrating AI literacy, expanding computer science education, supporting teacher development, and using AI for personalized learning.",
      author: "U.S. Department of Education",
      date: "January 15, 2025", 
      readTime: "6 min read",
      category: "Policy & Guidelines",
      image: "https://images.unsplash.com/photo-1471291043361-f6eb8ba57d5e?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "White House Executive Order: Advancing AI Education for American Youth",
      excerpt: "President announces federal commitment to AI education with teacher training opportunities, fellowship programs, and partnerships for high school dual enrollment in AI credentials.",
      author: "The White House",
      date: "April 2025",
      readTime: "5 min read", 
      category: "Policy & Guidelines",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "AI in Education Statistics 2025: What Teachers and Parents Need to Know", 
      excerpt: "60% of teachers now use AI tools, 92% of university students use AI, and 88% of parents believe AI knowledge will be crucial for their child's future. Here's what the latest data reveals about AI adoption in education.",
      author: "AI Learning Insights Team",
      date: "January 2025",
      readTime: "7 min read",
      category: "Education Trends",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Teaching AI Literacy to Preschoolers: Why It's Never Too Early",
      excerpt: "Research shows that preschool-aged children can be taught AI literacy to assess AI's strengths and limitations. Learn practical strategies for introducing AI concepts to young learners while maintaining critical thinking skills.",
      author: "Dr. Priya Sharma", 
      date: "December 2024",
      readTime: "9 min read",
      category: "Early Childhood",
      image: "https://images.unsplash.com/photo-1606335192038-f5194613740e?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Addressing the Digital Divide: Ensuring Equitable AI Access in Schools",
      excerpt: "While wealthier districts lead AI adoption, the digital divide risks widening achievement gaps. Explore strategies for ensuring all students have access to AI-powered learning tools regardless of their school's resources.",
      author: "Anita Verma",
      date: "November 2024", 
      readTime: "8 min read",
      category: "Equity & Access",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop"
    },
    {
      id: 7,
      title: "How AI Could Radically Transform Schools by 2050",
      excerpt: "Harvard's Howard Gardner predicts that by 2050, traditional schooling may be reduced to basics while teachers become coaches. Explore the potential future of AI-driven education and what it means for today's students.",
      author: "Prof. Howard Gardner",
      date: "September 2025", 
      readTime: "10 min read",
      category: "Future of Education",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop"
    },
    {
      id: 8,
      title: "Real-World AI Applications: From Bird Feeders to Interactive Games",
      excerpt: "Discover innovative AI education projects including smart bird feeders in Maine classrooms and award-winning games that teach university-level AI concepts to high school students.",
      author: "Vikash Reddy",
      date: "October 2024", 
      readTime: "6 min read",
      category: "Practical Applications",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    }
  ];

  const categories = [
    "All Posts",
    "Research", 
    "Policy & Guidelines",
    "Education Trends",
    "Early Childhood",
    "Equity & Access",
    "Future of Education",
    "Practical Applications"
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
          <h1 className="text-4xl font-bold text-foreground mb-6">AI Learning Insights Blog</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Explore the latest insights, research, and trends in AI-powered education technology.
            Discover how data-driven learning is transforming student outcomes.
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

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map((post) => (
        <section key={post.id} className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <Badge className="mb-4">Featured Post</Badge>
              <h2 className="text-2xl font-bold text-foreground mb-4">Latest Insights</h2>
            </div>
            <Card className="overflow-hidden hover-elevate">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="order-2 md:order-1">
                  <CardHeader className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{post.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button data-testid={`read-post-${post.id}`}>
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardHeader>
                </div>
                <div className="order-1 md:order-2">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          </div>
        </section>
      ))}

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Recent Articles</h2>
            <p className="text-muted-foreground">
              Stay updated with the latest developments in educational AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="overflow-hidden hover-elevate">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">{post.category}</Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-0">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    data-testid={`read-post-${post.id}`}
                  >
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter to get the latest insights and research delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              data-testid="input-blog-newsletter"
            />
            <Button 
              data-testid="button-blog-subscribe"
              onClick={() => {
                const email = document.querySelector('[data-testid="input-blog-newsletter"]') as HTMLInputElement;
                if (email?.value) {
                  alert(`Thank you for subscribing! We'll send updates to ${email.value}`);
                  email.value = '';
                } else {
                  alert('Please enter your email address');
                }
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}