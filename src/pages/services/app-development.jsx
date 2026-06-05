import ServicePageLayout from "../ServicePageLayout";
import { Smartphone, Rocket, Users, Zap, Shield, Globe } from "lucide-react";

export default function AppDevelopment() {
  return (
    <ServicePageLayout
      seo={{
        title: "Mobile App Development UAE | NOVA Elite Systems",
        description:
          "Custom mobile app development for Android & iOS. Scalable, fast, and built for business growth in UAE.",
        keywords:
          "app development UAE, mobile app Dubai, iOS Android apps UAE, custom app development",
      }}

      hero={{
        title: "Mobile Apps That Scale Your Business",
        subtitle:
          "We build powerful mobile apps designed for real users and real growth.",
        cta: "Start Your App",
        mockups: [
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
          "https://images.unsplash.com/photo-1526498460520-4c246339dccb",
          "https://images.unsplash.com/photo-1551650975-87deedd944c3",
        ],
        trustItems: [
          "Android & iOS compatible",
          "Scalable cloud architecture",
          "Built for performance & speed",
        ],
        primaryCTA: "Start Project",
        primaryLink: "/start-project",
        secondaryCTA: "WhatsApp",
        secondaryLink:
          "https://wa.me/972582469913/?text=Hi%20NOVA%20Elite%20Systems%2C%20I%27m%20interested%20in%20your%20mobile%20app%20development%20services%2E%20Can%20we%20discuss%20my%20project%3F",
      }}

      audience={{
        title: "Perfect For",
        items: [
          "Startups launching digital products",
          "Businesses needing mobile presence",
          "Companies automating services",
          "E-commerce brands going mobile",
          "SaaS platforms expanding to mobile",
        ],
      }}

      benefits={{
        title: "Why Mobile Apps Work",
        items: [
          "Increase customer engagement",
          "Boost brand loyalty with mobile access",
          "Direct communication via push notifications",
          "Automate business processes",
          "Improve sales conversions",
          "Always available in your customer's pocket",
        ],
      }}

      deliverables={{
        title: "What You Get",
        subtitle: "Complete mobile application development solution.",
        items: [
          {
            title: "Android & iOS Apps",
            description: "Cross-platform or native mobile applications.",
          },
          {
            title: "Modern UI/UX Design",
            description: "Clean, intuitive, and user-focused interfaces.",
          },
          {
            title: "Backend Integration",
            description: "Secure APIs and scalable server architecture.",
          },
          {
            title: "User Authentication",
            description: "Login, signup, OTP, and secure access systems.",
          },
          {
            title: "Push Notifications",
            description: "Engage users with real-time updates.",
          },
          {
            title: "App Store Deployment",
            description: "We handle publishing on Google Play & Apple Store.",
          },
        ],
      }}

      bundles={{
        title: "Choose Your App Package",
        subtitle:
          "From simple MVPs to full-scale enterprise mobile systems.",

        items: [
          {
            title: "Starter App",
            subtitle: "Perfect for MVP & startups",
            price: "$217.80",
            popular: false,
            features: [
              "Basic mobile app",
              "Modern UI design",
              "API integration",
              "Push notifications",
              "App store support",
            ],
          },
          {
            title: "Business App",
            subtitle: "For growing businesses",
            price: "$888.99",
            popular: true,
            features: [
              "Advanced mobile app",
              "Custom backend",
              "Authentication system",
              "Admin dashboard",
              "Cloud integration",
              "Analytics setup",
              "Priority support",
            ],
          },
          {
            title: "Enterprise App",
            subtitle: "Large-scale mobile ecosystems",
            price: "Custom",
            popular: false,
            features: [
              "Scalable architecture",
              "Multi-platform system",
              "Advanced integrations",
              "Dedicated support team",
              "Full SaaS capability",
            ],
          },
        ],
      }}

      faq={{
        title: "Frequently Asked Questions",
        subtitle:
          "Everything you need to know about mobile app development.",

        items: [
          {
            q: "Do you build both Android and iOS apps?",
            a: "Yes, we build cross-platform and native apps depending on your needs.",
          },
          {
            q: "How long does development take?",
            a: "Most apps take 2–6 weeks depending on complexity.",
          },
          {
            q: "Can I update my app later?",
            a: "Yes, we build scalable apps that can be updated anytime.",
          },
          {
            q: "Do you handle app store publishing?",
            a: "Yes, we fully manage deployment to Google Play and Apple App Store.",
          },
        ],
      }}
    />
  );
}