export interface BlogPostType {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export const posts: BlogPostType[] = [
  {
    slug: "project-based-learning",
    title: "Project-Based Learning: The Key to Gaining Real-World Experience",
    excerpt: "Now, let's ditch the textbooks for a minute and talk about getting our hands dirty! You know that feeling of actually doing something, building something real? That's where project-based learning comes in, and trust me, it's a game-changer.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Learning by Doing: The PBL Revolution</h2>
      <p class="mb-4">Imagine developing a mobile app that helps local farmers track crop yields. Or creating a sustainable energy solution for your school. That's project-based learning (PBL) in action - where students tackle real-world problems through extended, hands-on projects.</p>
      
      <div class="bg-blue-50 p-6 rounded-lg my-6">
        <h3 class="text-xl font-semibold mb-3">Why PBL Works:</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li>Develops critical thinking and problem-solving skills</li>
          <li>Encourages collaboration and teamwork</li>
          <li>Creates tangible portfolio pieces</li>
          <li>Builds confidence through real-world impact</li>
        </ul>
      </div>

      <p class="mb-4">At Bridge Academy, we've seen students who struggled with traditional lectures flourish when given the chance to:</p>
      <div class="grid md:grid-cols-2 gap-4 mb-6">
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <h4 class="font-semibold mb-2">Case Study 1:</h4>
          <p>Developed a community recycling app that reduced local waste by 18%</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <h4 class="font-semibold mb-2">Case Study 2:</h4>
          <p>Created solar-powered irrigation systems for urban farms</p>
        </div>
      </div>

      <blockquote class="border-l-4 border-blue-600 pl-4 my-6 italic">
        "PBL transformed how I view education - I'm not just memorizing facts, but solving actual problems."
        <span class="block mt-2 not-italic text-sm">- Sarah, Bridge Academy Graduate</span>
      </blockquote>
    `,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: "March 15, 2024",
    author: "Sarah Johnson",
    category: "Education"
  },
  {
    slug: "personalized-career-blueprints",
    title: "Unlocking Your Potential: Why Personalized Career Blueprints Matter More Than Ever",
    excerpt: "Okay, let's talk about you. Not the generic, 'everyone' you, but the unique you, with your own specific talents, dreams, and quirks.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Your Career GPS: Beyond One-Size-Fits-All</h2>
      <p class="mb-4">In today's rapidly evolving job market, generic career advice just doesn't cut it anymore. Here's why personalized blueprints are essential:</p>

      <div class="bg-purple-50 p-6 rounded-lg my-6">
        <h3 class="text-xl font-semibold mb-3">The Personalization Advantage</h3>
        <div class="grid gap-4 md:grid-cols-2">
          <div>
            <h4 class="font-semibold mb-2">Traditional Approach</h4>
            <ul class="list-disc pl-6 space-y-2 text-red-600">
              <li>Generic career paths</li>
              <li>Static skill requirements</li>
              <li>Isolated career planning</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-2">Personalized Blueprint</h4>
            <ul class="list-disc pl-6 space-y-2 text-green-600">
              <li>AI-driven skill matching</li>
              <li>Dynamic learning paths</li>
              <li>Integrated mentorship</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 class="text-xl font-semibold mt-8 mb-4">Building Your Blueprint: 3 Key Steps</h3>
      <ol class="list-decimal pl-6 space-y-4 mb-6">
        <li>
          <strong>Skill Mapping:</strong> Identify your unique combination of technical skills and soft skills
          <div class="bg-white p-4 mt-2 rounded-lg shadow-sm">
            <p class="text-sm">Example: Maria combined her coding skills with passion for healthcare to become a medical AI specialist</p>
          </div>
        </li>
        <li>
          <strong>Opportunity Radar:</strong> Discover emerging roles that match your profile
        </li>
        <li>
          <strong>Growth Pipeline:</strong> Continuous learning tailored to your goals
        </li>
      </ol>
    `,
    image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "March 10, 2024",
    author: "Michael Chen",
    category: "Career Development"
  },
  {
    slug: "ai-career-roadmaps",
    title: "From Learning to Earning: How AI-Powered Career Roadmaps Can Accelerate Your Growth",
    excerpt: "My friend, let's cut to the chase: you want to go from 'learning' to 'earning,' and you want to do it fast. Enter AI-powered career roadmaps – your turbocharged GPS for professional growth.",
    content: `
      <h2 class="text-2xl font-bold mb-4">The AI Career Co-Pilot</h2>
      <p class="mb-4">Our machine learning algorithms analyze millions of data points to create your optimal career path:</p>

      <div class="bg-green-50 p-6 rounded-lg my-6">
        <h3 class="text-xl font-semibold mb-4">Real-Time Market Intelligence</h3>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="text-center">
            <div class="text-2xl font-bold text-green-600">87%</div>
            <div class="text-sm">Faster skill acquisition</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-green-600">63%</div>
            <div class="text-sm">Higher salary outcomes</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-green-600">92%</div>
            <div class="text-sm">Career satisfaction rate</div>
          </div>
        </div>
      </div>

      <h3 class="text-xl font-semibold mt-8 mb-4">Case Study: From Retail to Tech</h3>
      <div class="bg-white p-6 rounded-lg shadow-sm mb-6">
        <p class="mb-2"><strong>Sarah's Journey:</strong></p>
        <ul class="list-disc pl-6 space-y-2">
          <li>Identified transferable skills in customer service</li>
          <li>Mapped to UX design career path</li>
          <li>Completed tailored learning modules</li>
          <li>Landed junior UX role in 5 months</li>
        </ul>
      </div>

      <div class="bg-blue-50 p-6 rounded-lg">
        <h4 class="font-semibold mb-2">Pro Tip:</h4>
        <p>Our AI updates your roadmap weekly based on:</p>
        <ul class="list-disc pl-6 mt-2">
          <li>Market trends</li>
          <li>Emerging technologies</li>
          <li>Your progress</li>
        </ul>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "March 5, 2024",
    author: "Emily Rodriguez",
    category: "Partnerships"
  },
  {
    slug: "ai-career-development",
    title: "Bridging the Gap: How AI is Revolutionizing Career Development for Students and Professionals",
    excerpt: "Alright folks, buckle up, because we're about to dive into something truly mind-blowing! You know that feeling when you're staring at a career path, and it looks like a tangled mess of spaghetti?",
    content: `
      <h2 class="text-2xl font-bold mb-4">Untangling the Career Spaghetti</h2>
      <p class="mb-4">Traditional career development often feels like trying to navigate a maze blindfolded. Here's how AI changes the game:</p>

      <div class="bg-orange-50 p-6 rounded-lg my-6">
        <h3 class="text-xl font-semibold mb-4">AI-Powered Career Navigation</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-semibold mb-2">Problem Detection</h4>
            <ul class="list-disc pl-6 space-y-2">
              <li>Skill gaps analysis</li>
              <li>Market relevance scoring</li>
              <li>Career risk assessment</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-2">Solution Engine</h4>
            <ul class="list-disc pl-6 space-y-2">
              <li>Personalized learning paths</li>
              <li>Networking opportunities</li>
              <li>Job matching algorithms</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 class="text-xl font-semibold mt-8 mb-4">Real-World Impact</h3>
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h4 class="font-semibold mb-2">Student Success</h4>
          <p>Computer science students developing AI models that predict industry skill demands</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h4 class="font-semibold mb-2">Professional Transition</h4>
          <p>Accountants reskilling as blockchain auditors through personalized micro-courses</p>
        </div>
      </div>

      <blockquote class="border-l-4 border-orange-500 pl-4 my-6 italic">
        "The AI career coach helped me see opportunities I didn't even know existed!"
        <span class="block mt-2 not-italic text-sm">- David, Cybersecurity Specialist</span>
      </blockquote>
    `,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "March 1, 2024",
    author: "David Kim",
    category: "Education"
  }
];

export const featuredPost = posts[0];