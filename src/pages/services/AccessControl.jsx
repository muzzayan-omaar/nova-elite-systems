import ServicePageLayout from "../../layouts/ServicePageLayout";
import { Fingerprint, Key, ShieldCheck, Users, Lock, Zap } from "lucide-react";

export default function AccessControl() {
  return (
    <ServicePageLayout
      seo={{
        title: "Access Control Systems UAE | Smart Security Solutions",
        description:
          "Advanced access control systems in UAE for offices, buildings, and secure facilities. Biometric, RFID, and smart entry solutions.",
        keywords:
          "access control UAE, biometric systems Dubai, smart locks UAE, security entry systems",
      }}

      hero={{
        title: "Smart Access Control for Modern Businesses",
        subtitle:
          "Control who enters your building with advanced biometric and smart entry systems.",
        cta: "Upgrade Security",
        mockups: [
          "https://images.unsplash.com/photo-1581093588401-7c7b2c0f2a8d",
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
        ],
        trustItems: [
          "Biometric & RFID solutions",
          "Secure entry systems",
          "Trusted enterprise security setups",
        ],
        primaryCTA: "Start Project",
        primaryLink: "/start-project",
        secondaryCTA: "WhatsApp",
        secondaryLink:
          "https://wa.me/972582469913/?text=Hi%20NOVA%20Elite%20Systems%2C%20I%27m%20interested%20in%20your%20access%20control%20solutions%2E%20Can%20we%20discuss%20my%20project%3F",
      }}

      audience={{
        title: "Ideal For",
        items: [
          "Corporate offices",
          "Government facilities",
          "Residential buildings & villas",
          "Hotels & hospitality",
          "Warehouses & restricted zones",
        ],
      }}

      benefits={{
        title: "Why Access Control Matters",
        items: [
          "Prevent unauthorized access",
          "Improve building security",
          "Track employee attendance",
          "Reduce internal security risks",
          "Automate entry management",
          "Enhance operational control",
        ],
      }}

      deliverables={{
        title: "System Features",
        subtitle: "Complete smart access control solutions for any facility.",
        items: [
          {
            title: "Biometric Systems",
            description: "Fingerprint and facial recognition access systems.",
          },
          {
            title: "RFID Access Cards",
            description: "Secure card-based entry for employees and visitors.",
          },
          {
            title: "Smart Door Locks",
            description: "Digital locks with remote access control.",
          },
          {
            title: "Attendance Tracking",
            description: "Automated employee attendance systems.",
          },
          {
            title: "Multi-Zone Control",
            description: "Manage different access levels across your facility.",
          },
          {
            title: "System Integration",
            description: "Connect with CCTV and security infrastructure.",
          },
        ],
      }}

      bundles={{
        title: "Choose Your Security Package",
        subtitle:
          "Flexible access control solutions for small offices to large enterprises.",

        items: [
          {
            title: "Basic Access",
            subtitle: "Small office security setup",
            price: "$199.00",
            popular: false,
            features: [
              "RFID entry system",
              "Basic installation",
              "Single entry point setup",
              "User management system",
            ],
          },
          {
            title: "Business Security",
            subtitle: "Advanced office protection",
            price: "$499.00",
            popular: true,
            features: [
              "Biometric + RFID system",
              "Multi-door access control",
              "Attendance tracking",
              "Remote management dashboard",
              "Security alerts",
              "Installation included",
            ],
          },
          {
            title: "Enterprise Security",
            subtitle: "Full facility protection system",
            price: "Custom",
            popular: false,
            features: [
              "Multi-building control system",
              "Advanced biometrics",
              "Cloud-based management",
              "Integration with CCTV",
              "Dedicated support",
            ],
          },
        ],
      }}

      faq={{
        title: "Frequently Asked Questions",
        subtitle:
          "Everything you need to know about access control systems.",

        items: [
          {
            q: "What is access control used for?",
            a: "It controls who can enter specific areas in your building using biometric, RFID, or digital systems.",
          },
          {
            q: "Can it integrate with CCTV?",
            a: "Yes, we integrate access control with CCTV for full security coverage.",
          },
          {
            q: "Is it suitable for small businesses?",
            a: "Yes, we offer scalable solutions from small offices to large enterprises.",
          },
          {
            q: "Can I manage access remotely?",
            a: "Yes, our systems include remote management dashboards.",
          },
        ],
      }}
    />
  );
}