import {
  Globe,
  Smartphone,
  Cloud,
  Camera,
  Fingerprint,
  Network,
  Building2,
  Shield,
  ShoppingCart,
  Hospital,
} from "lucide-react";

export const services = [
  {
    slug: "web-development",

    hero: {
      eyebrow: "DIGITAL SOLUTIONS",
      title: "Enterprise Web Development",
      subtitle:
        "Modern scalable business platforms engineered for growth, security and performance.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },

    trustBar: [
      {
        value: "120+",
        label: "Projects Delivered",
      },
      {
        value: "99.9%",
        label: "Infrastructure Uptime",
      },
      {
        value: "24/7",
        label: "Technical Support",
      },
      {
        value: "10+",
        label: "Industries Served",
      },
    ],

    splits: [
      {
        eyebrow: "SCALABLE ARCHITECTURE",
        title:
          "High-performance platforms engineered for modern businesses.",
        description:
          "We build scalable digital ecosystems optimized for growth, automation and operational efficiency.",

        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c",

        features: [
          {
            title: "Custom React Platforms",
            desc:
              "Enterprise-grade frontend systems built for speed and scalability.",
          },
          {
            title: "Backend Infrastructure",
            desc:
              "Secure APIs, databases and cloud-connected services.",
          },
          {
            title: "SEO Optimization",
            desc:
              "Built-in search visibility and performance optimization.",
          },
        ],
      },

      {
        eyebrow: "BUSINESS AUTOMATION",
        title:
          "Integrated systems that streamline operations.",
        description:
          "From client portals to management dashboards, we engineer systems that reduce manual work and improve productivity.",

        reverse: true,

        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f",

        features: [
          {
            title: "Admin Dashboards",
            desc:
              "Centralized operational control systems.",
          },
          {
            title: "Analytics & Reporting",
            desc:
              "Real-time business insights and monitoring.",
          },
          {
            title: "Cloud Integration",
            desc:
              "Scalable deployment infrastructure.",
          },
        ],
      },
    ],

    process: [
      {
        title: "Discovery & Planning",
        desc:
          "We analyze your business requirements and define scalable system architecture.",
      },

      {
        title: "Design & Engineering",
        desc:
          "UI/UX systems and infrastructure are engineered for performance and usability.",
      },

      {
        title: "Deployment & Scaling",
        desc:
          "Launch, optimization and long-term scalability planning.",
      },
    ],

    industries: [
      {
        icon: Building2,
        title: "Corporate",
        desc:
          "Enterprise digital transformation solutions.",
      },

      {
        icon: ShoppingCart,
        title: "E-Commerce",
        desc:
          "Scalable online commerce platforms.",
      },

      {
        icon: Hospital,
        title: "Healthcare",
        desc:
          "Secure systems for healthcare operations.",
      },

      {
        icon: Shield,
        title: "Government",
        desc:
          "Infrastructure-grade secure solutions.",
      },
    ],

    techStack: [
      {
        category: "Frontend",
        items: [
          "React",
          "Tailwind CSS",
          "Next.js",
          "Framer Motion",
        ],
      },

      {
        category: "Backend",
        items: [
          "Node.js",
          "Express",
          "MongoDB",
          "REST APIs",
        ],
      },

      {
        category: "Infrastructure",
        items: [
          "Cloudinary",
          "Render",
          "Vercel",
          "Docker",
        ],
      },

      {
        category: "Security",
        items: [
          "JWT Auth",
          "Encryption",
          "Access Control",
          "Monitoring",
        ],
      },
    ],
  },

  {
  slug: "app-development",

  hero: {
    eyebrow: "MOBILE SOLUTIONS",
    title: "Custom App Development",
    subtitle:
      "High-performance mobile applications designed for scale, usability and business automation.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
  },

  trustBar: [
    {
      value: "50+",
      label: "Apps Delivered",
    },
    {
      value: "99%",
      label: "Crash-free Stability",
    },
    {
      value: "24/7",
      label: "Monitoring",
    },
    {
      value: "Cross",
      label: "Platform Support",
    },
  ],

  splits: [
    {
      eyebrow: "MOBILE EXPERIENCES",
      title:
        "Modern applications engineered for performance.",
      description:
        "We develop responsive mobile applications optimized for business workflows, customer engagement and scalability.",

      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3",

      features: [
        {
          title: "Android & iOS Apps",
          desc:
            "Cross-platform applications with seamless user experiences.",
        },

        {
          title: "Realtime Systems",
          desc:
            "Live synchronization, notifications and connected services.",
        },

        {
          title: "Secure Infrastructure",
          desc:
            "Protected authentication and encrypted data systems.",
        },
      ],
    },

    {
      eyebrow: "BUSINESS MOBILITY",
      title:
        "Applications that move operations forward.",
      description:
        "Enterprise mobility systems designed to streamline internal workflows and customer interaction.",

      reverse: true,

      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",

      features: [
        {
          title: "Booking Systems",
          desc:
            "Automated scheduling and management systems.",
        },

        {
          title: "Customer Portals",
          desc:
            "Interactive user dashboards and account systems.",
        },

        {
          title: "Cloud Sync",
          desc:
            "Real-time cloud-connected application architecture.",
        },
      ],
    },
  ],

  process: [
    {
      title: "Requirement Analysis",
      desc:
        "Understanding business goals and mobile requirements.",
    },

    {
      title: "UI/UX Engineering",
      desc:
        "Designing intuitive and modern application experiences.",
    },

    {
      title: "Deployment & Optimization",
      desc:
        "Publishing, scaling and long-term maintenance.",
    },
  ],

  industries: [
    {
      icon: ShoppingCart,
      title: "Retail",
      desc:
        "Mobile commerce and ordering systems.",
    },

    {
      icon: Hospital,
      title: "Healthcare",
      desc:
        "Appointment and patient interaction apps.",
    },

    {
      icon: Building2,
      title: "Corporate",
      desc:
        "Enterprise workforce mobility solutions.",
    },

    {
      icon: Shield,
      title: "Security",
      desc:
        "Secure operational monitoring systems.",
    },
  ],

  techStack: [
    {
      category: "Frontend",
      items: [
        "React Native",
        "Flutter",
        "Expo",
        "Tailwind",
      ],
    },

    {
      category: "Backend",
      items: [
        "Node.js",
        "MongoDB",
        "Firebase",
        "Express",
      ],
    },

    {
      category: "Infrastructure",
      items: [
        "Cloud Hosting",
        "Push Notifications",
        "Realtime APIs",
        "Storage Systems",
      ],
    },

    {
      category: "Security",
      items: [
        "JWT",
        "Encryption",
        "Access Rules",
        "Authentication",
      ],
    },
  ],
},

{
  slug: "saas-applications",

  hero: {
    eyebrow: "CLOUD SYSTEMS",
    title: "SaaS Application Development",
    subtitle:
      "Cloud-native platforms engineered for automation, scalability and operational intelligence.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  },

  trustBar: [
    {
      value: "Cloud",
      label: "Infrastructure Ready",
    },
    {
      value: "99.9%",
      label: "Availability",
    },
    {
      value: "Secure",
      label: "Architecture",
    },
    {
      value: "Scale",
      label: "Ready Systems",
    },
  ],

  splits: [
    {
      eyebrow: "CLOUD OPERATIONS",
      title:
        "Enterprise SaaS platforms built for scale.",
      description:
        "Modern cloud-native systems enabling automation, analytics and operational efficiency.",

      image:
        "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3",

      features: [
        {
          title: "Subscription Systems",
          desc:
            "Scalable SaaS billing and account management.",
        },

        {
          title: "Realtime Dashboards",
          desc:
            "Operational analytics and live monitoring systems.",
        },

        {
          title: "API Infrastructure",
          desc:
            "Connected services and third-party integrations.",
        },
      ],
    },

    {
      eyebrow: "BUSINESS AUTOMATION",
      title:
        "Operational systems engineered for growth.",
      description:
        "Reduce repetitive workflows through intelligent automation platforms.",

      reverse: true,

      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

      features: [
        {
          title: "Workflow Automation",
          desc:
            "Automated operational task systems.",
        },

        {
          title: "Analytics Engines",
          desc:
            "Business intelligence and reporting systems.",
        },

        {
          title: "Multi-user Platforms",
          desc:
            "Team collaboration and account management.",
        },
      ],
    },
  ],

  process: [
    {
      title: "Business Analysis",
      desc:
        "Mapping operational requirements and workflows.",
    },

    {
      title: "Cloud Engineering",
      desc:
        "Building scalable infrastructure and APIs.",
    },

    {
      title: "Optimization & Scaling",
      desc:
        "Long-term growth architecture and deployment.",
    },
  ],

  industries: [
    {
      icon: Building2,
      title: "Corporate",
      desc:
        "Operational cloud systems.",
    },

    {
      icon: ShoppingCart,
      title: "Commerce",
      desc:
        "Inventory and customer management platforms.",
    },

    {
      icon: Hospital,
      title: "Healthcare",
      desc:
        "Management and scheduling systems.",
    },

    {
      icon: Shield,
      title: "Security",
      desc:
        "Infrastructure monitoring solutions.",
    },
  ],

  techStack: [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "Tailwind",
        "Charts",
      ],
    },

    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "MongoDB",
        "Redis",
      ],
    },

    {
      category: "Infrastructure",
      items: [
        "Docker",
        "Cloud Hosting",
        "CI/CD",
        "Storage",
      ],
    },

    {
      category: "Security",
      items: [
        "JWT",
        "Access Control",
        "Encryption",
        "Monitoring",
      ],
    },
  ],
},

