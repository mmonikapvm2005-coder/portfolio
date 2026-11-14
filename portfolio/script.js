// Project Case Studies Data with GitHub & Vercel links
const projectData = {
  disputeguard: {
    title: "PayPal DisputeGuard AI",
    subtitle: "Autonomous Dispute & Fraud Evidence Resolution Engine",
    badge: "FinTech & Risk Intelligence",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    githubUrl: "https://github.com/mmonikapvm2005-coder/paypal-disputeguard-ai",
    vercelUrl: "https://disputeguard-ai.vercel.app",
    overview: "In global e-commerce and digital payments, merchant chargebacks and user payment disputes cost billions annually. Traditional dispute resolution requires human risk analysts to manually comb through logs, order receipts, delivery tracking, and merchant communications, creating lengthy turnaround times and lost revenue.",
    problem: "Merchants lose legitimate revenue due to delayed evidence submission and high dispute-handling overhead. Risk teams are burdened by repetitive review of low-complexity claims.",
    pmRole: [
      "Conducted merchant pain-point interviews to identify latency bottlenecks across the 4 stages of the dispute lifecycle.",
      "Authored the comprehensive PRD (Product Requirements Document), scoping MVP features: automated evidence ingestion, risk score synthesis, and claim packet generation.",
      "Defined core success metrics: 60% reduction in average claim resolution cycle time, 28% increase in merchant win-rate for valid claims, and customer NPS improvements."
    ],
    techStack: [
      "LLM Prompt Chains & Semantic Evidence Extraction",
      "Python, FastAPI, SQL Data Pipelines",
      "Rule-Based Fraud Scoring Engine",
      "Webhook Integrations for Payment Gateways"
    ],
    impact: "Provides merchants with an automated copilot that turns 48-hour manual reviews into under 3-minute structured filings, increasing evidence completeness to 98%."
  },
  kamai: {
    title: "Kamai Mithra",
    subtitle: "Vernacular Financial Copilot for Gig & Informal Sector Workers",
    badge: "Voice AI & Social Impact",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    githubUrl: "https://github.com/mmonikapvm2005-coder/kamai-mithra",
    vercelUrl: "https://kamai-mithra.vercel.app",
    overview: "India's gig and informal workforce (delivery drivers, domestic workers, daily-wage laborers) suffers from severe financial volatility, complex government paperwork, and digital illiteracy. Most banking apps rely on text-heavy English or formal terminology that fails these users.",
    problem: "Informal workers lack structured record-keeping, face predatory lending, and miss out on subsidized state welfare benefits due to literacy and language barriers.",
    pmRole: [
      "Conducted on-ground user research with blue-collar workers to map daily financial habits, income fluctuation, and trust hurdles.",
      "Designed an ultra-simplified 'voice-first' multimodal user experience with regional audio prompts (Tamil, Hindi, Telugu) requiring zero typing.",
      "Prioritized MVP release featuring automated daily wage logging, emergency micro-savings pot, and an AI welfare scheme eligibility matcher."
    ],
    techStack: [
      "Multilingual Automatic Speech Recognition (ASR) & TTS",
      "Conversational AI with Local Dialect Understanding",
      "Lightweight Progressive Web Architecture",
      "Local Encrypted SQLite Storage for Offline Support"
    ],
    impact: "Empowered non-English speaking workers to maintain transparent financial records, discover eligible government schemes, and foster disciplined micro-savings habits."
  },
  tripsense: {
    title: "Trip Sense",
    subtitle: "Context-Aware AI Itinerary & Budget Synthesizer",
    badge: "TravelTech & Personalization",
    badgeColor: "bg-teal-500/10 text-teal-300 border-teal-500/20",
    githubUrl: "https://github.com/mmonikapvm2005-coder/trip-sense",
    vercelUrl: "https://trip-sense.vercel.app",
    overview: "Modern travel planning requires toggling between dozens of tabs, blogs, maps, and spreadsheets. Existing travel portals push rigid package tours or generic search results that ignore personal pace, specific dietary needs, and dynamic budget constraints.",
    problem: "Travelers spend an average of 10+ hours researching a 4-day trip, frequently overshooting budgets and experiencing itinerary fatigue.",
    pmRole: [
      "Mapped the end-to-end user journey from initial trip ideation to real-time daily execution.",
      "Formulated user preference onboarding flow with progressive disclosure, reducing onboarding abandonment rate.",
      "Created an A/B testing framework to evaluate user satisfaction between structured day-plans versus flexible vibe-based clusters."
    ],
    techStack: [
      "Multi-variable Prompt Engineering Pipelines",
      "Geospatial Clustering for Route Optimization",
      "Real-time Currency & Transit Data Connectors",
      "React / Tailwind Responsive Interface"
    ],
    impact: "Reduced trip planning time from hours to seconds while delivering hyper-personalized schedules that respect tight financial caps and travel party dynamics."
  },
  shopmate: {
    title: "ShopMate AI",
    subtitle: "Conversational Shopping Advisor & Basket Optimizer",
    badge: "E-Commerce & Conversational AI",
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    githubUrl: "https://github.com/mmonikapvm2005-coder/shopmate-ai",
    vercelUrl: "https://shopmate-ai.vercel.app",
    overview: "Traditional e-commerce discovery relies on exact keyword matching and rigid faceted filters (color, size, brand), which completely fails when customers have situational queries like 'what should I wear to an outdoor summer wedding in Goa for under ₹3000?'.",
    problem: "High drop-off rates on search results pages (zero-result queries) and low basket sizes caused by lack of personalized styling assistance.",
    pmRole: [
      "Analyzed e-commerce funnel drop-offs and identified conversational guidance as a key lever for average order value (AOV) expansion.",
      "Designed the chat-to-cart micro-interaction allowing users to add curated outfits directly from the assistant’s recommendation card.",
      "Engineered product telemetry tracking query resolution rates, basket conversion rate, and conversational intent accuracy."
    ],
    techStack: [
      "Semantic Vector Search & LLM Intent Extraction",
      "Dynamic Product Recommendation Reranking",
      "FastAPI Backend with High-Throughput Caching",
      "Figma UI Prototypes & Usability Testing"
    ],
    impact: "Increased conversion rates on complex multi-item queries and enhanced customer delight through intelligent outfit co-ordination suggestions."
  },
  nabha: {
    title: "Nabha Learning Platform",
    subtitle: "Resilient Offline-First Educational Ecosystem",
    badge: "EdTech & PWA Architecture",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    githubUrl: "https://github.com/mmonikapvm2005-coder/nabha-learning-platform",
    vercelUrl: "https://nabha-learning.vercel.app",
    overview: "Students in Tier-2/Tier-3 cities and rural educational institutions frequently face intermittent internet connectivity, leading to broken video streams, lost quiz submissions, and interrupted study sessions.",
    problem: "Standard cloud learning portals crash or refuse to load when offline, depriving underserved students of consistent educational progress.",
    pmRole: [
      "Executed user interviews with students and educators in low-bandwidth areas to define essential offline user journeys.",
      "Spearheaded the offline-first product strategy: prioritizing bite-sized interactive content downloads and background sync upon reconnection.",
      "Established core reliability benchmarks: 100% offline quiz completion rate and zero progress data loss."
    ],
    techStack: [
      "Progressive Web App (PWA) Standards",
      "Service Workers & Cache Storage API",
      "IndexedDB Client-side State Synchronization",
      "HTML5, Modern Modular CSS, JavaScript"
    ],
    impact: "Allowed seamless learning continuity regardless of connectivity dips, proving that robust engineering design can democratize access to education."
  }
};

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('bg-navy-950/90', 'backdrop-blur-xl', 'border-b', 'border-slate-800/80', 'shadow-2xl');
  } else {
    navbar.classList.remove('bg-navy-950/90', 'backdrop-blur-xl', 'border-b', 'border-slate-800/80', 'shadow-2xl');
  }
});

// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
mobileBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      const categories = card.getAttribute('data-category');
      if (filter === 'all' || categories.includes(filter)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Case Study Modal
const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');

function openModal(projectId) {
  const data = projectData[projectId];
  if (!data) return;

  modalContent.innerHTML = `
    <div class="space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold ${data.badgeColor} border mb-2">
            ${data.badge}
          </span>
          <h2 class="font-display text-2xl sm:text-3xl font-bold text-white">${data.title}</h2>
          <p class="text-sm text-slate-400 mt-1">${data.subtitle}</p>
        </div>

        <!-- Links in modal -->
        <div class="flex flex-wrap items-center gap-2 shrink-0 pt-1">
          <a href="${data.vercelUrl}" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 rounded-xl bg-accent-500 hover:bg-accent-400 text-navy-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-accent-500/20">
            <i class="fa-solid fa-arrow-up-right-from-square text-[11px]"></i>
            <span>Live on Vercel</span>
          </a>
          <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700 flex items-center gap-1.5 transition-all">
            <i class="fa-brands fa-github text-accent-400 text-sm"></i>
            <span>GitHub Code</span>
          </a>
        </div>
      </div>

      <!-- Problem & Context -->
      <div class="p-4 rounded-xl bg-navy-950/80 border border-slate-800 space-y-2">
        <h4 class="text-xs font-bold uppercase tracking-wider text-accent-400">Context & Problem</h4>
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${data.overview}</p>
        <p class="text-xs sm:text-sm text-slate-400 font-medium pt-1"><strong>The Challenge:</strong> ${data.problem}</p>
      </div>

      <!-- PM Strategy -->
      <div class="space-y-2">
        <h4 class="text-xs font-bold uppercase tracking-wider text-accent-400 flex items-center gap-1.5">
          <i class="fa-solid fa-list-check"></i> Product Strategy & Execution
        </h4>
        <ul class="space-y-2 text-xs sm:text-sm text-slate-300">
          ${data.pmRole.map(item => `
            <li class="flex items-start gap-2.5">
              <span class="text-accent-400 mt-1 text-xs"><i class="fa-solid fa-arrow-right"></i></span>
              <span>${item}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Technical Architecture -->
      <div class="space-y-2">
        <h4 class="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
          <i class="fa-solid fa-layer-group"></i> Architecture & Technologies
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          ${data.techStack.map(item => `
            <div class="p-2.5 rounded-lg bg-navy-950 border border-slate-800/80 text-slate-300 flex items-center gap-2">
              <i class="fa-solid fa-code text-accent-400 text-[10px]"></i>
              <span>${item}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Impact -->
      <div class="p-4 rounded-xl bg-accent-500/10 border border-accent-500/30">
        <h4 class="text-xs font-bold uppercase tracking-wider text-accent-400 mb-1 flex items-center gap-1.5">
          <i class="fa-solid fa-chart-line"></i> Measured Impact & Key Results
        </h4>
        <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">${data.impact}</p>
      </div>

      <div class="pt-2 flex justify-between items-center">
        <span class="text-xs text-slate-500">Press ESC or click outside to close</span>
        <button onclick="closeModal()" class="px-5 py-2 rounded-xl bg-navy-800 hover:bg-slate-700 text-white text-xs font-semibold transition-all">
          Close Case Study
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Close modal on background click
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal on Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Interactive Contact Form
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');
const toastText = document.getElementById('toast-text');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  
  // Show toast feedback
  toastText.innerText = `Thank you, ${name}! Your message has been prepared.`;
  toast.classList.remove('hidden');

  // Trigger default email client as a direct action
  const subject = encodeURIComponent(document.getElementById('subject').value);
  const body = encodeURIComponent(`From: ${name}\nEmail: ${document.getElementById('email').value}\n\nMessage:\n${document.getElementById('message').value}`);
  
  setTimeout(() => {
    window.location.href = `mailto:mmonikapvm2005@gmail.com?subject=${subject}&body=${body}`;
  }, 900);

  setTimeout(() => {
    toast.classList.add('hidden');
    contactForm.reset();
  }, 4500);
});
