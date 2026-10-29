# Rajesh Chandra Das (Raj) — Portfolio, CV & Client Hunting Action Plan
> **পিডিএফ গাইডবুক অনুযায়ী কোডবেস এবং সিভিতে কোথায় কী কী পরিবর্তন করতে হবে তার বিস্তারিত তালিকা।**

---

## সূচিপত্র
1. [Vercel ডোমেইন ও মেটাট্যাগ পরিবর্তন](#১-vercel-ডোমেইন-ও-মেটাট্যাগ-পরিবর্তন)
2. [index.html ফাইলে সেকশনভিত্তিক পরিবর্তনসমূহ](#২-indexhtml-ফাইলে-সেকশনভিত্তিক-পরিবর্তনসমূহ)
   - [ক. Meta Data ও Title](#ক-meta-data-ও-title-লাইন-৭-৯)
   - [খ. Hero Section](#খ-hero-section-লাইন-৪৮-৯৪)
   - [গ. Services / Expertise Section](#গ-services--expertise-section-লাইন-৯৭-১২২)
   - [ঘ. The Process Section](#ঘ-the-process-section-লাইন-১২৪-১৪৮)
   - [ঙ. Technical Skills Section](#ঙ-technical-skills-section-লাইন-১৫১-১৭৪)
   - [চ. Projects Section](#চ-projects-section-লাইন-১৭৬-২২৮)
   - [ছ. Certifications Section](#ছ-certifications-section-লাইন-২৩০-৩৫৮)
   - [জ. Contact & Form Section](#জ-contact--form-section-লাইন-৩৬০-৪৩০)
   - [ঝ. Footer Section](#ঝ-footer-section-লাইন-৪৩৫-৪৫৫)
3. [সিভি / ATS Resume (১-পৃষ্ঠা) সংস্কার গাইড](#৩-সিভি--ats-resume-১-পৃষ্ঠা-সংস্কার-গাইড)
4. [ক্লায়েন্ট হান্টিং ও আউটরিচ মেসেজ টেমপ্লেট](#৪-ক্লায়েন্ট-হান্টিং-ও-আউটরিচ-মেসেজ-টেমপ্লেট)
5. [আগামী ১৪ দিনের অ্যাকশন চেকলিস্ট](#৫-আগামী-১৪-দিনের-অ্যাকশন-চেকলিস্ট)

---

## ১. Vercel ডোমেইন ও মেটাট্যাগ পরিবর্তন

* **সমস্যা:** বর্তমান লাইভ লিংক `https://portfolliobyraj.vercel.app/` এ `portfolio` বানানে ডাবল `l` (`ll`) রয়েছে।
* **কোথায় পরিবর্তন করবেন:** 
  1. আপনার **Vercel Dashboard** এ যান ➔ **Project Settings** ➔ **Domains**
  2. ডোমেইন পরিবর্তন করে করুন: `portfoliobyraj.vercel.app` অথবা `rajesdas.vercel.app`

---

## ২. index.html ফাইলে সেকশনভিত্তিক পরিবর্তনসমূহ

### ক. Meta Data ও Title (লাইন ৭-৯)
* **বর্তমান কোড:**
  ```html
  <title>Raj | Creative Director</title>
  <meta name="description"
      content="Portfolio of Raj — Visual designer crafting brands & experiences with bold simplicity.">
  ```
* **পরিবর্তন করে বসাবেন:**
  ```html
  <title>Rajesh Chandra Das | Full-Stack Web Developer & AI Automation Engineer</title>
  <meta name="description"
      content="Portfolio of Raj — Full-Stack Web Developer (Next.js, Supabase, Laravel) and NSDA Level-6 Certified AI Automation Engineer (n8n, Python).">
  ```

---

### খ. Hero Section (লাইন ৪৮-৯৪)
* **সমস্যা:** লেখা রয়েছে "CREATIVE DIRECTOR" ও "Visual designer crafting brands..." যা টেক রিক্রুটারদের কাছে গ্রাফিক ডিজাইনার মনে করায়।
* **কোথায় পরিবর্তন করবেন:** `index.html` এর `<section class="hero">` অংশ।
* **পরিবর্তন করে বসাবেন:**
  ```html
  <div class="hero-content">
      <div class="hero-left">
          <h2>Hey, I'm Rajes (Raj)</h2>
          <h1>FULL-STACK DEVELOPER<br>& AI AUTOMATION ENGINEER</h1>
      </div>
      <div class="hero-right">
          <p>CSE Undergraduate & NSDA Level-6 Certified AI Developer. Building scalable Next.js web applications, Supabase/Laravel backends, and intelligent n8n workflow automations.</p>
          <div class="hero-cta-group">
              <a href="#works" class="btn-call">
                  View Featured Work
                  <div class="arrow"><i class="fas fa-arrow-down"></i></div>
              </a>
              <a href="https://cal.com/your-username" target="_blank" class="btn-call btn-secondary">
                  Book a Discovery Call
                  <div class="arrow"><i class="fas fa-calendar-alt"></i></div>
              </a>
          </div>
      </div>
  </div>

  <div class="hero-bottom">
      <div class="category-item">
          <span>01</span>
          <h4>Next.js & React</h4>
      </div>
      <div class="category-item">
          <span>02</span>
          <h4>n8n AI Agents</h4>
      </div>
      <div class="category-item">
          <span>03</span>
          <h4>Supabase & Laravel</h4>
      </div>
      <div class="category-item">
          <span>04</span>
          <h4>Python & Deep Learning</h4>
      </div>
      <div class="category-item">
          <span>05</span>
          <h4>Full-Stack MVPs</h4>
      </div>
  </div>
  ```

---

### গ. Services / Expertise Section (লাইন ৯৭-১২২)
* **সমস্যা:** পুরানো ব্রান্ডিং ও গ্রাফিক ডিজাইন সার্ভিস সরিয়ে হাই-ভ্যালু ইঞ্জিনিয়ারিং কার্ড দিতে হবে।
* **কোথায় পরিবর্তন করবেন:** `<section class="services" id="services">` এর `.services-list` এ।
* **পরিবর্তন করে বসাবেন:**
  ```html
  <div class="services-list">
      <div class="service-row">
          <div class="service-num">01</div>
          <div class="service-title">Full-Stack Web & SaaS MVP Development</div>
          <div class="service-desc">Engineering fast, scalable web applications and startup MVPs using Next.js, React, Laravel, and Supabase with secure authentication, real-time database architecture, and REST APIs.</div>
      </div>
      <div class="service-row">
          <div class="service-num">02</div>
          <div class="service-title">AI Agents & n8n Workflow Automation</div>
          <div class="service-desc">Building custom n8n automation pipelines, webhook integrations, and Python-based AI agents that connect web portals with CRMs, email/WhatsApp notifications, and LLMs to save 20+ hours of manual work weekly.</div>
      </div>
      <div class="service-row">
          <div class="service-num">03</div>
          <div class="service-title">UI/UX Engineering & E-Commerce Platforms</div>
          <div class="service-desc">Designing clean, research-driven interfaces in Figma and translating them into mobile-first, SEO-optimized digital storefronts, booking systems, and custom admin dashboards.</div>
      </div>
  </div>
  ```

---

### ঘ. The Process Section (লাইন ১২৪-১৪৮)
* **বর্তমান কোড:** সাধারণ জেনেরিক ৪টি স্টেপ।
* **পরিবর্তন করে বসাবেন (টেকনিক্যাল ৪টি স্টেপ):**
  ```html
  <div class="process-grid">
      <div class="process-step">
          <span>/ 01 Architecture</span>
          <p>Designing database schemas, API endpoints, and clean Figma user flows.</p>
      </div>
      <div class="process-step">
          <span>/ 02 Full-Stack Build</span>
          <p>Developing responsive Next.js/Laravel components and connecting secure Supabase/MySQL backends.</p>
      </div>
      <div class="process-step">
          <span>/ 03 AI & Automation</span>
          <p>Automating backend operations, webhook triggers, email pipelines, and AI agent logic via n8n.</p>
      </div>
      <div class="process-step">
          <span>/ 04 Deployment</span>
          <p>Optimizing performance, deploying on Vercel/Cloud, and delivering clean GitHub documentation.</p>
      </div>
  </div>
  ```

---

### ঙ. Technical Skills Section (লাইন ১৫১-১৭৪)
* **সমস্যা:** সবগুলো টুলস এলোমেলোভাবে আছে এবং `Lovable`, `Antigravity`, `Replit` এর মতো প্রম্পট-বেসড এআই টুলস উল্লেখ আছে যা বিদেশী টেক রিক্রুটারদের কাছে নেতিবাচক ধারণা দেয়।
* **করণীয়:** প্রম্পট টুলস বাদ দিয়ে টেক স্কিলসকে ৪টি ক্যাটাগরিতে সাজান:
  ```html
  <div class="skills-categories">
      <!-- 1. Frontend & UI/UX -->
      <div class="skill-category">
          <h4>Frontend & UI/UX</h4>
          <p>Next.js, React.js, JavaScript (ES6+), HTML5, Tailwind CSS, Bootstrap, Figma</p>
      </div>
      <!-- 2. Backend & Database -->
      <div class="skill-category">
          <h4>Backend & Database</h4>
          <p>Supabase, Laravel, Node.js, PHP, MySQL, Firebase, RESTful APIs</p>
      </div>
      <!-- 3. AI & Automation -->
      <div class="skill-category">
          <h4>AI & Automation</h4>
          <p>n8n Workflow Automation, Python, Deep Learning, LLM / OpenAI APIs, Webhooks</p>
      </div>
      <!-- 4. Developer Tools -->
      <div class="skill-category">
          <h4>Developer Tools</h4>
          <p>Git, GitHub, VS Code, Vercel, Postman</p>
      </div>
  </div>
  ```

---

### চ. Projects Section (লাইন ১৭৬-২২৮)
* **সমস্যা:** প্রতিটি প্রজেক্টে মাত্র ১ লাইনের হালকা বর্ণনা রয়েছে এবং GitHub রিপোজিটরির স্পষ্ট বাটন নেই।
* **করণীয়:** 
  1. প্রতিটি কার্ডে **Live Preview ↗** এবং **GitHub Repo** বাটন স্পষ্ট করা।
  2. নিচের বিস্তারিত ৩ লাইনের ডেসক্রিপশন ব্যবহার করা:

#### প্রজেক্ট ১ — VU HUB
```html
<div class="tags"><span>Next.js</span><span>Supabase</span><span>Tailwind CSS</span><span>Real-Time DB</span></div>
<h5>VU HUB — Academic Portal</h5>
<p>A centralized academic platform engineered for Varendra University students. Implemented real-time notice synchronization using Supabase and an interactive semester CGPA calculator with dynamic grade-point validation, enabling students to access department updates and compute academic results seamlessly.</p>
<div class="project-links">
    <a href="https://vuhub.vercel.app/" target="_blank">Live Preview ↗</a>
    <a href="https://github.com/Raj-444/vuhub" target="_blank">GitHub Repo</a>
</div>
```

#### প্রজেক্ট ২ — PackLume Agency Platform
```html
<div class="tags"><span>Next.js</span><span>Firebase</span><span>n8n Webhooks</span><span>Figma</span></div>
<h5>PackLume — Agency Web Platform</h5>
<p>A high-converting agency web application optimized for Core Web Vitals and smooth micro-interactions. Built with Next.js for fast server-side rendering, Firebase for backend lead management, and automated webhook triggers for instant client inquiry routing.</p>
<div class="project-links">
    <a href="https://raj.pro.medisalesoft.com/" target="_blank">Live Preview ↗</a>
    <a href="https://github.com/Raj-444/packlume" target="_blank">GitHub Repo</a>
</div>
```

#### প্রজেক্ট ৩ — MediSale Medical E-Commerce
```html
<div class="tags"><span>PHP</span><span>MySQL</span><span>Bootstrap</span><span>PHPMailer</span></div>
<h5>MediSale — B2C Medical Supplies Marketplace</h5>
<p>A full-stack B2C medical supplies marketplace featuring dynamic product catalog filtering, shopping cart and order management, automated transactional email alerts via PHPMailer, and an admin analytics dashboard for inventory control.</p>
<div class="project-links">
    <a href="https://medisale.us/" target="_blank">Live Preview ↗</a>
    <a href="https://github.com/Raj-444/medisale" target="_blank">GitHub Repo</a>
</div>
```

#### পোর্টফোলিও আরো ১০ গুণ শক্তিশালী করার জন্য ২টি নতুন প্রজেক্ট (পরবর্তীতে যুক্ত করার জন্য):
1. **AI Lead & Support Automation Portal:** (Next.js + Supabase + n8n + OpenAI) — কাস্টমার ইনকোয়ারি ফর্মের উপর ভিত্তি করে এআই দিয়ে ক্যাটাগরি ও প্রায়োরিটি নির্ধারণ এবং স্ল্যাক/ইমেইল নোটিফিকেশন।
2. **Modern Full-Stack E-Commerce Storefront:** (Next.js App Router + Tailwind + Supabase + Stripe/SSLCommerz) — রিয়েলটাইম সার্চ, কার্ট ও পেমেন্ট সুবিধা।

---

### ছ. Certifications Section (লাইন ২৩০-৩৫৮)
* **সমস্যা:** ৮টি সার্টিফিকেট রিপিট করে মারকুই চালানো, যার মধ্যে `MS Excel`, `Digital Literacy`, `Animation`, `Python Bots` ও `Vibe Coding` এর মতো বেসিক কোর্স রয়েছে যা পোর্টফোলিওর মান কমিয়ে দেয়।
* **করণীয়:**
  1. বেসিক কোর্সগুলো মুছে ফেলুন।
  2. শুধুমাত্র শীর্ষ ৪টি টেকনিক্যাল সার্টিফিকেট রাখুন:
     - **AI in Immersive Technology (BNQF Level-6, 360 Hours)** — National Skills Development Authority (NSDA), Prime Minister's Office, Bangladesh (2026)
     - **Full Stack MERN Development** — Grameenphone Academy / CodersTrust
     - **Introduction to Software Engineering** — Udemy
     - **Generative AI Mastery** — Udemy
  > **সতর্কতা:** NSDA সার্টিফিকেটের ছবিতে থাকা আপনার জাতীয় পরিচয়পত্র/জন্ম নিবন্ধন নম্বর এবং অভিভাবকের নাম ফটোশপ বা ক্যানভা দিয়ে **Blur** করে তারপর আপলোড করবেন।

---

### জ. Contact & Form Section (লাইন ৩৬০-৪৩০)
* **সার্ভিস অপশন রেডিও বাটন পরিবর্তন:**
  - পুরানো: Web Design, Branding, SaaS Design, Ecommerce
  - **নতুন:** `Full-Stack Web App`, `n8n AI Automation`, `SaaS MVP Development`, `E-Commerce Store`
* **সরাসরি বুকিং লিংক:**
  - WhatsApp লিংকের পাশাপাশি `Cal.com` বা `Calendly` মিটিং লিংক যুক্ত করুন যাতে ক্লায়েন্ট সরাসরি কল বুক করতে পারে।

---

### ঝ. Footer Section (লাইন ৪৩৫-৪৫৫)
* **সোশ্যাল লিংক সংস্কার:**
  - **Facebook লিংকটি সম্পূর্ণ মুছে ফেলুন।**
  - শুধুমাত্র প্রফেশনাল হ্যান্ডেল রাখুন: `GitHub`, `LinkedIn`, `WhatsApp`, `Email` (mailto লিংক ছাড়া টেক্সট আকারেও রাখা)।

---

## ৩. সিভি / ATS Resume (১-পৃষ্ঠা) সংস্কার গাইড

আপনার বর্তমান ৩-পৃষ্ঠার সিভিতে যেসব পরিবর্তন করে ১ পৃষ্ঠায় নামাতে হবে:

| সেকশন | বর্তমান সমস্যা | ১-পৃষ্ঠার সিভিতে যেভাবে পরিবর্তন করবেন |
| :--- | :--- | :--- |
| **Header** | নাম ও পজিশন অস্পষ্ট, `mailto:` প্রিফিক্স রয়েছে | টাইটেল দিন: `Full-Stack Web Developer & AI Automation Engineer`। ইমেইল শুধু `rajes3554@gmail.com`। পাশে ক্লিকযোগ্য GitHub, LinkedIn ও সঠিক Portfolio লিংক দিন। |
| **Summary** | ৬ লাইনের বড় প্যারাগ্রাফ | বাদ দিয়ে ২ লাইনের ক্রিস্প সামারি লিখুন: *"CSE undergraduate and NSDA Level-6 Certified AI Developer specializing in Next.js, Supabase, Laravel, and n8n workflow automation. Proven track record of building full-stack web platforms, e-commerce applications, and automated business workflows."* |
| **Experience vs Projects** | MediSale একবার Academic Project আবার Company Software Engineer হিসেবে লেখা | MediSale কোম্পানি বাদ দিয়ে **Featured Projects** সেকশনে VU HUB, PackLume, এবং MediSale রাখুন (টেক স্ট্যাক, লাইভ লিংক ও ২-৩টি ইমপ্যাক্ট বুলেট পয়েন্ট সহ)। |
| **Education** | টেবিল বক্স এবং SSC/HSC এর অপ্রয়োজনীয় তথ্য | সম্পূর্ণ ছক ও SSC/HSC বাদ দিন। শুধুমাত্র লিখুন: **B.Sc. in Computer Science & Engineering — Varendra University (Expected Graduation: 2028)** |
| **Volunteering & Leadership** | অগোছালো বর্ণনা ও টাইপো | Computing Applied Club (Technical Lead), Science Club (IT Secretary) এবং bdapps (IT Support) — প্রতিটি অভিজ্ঞতার সাথে শুরুর ও শেষের সাল (যেমন: 2024 – Present) ও ২টি করে মূল পয়েন্ট দিন। Science Club এর ডাবল কপি-পেস্ট টাইপো ফিক্স করুন। |
| **বাদ দেওয়ার অংশ** | অপ্রাসঙ্গিক স্কিল ও রেফারেন্স | ৩য় পৃষ্ঠার **Qualities**, **Vibe Coding**, **Digital Literacy**, **Microsoft Excel** এবং **References** সম্পূর্ণ ডিলিট করে দিন। |

---

## ৪. ক্লায়েন্ট হান্টিং ও আউটরিচ মেসেজ টেমপ্লেট

### টেমপ্লেট ১: স্টার্টআপ ফাউন্ডারদের জন্য (Next.js MVP ও UI ফিক্স)
> *"Hi [Founder Name], congrats on launching [Product Name]! I was testing your site on mobile and noticed a small layout alignment issue on the hero/pricing section. Since I specialize in Next.js, Tailwind, and UI engineering, I quickly put together a clean fix/prototype for you here: [Link/Screenshot]. Recently I built real-time platforms with Next.js & Supabase (https://portfoliobyraj.vercel.app). If you need an extra hand shipping frontend features or optimizing speed, I'd love to help!"*

### টেমপ্লেট ২: এজেন্সি ও বিজনেস ক্লায়েন্টদের জন্য (Web App + n8n AI Automation)
> *"Hi [Client Name], I noticed your team handles client inquiries and onboarding through your website. I help agencies and SaaS teams build fast Next.js portals connected with custom n8n AI automations — so whenever a lead submits a form, AI automatically qualifies them, syncs with your CRM/Database, and sends personalized follow-ups in seconds. Here is my portfolio showcasing my full-stack & automation work: https://portfoliobyraj.vercel.app. Open to a quick 10-min chat this week?"*

---

## ৫. আগামী ১৪ দিনের অ্যাকশন চেকলিস্ট

- [ ] **দিন ১–২ (পোর্টফোলিও কোড সংস্কার):** `index.html` এর Hero, Services, Process, Skills, Projects ও Certifications আপডেট করা এবং Vercel এ ডোমেইন বানান ঠিক করা।
- [ ] **দিন ৩ (১-পৃষ্ঠার ATS সিভি ও GitHub ক্লিনআপ):** সিভি ১ পৃষ্ঠায় নিয়ে আসা এবং GitHub এর VU HUB, PackLume, MediSale রিপোজিটরিতে স্ক্রিনশট সহ `README.md` ফাইল যোগ করা।
- [ ] **দিন ৪–৮ (ফ্ল্যাগশিপ Next.js + n8n প্রজেক্ট):** Next.js + Supabase + n8n প্রজেক্ট তৈরি করে পোর্টফোলিওতে যুক্ত করা এবং এর একটি ২ মিনিটের ডেমো ভিডিও রেকর্ড করা।
- [ ] **দিন ৯–১০ (মার্কেটপ্লেস ও জব প্রোফাইল):** LinkedIn, Wellfound, Upwork ও Contra-তে সঠিক হেডলাইন ও প্রজেক্ট লিংক দিয়ে প্রোফাইল ১০০% কমপ্লিট করা।
- [ ] **দিন ১১–১৪ (ডেইলি ক্লায়েন্ট হান্টিং রুটিন):** প্রতিদিন অন্তত ৫টি Wellfound রিমোট জবে আবেদন করা এবং Product Hunt/LinkedIn-এ ৫ জন ফাউন্ডারকে ভ্যালু-ফার্স্ট আউটরিচ মেসেজ পাঠানো।