{
  slug: "cctv-systems",

  hero: {
    eyebrow: "SECURITY INFRASTRUCTURE",
    title: "Enterprise CCTV Systems",
    subtitle:
      "Advanced surveillance systems engineered for monitoring, protection and operational control.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
  },

  trustBar: [
    {
      value: "24/7",
      label: "Monitoring",
    },
    {
      value: "HD",
      label: "Surveillance Systems",
    },
    {
      value: "Remote",
      label: "Access Enabled",
    },
    {
      value: "AI",
      label: "Detection Ready",
    },
  ],

  splits: [
    {
      eyebrow: "ADVANCED MONITORING",
      title:
        "Surveillance infrastructure built for reliability.",
      description:
        "Professional CCTV deployment for businesses, facilities and enterprise environments.",

      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827",

      features: [
        {
          title: "HD Camera Systems",
          desc:
            "High-definition enterprise surveillance systems.",
        },

        {
          title: "Remote Viewing",
          desc:
            "Secure mobile and remote access monitoring.",
        },

        {
          title: "Storage Infrastructure",
          desc:
            "NVR and cloud-connected recording systems.",
        },
      ],
    },

    {
      eyebrow: "SMART SECURITY",
      title:
        "Modern security operations powered by technology.",
      description:
        "Integrated security systems with scalable monitoring capabilities.",

      reverse: true,

      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",

      features: [
        {
          title: "Motion Detection",
          desc:
            "Automated monitoring and alerts.",
        },

        {
          title: "Access Monitoring",
          desc:
            "Integrated building surveillance systems.",
        },

        {
          title: "Network Integration",
          desc:
            "Connected infrastructure deployment.",
        },
      ],
    },
  ],

  process: [
    {
      title: "Site Assessment",
      desc:
        "Security evaluation and surveillance planning.",
    },

    {
      title: "Infrastructure Installation",
      desc:
        "Professional deployment and configuration.",
    },

    {
      title: "Monitoring & Maintenance",
      desc:
        "Long-term support and operational monitoring.",
    },
  ],

  industries: [
    {
      icon: Building2,
      title: "Corporate",
      desc:
        "Office and enterprise surveillance.",
    },

    {
      icon: ShoppingCart,
      title: "Retail",
      desc:
        "Store monitoring and loss prevention.",
    },

    {
      icon: Hospital,
      title: "Healthcare",
      desc:
        "Facility monitoring systems.",
    },

    {
      icon: Shield,
      title: "Government",
      desc:
        "Infrastructure-grade surveillance.",
    },
  ],

  techStack: [
    {
      category: "Hardware",
      items: [
        "IP Cameras",
        "NVR Systems",
        "PTZ Cameras",
        "Storage Servers",
      ],
    },

    {
      category: "Networking",
      items: [
        "PoE",
        "Fiber",
        "Structured Cabling",
        "Switches",
      ],
    },

    {
      category: "Software",
      items: [
        "Remote Monitoring",
        "Mobile Access",
        "AI Detection",
        "Alerts",
      ],
    },

    {
      category: "Security",
      items: [
        "Encrypted Access",
        "Authentication",
        "Backup Systems",
        "Monitoring",
      ],
    },
  ],
},

