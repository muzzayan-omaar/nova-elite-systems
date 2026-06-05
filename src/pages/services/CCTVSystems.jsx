import ServicePageLayout from "../ServicePageLayout";
import { Shield, Eye, Lock, Wifi, Database, Zap } from "lucide-react";

export default function CCTVSystems() {
  return (
    <ServicePageLayout
      seo={{
        title: "CCTV Installation & Security Systems UAE | NOVA Elite Systems",
        description:
          "Professional CCTV installation and smart security systems in UAE. Secure your business with advanced surveillance solutions.",
        keywords:
          "CCTV UAE, security cameras Dubai, surveillance systems Abu Dhabi, business security UAE",
      }}

      hero={{
        title: "Smart CCTV Systems That Protect Your Business",
        subtitle:
          "We design and install advanced surveillance systems that keep your property secure 24/7.",
        cta: "Secure My Business",
        mockups: [
          "https://images.unsplash.com/photo-1581091870622-3f2d5b0b2c1b",
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
          "https://images.unsplash.com/photo-1581092335397-9fa0e9b2f2b0",
        ],
        trustItems: [
          "24/7 surveillance protection",
          "Professional installation team",
          "Trusted across UAE businesses",
        ],
        primaryCTA: "Start Project",
        primaryLink: "/start-project",
        secondaryCTA: "WhatsApp",
        secondaryLink:
          "https://wa.me/972582469913/?text=Hi%20NOVA%20Elite%20Systems%2C%20I%27m%20interested%20in%20your%20CCTV%20installation%20services%2E%20Can%20we%20discuss%20my%20project%3F",
      }}

      audience={{
        title: "Who This Is For",
        items: [
          "Retail stores & malls",
          "Warehouses & logistics companies",
          "Offices & corporate buildings",
          "Residential apartments & villas",
          "Construction sites",
        ],
      }}

      benefits={{
        title: "Why Businesses Install CCTV",
        items: [
          "Prevent theft and unauthorized access",
          "Monitor operations remotely in real time",
          "Increase staff accountability",
          "24/7 security coverage",
          "Evidence recording for incidents",
          "Peace of mind for business owners",
        ],
      }}

      deliverables={{
        title: "What We Provide",
        subtitle: "Complete end-to-end surveillance solutions.",
        items: [
          {
            title: "HD CCTV Cameras",
            description: "High-resolution indoor and outdoor cameras.",
          },
          {
            title: "Remote Monitoring",
            description: "View live footage from anywhere via mobile or PC.",
          },
          {
            title: "Installation & Setup",
            description: "Professional installation with clean wiring.",
          },
          {
            title: "Recording Systems",
            description: "Secure DVR/NVR storage solutions.",
          },
          {
            title: "Motion Detection",
            description: "Smart alerts for suspicious activity.",
          },
          {
            title: "Maintenance Support",
            description: "Ongoing system checks and support.",
          },
        ],
      }}

      bundles={{
        title: "Choose Your Security Package",
        subtitle:
          "Flexible CCTV solutions for homes, offices, and large enterprises.",

        items: [
          {
            title: "Office Security",
            subtitle: "Ideal for small to medium offices",
            price: "$277.80",
            popular: false,
            features: [
              "4 HD CCTV cameras",
              "Remote monitoring setup",
              "Mobile viewing access",
              "Basic storage system",
              "Installation included",
            ],
          },
          {
            title: "Business Surveillance",
            subtitle: "Advanced protection for growing companies",
            price: "$599.99",
            popular: true,
            features: [
              "8–12 HD cameras",
              "Night vision monitoring",
              "Remote access dashboard",
              "Motion detection alerts",
              "Cloud backup support",
              "Advanced installation",
              "Priority support",
            ],
          },
          {
            title: "Enterprise Security",
            subtitle: "Full-scale security infrastructure",
            price: "Custom",
            popular: false,
            features: [
              "AI-powered monitoring",
              "Multi-site surveillance",
              "Central control system",
              "24/7 monitoring setup",
              "Advanced network integration",
              "Maintenance contract",
            ],
          },
        ],
      }}

      faq={{
        title: "Frequently Asked Questions",
        subtitle:
          "Everything you need to know about our CCTV installation services.",

        items: [
          {
            q: "How long does installation take?",
            a: "Most installations are completed within 1–3 days depending on system size.",
          },
          {
            q: "Can I view cameras remotely?",
            a: "Yes, all systems include mobile and PC remote access.",
          },
          {
            q: "Do you provide maintenance?",
            a: "Yes, we offer ongoing maintenance and system support.",
          },
          {
            q: "Is the system suitable for large buildings?",
            a: "Yes, we design scalable systems for small shops to large enterprises.",
          },
        ],
      }}
    />
  );
}