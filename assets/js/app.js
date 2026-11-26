/* CompetPro — plain JS (no build step needed) */
(function(){
const LANG_KEY = 'competpro-lang';

function applyLang(lang) {
  document.documentElement.lang = lang === 'bn' ? 'bn' : 'en';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const entry = translations[el.dataset.i18n];
    if (!entry) return;
    el.textContent = entry[lang];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const entry = translations[el.dataset.i18nPlaceholder];
    if (!entry) return;
    el.placeholder = entry[lang];
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active-lang', btn.dataset.lang === lang);
  });
}

function initI18n() {
  const saved = localStorage.getItem(LANG_KEY);
  const lang = saved === 'en' || saved === 'bn' ? saved : 'bn';
  applyLang(lang);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      localStorage.setItem(LANG_KEY, btn.dataset.lang);
      applyLang(btn.dataset.lang);
    });
  });
}

const translations = {
    priceAmount: {
    bn: '৳৪,০০০',
    en: 'Tk 4,000',
  },
  navCourses: {
    bn: 'কোর্স',
    en: 'Courses',
  },
  navRoadmap: {
    bn: 'রোডম্যাপ',
    en: 'Roadmap',
  },
  navResults: {
    bn: 'রেজাল্ট',
    en: 'Results',
  },
  navBlog: {
    bn: 'ব্লগ',
    en: 'Blog',
  },
  navPricing: {
    bn: 'প্রাইসিং',
    en: 'Pricing',
  },
  navFaq: {
    bn: 'FAQ',
    en: 'FAQ',
  },
  navCta: {
    bn: 'ফ্রি সেশন নাও',
    en: 'Get a free session',
  },
  heroEyebrow: {
    bn: 'কম্পিটিটিভ প্রোগ্রামিং কোচিং',
    en: 'Competitive programming coaching',
  },
  heroTitle: {
    bn: 'Rating বাড়াও, Interview জেতো',
    en: 'Grow your rating, win your interviews',
  },
  heroIntro: {
    bn: 'Codeforces ও LeetCode-এর স্ট্রাকচার্ড ট্রেনিং, গভীর DSA আর ICPC প্রস্তুতি — সবই বিশ্ববিদ্যালয়ের জুনিয়রদের জন্য সাজানো।',
    en: 'Structured Codeforces and LeetCode training, deep DSA and ICPC preparation — all designed for university juniors.',
  },
  heroCta: {
    bn: 'ফ্রি সেশন নাও',
    en: 'Get a free session',
  },
  heroSecondaryCta: {
    bn: 'প্রাইসিং দেখো',
    en: 'See pricing',
  },
  counterStudents: {
    bn: 'স্টুডেন্ট',
    en: 'Students',
  },
  counterResults: {
    bn: 'রেজাল্ট',
    en: 'Success rate',
  },
  counterContests: {
    bn: 'কনটেস্ট',
    en: 'Contests',
  },
  trustTitle: {
    bn: 'আমাদের স্টুডেন্টরা এসেছে এইসব জায়গা থেকে',
    en: 'Our students come from these institutions',
  },
  roadblocksEyebrow: {
    bn: 'প্রবলেম-সলভিংয়ে আটকে যাচ্ছ?',
    en: 'Stuck in problem-solving?',
  },
  roadblocksTitle: {
    bn: 'কোথা থেকে শুরু করবে বুঝতে পারছ না?',
    en: 'Not sure where to start?',
  },
  roadblocksIntro: {
    bn: 'তোমার সমস্যাকে একটা পরিষ্কার প্র্যাকটিস প্ল্যানে বদলে দিই।',
    en: 'We turn your struggle into a clear practice plan.',
  },
  problemOne: {
    bn: 'কোথা থেকে শুরু করব বুঝতে পারছি না।',
    en: 'I have no idea where to start.',
  },
  solutionOne: {
    bn: 'Beginner থেকে Expert পর্যন্ত rating-based roadmap।',
    en: 'A rating-based roadmap from beginner to Expert.',
  },
  problemTwo: {
    bn: 'Contest-এ সময় ফুরিয়ে যায়, মূল আইডিয়া মিস করি।',
    en: 'Time runs out in contests and I miss the key idea.',
  },
  solutionTwo: {
    bn: 'Weekly mock contest, তারপর mentor-এর সাথে upsolve review।',
    en: 'Weekly mock contests, then upsolve reviews with a mentor.',
  },
  problemThree: {
    bn: 'Interview-এর DSA প্রশ্নে মাথা ফাঁকা হয়ে যায়।',
    en: 'My mind blanks on DSA questions in interviews.',
  },
  solutionThree: {
    bn: 'LeetCode pattern practice আর mock interview।',
    en: 'LeetCode pattern practice and mock interviews.',
  },
  benefitsEyebrow: {
    bn: 'প্রোগ্রামে যা পাবে',
    en: 'What the program includes',
  },
  benefitsTitle: {
    bn: 'What you get',
    en: 'What you get',
  },
  benefitOne: {
    bn: 'Arrays থেকে Graphs আর DP পর্যন্ত DSA',
    en: 'Full DSA from arrays to graphs and DP',
  },
  benefitTwo: {
    bn: 'তোমার লেভেল অনুযায়ী Codeforces ও LeetCode problem set',
    en: 'Codeforces and LeetCode problem sets matched to your level',
  },
  benefitThree: {
    bn: 'ICPC team preparation এবং mock contest',
    en: 'ICPC team preparation and mock contests',
  },
  benefitFour: {
    bn: 'Mentor-এর সাথে weekly contest review',
    en: 'Weekly contest reviews with a mentor',
  },
  benefitFive: {
    bn: 'Private doubt-solving group',
    en: 'Private doubt-solving group',
  },
  scheduleTitle: {
    bn: 'Contest schedule',
    en: 'Contest schedule',
  },
  scheduleIntro: {
    bn: 'তোমার batch অনুযায়ী routine বদলাবে।',
    en: 'Your routine changes with your batch.',
  },
  scheduleSat: {
    bn: 'Live class: এই সপ্তাহের DSA topic',
    en: 'Live class: this week’s DSA topic',
  },
  scheduleSun: {
    bn: 'LeetCode weekly contest ও review',
    en: 'LeetCode weekly contest and review',
  },
  scheduleTue: {
    bn: 'Problem-solving session',
    en: 'Problem-solving session',
  },
  scheduleFri: {
    bn: 'Codeforces round upsolve',
    en: 'Codeforces round upsolve',
  },
  problemTitle: {
    bn: 'সমস্যাটা কী?',
    en: 'What is the problem?',
  },
  problemIntro: {
    bn: 'মোবাইলে টিউটোরিয়াল দেখা, র‍্যান্ডম সলভিং আর প্রশ্নের উত্তর জানার ধৈর্য — এই লুপে প্রতি সেমিস্টার হাজার হাজার জুনিয়র আটকে যায়। CompetPro একটা স্ট্রাকচার্ড পথ দেয়।',
    en: 'Watching tutorials on a phone, random solving, and no patience for wrong answers — thousands of juniors get stuck in this loop every semester. CompetPro gives you a structured path.',
  },
  serviceOneTitle: {
    bn: 'Codeforces ট্রেনিং',
    en: 'Codeforces training',
  },
  serviceOneText: {
    bn: 'রেটেড কনটেস্ট স্ট্র্যাটেজি, আপসলভ আর ভার্ডিক্ট বিশ্লেষণ — প্রতি সপ্তাহে নতুন কনটেস্ট প্র্যাকটিস।',
    en: 'Rated contest strategy, upsolving and verdict analysis — fresh contest practice every week.',
  },
  serviceTwoTitle: {
    bn: 'DSA মাস্টারি',
    en: 'DSA mastery',
  },
  serviceTwoText: {
    bn: 'প্রতিটা টপিক — গ্রাফ, DP, ডেটা স্ট্রাকচার — স্টেপ বাই স্টেপ, হাতে-কলমে প্রবলেম সেট সহ।',
    en: 'Every topic — graphs, DP, data structures — step by step with hands-on problem sets.',
  },
  serviceThreeTitle: {
    bn: 'ICPC প্রস্তুতি',
    en: 'ICPC preparation',
  },
  serviceThreeText: {
    bn: 'টিম ভিত্তিক প্র্যাকটিস, রিজিওনাল কনটেস্ট সিমুলেশন, আর কোচের গাইডলাইন — ভারত-অঞ্চলের টপ টিমের মতো।',
    en: 'Team practice, regional contest simulation and coach guidance — like the top teams of the region.',
  },
  howTitle: {
    bn: 'কীভাবে কাজ করে',
    en: 'How it works',
  },
  howOneTitle: {
    bn: 'ফ্রি সেশনে জয়েন করো',
    en: 'Join the free session',
  },
  howOneText: {
    bn: '৩০ মিনিটের প্রবলম-সলভিং সেশন — তোমার বর্তমান লেভেল যাচাই হবে।',
    en: 'A 30-minute problem-solving session to assess your current level.',
  },
  howTwoTitle: {
    bn: 'পার্সোনাল রোডম্যাপ পাও',
    en: 'Get your personal roadmap',
  },
  howTwoText: {
    bn: 'তোমার রেটিং, লক্ষ্য আর টাইম অনুযায়ী কোচ রোডম্যাপ বানিয়ে দেবে।',
    en: 'Your coach builds a roadmap around your rating, goal and time.',
  },
  howThreeTitle: {
    bn: 'সপ্তাহে রেটিং বাড়াও',
    en: 'Grow your rating weekly',
  },
  howThreeText: {
    bn: 'কনটেস্ট + প্রবলেম + রিভিউ লুপ ফলো করে নিয়মিত রেটিং বাড়ে।',
    en: 'Follow the contest + problems + review loop and the rating follows.',
  },
  roadmapEyebrow: {
    bn: '৬ মাসের practice training',
    en: 'Six months of practice training',
  },
  roadmapTitle: {
    bn: 'শূন্য থেকে contest-ready হওয়ার roadmap',
    en: 'A roadmap from zero to contest-ready',
  },
  roadmapIntro: {
    bn: 'প্রতিদিন কী করবে, কোন topic কখন শেষ করবে, আর কীভাবে নিজের ভুল থেকে শিখবে — সব ধাপে ধাপে।',
    en: 'What to do daily, when to finish each topic, and how to learn from your mistakes — all step by step.',
  },
  monthOneTitle: {
    bn: 'মাস ১ · Foundation',
    en: 'Month 1 · Foundation',
  },
  monthOneText: {
    bn: 'C++ basics, complexity, arrays, strings এবং প্রতিদিন ২টি easy problem।',
    en: 'C++ basics, complexity, arrays, strings, and two easy problems daily.',
  },
  monthTwoTitle: {
    bn: 'মাস ২ · Core DSA',
    en: 'Month 2 · Core DSA',
  },
  monthTwoText: {
    bn: 'Sorting, binary search, recursion, stack, queue ও linked list।',
    en: 'Sorting, binary search, recursion, stack, queue and linked list.',
  },
  monthThreeTitle: {
    bn: 'মাস ৩ · Patterns',
    en: 'Month 3 · Patterns',
  },
  monthThreeText: {
    bn: 'Two pointers, sliding window, greedy, trees এবং problem patterns।',
    en: 'Two pointers, sliding window, greedy, trees and problem patterns.',
  },
  monthFourTitle: {
    bn: 'মাস ৪ · Advanced',
    en: 'Month 4 · Advanced',
  },
  monthFourText: {
    bn: 'Graphs, DP, bit manipulation এবং timed Codeforces rounds।',
    en: 'Graphs, DP, bit manipulation and timed Codeforces rounds.',
  },
  monthFiveTitle: {
    bn: 'মাস ৫ · Contest mode',
    en: 'Month 5 · Contest mode',
  },
  monthFiveText: {
    bn: 'Weekly mock contest, upsolve notebook এবং mentor review।',
    en: 'Weekly mock contests, an upsolve notebook and mentor reviews.',
  },
  monthSixTitle: {
    bn: 'মাস ৬ · Interview + ICPC',
    en: 'Month 6 · Interview + ICPC',
  },
  monthSixText: {
    bn: 'Mock interview, team contest, portfolio problems এবং final rating push।',
    en: 'Mock interviews, team contests, portfolio problems and the final rating push.',
  },
  resultsTitle: {
    bn: 'স্টুডেন্টদের রেজাল্ট',
    en: 'Student results',
  },
  studentOneName: {
    bn: 'শাকিব রায়হান',
    en: 'Shakib Raihan',
  },
  studentOneBatch: {
    bn: 'ব্যাচ ২০২৪ · CSE, CU',
    en: 'Batch 2024 · CSE, CU',
  },
  studentOneResult: {
    bn: '৬ মাসে ১২৪৭ → ১৮৫০',
    en: '1247 → 1850 in 6 months',
  },
  studentTwoName: {
    bn: 'সাদিয়া রহমান',
    en: 'Sadia Rahman',
  },
  studentTwoBatch: {
    bn: 'ব্যাচ ২০২৩ · CSE, CUET',
    en: 'Batch 2023 · CSE, CUET',
  },
  studentTwoResult: {
    bn: 'Pupil → Specialist মাত্র ৫ মাসে',
    en: 'Pupil → Specialist in just 5 months',
  },
  studentThreeName: {
    bn: 'মোস্তাফিজ আহমেদ',
    en: 'Mostafiz Ahmed',
  },
  studentThreeBatch: {
    bn: 'ব্যাচ ২০২৩ · ICE, BUP',
    en: 'Batch 2023 · ICE, BUP',
  },
  studentThreeResult: {
    bn: 'ICPC রিজিওনালস-এ টিম কোয়ালিফাই',
    en: 'Team qualified for ICPC regionals',
  },
  blogEyebrow: {
    bn: 'শিখতে থাকো',
    en: 'Keep learning',
  },
  blogTitle: {
    bn: 'From the blog',
    en: 'From the blog',
  },
  blogIntro: {
    bn: 'Problem-solving mindset, contest strategy আর interview preparation নিয়ে ছোট ছোট practical guide।',
    en: 'Short, practical guides on problem-solving mindset, contest strategy and interview preparation.',
  },
  blogCategoryAlgorithms: {
    bn: 'Algorithms',
    en: 'Algorithms',
  },
  blogTimeOne: {
    bn: '৫ মিনিট পড়া',
    en: '5 min read',
  },
  blogOneTitle: {
    bn: 'Binary search without off-by-one bugs',
    en: 'Binary search without off-by-one bugs',
  },
  blogOneText: {
    bn: 'One template that works for lower bound, upper bound, and answer search.',
    en: 'One template that works for lower bound, upper bound, and answer search.',
  },
  blogCategoryContests: {
    bn: 'Contests',
    en: 'Contests',
  },
  blogTimeTwo: {
    bn: '৪ মিনিট পড়া',
    en: '4 min read',
  },
  blogTwoTitle: {
    bn: 'How to read a Codeforces problem in 2 minutes',
    en: 'How to read a Codeforces problem in 2 minutes',
  },
  blogTwoText: {
    bn: 'Spot constraints, hidden hints, and the intended complexity before you write code.',
    en: 'Spot constraints, hidden hints, and the intended complexity before you write code.',
  },
  blogCategoryDsa: {
    bn: 'DSA',
    en: 'DSA',
  },
  blogTimeThree: {
    bn: '৭ মিনিট পড়া',
    en: '7 min read',
  },
  blogThreeTitle: {
    bn: 'Dynamic programming: from recursion to a table',
    en: 'Dynamic programming: from recursion to a table',
  },
  blogThreeText: {
    bn: 'Turn a slow recursive solution into a memoized and bottom-up one, step by step.',
    en: 'Turn a slow recursive solution into a memoized and bottom-up one, step by step.',
  },
  readArticle: {
    bn: 'আরও পড়ো →',
    en: 'Read more →',
  },
  pricingTitle: {
    bn: 'সিম্পল প্রাইসিং',
    en: 'Simple pricing',
  },
  pricingIntro: {
    bn: 'কোনো লুকানো চার্জ নেই। যেকোনো সময় ক্লাস বন্ধ করতে পারবেন।',
    en: 'No hidden charges. Stop anytime you want.',
  },
  monthlyPlan: {
    bn: 'মাসিক প্ল্যান',
    en: 'Monthly plan',
  },
  perMonth: {
    bn: 'প্রতি মাসে',
    en: 'per month',
  },
  priceOne: {
    bn: 'সপ্তাহে ৩টা লাইভ ক্লাস',
    en: '3 live classes every week',
  },
  priceTwo: {
    bn: 'পার্সোনাল রোডম্যাপ ও রিভিউ',
    en: 'Personal roadmap and reviews',
  },
  priceThree: {
    bn: 'প্রাইভেট গ্রুপে কনটেস্ট আলোচনা',
    en: 'Contest discussions in a private group',
  },
  priceFour: {
    bn: 'ICPC টিম গাইডলাইন',
    en: 'ICPC team guidance',
  },
  pricingCta: {
    bn: 'ফ্রি সেশন নাও',
    en: 'Get a free session',
  },
  faqTitle: {
    bn: 'সাধারণ প্রশ্ন',
    en: 'Frequently asked questions',
  },
  faqOneQuestion: {
    bn: 'আমার রেটিং এখনো ১২০০-ও না — ঢুকতে পারব?',
    en: 'My rating is not even 1200 — can I still join?',
  },
  faqOneAnswer: {
    bn: 'একদম পারবেন। জিরো থেকে শুরু করা স্টুডেন্টদের জন্য আলাদা ফাউন্ডেশন ট্র্যাক আছে।',
    en: 'Absolutely. There is a separate foundation track for students starting from zero.',
  },
  faqTwoQuestion: {
    bn: 'ক্লাসগুলো কি রেকর্ড করা থাকে?',
    en: 'Are the classes recorded?',
  },
  faqTwoAnswer: {
    bn: 'হ্যাঁ, প্রতিটা লাইভ ক্লাস রেকর্ড করে পরে দেখার সুবিধা আছে।',
    en: 'Yes, every live class is recorded so you can watch it later.',
  },
  faqThreeQuestion: {
    bn: 'কোন ভাষায় ক্লাস হয়?',
    en: 'Which language are the classes in?',
  },
  faqThreeAnswer: {
    bn: 'ক্লাস হয় বাংলায়, কোড আর টার্মগুলো ইংরেজিতে — ইন্টারভিউ-ফ্রেন্ডলি ভাবে।',
    en: 'Classes are in Bangla, with code and terms in English — interview-friendly.',
  },
  faqFourQuestion: {
    bn: 'মাস শেষে না পছন্দ হলে?',
    en: 'What if I do not like it after a month?',
  },
  faqFourAnswer: {
    bn: 'যেকোনো সময় বন্ধ করতে পারবেন, অতিরিক্ত টাকা ফেরত পাবেন।',
    en: 'You can stop anytime and get the unused money back.',
  },
  contactTitle: {
    bn: 'ফ্রি প্রবলম-সলভিং সেশন নাও',
    en: 'Get a free problem-solving session',
  },
  contactIntro: {
    bn: '৩০ মিনিটের একটা ফ্রি সেশনে তোমার বর্তমান লেভেল যাচাই হবে আর পার্সোনাল রোডম্যাপ পাবে — কোনো অগ্রিম নেই।',
    en: 'In one free 30-minute session we assess your level and hand you a personal roadmap — no advance payment.',
  },
  contactAddress: {
    bn: 'কোতোয়ালী, চট্টগ্রাম',
    en: 'Kotwali, Chattogram',
  },
  formName: {
    bn: 'নাম',
    en: 'Name',
  },
  formNamePlaceholder: {
    bn: 'তোমার নাম',
    en: 'Your name',
  },
  formContact: {
    bn: 'ফোন / ইমেইল / WhatsApp',
    en: 'Phone / email / WhatsApp',
  },
  formContactPlaceholder: {
    bn: 'যোগাযোগের মাধ্যম',
    en: 'How should we reach you?',
  },
  formHandle: {
    bn: 'Codeforces / LeetCode হ্যান্ডেল (ঐচ্ছিক)',
    en: 'Codeforces / LeetCode handle (optional)',
  },
  formHandlePlaceholder: {
    bn: 'যেমন: tourist',
    en: 'e.g. tourist',
  },
  formGoal: {
    bn: 'লক্ষ্য (ঐচ্ছিক)',
    en: 'Your goal (optional)',
  },
  formGoalPlaceholder: {
    bn: 'যেমন: ৬ মাসে Expert হতে চাই',
    en: 'e.g. I want to reach Expert in 6 months',
  },
  formSubmit: {
    bn: 'সেশন বুক করো',
    en: 'Book the session',
  },
  formSending: {
    bn: 'পাঠানো হচ্ছে...',
    en: 'Sending...',
  },
  formSuccess: {
    bn: 'ধন্যবাদ! আমরা শিগগিরই যোগাযোগ করব।',
    en: 'Thank you! We will reach out very soon.',
  },
  formError: {
    bn: 'দুঃখিত, পাঠানো যায়নি। একটু পরে আবার চেষ্টা করো।',
    en: 'Sorry, that did not go through. Please try again shortly.',
  },
  footerEmail: {
    bn: 'ইমেইল',
    en: 'Email',
  },
  footerCopyright: {
    bn: '© ২০২৬ CompetPro · কোতোয়ালী, চট্টগ্রাম',
    en: '© 2026 CompetPro · Kotwali, Chattogram',
  },
};

