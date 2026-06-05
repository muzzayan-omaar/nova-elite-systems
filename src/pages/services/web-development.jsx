import ServicePageLayout from "../ServicePageLayout";
// At the very top of web-development.jsx
import { Globe, Users, TrendingUp, Award, Zap, Shield } from "lucide-react";

export default function WebDevelopment() {
  return (
    <ServicePageLayout
      seo={{
        title: "Web Development Services in Uganda | NOVA Elite Systems",
        description:
          "Modern, high-performance web development for businesses. We build fast, SEO-optimized websites that convert visitors into customers.",
        keywords:
          "web development, business website design Uganda, modern websites Uganda, SEO websites Uganda, high-performance web development Uganda",
      }}

      hero={{
        title: "High-Performance Websites That Bring Customers",
        subtitle: "We design and build websites that don’t just look good — they convert.",
        cta: "Build My Website",
        mockups: [
          "https://res.cloudinary.com/diszilwhc/image/upload/v1780615173/EYENET-PARTNER_hzjbou.png",
          "https://res.cloudinary.com/diszilwhc/image/upload/v1780615172/RAYWEBSOLUTIONS-HOME_nofdxe.jpg",
          "https://res.cloudinary.com/diszilwhc/image/upload/v1780615172/EYENET-SHOP_e11k0t.png",
        ],
        trustItems: [
          "Trusted by 500+ clients in Uganda",
          "100% satisfaction guarantee",
          "Fast delivery without compromising quality"
        ],
          primaryCTA: "Start Project",
  primaryLink: "/start-project",
  secondaryCTA: "WhatsApp",
  secondaryLink: "https://wa.me/972582469913/?text=Hi%20NOVA%20Elite%20Systems%2C%20I%27m%20interested%20in%20your%20web%20development%20services.%20Can%20we%20discuss%20my%20project%3F",
      }}

      audience={{
        title: "Is This For You?",
        items: [
          "You need more customers online",
          "Your current website looks outdated",
          "You want a strong digital presence in Uganda",
        ],
      }}


deliverables={{
  title: "What We Build For You",
  subtitle: "Everything you get when working with us.",
  items: [
    {
      title: "Modern Website",
      description: "Fast, responsive, conversion-focused websites.",
    },
    {
      title: "Admin Dashboard",
      description: "Manage everything without coding.",
    },
    {
      title: "SEO Setup",
      description: "Rank higher on Google with proper optimization.",
    },
    {
      title: "Mobile Optimization",
      description: "Perfect experience on all devices.",
    },
    {
      title: "Performance Tuning",
      description: "Ultra-fast load speeds and clean architecture.",
    },
    {
      title: "Ongoing Support",
      description: "We stay with you after launch.",
    },
  ],
}}

bundles={{
  title: "Choose Your Web Development Package",
  subtitle:
    "Whether you're launching a startup or building enterprise infrastructure, we have a package designed for your goals.",

  items: [
    {
      title: "Essential",
      subtitle: "Perfect for startups & growing brands",

      price: "$272.25",

      popular: false,

      features: [
        "Modern responsive website",
        "Premium UI/UX design",
        "Mobile optimization",
        "SEO-ready structure",
        "Fast deployment",
        "Contact forms",
        "Analytics integration",
      ],
    },

    {
      title: "Business Elite",

      subtitle:
        "Built for serious businesses ready to scale",

      price: "$680.63",

      popular: true,

      features: [
        "Advanced business platform",
        "Admin dashboard",
        "Backend integration",
        "Premium animations",
        "API systems",
        "SEO optimization",
        "Conversion-focused architecture",
        "Priority support",
      ],
    },

    {
      title: "Enterprise",

      subtitle:
        "Complete digital infrastructure",

      price: "Custom",

      popular: false,

      features: [
        "Enterprise-grade architecture",
        "Custom SaaS systems",
        "Dedicated consultation",
        "Scalable infrastructure",
        "Advanced integrations",
        "Long-term partnership",
      ],
    },
  ],
}}

faq={{
  title: "Frequently Asked Questions",
  subtitle: "Everything you need to know about our web development services.",

  items: [
    {
      q: "How long does it take to build a website?",
      a: "Most websites are completed within 1–3 weeks depending on complexity, content readiness, and required integrations.",
    },

    {
      q: "Will my website work on mobile devices?",
      a: "Yes. Every website we build is fully responsive and optimized for phones, tablets, and desktops.",
    },

    {
      q: "Can I update my website myself?",
      a: "Absolutely. We can provide an admin dashboard or CMS that allows you to manage content without technical knowledge.",
    },

    {
      q: "Do you provide hosting and domains?",
      a: "Yes. We can manage the entire setup process including hosting, domains, email configuration, and deployment.",
    },

    {
      q: "Do you optimize websites for Google?",
      a: "Every website includes technical SEO foundations, performance optimization, and search-engine-friendly structure.",
    },
  ],
}}
    />
  );
}