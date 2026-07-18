export interface ProjectFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface Project {
  slug: string;
  tabName: string;
  domain: string;
  title: string;
  badge: string;
  description: string;
  features: ProjectFeature[];
  heroImage?: string;
  bannerImage?: string;
  overview: string;
  challenges: string;
  achievements?: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  codeSnippet?: string;
  year: string;
  color?: string;
  logo?: string;
}

// 1. Featured Projects for the Sticky Browser UI (EXACT NAMES)
export const MAIN_PROJECTS: Project[] = [
  /*
  {
    slug: "wonderai",
    tabName: "WonderAI - AI Visibility",
    domain: "wonderscore.ai",
    title: "WonderAI - AI Visibility",
    badge: "Recent Work",
    description:
      "WonderAI is a multi-LLM visibility platform that helps brands measure how often they are recommended in AI assistants and search-like prompts, then turns those findings into actionable growth priorities.",
    features: [
      {
        icon: "✨",
        title: "AI Prompt Visibility",
        desc: "Runs structured prompt sets across Gemini and ChatGPT to track whether a brand is mentioned, where it ranks, and which sources influence those answers.",
      },
      {
        icon: "💎",
        title: "Multi-Phase Audit",
        desc: "Combines technical website scanning, content/entity checks, competitor benchmarking, and AI perception analysis into one workflow.",
      },
      {
        icon: "⚡",
        title: "High-Throughput Job Workers",
        desc: "Uses queued background workers with provider-aware routing, parallel question processing, retry/backoff, and timeout controls to keep long analyses stable.",
      },
      {
        icon: "🗄️",
        title: "Request Reuse and Caching",
        desc: "Applies request-hash reuse and cache windows in Mongo/worker pipelines to avoid duplicate heavy runs and reduce cost under repeated user requests.",
      },
      {
        icon: "🛡️",
        title: "Reliability and Guardrails",
        desc: "Includes stale-job recovery controls, model failover handling, source/domain guardrails, and fallback heuristics to reduce false positives and stuck jobs.",
      },
      {
        icon: "📊",
        title: "Admin AI Usage Intelligence",
        desc: "Tracks model/provider usage by feature, exact model names, and estimated AI call volume with filters and export/reset tooling for operations teams.",
      },
    ],
    heroImage: "/projects/wonderai/hero.png",
    overview:
      "WonderAI was built as a practical Generative Engine Optimization (GEO) system for real businesses that need visibility in AI-driven discovery, not only traditional SEO rankings. The platform analyzes brand presence across prompt intent, source quality, and competitor context, then presents a clear operational view for both marketing and product teams.",
    challenges:
      "The hardest engineering problem was balancing speed, cost, and reliability in a multi-provider pipeline under unstable external model latency. We solved this with queue-based workers, provider-aware routing, adaptive polling, exponential backoff, stale-job controls, request deduplication, and granular observability so failures are recoverable instead of user-blocking.",
    achievements:
      "Reduced job failures and user-blocking incidents, lowered model-call costs via request deduplication and caching, improved throughput and median completion times through provider-aware routing and adaptive polling, and added granular observability and stale-job recovery so failures are recoverable and operational triage is fast.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "MongoDB",
      "Redis",
      "Playwright",
      "BeautifulSoup",
      "Google Gemini API",
      "OpenAI API",
    ],
    liveUrl: "https://wonderscore.ai",
    githubUrl: "https://github.com/",
    year: "2026",
    color: "#0EA5E9",
  },
  
  */
{
  slug: "hotel-easy",
  tabName: "HotelEasy - Hotel Management",
  domain: "hotel-management",
  title: "Hotel Management System",
  badge: "Featured Project",
  description:
    "HotelEasy is a modern hotel and resort management platform built for Sea View Resort to simplify front desk operations, bookings, restaurant management, billing, and daily business management.",

  features: [
    {
      icon: "🏨",
      title: "Front Desk",
      desc: "Manage bookings, check-in, check-out, room rack, guests, and payments from one dashboard.",
    },
    {
      icon: "🛏️",
      title: "Room Management",
      desc: "Track room availability, room status, reservations, and guest allocation in real time.",
    },
    {
      icon: "🍽️",
      title: "Restaurant POS",
      desc: "Handle dine-in, takeaway, room service, tables, and billing with an integrated POS.",
    },
    {
      icon: "👨‍🍳",
      title: "Kitchen Display",
      desc: "Organize live kitchen orders with New, Preparing, Ready, and Completed stages.",
    },
    {
      icon: "💳",
      title: "Billing",
      desc: "Manage guest invoices, restaurant bills, payments, dues, and receipts in one place.",
    },
    {
      icon: "📊",
      title: "Management Dashboard",
      desc: "Monitor occupancy, revenue, daily activity, and business performance with live reports.",
    },
  ],

  heroImage: "/projects/3.1.webp",
  bannerImage: "/projects/hero/3.1.webp",

  overview:
  "HotelEasy was developed for Sea View Resort to modernize daily hotel operations through a single, easy-to-use platform. The system brings together front desk management, room reservations, restaurant POS, kitchen operations, billing, and business reporting into one centralized solution. Built with role-based access control, each department receives its own workspace, allowing staff to focus only on the tools they need while managers gain complete visibility over business operations.",

challenges:
  "The primary challenge was creating software that local hotel staff could learn and use with minimal training. The platform had to replace multiple manual processes while keeping the interface clean and intuitive. Another challenge was connecting reservations, room management, restaurant orders, kitchen workflow, and billing into a unified system that remained fast, reliable, and easy to navigate.",

achievements:
  "Successfully delivered a complete hotel and resort management platform tailored for local businesses. The project streamlined front desk operations, digitized room and guest management, integrated restaurant and kitchen workflows, simplified billing and payment processing, and provided real-time business insights through dedicated management dashboards. The result is a scalable, modern solution that improves efficiency while maintaining a simple user experience.",

techStack: [
  "Next.js 15",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Framer Motion",
  "TanStack Query",
  "Prisma ORM",
  "PostgreSQL",
  "Redis",
  "NextAuth.js",
  "Role-Based Access Control",
  "REST API",
  "WebSockets",
  "Cloudflare R2",
  "Chart.js",
  "Zod",
  "React Hook Form",
  "Docker",
  "Vercel",
],
  liveUrl: "",
  githubUrl: "",

  year: "2026",
  color: "#22C55E",
  logo: "/images/hotel.png",
},
  {
    slug: "payit",
    tabName: "PayIT - Payment Automation",
    domain: "offline-gateway",
    title: "Payment Automation",
    badge: "Featured Project",
    description:
      "PayIT is a smart offline payment automation system that connects mobile banking apps (bKash, Nagad, Rocket) with web platforms using ADB-based device control, real-time SMS parsing, and secure transaction verification.",
    features: [
      {
        icon: "📱",
        title: "Device Automation",
        desc: "Controls Android devices via USB using ADB to interact with mobile banking apps without requiring API access or third-party integrations.",
      },
      {
        icon: "📩",
        title: "SMS Payment Detection",
        desc: "Listens for incoming transaction messages from bKash, Nagad, and Rocket, preserving original message formats for accurate parsing and validation.",
      },
      {
        icon: "🔐",
        title: "Secure Payment Verification Engine",
        desc: "Matches transaction data such as phone number, amount, and reference against dashboard records to ensure authentic and fraud-resistant confirmations.",
      },
      {
        icon: "📊",
        title: "Queue-Based Payment Dashboard",
        desc: "Provides a structured dashboard where incoming orders are queued, tracked, and automatically updated upon successful payment verification.",
      },
      {
        icon: "🔄",
        title: "Automated Order Sync",
        desc: "Integrates with external websites to update payment status instantly once transactions are confirmed, reducing manual intervention.",
      },
      {
        icon: "💬",
        title: "WhatsApp Notification Automation",
        desc: "Automatically sends confirmation messages to customers via WhatsApp after successful payment validation, including order details.",
      },
    ],
    heroImage: "/projects/1.webp",
    bannerImage: "/projects/hero/1.webp",
    overview:
      "PayIT was built to bridge the gap between mobile financial services and web-based businesses in regions where official APIs are limited or unavailable. By leveraging ADB automation and SMS parsing, it enables real-time payment verification without relying on third-party gateways, making it ideal for local eCommerce and service platforms.",
    challenges:
      "The biggest challenge was ensuring reliability and security while working with unstructured SMS data and device-level automation. Handling different message formats across providers, preventing false positives, maintaining queue consistency, and ensuring stable ADB communication required careful engineering and fallback mechanisms.",
    achievements:
      "Successfully created a fully functional offline payment gateway alternative, reduced manual payment verification workload to near zero, enabled instant order confirmation for local businesses, and built a scalable system adaptable to multiple mobile banking providers.",
    techStack: [
      "Python",
      "ADB (Android Debug Bridge)",
      "FastAPI",
      "SQLite",
      "React",
      "WhatsApp Automation",
      "USB Device Communication",
      "SMS Parsing Engine",
    ],
    liveUrl: "",
    githubUrl: "",
    year: "2026",
    color: "#00A86B",
    logo: "/images/o1.png",
  },
  {
    slug: "tooltune",
    tabName: "Tooltune - Browser Tools",
    domain: "tooltune.com",
    title: "Browser Tools",
    badge: "Recent Work",
    description:
      "Tooltune is a free browser-first toolkit for everyday work — covering PDF, image, photo, QR, student, office, and business tools with a simple no-signup experience.",
    features: [
      {
        icon: "📄",
        title: "PDF Tools",
        desc: "Merge, split, reorder, rotate, remove pages, convert images to PDF, and prepare PDF files directly in the browser.",
      },
      {
        icon: "🖼️",
        title: "Image Tools",
        desc: "Convert, compress, resize, crop, watermark, and prepare images with fast client-side processing and bulk workflow support.",
      },
      {
        icon: "🪪",
        title: "Photo & Print Tools",
        desc: "Create passport photo sheets, resize signatures, prepare A4 layouts, crop document photos, and generate print-ready assets.",
      },
      {
        icon: "🔍",
        title: "Scan & OCR Tools",
        desc: "Clean scanned documents, extract text from images, convert scanned pages to PDF, and improve readability for document photos.",
      },
      {
        icon: "🔗",
        title: "QR & Link Tools",
        desc: "Generate QR codes, WhatsApp links, barcodes, UTM campaign URLs, contact QR cards, and printable QR label sheets.",
      },
      {
        icon: "🏢",
        title: "Office & Business Tools",
        desc: "Create invoices, receipts, certificates, ID cards, notices, price tags, product labels, business cards, and promotional materials.",
      },
    ],
    heroImage: "/projects/2.webp",
    bannerImage: "/projects/hero/2.webp",
    overview:
      "Tooltune was built as a practical all-in-one toolkit for everyday digital work. The platform brings together PDF tools, image tools, photo and print utilities, QR/link generators, student helpers, office templates, and business document makers in one clean interface. The goal is simple: users should be able to upload, edit, generate, convert, or download files quickly without creating an account or relying on complex software. Most tools are designed to run directly in the browser, making the platform faster, more private, and easier to use for students, offices, print shops, freelancers, and small businesses.",
    challenges:
      "The biggest challenge was designing a large multi-tool platform without making the user experience feel heavy or confusing. Tooltune needed to support many categories while keeping navigation, search, and tool discovery simple. Another important engineering challenge was handling file-based workflows such as image compression, conversion, PDF preparation, QR generation, ZIP downloads, and print-ready layouts while keeping most processing browser-first. To solve this, the system uses a centralized tool registry, category-driven routing, reusable tool shells, shared UI components, and client-side processing packages where possible. This structure keeps the codebase scalable while allowing new tools to be added without rewriting the core experience.",
    achievements:
      "Tooltune now includes a scalable foundation for a full browser-based tools platform with organized categories, searchable tool listings, dynamic tool pages, reusable tool cards, popular tool highlighting, and working implementations for core utilities like image conversion, image compression, image resizing, cropping, QR generation, barcode generation, WhatsApp link generation, UTM link building, and text utilities. The platform is built to support future expansion into more advanced PDF, OCR, print, office, and business tools while keeping the experience fast, private, and beginner-friendly.",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "TanStack Router",
      "TanStack Start",
      "Tailwind CSS",
      "Radix UI",
      "Lucide React",
      "JSZip",
      "File Saver",
      "browser-image-compression",
      "QRCode",
      "JsBarcode",
      "Zod",
    ],
    liveUrl: "https://toolbox-central-ebon.vercel.app/",
    year: "2026",
    color: "#2563EB",
    logo: "/images/p2.png",
  },
];

