# Design Guidelines for EdTech Answer Sheet Analysis Platform

## Design Approach
**Reference-Based Approach**: Following Ringg.ai's professional SaaS aesthetic with adaptations for the education sector. Clean, trustworthy design that appeals to students, parents, and educators.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Deep Blue: 220 85% 25% (trust, education, technology)
- Soft Blue: 210 60% 45% (approachable, calming)

**Supporting Colors:**
- Success Green: 150 65% 40% (growth, achievement)
- Neutral Gray: 220 10% 95% (backgrounds, subtle elements)
- Pure White: 0 0% 100% (clean backgrounds)

**Dark Mode:**
- Background: 220 25% 8%
- Surface: 220 20% 12%
- Text: 220 15% 85%

### B. Typography
- **Primary Font**: Inter (Google Fonts) - modern, readable
- **Accent Font**: Poppins (Google Fonts) - friendly headers
- **Hierarchy**: 
  - Hero: 3xl-4xl bold
  - Sections: 2xl-3xl semibold
  - Body: base-lg regular
  - Captions: sm medium

### C. Layout System
**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16
- Consistent rhythm with p-4, m-6, gap-8, py-12, px-16
- Section spacing: py-16 to py-24
- Component spacing: p-6 to p-8

### D. Component Library

**Navigation:**
- Clean header with logo, navigation links, and prominent "Get Demo" CTA
- Sticky behavior with subtle shadow on scroll

**Hero Section:**
- Large, impactful headline: "Let AI Assist Your Child's Learning"
- Subheading explaining the answer sheet analysis capability
- Primary CTA: "Get Early Access" with secondary "Watch Demo"
- Hero illustration/animation of handwritten sheets transforming to insights

**Feature Cards:**
- Grid layout with rounded corners (rounded-xl)
- Subtle shadows and hover effects
- Icons for each feature (concept analysis, formula tracking, etc.)
- Clean typography hierarchy

**How It Works Section:**
- 4-step visual timeline
- Upload → AI Processing → Dashboard → Report
- Progress indicators connecting each step

**Forms:**
- shadcn/ui form components
- Role selection dropdown (student/parent/teacher)
- Clean validation states

### E. Visual Elements

**Cards & Containers:**
- Rounded corners: rounded-xl
- Subtle shadows: shadow-sm to shadow-md
- Clean borders: border border-gray-200

**Buttons:**
- Primary: Deep blue background, white text
- Secondary: Outline variant with blurred background when over images
- CTA buttons: Slightly larger padding for emphasis

**Animations:**
- Minimal scroll-triggered fade-ins
- Subtle hover states on interactive elements
- No distracting or excessive animations

## Images Section

**Hero Image:**
- Large hero illustration showing handwritten answer sheets transforming into digital insights/dashboard
- Should convey AI processing and educational analytics
- Positioned right side of hero text on desktop, below on mobile

**Feature Icons:**
- Simple, educational-themed icons for each feature
- Consistent style (outline or filled)
- Placed above feature card text

**Process Illustrations:**
- Step-by-step visual representations for "How It Works"
- Handwriting → Scanner/Upload → AI Brain → Dashboard → Report
- Clean, minimalist illustration style

**Testimonial Avatars:**
- Placeholder circular avatars for student/parent testimonials
- Diverse representation of target demographics

## Layout Sections
1. **Hero**: Large headline, subtext, dual CTAs, hero image
2. **Social Proof**: Logos of schools/institutions (if available)
3. **Features**: 3x2 grid of feature cards with icons
4. **How It Works**: 4-step horizontal timeline
5. **Impact/Benefits**: Three columns for students, parents, schools
6. **Testimonials**: Carousel or grid of user feedback
7. **Pricing**: Simple 3-tier structure (placeholder)
8. **Contact/Demo**: Form with role selection
9. **Footer**: Links, social icons, company info

## Mobile Considerations
- Stack hero content vertically
- Single column for feature cards
- Horizontal scroll for testimonials
- Simplified navigation with hamburger menu
- Touch-friendly button sizes (min 44px)