import ServicePageLayout from "../ServicePageLayout";
import { Server, Layers, Users, Zap, Shield, Database } from "lucide-react";

export default function SaaSApplications() {
  return (
    <ServicePageLayout
      seo={{
        title: "SaaS Development UAE | NOVA Elite Systems",
        description:
          "We build scalable SaaS platforms, dashboards, and automation systems for startups and enterprises in UAE.",
        keywords:
          "SaaS development UAE, startup SaaS Dubai, web platforms UAE, cloud applications",
      }}

      hero={{
        title: "SaaS Platforms Built for Growth",
        subtitle:
          "Turn your idea into a scalable software business with powerful cloud systems.",
        cta: "Build My SaaS",
        mockups: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
          "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
        ],
        trustItems: [
          "Scalable cloud architecture",
          "Secure multi-tenant systems",
          "Built for startups & enterprise growth",
        ],
        primaryCTA: "Start Project",
        primaryLink: "/start-project",
        secondaryCTA: "WhatsApp",
        secondaryLink:
          "https://wa.me/972582469913/?text=Hi%20NOVA%20Elite%20Systems%2C%20I%27m%20interested%20in%20your%20SaaS%20development%20services%2E%20Can%20we%20discuss%20my%20idea%3F",
      }}

      audience={{
        title: "Ideal For",
        items: [
          "Startup founders with SaaS ideas",
          "Businesses automating workflows",
          "Companies scaling digital products",
          "Agencies building platforms for clients",
          "Entrepreneurs launching subscription models",
        ],
      }}

      benefits={{
        title: "Why SaaS Wins",
        items: [
          "Recurring monthly revenue models",
          "Highly scalable digital products",
          "Global customer reach",
          "Automation of manual business processes",
          "Lower operational costs over time",
          "High business valuation potential",
        ],
      }}

      deliverables={{
        title: "Your SaaS Will Include",
        subtitle: "Complete end-to-end SaaS platform development.",
        items: [
          {
            title: "Multi-Tenant Architecture",
            description:
              "Secure system where multiple users/customers run independently.",
          },
          {
            title: "Admin Dashboard",
            description:
              "Full control panel to manage users, data, and analytics.",
          },
          {
            title: "Authentication System",
            description:
              "Secure login, roles, permissions, and user management.",
          },
          {
            title: "API Development",
            description:
              "Scalable backend APIs for web and mobile integration.",
          },
          {
            title: "Payment Integration",
            description:
              "Subscription systems with Stripe or other gateways.",
          },
          {
            title: "Cloud Deployment",
            description:
              "Fully deployed, scalable cloud infrastructure.",
          },
        ],
      }}

      bundles={{
        title: "Choose Your SaaS Package",
        subtitle:
          "From MVP validation to full enterprise SaaS platforms.",

        items: [
          {
            title: "SaaS MVP",
            subtitle: "Validate your idea fast",
            price: "$599.00",
            popular: false,
            features: [
              "Basic SaaS platform",
              "Authentication system",
              "Simple dashboard",
              "Database setup",
              "MVP deployment",
            ],
          },
          {
            title: "Growth SaaS",
            subtitle: "For scaling startups",
            price: "$1,499.00",
            popular: true,
            features: [
              "Full SaaS architecture",
              "Multi-user system",
              "Advanced dashboard",
              "Payment integration",
              "API system",
              "Cloud deployment",
              "Analytics setup",
            ],
          },
          {
            title: "Enterprise SaaS",
            subtitle: "Large-scale software systems",
            price: "Custom",
            popular: false,
            features: [
              "Multi-tenant enterprise system",
              "Advanced security & roles",
              "Custom integrations",
              "Dedicated infrastructure",
              "Long-term scaling support",
            ],
          },
        ],
      }}

      faq={{
        title: "Frequently Asked Questions",
        subtitle:
          "Everything you need to know about SaaS development.",

        items: [
          {
            q: "What is SaaS development?",
            a: "SaaS (Software as a Service) is cloud-based software that users access online via subscriptions.",
          },
          {
            q: "Can you build MVP first?",
            a: "Yes, we specialize in building MVPs to validate your idea before scaling.",
          },
          {
            q: "Do you handle payments and subscriptions?",
            a: "Yes, we integrate Stripe and other payment systems for recurring billing.",
          },
          {
            q: "Can my SaaS scale globally?",
            a: "Yes, we build cloud-native systems designed for global scaling.",
          },
        ],
      }}
    />
  );
}