// 2. Secondary Projects for the Landing Page Grid (EXACT NAMES)
export const SECONDARY_PROJECTS = [
  {
    slug: "distrozi",
    tabName: "Distrozi - Music Distribution",
    domain: "distrozi.com",
    title: "Distrozi - Music Distribution",
    badge: "Recent Work",
    description:
      "Distrozi is a modern music distribution and artist growth platform that helps musicians release tracks, showcase albums, distribute music across major streaming channels, and understand audience reach through a premium digital experience.",
    features: [
      {
        icon: "🎵",
        title: "Artist Release Platform",
        desc: "Gives artists a polished place to release, promote, and present their music with modern landing pages, album visuals, and campaign-focused sections.",
      },
      {
        icon: "🌍",
        title: "Multi-Platform Distribution",
        desc: "Communicates distribution across major music and social platforms, helping artists position their songs for wider reach and discovery.",
      },
      {
        icon: "📀",
        title: "Album and Track Showcase",
        desc: "Uses immersive music visuals, album cards, waveform elements, and track previews to create a premium discovery experience for artists and listeners.",
      },
      {
        icon: "📊",
        title: "Growth and Analytics Focus",
        desc: "Highlights artist reach, stream growth, listener activity, countries reached, and performance signals through modern dashboard-style visuals.",
      },
      {
        icon: "🚀",
        title: "Conversion-Ready Landing Experience",
        desc: "Includes clear navigation, call-to-action sections, pricing flow, platform highlights, and lead-focused design for artist onboarding.",
      },
      {
        icon: "✨",
        title: "Premium Music Brand UI",
        desc: "Combines dark cinematic visuals, vinyl-inspired depth, glowing gradients, motion-ready layouts, and modern UI interactions for a high-end music-tech feel.",
      },
    ],
    heroImage: "/projects/8.webp",
    bannerImage: "/projects/hero/8.webp",
    overview:
      "Distrozi was built as a premium digital platform for artists who want to release, distribute, and grow their music presence from one modern web experience. The product direction focuses on a cinematic music-tech identity with strong visual storytelling, artist-first messaging, streaming-platform positioning, and conversion-focused landing sections. Instead of feeling like a generic music website, Distrozi is designed to look like a high-end artist distribution brand with discovery, distribution, analytics, and pricing flows presented in a polished way.",
    challenges:
      "The main challenge was creating a music platform interface that feels premium and emotional while still communicating clear business value. The design needed to balance cinematic visuals, music identity, artist growth messaging, streaming-platform cues, and responsive web performance. This required a strong dark visual system, careful spacing, reusable UI sections, motion-ready components, optimized media presentation, and a layout that can support hero storytelling, album/product cards, analytics blocks, pricing, and lead-generation flows without becoming cluttered.",
    achievements:
      "Delivered a premium music distribution landing experience with a strong brand direction, cinematic hero visuals, platform-style navigation, artist growth messaging, album and streaming-inspired design elements, analytics-focused sections, and a modern responsive frontend foundation. The result positions Distrozi as a serious music-tech platform for artists who want release, reach, distribution, and growth in one place.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "OGL",
      "Radix UI",
      "shadcn",
      "Embla Carousel",
      "Lucide React",
      "React Icons",
      "Nodemailer",
    ],
    liveUrl: "https://www.distrozi.com/",
    year: "2026",
    color: "#8B5CF6",
  },
    {
    slug: "socialcards",
    tabName: "Phonecards - Photo Gen",
    domain: "photocard.app",
    title: "Photocards Generator",
    badge: "Recent Work",
    description:
      "Socialcards is a multi-format social card generator  that has live RSS news ingestion, URL-to-card automation, AI-assisted content workflows, and high-quality export.",
    features: [
      {
        icon: "🧩",
        title: "50+ Card Types",
        desc: "Supports URL Newscard, Comment/Quote, Marketing, Real Estate, Youtube Thumbnail and Wish cards from a single dashboard.",
      },
      {
        icon: "📰",
        title: "Latest News RSS Feeds",
        desc: "Aggregates and mixes RSS feeds across Bangladesh, Global, Asia, Europe, and USA sources with deduplication.",
      },
      {
        icon: "⚡",
        title: "URL-to-Card Automation",
        desc: "Converts links into ready-to-edit cards with metadata extraction, news context transfer, and fast route handoff into generator flows.",
      },
      {
        icon: "✨",
        title: "AI-Assisted Content Tools",
        desc: "Includes AI remix/rewrite workflows and assistant-driven text generation to speed headline, caption, and content iteration.",
      },
      {
        icon: "🎨",
        title: "Deep Customization + Bangla Support",
        desc: "Provides logo, font, color, background, and theme controls with Bangla conversion and Bengali typography support built into the editor experience.",
      },
      {
        icon: "📤",
        title: "Production Export + Access Control",
        desc: "Delivers HD card export and plan-based feature gating (news feed, background remover, AI remix, API access, analytics) across user tiers.",
      },
    ],
    heroImage: "/projects/3.webp",
    bannerImage: "/projects/hero/3.webp",
    overview:
      "Socialcards was built as an end-to-end social media card workspace where teams can move from content discovery to final export without leaving the product. It combines live RSS news streams, URL-based generation, multi-template editing, and localized/Bangla-ready output for creator and newsroom workflows.",
    challenges:
      "The hardest engineering challenge was maintaining speed and consistency while merging diverse feed sources, metadata extraction, and multiple generator routes. We solved this with parallel feed fetching, de-duplication by link/title, source balancing, cache/revalidation windows, and guarded premium-access flows across the dashboard.",
    achievements:
      "Delivered a unified creator workflow across 12+ card types, improved recency and variety of news cards with regional RSS aggregation, reduced repeated work through auto-filled generation flows, and strengthened monetization UX through reliable plan-based gating and upgrade prompts.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "rss-parser",
      "date-fns",
      "OpenAI API",
      "Google Gemini API",
      "Node.js",
      "REST API",
      "MySQL",
      "Puppeteer",
      "Cloudflare",
    ],
    liveUrl: "https://www.photocard.online/",
    year: "2025",
    color: "#8B6834",
    logo: "/images/p3.png",
  },
  {
    slug: "starvibe",
    tabName: "Star Vibe - Production Studio",
    domain: "studiostarvibe.com",
    title: "Star Vibe - Production Studio",
    badge: "Recent Work",
    description:
      "Star Vibe is a premium podcast, photography, video, and content production studio website for Gulshan, Dhaka, built to help creators, brands, artists, and businesses discover services, view packages, and book professional studio sessions.",
    features: [
      {
        icon: "🎙️",
        title: "Podcast Production",
        desc: "Offers end-to-end podcast recording, multi-track audio capture, editing, publishing support, and social media clip creation for creators and brands.",
      },
      {
        icon: "🎥",
        title: "Video Production",
        desc: "Supports promotional videos, multi-camera studio recording, cinematic shoots, professional lighting, and controlled production environments.",
      },
      {
        icon: "📸",
        title: "Photography Studio",
        desc: "Provides video and photography sessions with creative direction, professional portraits, campaign shoots, retouching, and social-ready assets.",
      },
      {
        icon: "🏢",
        title: "Studio Rental",
        desc: "Lets clients rent a premium soundproof studio space with lighting, backgrounds, high-speed WiFi, makeup room access, and on-site technical support.",
      },
      {
        icon: "🎬",
        title: "Post Production",
        desc: "Includes video editing, color correction, motion graphics, sound mixing, subtitle animation, and multi-format export for social and web platforms.",
      },
      {
        icon: "📦",
        title: "Packages and Booking",
        desc: "Presents studio services, packages, booking calls-to-action, studio previews, and location access through a polished conversion-focused landing page.",
      },
    ],
    heroImage: "/projects/9.webp",
    bannerImage: "/projects/hero/9.webp",
    overview:
      "Star Vibe was built as a premium landing experience for a content production studio in Gulshan, Dhaka. The website positions the studio as a professional space for podcast recording, video production, photography, studio rental, film production, background music, and post-production. The visual direction uses a dark cinematic studio atmosphere, gold branding, strong hero messaging, and a booking-focused structure so creators and businesses can quickly understand the studio’s value and take action.",
    challenges:
      "The main product challenge was creating a landing page that feels premium and cinematic without making the experience heavy or confusing. The website needed to communicate multiple studio services, show trust, guide users toward booking, and keep the design readable over a dark media-rich hero background. This was handled through section-based architecture, reusable UI components, strong visual hierarchy, service cards, clear CTAs, package sections, and carefully layered overlays for readability.",
    achievements:
      "Delivered a polished production-studio landing page with a cinematic hero, premium dark-and-gold brand direction, service discovery, showcase sections, package presentation, booking calls-to-action, embedded location access, and responsive structure. The result gives Star Vibe a strong professional presence for creators, brands, artists, and businesses looking for studio production services in Dhaka.",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "TanStack Router",
      "TanStack Start",
      "Tailwind CSS",
      "Radix UI",
      "Lucide React",
      "Framer-style Motion",
      "Recharts",
      "Zod",
    ],
    liveUrl: "https://star1-vibe.vercel.app/",
    year: "2026",
    color: "#D2A153",
  },
  {
    slug: "niyenin",
    tabName: "Niyenin.com - Ecommerce Store",
    domain: "niyenin.com",
    title: "Niyenin.com - Ecommerce Store",
    badge: "Recent Work",
    description:
      "Niyenin.com is a clean Bangladesh-focused ecommerce storefront designed for product discovery, category browsing, jersey shopping, wishlist/cart actions, and a smooth customer shopping experience across desktop and mobile.",
    features: [
      {
        icon: "🛒",
        title: "Modern Ecommerce Storefront",
        desc: "Delivers a clean marketplace homepage with search, category navigation, product sections, hero banners, and shopping-focused navigation.",
      },
      {
        icon: "🔎",
        title: "Unified Product Search",
        desc: "Includes a prominent search bar so users can quickly find products, brands, and categories from the main shopping interface.",
      },
      {
        icon: "📦",
        title: "Multi-Category Catalog",
        desc: "Supports broad ecommerce categories including electronics, fashion, home, beauty, mobile accessories, appliances, sports, books, and automotive products.",
      },
      {
        icon: "👕",
        title: "Jersey Store Experience",
        desc: "Highlights a dedicated jersey store with sports-themed hero banners, football jersey promotions, and focused product browsing.",
      },
      {
        icon: "❤️",
        title: "Cart, Wishlist, and Account Actions",
        desc: "Provides core shopping actions such as account access, wishlist saving, cart interaction, and subtotal visibility from the navigation.",
      },
      {
        icon: "🚚",
        title: "Trust and Delivery Messaging",
        desc: "Uses customer-friendly trust blocks such as wide range, best prices, fast delivery, secure payment, and easy returns.",
      },
    ],
    heroImage: "/projects/10.webp",
    bannerImage: "/projects/hero/10.webp",
    overview:
      "Niyenin.com was built as a modern ecommerce storefront for Bangladesh users, combining a clean marketplace layout with category discovery, product search, jersey-focused promotions, cart and wishlist actions, and trust-building shopping messages. The design focuses on clarity, speed, and familiar ecommerce behavior while keeping the interface bright, professional, and easy for everyday customers.",
    challenges:
      "The main challenge was designing a broad ecommerce homepage that feels organized instead of crowded. The platform needed to support many categories, a large search experience, product promotions, jersey store navigation, cart and wishlist actions, and trust messaging while keeping the interface clean and responsive. This was handled through a strong navbar structure, category sidebar, clean hero banner area, reusable product sections, and mobile-friendly shopping interactions.",
    achievements:
      "Delivered a polished ecommerce homepage with a clean blue-and-orange brand identity, strong category navigation, product search, jersey store promotion, cart/wishlist/account interactions, customer support and order-tracking navigation, and trust-focused benefit blocks. The result gives Niyenin.com a professional shopping experience suitable for a Bangladesh ecommerce audience.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Embla Carousel",
      "Responsive UI",
      "Ecommerce Frontend",
    ],
    liveUrl: "https://niyenin-com.vercel.app/",
    year: "2026",
    color: "#1A73E8",
  },
  {
    slug: "elara",
    tabName: "Elara - Skincare Ecommerce",
    domain: "elara-skincare",
    title: "Elara - Skincare Ecommerce",
    badge: "Recent Work",
    description:
      "Elara is a soft, elegant skincare ecommerce platform with a cherry-blossom inspired brand identity, Bangla-first promotional hero sections, product discovery, wishlist/cart flows, and a scalable backend for managing skincare commerce operations.",
    features: [
      {
        icon: "🌸",
        title: "Premium Skincare Storefront",
        desc: "Presents skincare products through a soft cherry-blossom inspired ecommerce interface with elegant product visuals and beauty-focused branding.",
      },
      {
        icon: "🛍️",
        title: "Product Discovery and Search",
        desc: "Includes a clean shopping header, product search, shop navigation, wishlist, cart, and account actions for a familiar ecommerce experience.",
      },
      {
        icon: "🎀",
        title: "Campaign Hero Banners",
        desc: "Uses visually rich promotional banners for skincare collections, seasonal offers, flash sales, and campaign-driven product highlights.",
      },
      {
        icon: "💖",
        title: "Wishlist and Cart Experience",
        desc: "Supports core customer shopping actions such as saving favorite products, adding items to cart, and moving through a smooth purchase journey.",
      },
      {
        icon: "⚙️",
        title: "Scalable Backend API",
        desc: "Backed by an Express and Prisma-powered backend with authentication, product/order operations, file upload support, and commerce-ready structure.",
      },
      {
        icon: "🔐",
        title: "Secure Commerce Foundation",
        desc: "Uses JWT authentication, password hashing, environment-based configuration, and backend tooling to support a safer ecommerce workflow.",
      },
    ],
    heroImage: "/projects/11.webp",
    bannerImage: "/projects/hero/11.webp",
    overview:
      "Elara was built as a premium skincare ecommerce experience with a soft, feminine, cherry-blossom inspired visual identity. The platform focuses on presenting skincare products beautifully while keeping the shopping flow simple and familiar. The frontend uses a clean cream-and-pink layout with a branded header, search, wishlist, cart, promotional banners, and offer-focused sections. The backend supports the commerce foundation with Express, Prisma, JWT authentication, file handling, and scalable API structure for skincare product and order management.",
    challenges:
      "The main challenge was balancing a beauty-brand visual identity with a practical ecommerce experience. The design needed to feel soft, elegant, and premium while still keeping product search, offers, cart actions, and shopping navigation clear. On the technical side, the project required a frontend that could present rich promotional visuals and a backend that could support secure commerce workflows, authentication, product operations, and media handling.",
    achievements:
      "Delivered a polished skincare ecommerce platform with a strong cherry-blossom brand direction, Bangla-friendly hero campaign design, clean shopping navigation, wishlist/cart interactions, promotional offer sections, and a scalable backend foundation. The result gives Elara a premium beauty-commerce presence suitable for skincare product discovery and online sales.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "shadcn",
      "Embla Carousel",
      "Express",
      "Prisma",
      "JWT",
      "Multer",
      "bcryptjs",
      "Puppeteer",
    ],
    liveUrl: "https://www.elarabd.store/",
    backendGithubUrl: "https://github.com/Kallolx/elara-backend",
    year: "2026",
    color: "#D8A7A7",
  },
];

