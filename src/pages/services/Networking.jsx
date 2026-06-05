import ServicePageLayout from "../ServicePageLayout";
import { Network, Wifi, Shield, Server, Globe, Zap } from "lucide-react";

export default function Networking() {
  return (
    <ServicePageLayout
      seo={{
        title: "IT Networking Solutions UAE | Business Infrastructure Setup",
        description:
          "Reliable IT networking and infrastructure solutions in UAE. We design fast, secure, and scalable business networks.",
        keywords:
          "IT networking UAE, business network setup Dubai, enterprise networking Abu Dhabi, LAN WAN UAE",
      }}

      hero={{
        title: "Fast & Reliable Business Networking Solutions",
        subtitle:
          "We build secure, high-performance network systems for modern businesses.",
        cta: "Build My Network",
        mockups: [
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
          "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
          "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107",
        ],
        trustItems: [
          "Enterprise-grade network setup",
          "Secure & scalable infrastructure",
          "High-speed performance systems",
        ],
        primaryCTA: "Start Project",
        primaryLink: "/start-project",
        secondaryCTA: "WhatsApp",
        secondaryLink:
          "https://wa.me/972582469913/?text=Hi%20NOVA%20Elite%20Systems%2C%20I%27m%20interested%20in%20your%20networking%20services%2E%20Can%20we%20discuss%20my%20project%3F",
      }}

      audience={{
        title: "Perfect For",
        items: [
          "Offices & corporate setups",
          "Retail chains",
          "Data-driven businesses",
          "Warehouses & logistics companies",
          "Multi-floor buildings",
        ],
      }}

      benefits={{
        title: "Why Good Networking Matters",
        items: [
          "Faster business operations",
          "Secure internal communication",
          "Reduced downtime and interruptions",
          "Scalable infrastructure for growth",
          "Improved cloud connectivity",
          "Centralized IT control",
        ],
      }}

      deliverables={{
        title: "What We Deliver",
        subtitle: "Complete enterprise networking solutions from design to deployment.",
        items: [
          {
            title: "LAN & WAN Setup",
            description: "Fast and secure local and wide area networks.",
          },
          {
            title: "WiFi Infrastructure",
            description: "Enterprise-grade wireless coverage for all spaces.",
          },
          {
            title: "Router & Switch Configuration",
            description: "Optimized network hardware setup and tuning.",
          },
          {
            title: "Network Security",
            description: "Firewalls, protection systems, and secure access control.",
          },
          {
            title: "Server Setup",
            description: "On-premise or cloud-connected server infrastructure.",
          },
          {
            title: "Maintenance & Support",
            description: "Ongoing monitoring and technical support.",
          },
        ],
      }}

      bundles={{
        title: "Choose Your Networking Package",
        subtitle:
          "From small office setups to full enterprise infrastructure.",

        items: [
          {
            title: "Basic Office Setup",
            subtitle: "Small business network solution",
            price: "$199.00",
            popular: false,
            features: [
              "Basic LAN setup",
              "WiFi configuration",
              "Router installation",
              "Single office coverage",
            ],
          },
          {
            title: "Business Network",
            subtitle: "Reliable scalable office infrastructure",
            price: "$499.00",
            popular: true,
            features: [
              "Advanced LAN/WAN setup",
              "Secure WiFi system",
              "Multi-device optimization",
              "Firewall configuration",
              "Network monitoring setup",
              "Installation included",
            ],
          },
          {
            title: "Enterprise Infrastructure",
            subtitle: "Large-scale IT systems",
            price: "Custom",
            popular: false,
            features: [
              "Multi-site networking",
              "Cloud integration",
              "Dedicated servers",
              "Advanced cybersecurity",
              "Full IT infrastructure design",
            ],
          },
        ],
      }}

      faq={{
        title: "Frequently Asked Questions",
        subtitle:
          "Everything you need to know about networking solutions.",

        items: [
          {
            q: "What is included in a network setup?",
            a: "We design, install, and configure complete business networking systems including routers, switches, and WiFi.",
          },
          {
            q: "Can you support large offices?",
            a: "Yes, we build scalable systems for small offices to enterprise-level infrastructure.",
          },
          {
            q: "Do you provide security setup?",
            a: "Yes, firewall and network security are included in all business and enterprise packages.",
          },
          {
            q: "Can the system grow with my business?",
            a: "Absolutely, we design scalable networks that expand as your business grows.",
          },
        ],
      }}
    />
  );
}