const THEME_KEY = 'competpro-theme';

const THEMES = ['light', 'dark', 'warm'];

function applyTheme(theme) {
  if (theme === 'light') {
    delete document.documentElement.dataset.theme;
  } else {
    document.documentElement.dataset.theme = theme;
  }

  document.querySelectorAll('.theme-btn').forEach((btn) => {
    btn.classList.toggle('active-theme', btn.dataset.theme === theme);
  });
}

function initTheme() {
  let theme = localStorage.getItem(THEME_KEY);
  if (!THEMES.includes(theme)) theme = 'light';
  applyTheme(theme);

  document.querySelectorAll('.theme-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = btn.dataset.theme;
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });
  });
}

function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  const animate = (el) => {
    const target = Number(el.dataset.target) || 0;
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased).toLocaleString('bn-BD');
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animate(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => observer.observe(el));
}


// 👇 Apnar Supabase URL ar anon key ekhane boshan
const supabaseUrl = window.COMPETPRO_CONFIG.SUPABASE_URL;
const supabaseAnonKey = window.COMPETPRO_CONFIG.SUPABASE_ANON_KEY;

function currentLang() {
  return document.documentElement.lang === 'en' ? 'en' : 'bn';
}

function message(key) {
  const entry = translations[key];
  return entry ? entry[currentLang()] : '';
}

function initLeadForm() {
  const form = document.getElementById('lead-form');
  const status = document.getElementById('form-status');
  if (!form || !status) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const name = form.name.value.trim();
    const contact = form.contact.value.trim();
    const handle = form.handle.value.trim();
    const goal = form.goal.value.trim();

    status.textContent = '';
    status.classList.remove('text-primary', 'text-red-500');

    if (!supabaseUrl || !supabaseAnonKey) {
      status.textContent = message('formError');
      status.classList.add('text-red-500');
      return;
    }

    submitBtn.disabled = true;
    const originalLabel = submitBtn.textContent;
    submitBtn.textContent = message('formSending');

    try {
      const supabase = window.supabase.createClient(supabaseUrl, supabaseAnonKey);
      const { error } = await supabase.from('leads').insert({
        name,
        contact,
        handle: handle || null,
        goal: goal || null,
      });

      if (error) throw error;

      form.reset();
      status.textContent = message('formSuccess');
      status.classList.add('text-primary');
    } catch (err) {
      console.error('Lead submission failed:', err);
      status.textContent = message('formError');
      status.classList.add('text-red-500');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  AOS.init({ duration: 700, once: true, offset: 60 });
  initI18n(); initTheme(); initCounters(); initLeadForm();
});
})();