// 3. Full Project Archive (EXACT NAMES)
export const ARCHIVE_PROJECTS = [
  ...SECONDARY_PROJECTS,
  {
    slug: "onedigitalspot",
    tabName: "OneDigitalSpot - Topup Store",
    domain: "onedigitalspot.com",
    title: "OneDigitalSpot - Topup Store",
    badge: "Live Platform",
    description:
      "OneDigitalSpot is a Bangladesh-focused digital top-up and subscription marketplace where users can quickly buy game credits, gift cards, AI tools, and premium subscriptions with trusted local payment options.",
    features: [
      {
        icon: "⚡",
        title: "Fast Digital Delivery",
        desc: "Delivers digital products and top-ups in seconds through streamlined product flows and ready-to-purchase category pages.",
      },
      {
        icon: "🎮",
        title: "Multi-Category Top-up Store",
        desc: "Covers Mobile Games, PC Games, Gift Cards, AI Tools, Subscriptions, and Productivity products in one storefront.",
      },
      {
        icon: "🔎",
        title: "Unified Product Discovery",
        desc: "Includes global search, category navigation, route-based product pages, and curated popular-product sections for quick discovery.",
      },
      {
        icon: "🛡️",
        title: "Secure and Reliable Experience",
        desc: "Combines auth-protected flows, guarded checkout/profile routes, and trusted platform messaging focused on safety and reliability.",
      },
      {
        icon: "🧩",
        title: "Operational Admin Panel",
        desc: "Provides admin modules for dashboard analytics, orders, products, users, reviews, ads, and hero banner management.",
      },
      {
        icon: "📈",
        title: "Performance and SEO Focus",
        desc: "Ships with sitemap/SEO scripts, optimized assets, lazy loading patterns, and production-ready deployment scripts.",
      },
    ],
    heroImage: "/projects/5.webp",
    bannerImage: "/projects/hero/5.webp",
    overview:
      "OneDigitalSpot was built as a practical all-in-one top-up commerce platform for Bangladesh users who want fast access to digital goods. The site combines entertainment subscriptions, gaming credits, gift cards, AI products, and productivity tools with a modern browsing and checkout experience.",
    challenges:
      "A core challenge was managing a large catalog with many route-level product pages and maintaining smooth discovery across categories while keeping speed high on mobile and desktop. The solution used reusable product schemas, route segmentation, optimized media, and query-driven UI modules.",
    achievements:
      "Established a unified commerce experience across multiple digital categories, enabled scalable admin operations for content and product control, improved discoverability via organized category/search flows, and maintained a performance-aware frontend with SEO and deploy tooling.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Appwrite",
      "Recharts",
      "PostgreSQL",
      "REST API",
    ],
    liveUrl: "https://onedigitalspot.vercel.app/",
    year: "2025",
    color: "#16A34A",
  },
  {
    slug: "mailflow",
    tabName: "MailFlow - Email Automation System",
    domain: "mailflow.local",
    title: "MailFlow - Email Automation System",
    badge: "Recent Work",
    description:
      "MailFlow is a visual email automation platform that lets teams design drag-and-drop workflows, schedule execution in the background, and monitor every step with real-time logs and dashboard-level insights.",
    features: [
      {
        icon: "📩",
        title: "Visual Email Workflow Builder",
        desc: "Build automation journeys on a React Flow canvas with start/end nodes, email action nodes, delay nodes, and conditional branches for flexible logic.",
      },
      {
        icon: "🧠",
        title: "Rule-Based Conditional Routing",
        desc: "Create multi-rule conditions using equals, not-equals, includes, starts-with, and ends-with operators with AND/OR joins to split flow paths into true/false outcomes.",
      },
      {
        icon: "⏱️",
        title: "Flexible Delay Scheduling",
        desc: "Pause automation steps using relative waits (seconds/minutes/hours/days) or exact date-time scheduling for campaign timing control.",
      },
      {
        icon: "⚙️",
        title: "Queue-Driven Execution Engine",
        desc: "Runs flow steps through Agenda background jobs with recursive node traversal, node-by-node execution, and resilient asynchronous orchestration.",
      },
      {
        icon: "📡",
        title: "Live Test Runs and Execution Logs",
        desc: "Launch test runs with a recipient email, poll runtime logs in near real time, and surface completion/error states for fast debugging and validation.",
      },
      {
        icon: "📈",
        title: "Operational Dashboard and Flow Portability",
        desc: "Track total flows, active jobs, and execution counts, while importing/exporting JSON flow definitions to speed reuse, backup, and collaboration.",
      },
    ],
    heroImage: "/projects/4.webp",
    bannerImage: "/projects/hero/4.webp",
    overview:
      "MailFlow was built to make email automation accessible and controllable through a node-based visual experience backed by a reliable job queue. Product and operations teams can create automations quickly, test them safely, and understand execution behavior through structured logs and dashboard metrics.",
    challenges:
      "The key engineering challenge was coordinating graph-based workflow execution with delays and condition branches while keeping runs observable and debuggable. This was addressed with queue-backed step execution, recursive next-node resolution, DB-backed logging, and polling-based runtime visibility in the UI.",
    achievements:
      "Delivered an end-to-end automation system with a production-style visual editor, branch-aware execution logic, scheduled delay handling, test-run tooling, and dashboard observability. The result improves workflow creation speed, operational transparency, and confidence during automation testing.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Flow",
      "Node.js",
      "REST API",
      "Agenda.js",
      "Axios",
      "Nodemailer",
    ],
    liveUrl: "https://automation-kallol.vercel.app/",
    year: "2025",
    color: "#8B5CF6",
  },
  {
    slug: "postra",
    tabName: "Postra - Social Automation",
    domain: "social-automation",
    title: "Postra - Social Automation (N8N)",
    badge: "AI Automation",
    description:
      "Postra is an AI-powered social media automation system built on n8n that fully manages a Facebook page—from content discovery to design, posting, and audience engagement—using autonomous AI agents and workflow orchestration.",
    features: [
      {
        icon: "🤖",
        title: "Autonomous AI Content Agent",
        desc: "Runs a fully automated AI agent that researches, generates, and publishes content daily without manual input, maintaining consistency and engagement.",
      },
      {
        icon: "📰",
        title: "Multi-Source Content Aggregation",
        desc: "Collects trending topics and news from Reddit, web sources, and RSS feeds, filtering and restructuring them into social-ready content formats.",
      },
      {
        icon: "🎨",
        title: "AI Image Generation Pipeline",
        desc: "Generates custom visuals using AI image models, ensuring each post is visually engaging and tailored to the content theme.",
      },
      {
        icon: "🧠",
        title: "Smart Content Transformation",
        desc: "Uses AI to rewrite, summarize, and optimize content into high-performing captions, headlines, and engagement-driven formats.",
      },
      {
        icon: "🖼️",
        title: "Photocard API Integration",
        desc: "Seamlessly connects with the Photocard SaaS to generate branded social cards dynamically via API, enabling consistent visual identity across posts.",
      },
      {
        icon: "📅",
        title: "Scheduled & Queue-Based Posting",
        desc: "Implements a structured queue system within n8n to schedule, manage, and publish posts at optimal times for maximum reach.",
      },
      {
        icon: "📢",
        title: "Facebook Graph API Automation",
        desc: "Automatically publishes posts to Facebook pages using the Graph API, including captions, images, and metadata handling.",
      },
      {
        icon: "💬",
        title: "Automated Comment Interaction",
        desc: "Monitors incoming comments and replies using AI-generated responses, enabling continuous audience engagement.",
      },
    ],
    heroImage: "/projects/6.webp",
    bannerImage: "/projects/hero/6.webp",
    overview:
      "Postra was designed as a fully autonomous social media manager that eliminates the need for manual content creation and posting. Built on n8n, it orchestrates multiple AI-driven processes—content discovery, rewriting, visual generation, and publishing—into a seamless workflow. By integrating external APIs and internal SaaS tools, it creates a complete content lifecycle engine tailored for consistent social growth.",
    challenges:
      "The primary challenge was orchestrating multiple asynchronous systems—AI generation, third-party APIs, and social platform integrations—while maintaining reliability and content quality. Handling rate limits from the Facebook Graph API, ensuring relevant and non-repetitive content from sources like Reddit, and synchronizing image generation with posting workflows required robust error handling, retries, and queue control mechanisms.",
    achievements:
      "Successfully built a self-running social media automation system capable of daily content publishing and engagement without human intervention. Reduced content production time to near zero, ensured consistent branding through Photocard integration, and created a scalable workflow architecture that can be extended to multiple platforms beyond Facebook.",
    techStack: [
      "n8n",
      "OpenAI API",
      "Google Gemini API",
      "Facebook Graph API",
      "Reddit API",
      "Photocard SaaS",
      "Webhook",
      "RSS Feed",
    ],
    liveUrl: "",
    githubUrl: "",
    year: "2026",
    color: "#1877F2",
  },
  {
    slug: "civix",
    tabName: "Civix - Citizen Engagement",
    domain: "citizen-app.local",
    title: "Civix - Citizen Engagement",
    badge: "Recent Work",
    description:
      "Civix is a bilingual civic engagement mobile app for Bangladesh that helps people document public issues, discover legal context, and track local accountability through map-driven reporting and regional score views.",
    features: [
      {
        icon: "🗺️",
        title: "Interactive Bangladesh Map",
        desc: "Uses an interactive Highcharts-powered Bangladesh division map inside WebView so users can explore report intensity and drill directly into division analytics.",
      },
      {
        icon: "📸",
        title: "Evidence Capture Workflow",
        desc: "Supports in-app camera capture, gallery import, media preview/removal, location tagging with reverse geocoding, and structured report submission across multiple screens.",
      },
      {
        icon: "⚖️",
        title: "Legal Context Integration",
        desc: "Connects civic reports with legal references through expandable law cards, legal context sections in report details, and a searchable law information module.",
      },
      {
        icon: "📍",
        title: "Area-Based Filtering and Drill-Down",
        desc: "Provides division-district-thana filtering, report feed exploration, and ranking-driven navigation from national view to district-level analytics and scoring.",
      },
      {
        icon: "🚨",
        title: "Emergency and Local Helplines",
        desc: "Includes a panic button for instant emergency dialing plus quick-access national hotlines and district/thana-based local emergency contacts.",
      },
      {
        icon: "🌐",
        title: "Bangla-English First UX",
        desc: "Implements full in-app Bangla/English language switching with localized labels, Bengali numeral formatting, and typography tuned for both scripts.",
      },
    ],
    heroImage: "/projects/7.webp",
    bannerImage: "/projects/hero/7.webp",
    overview:
      "Civix was designed as a practical citizen-facing transparency platform where reporting, legal awareness, and emergency access coexist in one mobile experience. Instead of a static complaint form, the app combines visual evidence flows, geospatial discovery, and clear status-oriented report detail views so civic participation feels immediate and actionable.",
    challenges:
      "A key product challenge was unifying many civic workflows in one clean mobile UX: map exploration, multilingual content, media-heavy reporting, legal education, and emergency access. We solved this through a modular Expo Router structure, reusable UI primitives, lightweight state patterns, and clear step-by-step navigation that keeps each flow focused while remaining connected.",
    achievements:
      "Delivered an end-to-end reporting journey (category to verification to success ID), implemented interactive regional analytics with division/district drill-down, launched searchable law and emergency modules, and established a bilingual design system that keeps Bengali and English parity across major screens.",
    techStack: [
      "Expo",
      "React Native",
      "TypeScript",
      "Highcharts Maps",
      "PostgreSQL",
      "Node.js",
      "REST API",
      "crypto.js",
    ],
    githubUrl: "https://github.com/Kallolx/citizen.git",
    year: "2026",
    color: "#10B981",
  },
  {
    slug: "aperitiv",
    tabName: "Aperitiv - Restaurant Reservation",
    domain: "aprtiv.com",
    title: "Aperitiv - Restaurant Reservation",
    badge: "🍽️ Recent Work",
    description:
      "Aperitiv is a full-stack restaurant reservation and food discovery platform where users can explore restaurants and events, book tables, save favorites, and engage with a social community feed across web and mobile apps.",
    features: [
      {
        icon: "📅",
        title: "Smart Reservation Flow",
        desc: "Lets users reserve tables with date/time and guest controls, while keeping booking actions connected to user accounts for a clean end-to-end experience.",
      },
      {
        icon: "🔍",
        title: "Restaurant, Event, and Offer Discovery",
        desc: "Combines browse, filter, and detail experiences so users can discover venues, upcoming events, and active deals in one unified journey.",
      },
      {
        icon: "🧑‍🤝‍🧑",
        title: "Social Community Feed",
        desc: "Supports posts, likes, comments, sharing, and saved content to turn dining discovery into an interactive community experience.",
      },
      {
        icon: "⚙️",
        title: "Admin Operations Dashboard",
        desc: "Provides operational control for restaurants, offers, events, users, and sales analytics with management pages and chart-driven visibility.",
      },
      {
        icon: "🔐",
        title: "Secure Auth and Role Controls",
        desc: "Implements JWT access/refresh authentication, token rotation, password reset, rate limiting, and role-based access control in the backend API.",
      },
      {
        icon: "📱",
        title: "Web + Mobile Platform",
        desc: "Ships as a Next.js web application and an Expo React Native mobile app, both connected to the same backend API for consistent product behavior.",
      },
    ],
    heroImage: "/projects/12.webp",
    bannerImage: "/projects/hero/12.webp",
    overview:
      "Aperitiv was built as a modern dining platform that goes beyond simple table booking. It combines reservations, restaurant and event discovery, social engagement, and operational tooling so users and teams can work inside a single connected ecosystem.",
    challenges:
      "The biggest engineering challenge was coordinating a multi-surface architecture (web, mobile, and API) while maintaining consistent user state, performance, and reliability. We addressed this with TypeScript-first contracts, centralized API services, reusable UI primitives, secure auth flows, and scalable list/feed patterns including infinite loading.",
    achievements:
      "Delivered a complete restaurant reservation ecosystem with cross-platform consistency, improved discovery and engagement through social/community features, enabled faster operations with admin dashboards and analytics, and strengthened reliability and security via JWT token rotation, rate limiting, and validated API flows.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "REST API",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Expo",
      "React Native",
      "TanStack Query",
      "Zod",
    ],
    liveUrl: "https://aprtiv-psi1.vercel.app/",
    year: "2026",
    color: "#059669",
  },
  {
    slug: "softune-agency-portfolio",
    tabName: "Softune agency - Agency Portfolio",
    domain: "softune.com",
    title: "Softune - Agency Portfolio",
    badge: "Agency Showcase",
    description:
      "Softune is a full-service digital agency portfolio website presenting how we help startups and growing businesses design, build, market, and scale digital products with speed and clarity.",
    features: [
      {
        icon: "🎨",
        title: "Design-First Service Experience",
        desc: "Highlights UI/UX, web, mobile, SaaS design, brand identity, and redesign offerings through clear service storytelling and high-contrast visual sections.",
      },
      {
        icon: "🛠️",
        title: "Full-Stack Delivery Positioning",
        desc: "Showcases development capabilities including web apps, mobile apps, e-commerce, API integrations, custom software, and cloud-oriented solutions.",
      },
      {
        icon: "🎬",
        title: "Video & Motion Offerings",
        desc: "Presents motion graphics, promotional ads, logo animation, post-production, and social media-ready video services in the same unified agency flow.",
      },
      {
        icon: "📈",
        title: "Growth, Strategy, and Marketing",
        desc: "Communicates SEO, content strategy, brand positioning, campaign planning, analytics, and business strategy to connect creative work with measurable growth.",
      },
      {
        icon: "🤖",
        title: "AI & Automation Services",
        desc: "Includes AI chatbot, workflow automation, AI integrations, and smart process optimization offerings to help clients scale operations efficiently.",
      },
      {
        icon: "🔐",
        title: "Admin + Client Portal Workflow",
        desc: "Ships with integrated admin/customer routes, authentication, customer management, and proposal-generation workflows for operational follow-through after lead capture.",
      },
    ],
    heroImage: "/projects/13.webp",
    bannerImage: "/projects/hero/13.webp",
    overview:
      "Softune agency - Agency Portfolio is built to convert attention into action by combining bold creative presentation with practical business pathways, including services discovery, work showcase, testimonials, contact flow, and portal-based client operations.",
    challenges:
      "The core challenge was balancing expressive frontend storytelling with production-grade backend utility in one codebase. The platform solves this by pairing animated, responsive UI sections with structured APIs, database-backed admin modules, and deployment-ready environment configuration.",
    achievements:
      "Established a unified brand experience across services, improved credibility through case studies and social proof, enabled operational continuity via admin and portal tooling, and created a scalable architecture that supports both marketing pages and business workflows in one system.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "MySQL",
      "Node.js",
      "REST API",
      "Vercel",
      "Lucide React",
      "PDF-Lib",
    ],
    liveUrl: "https://softune.xyz",
    year: "2025",
    color: "#4A90E2",
  },
  {
    slug: "jamilifat",
    tabName: "JamilIfat - Individual Portfolio",
    domain: "https://jamilifat.com",
    title: "JamilIfat - Individual Portfolio",
    badge: "Personal Work",
    description:
      "A focused portfolio showcasing UI/UX, technical SEO, and high-performance web apps built with Next.js — presented by Jamil Ifat.",
    features: [
      {
        icon: "🔎",
        title: "Technical SEO & Visibility",
        desc: "High-performance site architecture tuned for search visibility, semantic metadata, and large-image/open-graph optimization.",
      },
      {
        icon: "⚛️",
        title: "Modern Frontend",
        desc: "Interactive experiences built with Next.js, React, Framer Motion and Tailwind for responsive, smooth UI.",
      },
      {
        icon: "🧭",
        title: "Case Study Driven",
        desc: "Structured case-study pages that explain problems, approaches, and measurable outcomes for client work.",
      },
      {
        icon: "✍️",
        title: "Thoughtful Content",
        desc: "Blog and long-form notes that demonstrate process, technical learnings, and product thinking.",
      },
      {
        icon: "📱",
        title: "Fast UX",
        desc: "Smooth scroll, animated micro-interactions, and optimized imagery for perceived performance.",
      },
      {
        icon: "📫",
        title: "Contact & Availability",
        desc: "Clear contact flow for project enquiries and availability status.",
      },
    ],
    heroImage: "/projects/14.webp",
    bannerImage: "/projects/hero/14.webp",
    overview:
      "Personal portfolio focusing on web applications engineered for search visibility and product-driven case studies — combining design craft with technical SEO and measurable outcomes.",
    challenges:
      "Balancing a design-forward experience with strict performance and SEO constraints: optimizing images, metadata, and client-side animation without sacrificing crawlability.",
    achievements:
      "Delivered a concise case-study-first portfolio with smooth micro-interactions, clear technical descriptions, and optimized metadata for discovery.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lenis",
      "Node.js",
      "REST API",
    ],
    liveUrl: "https://portfolio-silk-eight-30.vercel.app/",
    year: "2025",
    color: "#004aad",
  },
  {
    slug: "webify",
    tabName: "Webify - Multi vendor Ecommerce",
    domain: "Coming Soon",
    title: "Webify - Multi vendor Ecommerce",
    badge: "🚀 Recent Work",
    description:
      "Webify is a multi-tenant ecommerce platform built to help small businesses, women entrepreneurs, and students launch and scale branded online stores with secure tenant isolation, modern storefront experiences, and practical operational tooling.",
    features: [
      {
        icon: "🏪",
        title: "Multi-Tenant Storefront Isolation",
        desc: "Uses tenant-scoped architecture with strict tenant_id separation and Row Level Security policies so each business can run independently on shared infrastructure.",
      },
      {
        icon: "🔐",
        title: "Secure Auth + Role Routing",
        desc: "Implements protected dashboard/super-admin routing, session-aware middleware, and role checks so users land in the correct workspace with controlled access.",
      },
      {
        icon: "📦",
        title: "Product + Order Operations",
        desc: "Supports product catalog management, stock-aware workflows, order handling, status tracking, and tenant-level commerce operations from a unified dashboard.",
      },
      {
        icon: "📊",
        title: "Live Business Analytics",
        desc: "Aggregates tenant metrics like product count, order volume, and revenue to provide fast operational visibility for daily decision making.",
      },
      {
        icon: "🧠",
        title: "AI-Ready Commerce Content",
        desc: "Includes schema support for AI-generated descriptions and tagging workflows to improve product content quality and discoverability.",
      },
      {
        icon: "🛡️",
        title: "Super Admin Governance",
        desc: "Provides super-admin user creation, cross-tenant analytics access, and RLS migration tooling to keep governance, support, and scaling manageable.",
      },
    ],
    heroImage: "/projects/15.webp",
    bannerImage: "/projects/hero/15.webp",
    overview:
      "Webify was built as a practical SaaS ecommerce foundation for emerging businesses that need professional tools without high technical barriers. The platform combines modern UI, secure tenant isolation, and operational workflows so founders can focus on growth instead of infrastructure complexity.",
    challenges:
      "The biggest engineering challenge was balancing strict tenant-level security with smooth product and order workflows, while still enabling super-admin visibility for operations. This required careful middleware design, RLS policy strategy, and admin-safe access paths that do not compromise tenant boundaries.",
    achievements:
      "Delivered a scalable multi-tenant architecture with strong isolation controls, enabled role-aware routing and super-admin operations, implemented dashboard analytics and commerce workflows, and created a solid base for AI-assisted product content and future marketplace-scale growth.",
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "PostgreSQL",
      "Cloudinary",
      "Node.js",
      "REST API",
      "Digital Payments",
    ],
    year: "2026",
    color: "#3B82F6",
  },
  {
    slug: "eventra",
    tabName: "Eventra - Event SaaS",
    domain: "event-management",
    title: "Eventra - Event Management Platform",
    badge: "SaaS Platform",
    description:
      "Eventra is a modern end-to-end event management SaaS that enables organizers to create, manage, and monetize events while providing attendees with a seamless registration and participation experience.",
    features: [
      {
        icon: "🎟️",
        title: "Event Creation & Publishing",
        desc: "Allows organizers to create fully customized events with details, pricing, schedules, and publish them for public or private access.",
      },
      {
        icon: "📝",
        title: "Smart Registration System",
        desc: "Provides flexible registration flows with customizable forms, attendee data collection, and instant confirmations.",
      },
      {
        icon: "💳",
        title: "Integrated Payment Handling",
        desc: "Supports secure payment processing for paid events, enabling organizers to monetize registrations effortlessly.",
      },
      {
        icon: "🍽️",
        title: "Food & Resource Management",
        desc: "Tracks meal preferences, food distribution, and additional event resources for better planning and logistics.",
      },
      {
        icon: "📊",
        title: "Organizer Dashboard & Analytics",
        desc: "Offers a centralized dashboard to manage attendees, monitor registrations, track revenue, and oversee event performance.",
      },
      {
        icon: "👥",
        title: "User Roles & Access Control",
        desc: "Supports multiple roles including organizers, attendees, and admins with controlled access to features and data.",
      },
      {
        icon: "📅",
        title: "Event Scheduling & Management",
        desc: "Handles event timelines, session scheduling, and updates, ensuring smooth coordination and execution.",
      },
      {
        icon: "📱",
        title: "Modern Responsive Experience",
        desc: "Delivers a clean, mobile-first UI ensuring users can browse, register, and manage events from any device.",
      },
    ],
    heroImage: "/projects/16.webp",
    bannerImage: "/projects/hero/16.webp",
    overview:
      "Eventra was built as a scalable SaaS platform to simplify the complexities of event management. From event creation and attendee registration to payments and logistics like food planning, the system centralizes every aspect into a unified dashboard. It empowers organizers to focus on delivering great experiences while automating operational tasks.",
    challenges:
      "The core challenge was designing a flexible system that could handle diverse event types while maintaining simplicity for users. Managing dynamic registration forms, ensuring payment reliability, handling real-time attendee data, and organizing logistics like food preferences required a well-structured and scalable architecture.",
    achievements:
      "Successfully developed a full-featured event management ecosystem, streamlined event operations for organizers, enabled monetization through integrated payments, and created a scalable foundation for future SaaS expansion.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Digital Payment",
      "REST API",
    ],
    liveUrl: "https://iftar17-19.vercel.app/",
    githubUrl: "",
    year: "2026",
    color: "#FF6B6B",
  },
  {
    slug: "distribe",
    tabName: "Distribe - Music Distribution",
    domain: "promisedistribution.com",
    title: "Distribe - Music Distribution",
    badge: "Recent Work",
    description:
      "Distribe is a full-stack music distribution platform that helps labels and artists manage catalog delivery, review-ready distribution workflows, royalty operations, and performance analytics from one dashboard.",
    features: [
      {
        icon: "🎵",
        title: "Catalog and Release Management",
        desc: "Supports structured music catalog workflows for tracks and releases, including metadata, assets, and readiness checks before distribution.",
      },
      {
        icon: "🚀",
        title: "Distribution Workflow Control",
        desc: "Combines track and release queues into one admin workflow with filters, status transitions (pending/approved/rejected/completed), and detailed review modals.",
      },
      {
        icon: "📈",
        title: "CSV-Driven Analytics Pipeline",
        desc: "Processes uploaded CSV reports in background jobs, tracks progress/status, and powers platform, country, revenue, and performance analytics views.",
      },
      {
        icon: "💸",
        title: "Royalties and Payout Operations",
        desc: "Provides earnings summaries, statement visibility, payout request flows, and balance updates so creators can track revenue and withdrawals clearly.",
      },
      {
        icon: "🛡️",
        title: "Role-Based Access and Admin Tools",
        desc: "Implements role-aware navigation and permissions (superadmin/admin/label owner/artist) plus admin utilities to reconcile transaction-user links using ISRC matching.",
      },
      {
        icon: "☁️",
        title: "Production-Ready Media and API Stack",
        desc: "Uses a Next.js frontend with an Express + MongoDB backend, JWT auth, S3-backed media handling, and modular API routes for scalable operations.",
      },
    ],
    heroImage: "/projects/17.webp",
    bannerImage: "/projects/hero/17.webp",
    overview:
      "Distribe was built to simplify the day-to-day complexity of digital music operations. Instead of splitting release handling, distribution review, analytics, and payouts across disconnected tools, the platform centralizes everything in a single role-aware workspace for teams and artists.",
    challenges:
      "The main engineering challenge was keeping distribution and royalty operations reliable while processing messy third-party CSV formats and high-volume catalog data. We addressed this with background CSV processing, resilient field mapping fallbacks, explicit status tracking, and admin recovery tooling for unmatched transaction links.",
    achievements:
      "Unified track and release distribution review into a single operational queue, improved analytics usefulness through automated CSV ingestion and caching flows, strengthened admin visibility with role-based controls and reconciliation tools, and streamlined royalty/payout operations for faster day-to-day financial workflows.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "AWS S3",
      "Multer",
      "CSV Parser",
      "Nodemailer",
    ],
    liveUrl: "https://streamo-dashboard.vercel.app/",
    githubUrl: "https://github.com/",
    year: "2026",
    color: "#A365FF",
  },
  {
    slug: "allinone-ott",
    tabName: "AllinOne OTT - OTT Streaming Platform",
    domain: "allinoneott.com",
    title: "AllinOne OTT - OTT Streaming Platform",
    badge: "Recent Work",
    description:
      "AllinOne OTT is a unified streaming-discovery platform that gives members one dashboard to explore trending movies, live TV, regional OTT services, anime, and curated external servers with fast access and simple account-based entry.",
    features: [
      {
        icon: "🎬",
        title: "Unified Streaming Dashboard",
        desc: "Combines hero discovery, trending picks, most-played links, most-watched sections, top-rated titles, and live TV access into one user-facing experience.",
      },
      {
        icon: "🔎",
        title: "TMDB-Powered Smart Search",
        desc: "Uses debounced multi-search via TMDB to surface movies and TV quickly, then routes users to playback sources based on media type and account profile.",
      },
      {
        icon: "🌍",
        title: "Multi-Region OTT Aggregation",
        desc: "Curates Bangladeshi, Indian, Pakistani, and international platforms in categorized views so users can jump across providers without manual hunting.",
      },
      {
        icon: "🛂",
        title: "Membership and Access Control",
        desc: "Implements username-based member login, admin login, role-aware adult access checks, and protected routes for dashboard and premium sections.",
      },
      {
        icon: "🧰",
        title: "Admin User Lifecycle Management",
        desc: "Provides admin tools for creating, editing, searching, paginating, and deleting users, plus expiry-date management and automatic deactivation of expired accounts.",
      },
      {
        icon: "⭐",
        title: "Feedback Moderation and Public Reviews",
        desc: "Collects user feedback with ratings, supports approve/reject workflows in admin, and publishes approved high-rated reviews in the frontend carousel.",
      },
    ],
    heroImage: "/projects/18.webp",
    bannerImage: "/projects/hero/18.webp",
    overview:
      "AllinOne OTT was built as a practical all-in-one streaming navigator for audiences who want movies, TV, and regional OTT content in one place. The platform blends curated external sources, TMDB discovery data, and member-level access into a lightweight dashboard flow optimized for quick content discovery.",
    challenges:
      "The biggest engineering challenge was keeping access control and operations reliable while serving many outbound platform links and dynamic discovery sections. This was addressed with protected routing, periodic expired-user deactivation, admin-side lifecycle controls, resilient API integration patterns, and a clean separation between frontend experience and backend account governance.",
    achievements:
      "Delivered a centralized OTT discovery experience with secure member onboarding, reduced manual account maintenance through automatic expiry deactivation, improved admin efficiency with full user/feedback operations, and increased content-find speed through searchable TMDB-backed recommendations and categorized platform aggregation.",
    techStack: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React Router",
      "TanStack Query",
      "Framer Motion",
      "Swiper",
      "Node.js",
      "Express",
      "MySQL",
      "TMDB API",
    ],
    liveUrl: "https://allinoneott.com",
    year: "2026",
    color: "#EF4444",
  },
  {
    slug: "foodmaster-delivery-platform",
    tabName: "foodmaster - Delivery Platform",
    domain: "https://example.com",
    title: "foodmaster - Delivery Platform",
    badge: "Recent Work",
    description:
      "foodmaster is a dual-interface food ordering and stall operations platform that helps vendors manage menu, orders, inventory, and fulfillment settings while giving customers a smooth mobile ordering and live order-tracking experience.",
    features: [
      {
        icon: "🍽️",
        title: "QR Menu + Category Browsing",
        desc: "Customers open a stall-specific menu, browse categorized items, view modifiers, and add meals quickly with both quick-add and detailed customization flows.",
      },
      {
        icon: "🛒",
        title: "Flexible Checkout and Fulfillment",
        desc: "Supports dine-in, takeaway, and delivery checkouts with saved delivery details, cart persistence, tax calculation, and configurable payment options.",
      },
      {
        icon: "📡",
        title: "Real-Time Order Status Tracking",
        desc: "Provides token-based status pages powered by Server-Sent Events so customers can watch order progress from waiting to cooking to ready in near real time.",
      },
      {
        icon: "🧑‍🍳",
        title: "Admin Order Workflow Control",
        desc: "Gives stall admins an operational dashboard with incoming/cooking/ready tabs, detailed order views, and one-tap status transitions for kitchen flow management.",
      },
      {
        icon: "📦",
        title: "Inventory + Recipe-Linked Menu",
        desc: "Connects inventory items to menu recipes, automatically deducts stock on orders, and highlights low-stock alerts to reduce out-of-stock surprises.",
      },
      {
        icon: "⚙️",
        title: "Stall Settings and QR Operations",
        desc: "Includes profile controls, delivery/dine-in/payment toggles, order acceptance switch, digital menu visibility control, and downloadable QR code generation.",
      },
    ],
    heroImage: "/projects/19.webp",
    bannerImage: "/projects/hero/19.webp",
    overview:
      "foodmaster was built as a practical web platform for small food stalls that need both customer convenience and operational clarity. The system combines menu publishing, checkout, order lifecycle tracking, and back-office controls in one mobile-first experience backed by a typed Next.js + Supabase architecture.",
    challenges:
      "A core engineering challenge was keeping customer-facing updates fast while preserving reliable admin control and data consistency across menu, order, and inventory modules. This was addressed with clear domain modeling, API-route orchestration, SSE-based status updates, and transactional-style inventory deduction patterns tied to order creation.",
    achievements:
      "Delivered a production-style full-stack workflow including secure authentication, stall-level settings controls, live order visibility, recipe-aware inventory management, and responsive interfaces for both admin and customer use cases. The result improves service coordination, reduces manual errors, and shortens customer uncertainty during peak order periods.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Supabase",
      "PostgreSQL",
      "Webhooks",
      "QR Code",
      "Redis",
    ],
    liveUrl: "https://foodmaster-nu.vercel.app/",
    year: "2026",
    color: "#F97316",
  },
  {
    slug: "service-market",
    tabName: "Service Market - On-Demand Services",
    domain: "servicemarket.com",
    title: "Service Market - On-Demand",
    badge: "🚀 Featured Project",
    description:
      "Service Market is an on-demand home services platform that lets customers discover, compare, and book trusted professionals across multiple service categories with a smooth, mobile-friendly booking flow.",
    features: [
      {
        icon: "🏙️",
        title: "City-Aware Service Discovery",
        desc: "Supports localized browsing for Dubai, Abu Dhabi, and Sharjah with city-specific hero content, popular service groupings, and fast service search suggestions.",
      },
      {
        icon: "🛒",
        title: "Multi-Step Booking Checkout",
        desc: "Guides users through service selection, scheduling, address selection, pricing calculation, and final confirmation in a structured step-by-step experience.",
      },
      {
        icon: "💳",
        title: "Integrated Online Payments",
        desc: "Connects checkout to Ziina payment intents and status tracking with secure backend-assisted payment creation and robust client-side error handling.",
      },
      {
        icon: "🔐",
        title: "OTP Login with Fallback",
        desc: "Implements WhatsApp-first OTP delivery with SMS fallback, expiration windows, retry limits, and verification guardrails for reliable sign-in.",
      },
      {
        icon: "🧩",
        title: "Role-Based Operations Dashboard",
        desc: "Provides separate experiences for users, admins, managers, and super admins including appointment handling, service catalog management, pricing, offers, and website settings.",
      },
      {
        icon: "📨",
        title: "Automated Communication Workflows",
        desc: "Sends booking confirmations, reminders, and admin alerts through templated email pipelines to keep customers and operations teams synchronized.",
      },
    ],
    heroImage: "/projects/20.webp",
    bannerImage: "/projects/hero/20.webp",
    overview:
      "Service Market was engineered as a practical, end-to-end marketplace for booking home services in the UAE. It combines dynamic service management, transparent pricing workflows, secure authentication, and a modern frontend so users can move from discovery to confirmed booking with minimal friction.",
    challenges:
      "A major engineering challenge was keeping booking and operations flows reliable while coordinating multiple external dependencies such as payment gateways, OTP channels, and notification services. We addressed this through guarded API integrations, fallback mechanisms, strict validation, and clear role-based boundaries across frontend and backend modules.",
    achievements:
      "Delivered a complete on-demand services platform with city-specific discovery, stable multi-step checkout, payment integration, OTP authentication resilience, and admin-grade content/pricing/offer controls, resulting in a smoother booking journey and stronger day-to-day operational control.",
    techStack: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React Router",
      "TanStack Query",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
      "Twilio",
      "Nodemailer",
      "Ziina API",
    ],
    liveUrl: "https://servicemarket.com",
    githubUrl: "https://github.com/",
    year: "2026",
    color: "#01788E",
  },
  {
    slug: "mastertools",
    tabName: "MasterTools - Subscription Hub",
    domain: "subscription-platform",
    title: "MasterTools BD - Premium Access Hub",
    badge: "SaaS Platform",
    description:
      "MasterTools BD is a unified subscription platform that provides users with access to multiple premium digital services under one system, featuring secure payments, automated order management, and a scalable full-stack architecture.",
    features: [
      {
        icon: "🔑",
        title: "All-in-One Premium Access",
        desc: "Offers access to multiple premium platforms (software, streaming, tools) through a single unified subscription system.",
      },
      {
        icon: "💳",
        title: "Integrated Payment System",
        desc: "Supports secure payment processing with automated order confirmation and transaction handling.",
      },
      {
        icon: "📦",
        title: "Order Management System",
        desc: "Includes a complete backend system to manage orders, track status, handle delivery workflows, and maintain transaction records.",
      },
      {
        icon: "👤",
        title: "User Account & Subscription Control",
        desc: "Allows users to manage their subscriptions, track purchases, and access services from a centralized dashboard.",
      },
      {
        icon: "⚙️",
        title: "Full Backend Automation",
        desc: "Automates workflows including order processing, service allocation, and status updates to reduce manual operations.",
      },
      {
        icon: "📊",
        title: "Admin Dashboard & Control Panel",
        desc: "Provides admins with tools to manage users, orders, subscriptions, and monitor system performance.",
      },
      {
        icon: "🎨",
        title: "Modern Landing & UX Design",
        desc: "Delivers a high-converting, visually appealing landing page optimized for user engagement and subscription growth.",
      },
      {
        icon: "🔒",
        title: "Secure & Scalable Architecture",
        desc: "Built with industry-ready practices ensuring data security, scalability, and reliability for growing user demand.",
      },
    ],
    heroImage: "/projects/21.webp",
    bannerImage: "/projects/hero/21.webp",
    overview:
      "MasterTools BD was developed as a full-stack SaaS platform to simplify access to premium digital services. Instead of managing multiple subscriptions separately, users can access everything from one place. The system handles everything from frontend experience to backend automation, including payments, order workflows, and subscription control.",
    challenges:
      "The biggest challenge was designing a scalable system that could securely handle multiple service types, manage subscriptions, and automate order flows. Ensuring payment reliability, preventing misuse, maintaining account integrity, and building a smooth user experience required strong backend architecture and careful system design.",
    achievements:
      "Successfully delivered a complete industry-ready subscription platform, streamlined access to premium services, automated order and payment workflows, and built a scalable system capable of supporting a growing user base.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "DigitalPayment",
      "OAuth2",
      "REST API",
      "Zustand",
    ],
    liveUrl: "https://mastertools-bd.vercel.app/",
    year: "2026",
    color: "#6C5CE7",
  },
];