{
  slug: "access-control",

  hero: {
    eyebrow: "SMART SECURITY",
    title: "Access Control Systems",
    subtitle:
      "Intelligent access management infrastructure designed for security, monitoring and operational control.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },

  trustBar: [
    {
      value: "Biometric",
      label: "Authentication Systems",
    },
    {
      value: "24/7",
      label: "Entry Monitoring",
    },
    {
      value: "Cloud",
      label: "Remote Management",
    },
    {
      value: "Enterprise",
      label: "Security Standards",
    },
  ],

  splits: [
    {
      eyebrow: "SECURE ENTRY MANAGEMENT",
      title:
        "Modern access infrastructure for enterprise facilities.",
      description:
        "We deploy scalable access control systems that protect facilities, manage personnel movement and centralize security operations.",

      image:
        "https://images.unsplash.com/photo-1516321165247-4aa89a48be28",

      features: [
        {
          title: "Biometric Systems",
          desc:
            "Fingerprint and facial recognition access management.",
        },

        {
          title: "RFID & Smart Cards",
          desc:
            "Secure card-based entry systems for organizations.",
        },

        {
          title: "Remote Access Control",
          desc:
            "Cloud-enabled monitoring and management.",
        },
      ],
    },

    {
      eyebrow: "INTELLIGENT SECURITY",
      title:
        "Connected systems engineered for operational visibility.",
      description:
        "Integrated monitoring systems providing realtime logs, access analytics and centralized security management.",

      reverse: true,

      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",

      features: [
        {
          title: "Realtime Monitoring",
          desc:
            "Track facility movement and security events live.",
        },

        {
          title: "Multi-site Management",
          desc:
            "Centralized control across multiple locations.",
        },

        {
          title: "Integrated Surveillance",
          desc:
            "Connected CCTV and alarm infrastructure.",
        },
      ],
    },
  ],

  process: [
    {
      title: "Security Assessment",
      desc:
        "We analyze access points, risks and operational requirements.",
    },

    {
      title: "Infrastructure Deployment",
      desc:
        "Professional installation and system integration.",
    },

    {
      title: "Monitoring & Support",
      desc:
        "Long-term maintenance and operational monitoring.",
    },
  ],

  industries: [
    {
      icon: Building2,
      title: "Corporate",
      desc:
        "Office access and workforce management.",
    },

    {
      icon: Shield,
      title: "Government",
      desc:
        "Secure infrastructure and restricted facility systems.",
    },

    {
      icon: Hospital,
      title: "Healthcare",
      desc:
        "Controlled access and operational security.",
    },

    {
      icon: ShoppingCart,
      title: "Retail",
      desc:
        "Staff and inventory protection systems.",
    },
  ],

  techStack: [
    {
      category: "Hardware",
      items: [
        "Biometric Readers",
        "RFID Systems",
        "Smart Locks",
        "Control Panels",
      ],
    },

    {
      category: "Infrastructure",
      items: [
        "PoE Networking",
        "Cloud Connectivity",
        "Structured Cabling",
        "Power Backup",
      ],
    },

    {
      category: "Software",
      items: [
        "Monitoring Dashboards",
        "Attendance Systems",
        "Access Logs",
        "Remote Management",
      ],
    },

    {
      category: "Security",
      items: [
        "Encryption",
        "Role Management",
        "Authentication",
        "Audit Logging",
      ],
    },
  ],
},

{
  slug: "networking",

  hero: {
    eyebrow: "NETWORK INFRASTRUCTURE",
    title: "Enterprise Networking Solutions",
    subtitle:
      "Scalable networking infrastructure engineered for speed, reliability and secure connectivity.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },

  trustBar: [
    {
      value: "High-speed",
      label: "Connectivity Systems",
    },
    {
      value: "24/7",
      label: "Network Monitoring",
    },
    {
      value: "Secure",
      label: "Infrastructure Design",
    },
    {
      value: "Enterprise",
      label: "Scalability",
    },
  ],

  splits: [
    {
      eyebrow: "CONNECTED OPERATIONS",
      title:
        "Networking infrastructure designed for performance.",
      description:
        "We build secure enterprise-grade networks optimized for operational efficiency, communication and scalability.",

      image:
        "https://images.unsplash.com/photo-1520869562399-e772f042f422",

      features: [
        {
          title: "Structured Cabling",
          desc:
            "Professional organized infrastructure deployment.",
        },

        {
          title: "Wireless Networks",
          desc:
            "High-performance WiFi infrastructure for modern operations.",
        },

        {
          title: "Fiber Connectivity",
          desc:
            "High-speed backbone infrastructure solutions.",
        },
      ],
    },

    {
      eyebrow: "NETWORK SECURITY",
      title:
        "Reliable and protected connectivity infrastructure.",
      description:
        "Secure enterprise networking with monitoring, segmentation and operational redundancy.",

      reverse: true,

      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",

      features: [
        {
          title: "Firewall Systems",
          desc:
            "Protected traffic management and threat prevention.",
        },

        {
          title: "VLAN Architecture",
          desc:
            "Segmented and optimized enterprise networks.",
        },

        {
          title: "Monitoring & Maintenance",
          desc:
            "Realtime infrastructure visibility and diagnostics.",
        },
      ],
    },
  ],

  process: [
    {
      title: "Infrastructure Assessment",
      desc:
        "Evaluation of connectivity, scalability and operational needs.",
    },

    {
      title: "Deployment & Configuration",
      desc:
        "Professional network installation and optimization.",
    },

    {
      title: "Monitoring & Expansion",
      desc:
        "Long-term maintenance and infrastructure scaling.",
    },
  ],

  industries: [
    {
      icon: Building2,
      title: "Corporate",
      desc:
        "Enterprise communication infrastructure.",
    },

    {
      icon: Hospital,
      title: "Healthcare",
      desc:
        "Reliable secure medical connectivity systems.",
    },

    {
      icon: Shield,
      title: "Government",
      desc:
        "Infrastructure-grade networking security.",
    },

    {
      icon: Globe,
      title: "Multi-site Organizations",
      desc:
        "Connected branch and distributed operations.",
    },
  ],

  techStack: [
    {
      category: "Infrastructure",
      items: [
        "Fiber Optics",
        "Structured Cabling",
        "PoE",
        "Server Racks",
      ],
    },

    {
      category: "Networking",
      items: [
        "Cisco",
        "MikroTik",
        "Ubiquiti",
        "TP-Link Omada",
      ],
    },

    {
      category: "Security",
      items: [
        "Firewalls",
        "VLANs",
        "VPN",
        "Traffic Monitoring",
      ],
    },

    {
      category: "Monitoring",
      items: [
        "Realtime Diagnostics",
        "Performance Analytics",
        "Remote Monitoring",
        "Alert Systems",
      ],
    },
  ],
},
];