export type CaseStudyTool = {
  name: string;
  icon: string;
};

export type CaseStudyMeta = {
  label: string;
  value?: string;
  tools?: CaseStudyTool[];
};

export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudyTable = {
  headers: string[];
  rows: string[][];
};

export type CaseStudyDetailSection = {
  label?: string;
  heading: string;
  body: string;
  note?: string;
};

export type CaseStudySectionGroup = {
  label: string;
  intro?: string;
  items?: CaseStudyDetailSection[];
  metrics?: CaseStudyMetric[];
};

export type NarrativeColorPalette = {
  title: string;
  colors: { hex: string; hexEnd?: string; label?: string }[];
};

export type TypographySection = {
  heading: string;
  body?: string | string[];
  fontFamily: string;
  fontDescription: string;
  weights: { label: string; weight: number }[];
  groups: {
    title: string;
    items: {
      token: string;
      size: string;
      weight: number;
      weightLabel: string;
      sample: string;
      uppercase?: boolean;
    }[];
  }[];
};

export type IconsSection = {
  heading: string;
  body?: string | string[];
  iconNames: string[];
};

export type ButtonsSection = {
  heading: string;
  body?: string | string[];
};

export type WebsitePreviewSection = {
  url: string;
  title?: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
  /**
   * Optional static screenshot gallery. When provided, the live-site preview
   * UI (hover CTA + link) is replaced with a screenshot grid.
   */
  gallery?: {
    src: string;
    alt: string;
  }[];
};

export type ShadowsSection = {
  heading: string;
  body?: string | string[];
  groups: {
    title: string;
    items: {
      label: string;
      x: number;
      y: number;
      blur: number;
      spread: number;
      color: string;
      css: string;
    }[];
  }[];
};

export type NarrativeSection = {
  heading: string;
  paragraphs: string[];
  images?: {
    src: string;
    alt: string;
    objectFit?: "contain" | "cover";
    width?: number;
    height?: number;
    aspectClass?: string;
    fullBleed?: boolean;
  }[];
  colorPalettes?: NarrativeColorPalette[];
};

export type CaseStudyDetail = {
  slug: string;
  title: string;
  buildingTitle: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  heroBackground: string;
  /** Brand colour for major section titles on this case study. */
  headingColor?: string;
  /** Border stroke for cards on this case study. */
  cardStrokeColor?: string;
  /** Renders an interactive component collage instead of a hero image. */
  heroCollage?: boolean;
  intro: string;
  meta: CaseStudyMeta[];
  confidentialityNote?: string;
  /** Essay-style layout (e.g. design system case studies). */
  narrative?: {
    lede?: string;
    sections: NarrativeSection[];
    closing?: string;
  };
  whatIs?: {
    heading: string;
    body: string;
  };
  challenge?: {
    heading: string;
    intro?: string;
    statementLabel?: string;
    statement?: string;
    body: string;
    cards?: string[];
    closing?: string;
  };
  howMightWeLabel?: string;
  howMightWe?: string;
  howMightWeImages?: { src: string; alt: string }[];
  primaryResearch?: {
    label?: string;
    heading?: string;
    body?: string;
    images?: {
      src: string;
      alt: string;
      objectFit?: "contain" | "cover";
      width?: number;
      height?: number;
    }[];
    cards?: {
      title: string;
      body: string;
      relevance?: string;
      influence?: string;
      image: { src: string; alt: string };
    }[];
  };
  userPersonas?: {
    label?: string;
    heading?: string;
    body?: string;
    images?: { src: string; alt: string }[];
    cards?: {
      icon: "users" | "spark" | "grid" | "hourglass";
      title: string;
      body: string;
    }[];
  };
  journeyMapping?: {
    label?: string;
    heading?: string;
    subheading?: string;
    body?: string | string[];
    cards?: string[];
    colorPalettes?: {
      title: string;
      groups?: {
        label: string;
        colors: { hex: string; hexEnd?: string; label?: string }[];
      }[];
      colors?: { hex: string; hexEnd?: string; label?: string }[];
    }[];
    images?: {
      src: string;
      alt: string;
      objectFit?: "contain" | "cover";
      width?: number;
      height?: number;
    }[];
  };
  typography?: TypographySection;
  icons?: IconsSection;
  buttons?: ButtonsSection;
  shadows?: ShadowsSection;
  needsAndFunctions?: {
    label: string;
    body: string;
    items?: string[];
    images?: { src: string; alt: string }[];
  };
  gigaMap?: {
    label: string;
    heading?: string;
    body?: string;
    images?: {
      src: string;
      alt: string;
      objectFit?: "contain" | "cover";
      width?: number;
      height?: number;
    }[];
  };
  ideaGeneration?: {
    label: string;
    heading?: string;
    body?: string;
    images?: { src: string; alt: string }[];
    closing?: string;
    afterImages?: {
      src: string;
      alt: string;
      objectFit?: "contain" | "cover";
      width?: number;
      height?: number;
    }[];
  };
  lowFidelity?: {
    label: string;
    items: string[];
    imageLayout?: "stack" | "grid";
    systemLoop?: {
      title?: string;
      steps: string[];
      image?: {
        src: string;
        alt: string;
        width?: number;
        height?: number;
      };
    };
    images?: {
      src: string;
      alt: string;
      objectFit?: "contain" | "cover";
      width?: number;
      height?: number;
    }[];
  };
  midFidelity?: {
    label: string;
    heading?: string;
    body?: string;
    items?: string[];
    featureCards?: {
      icon: "audio" | "tactile";
      body: string;
    }[];
    closing?: string | string[];
    imageLayout?: "stack" | "grid";
    images?: {
      src: string;
      alt: string;
      objectFit?: "contain" | "cover";
      width?: number;
      height?: number;
    }[];
  };
  moodBoard?: {
    label: string;
    heading?: string;
    body: string;
    colorPalettes?: {
      title: string;
      groups?: {
        label: string;
        colors: { hex: string; hexEnd?: string; label?: string }[];
      }[];
      colors?: { hex: string; hexEnd?: string; label?: string }[];
    }[];
    images?: { src: string; alt: string }[];
  };
  outcome?: {
    label?: string;
    heading: string;
    body: string;
    metrics?: CaseStudyMetric[];
    table?: CaseStudyTable;
    breathingCards?: {
      title: string;
      subtitle?: string;
      steps: { value: string; label: string }[];
    }[];
    feedback?: {
      heading?: string;
      items: string[];
    };
    websitePreview?: WebsitePreviewSection;
    images?: { src: string; alt: string }[];
  };
  physicalMidFidelity?: {
    label: string;
    body?: string;
    images: {
      src: string;
      alt: string;
      objectFit?: "contain" | "cover";
      width?: number;
      height?: number;
    }[];
  };
  product?: {
    label?: string;
    heading: string;
    body?: string;
    images: { src: string; alt: string; objectFit?: "contain" | "cover"; aspectClass?: string }[];
  };
  model3d?: {
    label: string;
    body?: string;
    images: {
      src: string;
      alt: string;
      objectFit?: "contain" | "cover";
      width?: number;
      height?: number;
    }[];
  };
  highFidelity?: {
    label: string;
    body: string;
    mockup?: "iphone" | "laptop" | "square";
    slideshowLayout?: "stack" | "grid";
    slides?: { title: string; src: string; alt: string }[];
    slideshows?: {
      label: string;
      mockup?: "iphone" | "laptop" | "square";
      slides: { title: string; src: string; alt: string }[];
    }[];
  };
  prototype?: {
    label: string;
    video: string;
    poster?: string;
  };
  detailGroups?: CaseStudySectionGroup[];
  researchPaper?: {
    label: string;
    body: string;
    href: string;
    linkLabel?: string;
  };
  deepDive?: {
    label: string;
    title: string;
    href: string;
  };
  role?: {
    heading: string;
    body: string;
    bullets: string[];
  };
  readMoreHref?: string;
};

export const caseStudyDetails: CaseStudyDetail[] = [
  {
    slug: "little-sprout",
    title: "Little Sprout",
    buildingTitle: "Little Sprout",
    subtitle:
      "A pregnancy tracker app that helps parents monitor health, stay supported, and communicate\u00A0with\u00A0care\u00A0teams",
    heroImage: "/projects/little-sprout/solution-slide-18.jpg",
    heroImageAlt: "Little Sprout low-fidelity wireframes from slide 18",
    heroBackground: "#F5D7E8",
    headingColor: "#4100a3",
    cardStrokeColor: "color-mix(in srgb, #4100a3 42%, white)",
    intro:
      "Creating a service or a system that provides a safe space and continuous monitoring for pregnant women throughout their trimesters which facilitates seamless communication with their doctors and can get help instantly.",
    meta: [
      {
        label: "MY ROLE",
        value: "Research, Product Strategy, Testing, UI/UX Design and Prototyping",
      },
      {
        label: "DURATION",
        value: "10 Weeks",
      },
      {
        label: "TOOLS",
        tools: [
          { name: "Figma", icon: "/tools/figma.png" },
          { name: "Miro", icon: "/tools/miro.png" },
          { name: "Photoshop", icon: "/tools/photoshop.png" },
        ],
      },
      {
        label: "TEAM",
        value: "Individual",
      },
    ],
    whatIs: {
      heading: "Introduction",
      body: "Little Sprout is a pregnancy tracker where users can monitor health data, record symptoms, manage medicine and appointments, and access emotional and practical support throughout pregnancy. Partners and caregivers can also stay informed and take a more active role in the journey.",
    },
    challenge: {
      heading: "The Problem",
      intro:
        "Pregnant women in the USA often find it difficult for them to have a record of what the doctors told them during their consultation.",
      statementLabel: "Problem Statement",
      statement:
        "Pregnant women in the USA face stress and health risks due to the lack of a centralized system for accessing medical records, tracking symptoms, and having any support related to care and wellness.",
      body: "When patients and their family members cannot have access to their record or any data regarding their whole pregnancy journey it leads to anxiety and chaos amongst them. There is a lack of seamless communication among doctors, patients, family members and hospitals.\n\nThe whole process becomes difficult and cumbersome where they cannot schedule appointments, track their symptoms and detect any health risks beforehand. Without a centralized system the health and well-being of the mother and the unborn baby is at risk.",
    },
    howMightWeLabel: "How Might We",
    howMightWe:
      "How might we create a safe and supportive system that continuously monitors pregnancy, keeps medical information accessible, and helps mothers communicate seamlessly with doctors and caregivers?",
    howMightWeImages: [
      {
        src: "/projects/little-sprout/slide-3.jpg",
        alt: "Little Sprout main stakeholders: expecting mothers, family members and caregivers, doctors and gynaecologists",
      },
    ],
    primaryResearch: {
      label: "Research · Interview",
      images: [
        {
          src: "/projects/little-sprout/interview-insights.jpg",
          alt: "Interview insights from expecting mothers and partners",
        },
        {
          src: "/projects/little-sprout/slide-8.jpg",
          alt: "Competitive analysis of pregnancy apps including What To Expect, Ovia, Pregnancy+, Baby Center and Peanut",
        },
      ],
    },
    userPersonas: {
      label: "Research · User Persona",
      images: [
        {
          src: "/projects/little-sprout/slide-9.jpg",
          alt: "User persona for Pretzel John, an expecting mother and software engineer",
        },
        {
          src: "/projects/little-sprout/slide-10.jpg",
          alt: "User persona for Matthews Holland, an expecting father and business owner",
        },
      ],
    },
    journeyMapping: {
      label: "Research · Journey Mapping",
      body: "I mapped the user's journey to understand their experiences, emotions, pain points, and opportunities where my solution could provide meaningful support throughout their pregnancy.",
      images: [
        {
          src: "/projects/little-sprout/slide-11.jpg",
          alt: "User journey map for Little Sprout across the pregnancy experience",
        },
      ],
    },
    needsAndFunctions: {
      label: "Research · Needs and Functions",
      body: "Based on my user research and interview insights, I identified the key needs of expecting mothers, their partners, and healthcare providers. I translated these insights into core product functions that would simplify pregnancy management while reducing stress and uncertainty.",
      items: [
        "Identified the need for a centralized platform to access medical records and pregnancy information in one place.",
        "Designed a symptom and health tracking system to help users monitor their wellbeing throughout each trimester.",
        "Included medicine, nutrition, and appointment reminders to support healthy daily routines.",
        "Created features that enable partners and caregivers to stay informed and actively participate in the pregnancy journey.",
        "Integrated AI powered support to answer common pregnancy questions and provide instant guidance.",
        "Developed clear data visualizations to make health insights easy to understand and share with healthcare professionals.",
        "Added educational resources and wellness content to support both expecting mothers and their families.",
        "Focused on creating an intuitive, user-friendly experience that reduces stress and simplifies pregnancy management.",
      ],
    },
    lowFidelity: {
      label: "Low Fidelity",
      items: [
        "Created low fidelity wireframes to quickly explore the overall layout, user flow, and information architecture before focusing on visual design.",
        "Used these wireframes to validate core functionality and iterate on ideas early in the design process.",
      ],
      images: [
        {
          src: "/projects/little-sprout/slide-19.jpg",
          alt: "Little Sprout low fidelity wireframes exploring layout, user flow, and information architecture",
        },
      ],
    },
    midFidelity: {
      label: "Mid Fidelity",
      body: "I refined the low fidelity wireframes into mid fidelity prototypes by incorporating realistic content, clearer layouts, and intuitive interaction patterns. Through iterative design improvements, I enhanced the usability and overall user experience while validating key user flows. These prototypes established a strong foundation for the final high-fidelity interface and helped ensure the design effectively addressed user needs.",
      images: [
        {
          src: "/projects/little-sprout/slide-20.jpg",
          alt: "Little Sprout mid fidelity prototypes with realistic content, layouts, and interaction patterns",
        },
      ],
    },
    moodBoard: {
      label: "Mood Board",
      body: "I created a moodboard to define the visual direction of the product, focusing on a calm, supportive, and trustworthy experience through colours, typography, and imagery.",
      images: [
        {
          src: "/projects/little-sprout/moodboard.jpg",
          alt: "Little Sprout moodboard defining visual direction through colour, typography, and imagery",
        },
      ],
    },
    outcome: {
      label: "Research · Usability Testing",
      heading: "Gathering feedback",
      body: "Tested the app with 4 users who are in the age group of 23–26. They performed an explorative user testing.",
      table: {
        headers: ["Name", "Gender", "Age"],
        rows: [
          ["Farhana S", "F", "23"],
          ["Ananya Shekar", "F", "26"],
          ["Tanya B", "F", "25"],
          ["Nayanka Patil", "F", "26"],
        ],
      },
      feedback: {
        heading: "The following feedback was received by the participants:",
        items: [
          "What if the parents do not want to decide on the baby gender during selecting one at the baby bot.",
          "Really liked the idea of medicine streak which reminds me of Duolingo.",
          "What will happen if there is twins?",
          "I want to share my progress with other people as an achievement.",
          "I want to have an emergency help button incase I want to call someone or my partner while I am accessing the app.",
        ],
      },
      images: [
        {
          src: "/projects/little-sprout/slide-31-image-1.jpeg",
          alt: "Two participants exploring the Little Sprout prototype during user testing",
        },
        {
          src: "/projects/little-sprout/slide-31-image-2.jpeg",
          alt: "Participant interacting with the Little Sprout app prototype on a laptop",
        },
      ],
    },
    product: {
      label: "Final Design",
      heading: "Incorporating research & design elements",
      body: "I designed Little Sprout, a pregnancy tracking application that provides expecting parents with a centralized platform to monitor their health and wellbeing throughout pregnancy. The app enables users to track symptoms, monitor key health metrics, compare the baby's growth using relatable objects, access wellness resources, and receive AI powered support through the Baby Chat Assistant. By combining health tracking, educational content, and personalized guidance, the final design creates a seamless, supportive, and user-centred pregnancy experience.",
      images: [
        {
          src: "/projects/little-sprout/app-features.jpg",
          alt: "Little Sprout app features including AI integration, personalized dashboard, parental support, contraction timer, medicine tracking, and Baby Chat Assistant",
          objectFit: "contain",
          aspectClass: "aspect-[1024/377]",
        },
      ],
    },
    highFidelity: {
      label: "High Fidelity",
      body: "The final interface is focused on creating a calm, supportive, and user friendly experience while ensuring seamless navigation across key features such as symptom tracking, health monitoring, AI powered assistance, and wellness support.",
      slides: [
        {
          title: "Medicine Log Page",
          src: "/projects/little-sprout/hifi-screens/medicine-log-page.png",
          alt: "Little Sprout medicine log page",
        },
        {
          title: "Prescription Page",
          src: "/projects/little-sprout/hifi-screens/prescription-page.png",
          alt: "Little Sprout prescription page",
        },
        {
          title: "Symptom Tracker",
          src: "/projects/little-sprout/hifi-screens/symptom-tracker.png",
          alt: "Little Sprout symptom tracker",
        },
        {
          title: "Baby Bot",
          src: "/projects/little-sprout/hifi-screens/baby-bot.png",
          alt: "Little Sprout Baby Bot onboarding screen",
        },
        {
          title: "Chat Page",
          src: "/projects/little-sprout/hifi-screens/chat-page.png",
          alt: "Little Sprout Baby Bot chat page",
        },
        {
          title: "Calendar",
          src: "/projects/little-sprout/hifi-screens/calendar.png",
          alt: "Little Sprout calendar and schedule screen",
        },
        {
          title: "Wellness",
          src: "/projects/little-sprout/hifi-screens/wellness.png",
          alt: "Little Sprout wellness and support screen",
        },
        {
          title: "Detail Page",
          src: "/projects/little-sprout/hifi-screens/detail-page.png",
          alt: "Little Sprout wellness article detail page",
        },
        {
          title: "Daily Checkup Stress Level",
          src: "/projects/little-sprout/hifi-screens/daily-checkup-stress-level.png",
          alt: "Little Sprout daily checkup stress level screen",
        },
        {
          title: "Daily Checkup Sleep Quality",
          src: "/projects/little-sprout/hifi-screens/daily-checkup-sleep-quality.png",
          alt: "Little Sprout daily checkup sleep quality screen",
        },
        {
          title: "Daily Checkup Mood",
          src: "/projects/little-sprout/hifi-screens/daily-checkup-mood.png",
          alt: "Little Sprout daily checkup mood screen",
        },
        {
          title: "Daily Checkup Energy Level",
          src: "/projects/little-sprout/hifi-screens/daily-checkup-energy-level.png",
          alt: "Little Sprout daily checkup energy level screen",
        },
      ],
    },
    detailGroups: [
      {
        label: "Design Decisions",
        items: [
          {
            heading: "Relatable baby size comparisons",
            body: "Instead of relying only on fruit and vegetable comparisons, the design uses everyday objects that feel more familiar and relevant to the current generation.",
          },
          {
            heading: "Typography and colour choices",
            body: "Urbanist was selected for its sleek, approachable sans serif character. A baby pink to purple gradient communicates gentleness, innocence, devotion, and care, supported by black and white as primary colours.",
          },
          {
            heading: "Inclusive, expressive memojis",
            body: "Memojis create a modern and personal feel, make emotional expressions easier to read, and give the experience a more inclusive 3D visual language.",
          },
        ],
      },
      {
        label: "Reflection",
        items: [
          {
            heading: "User research shaped my design decisions",
            body: "Conducting interviews and analysing user pain points helped me prioritize features that addressed real challenges faced by expecting mothers and their support network.",
          },
          {
            heading: "Iteration improved the overall user experience",
            body: "Progressing from low-fidelity wireframes to high-fidelity prototypes allowed me to refine navigation, information hierarchy, and interactions based on continuous evaluation and feedback.",
          },
          {
            heading: "User testing highlighted opportunities for future improvements",
            body: "Feedback such as adding an emergency help button, supporting multiple pregnancies, and expanding personalization reinforced the importance of designing flexible, inclusive, and user-centred experiences.",
          },
        ],
      },
    ],
    prototype: {
      label: "Prototype",
      video: "/projects/little-sprout/prototype.mp4",
    },
    deepDive: {
      label: "explore my work",
      title: "Feature Deep Dive: Baby Talk and Daily Health Tracking",
      href: "#",
    },
    readMoreHref: "#",
  },
  {
    slug: "calma",
    title: "Calma",
    buildingTitle: "Calma",
    subtitle: "A portable mindfulness device for everyday wellbeing.",
    heroImage: "/projects/calma/hero-stress.jpg",
    heroImageAlt: "Student overwhelmed by study stress with open books and stress doodles overhead",
    heroBackground: "#F4F0EB",
    headingColor: "#7b6cef",
    cardStrokeColor: "#7b6cef",
    intro:
      "Calma is a portable mindfulness device that transforms moments of stress into opportunities for calm through guided breathing, tactile interactions, and immersive sensory experiences. Built for the demands of everyday student life.",
    meta: [
      {
        label: "MY ROLE",
        value: "Research, Concept Design, Interaction Design, Physical Prototyping, Arduino",
      },
      {
        label: "DURATION",
        value: "6 Months",
      },
      {
        label: "TOOLS",
        tools: [
          { name: "Figma", icon: "/tools/figma.png" },
          { name: "Miro", icon: "/tools/miro.png" },
          { name: "Arduino", icon: "/tools/arduino.png?v=2" },
        ],
      },
      {
        label: "PROJECT",
        value: "Graduate Project",
      },
    ],
    whatIs: {
      heading: "Introduction",
      body: "Calma is a portable mindfulness device designed to help teenagers and university students manage stress through guided breathing and multisensory interaction. Combining tactile controls, calming audio, and visual feedback, it creates immersive moments of pause anywhere from study spaces and libraries to dorm rooms and between classes. Built on an Arduino powered prototype, Calma encourages healthy mindfulness habits without relying on smartphones or apps.",
    },
    challenge: {
      heading: "The Problem",
      intro:
        "Teenagers and university students face constant academic pressure, but existing mindfulness tools are often screen based, time intensive, or difficult to integrate into everyday routines.",
      statementLabel: "Problem Statement",
      statement:
        "Teenagers and university students experience frequent academic stress but lack accessible, screen free tools that provide immediate emotional support without requiring lengthy sessions or collecting personal data.",
      body: "Four key challenges shaped the design brief:",
      cards: [
        "Constant academic stress.",
        "Lack of tools that help people relieve tension quickly.",
        "Having to store personal data in apps.",
        "Mindfulness that feels time-consuming and inaccessible.",
      ],
      closing:
        "Environmental noise, limited personal space, and tight schedules mean the design must emphasize portability and fast, simple interactions for users who are constantly on the go.",
    },
    howMightWeLabel: "How Might We",
    howMightWe:
      "How might we help students and teenagers practice brief, sensory mindfulness anywhere without relying on phones, long sessions, or data heavy apps?",
    primaryResearch: {
      label: "Research · Precedents",
      heading: "Relevant precedents",
      body: "Three products shaped how Calma could combine guided audio, brief sensory sessions, and interactive feedback for everyday stress relief.",
      cards: [
        {
          title: "Muse Headband",
          body: "During meditation, a wearable EEG gadget provides aural input in real time.",
          relevance:
            "Mindfulness is supported by guided audio and biofeedback.",
          influence:
            "Demonstrates how interactive relaxation experiences may be produced using physiological data.",
          image: {
            src: "/projects/calma/a1-img-p6-3.png",
            alt: "Muse headband product and live brainwave session app interface",
          },
        },
        {
          title: "Hatch Restore",
          body: "A nightstand gadget that combines guided meditation with calming noises.",
          relevance: "Relaxation with music in small private areas.",
          influence:
            "Emphasizes brief, simple mindfulness exercises for students and teenagers.",
          image: {
            src: "/projects/calma/a1-img-p6-2.png",
            alt: "Hatch Restore nightstand device with warm glow and clock display",
          },
        },
        {
          title: "RAINBOW Relaxation System",
          body: "Breathing and heart rate are used in an interactive biofeedback exhibit to control sound and graphics.",
          relevance:
            "Reduces stress by combining tactile and sensory feedback.",
          influence:
            "Encourages dynamic communication between Calma's user input and system output.",
          image: {
            src: "/projects/calma/a1-img-p6-1.png",
            alt: "RAINBOW breathing exercise graphic with mindful breathing rainbow arcs",
          },
        },
      ],
    },
    userPersonas: {
      label: "Research · Users & Stakeholders",
      heading: "Who Calma is for",
      body: "Primary users, the people who support them, and the everyday campus contexts where short mindfulness sessions need to fit.",
      cards: [
        {
          icon: "users",
          title: "Teenagers",
          body: "Ages 14–22 navigating academic stress, social pressure, and a need for quick emotional reset tools that feel private and approachable.",
        },
        {
          icon: "spark",
          title: "University students",
          body: "Students who need brief mindfulness breaks between study blocks or classes — without long sessions or phone-based wellbeing apps.",
        },
        {
          icon: "grid",
          title: "Stakeholders",
          body: "Educational institutions, student wellness centers, university counselors, and campus mental health programs supporting student wellbeing.",
        },
        {
          icon: "hourglass",
          title: "Everyday context",
          body: "Libraries, dorms, study lounges, and home designed for short 3–10 minute sessions amidst noise, limited space, and tight schedules.",
        },
      ],
    },
    journeyMapping: {
      label: "Research · Concept Foundation",
      body: "Calma sits on three theoretical foundations: emotional regulation and anxiety management (Barlow, 2002), habit formation through brief repeated sessions (Lally et al., 2010), and mindfulness principles that encourage present-moment awareness through guided sensory cues (Kabat-Zinn, 2003). Together they link mental health support with UN SDG 3 — Good Health and Wellbeing.",
      cards: ["Emotional Regulation", "Habit Formation", "Mindfulness"],
      images: [
        {
          src: "/projects/calma/a1-img-p9-1.png",
          alt: "Calma conceptual framework map connecting research, users, ethics, and functionality",
          objectFit: "contain",
          width: 3881,
          height: 1801,
        },
      ],
    },
    needsAndFunctions: {
      label: "Research · Needs and Functions",
      body: "From research and precedents, I translated student needs into portable, privacy-first functions that fit 3–10 minute breaks between study or classes.",
      items: [
        "Guided breathing through audio cues for quick emotional regulation.",
        "Tactile interfaces that support grounding without heavy screen use.",
        "Short 2–10 minute calming sessions that fit campus schedules.",
        "Portable form factor for bags, desks, libraries, and dorms.",
        "Privacy-first approach — no personal data stored in apps.",
        "Optional gentle vibration or sound cues for sensory feedback.",
        "Arduino-driven system coordinating display, speaker, and sensors.",
        "Routine integration so calm can become a repeatable daily habit.",
      ],
    },
    lowFidelity: {
      label: "System Design",
      items: [
        "Explored early form and interaction ideas for a handheld stress-buster that could live in everyday campus spaces.",
        "Mapped a simple breathing loop — Start, Inhale, Hold, Exhale, Wait, Repeat — as the core system behaviour.",
      ],
      systemLoop: {
        steps: ["Start", "Inhale", "Hold", "Exhale", "Wait", "Repeat"],
      },
    },
    midFidelity: {
      label: "Functionality & Purpose",
      body: "Calma is a small and portable device equipped with:",
      featureCards: [
        {
          icon: "audio",
          body: "Using audio cues to guide breathing exercises",
        },
        {
          icon: "tactile",
          body: "Interactive mindfulness using tactile interfaces",
        },
      ],
      closing: [
        "The idea is to provide users with a small stress buster so they may engage in brief, immersive mindfulness sessions anywhere.",
        "The Arduino Uno serves as the central control system, coordinating all digital and physical interactions: driving the TFT display, managing audio output through the speaker, and processing input from tactile sensors. The system supports performative interaction and routine integration.",
      ],
      images: [
        {
          src: "/projects/calma/arduino-prototype.jpg",
          alt: "Arduino Uno prototype with OLED display, buttons, and buzzer on a breadboard",
        },
      ],
    },
    outcome: {
      label: "Research · Breathing Methods",
      heading: "What are the breathing types?",
      body: "Calma offers multiple guided breathing techniques, allowing users to choose the practice that best suits their needs, from structured Box Breathing to gentle Relax Breathing.",
      breathingCards: [
        {
          title: "Box Breathing",
          steps: [
            { value: "4", label: "Inhale" },
            { value: "4", label: "Hold" },
            { value: "4", label: "Exhale" },
          ],
        },
        {
          title: "Coherent Breathing",
          steps: [
            { value: "5", label: "Inhale" },
            { value: "5", label: "Exhale" },
          ],
        },
        {
          title: "Relax Breathing",
          steps: [
            { value: "4", label: "Inhale" },
            { value: "7", label: "Hold" },
            { value: "8", label: "Exhale" },
          ],
        },
        {
          title: "Nostril Breathing",
          subtitle: "left & right nostril alternate breathing",
          steps: [
            { value: "4", label: "Inhale" },
            { value: "3", label: "Hold" },
            { value: "4", label: "Exhale" },
          ],
        },
      ],
      feedback: {
        heading: "Design principles reinforced by research:",
        items: [
          "Sessions must stay short enough for campus life (roughly 3–10 minutes).",
          "Interaction should work without requiring personal data or phone lock-in.",
          "Sensory cues (audio, light, touch) matter more than dense UI.",
          "Portability is essential for libraries, dorms, and study spaces.",
          "Habit formation depends on repeatable, low-friction routines.",
        ],
      },
    },
    physicalMidFidelity: {
      label: "Mid Fidelity",
      body: "I built a cardboard mid-fidelity prototype to test the handheld form, screen layout, and button placement — exploring inhale/exhale guidance, progress tracking, and graduation feedback before moving into digital and hardware builds.",
      images: [
        {
          src: "/projects/calma/mid-fidelity-prototype.png",
          alt: "Cardboard mid-fidelity Calma prototype with inhale/exhale screen mockup, progress tracker, and graduation screen",
          objectFit: "contain",
          width: 1024,
          height: 444,
        },
      ],
    },
    product: {
      label: "Final Design",
      heading: "Incorporating research & design elements",
      body: "Calma is a handheld companion with a square display, three tactile buttons, and a strap loop for everyday carry. It delivers brief guided breathing and sensory mindfulness so students can reclaim calm between study blocks — aligning interactive product design with emotional regulation, habit formation, and mindfulness research.",
      images: [
        {
          src: "/projects/calma/exhibition-slide-05.jpg",
          alt: "What is Calma — handheld device shown at scale in hand",
          objectFit: "contain",
          aspectClass: "aspect-[16/9]",
        },
      ],
    },
    model3d: {
      label: "3D Model",
      body: "I modelled Calma in SketchUp to explore the handheld form, screen recess, tactile controls, and strap loop before refining the final physical prototype.",
      images: [
        {
          src: "/projects/calma/3d-model-01.png",
          alt: "SketchUp 3D model of Calma showing the screen recess, three buttons, and side port",
          objectFit: "contain",
          width: 1024,
          height: 482,
        },
        {
          src: "/projects/calma/3d-model-02.png",
          alt: "SketchUp 3D model of Calma showing the front face, buttons, and strap loop",
          objectFit: "contain",
          width: 1024,
          height: 482,
        },
      ],
    },
    highFidelity: {
      label: "High Fidelity",
      body: "I designed the Calma interface in Figma first, then translated each screen into a pixel-friendly Arduino display version that fits the square TFT — keeping the same flows for avatar selection, breathing, progress, and rewards.",
      slideshows: [
        {
          label: "Figma Designs",
          mockup: "square",
          slides: [
            {
              title: "Avatar Screen",
              src: "/projects/calma/hi-fi/figma-avatar.png",
              alt: "Figma design — choose your avatar screen",
            },
            {
              title: "Breathing Screen",
              src: "/projects/calma/hi-fi/figma-breathing.png",
              alt: "Figma design — breathing timer exhale screen",
            },
            {
              title: "Progress Screen",
              src: "/projects/calma/hi-fi/figma-progress.png",
              alt: "Figma design — progress tracker screen",
            },
            {
              title: "Graduation Screen",
              src: "/projects/calma/hi-fi/figma-graduation.png",
              alt: "Figma design — congratulations graduation screen",
            },
            {
              title: "Home Screen",
              src: "/projects/calma/hi-fi/figma-home.png",
              alt: "Figma design — home progress screen",
            },
            {
              title: "Level Up Screen",
              src: "/projects/calma/hi-fi/figma-level-up.png",
              alt: "Figma design — level up congratulations screen",
            },
          ],
        },
        {
          label: "Arduino Screens",
          mockup: "square",
          slides: [
            {
              title: "Avatar Screen",
              src: "/projects/calma/hi-fi/arduino-avatar.png",
              alt: "Arduino screen — choose avatar",
            },
            {
              title: "Breathing Screen",
              src: "/projects/calma/hi-fi/arduino-breathing.png",
              alt: "Arduino screen — exhale breathing cue",
            },
            {
              title: "Progress Screen",
              src: "/projects/calma/hi-fi/arduino-progress.png",
              alt: "Arduino screen — progress view",
            },
            {
              title: "Graduation Screen",
              src: "/projects/calma/hi-fi/arduino-graduation.png",
              alt: "Arduino screen — congratulations completion",
            },
            {
              title: "Home Screen",
              src: "/projects/calma/hi-fi/arduino-home.png",
              alt: "Arduino screen — home day progress",
            },
            {
              title: "Level Up Screen",
              src: "/projects/calma/hi-fi/arduino-level-up.png",
              alt: "Arduino screen — level up",
            },
          ],
        },
      ],
    },
    detailGroups: [
      {
        label: "Design Decisions",
        items: [
          {
            heading: "Portable calm over phone apps",
            body: "Calma is a physical device so students can practice mindfulness without opening apps or storing personal wellbeing data on their phones.",
          },
          {
            heading: "Short sessions for campus life",
            body: "Interactions are designed for 3–10 minute windows between classes supporting habit formation without demanding long meditation blocks.",
          },
          {
            heading: "Sensory guidance through hardware",
            body: "Audio, tactile input, and a simple display work together so breathing guidance feels embodied coordinated by an Arduino based system architecture.",
          },
        ],
      },
      {
        label: "Reflection",
        items: [
          {
            heading: "Theory made the product sharper",
            body: "Grounding Calma in emotional regulation, habit formation, and mindfulness research clarified why brief sensory sessions could outperform generic wellness apps for students.",
          },
          {
            heading: "Precedents shaped the interaction model",
            body: "Studying Muse, Hatch Restore, and Rainbow Relaxation helped define how biofeedback, guided audio, and tactile cues could stay lightweight and ethical.",
          },
          {
            heading: "Wellbeing belongs in everyday spaces",
            body: "Designing for libraries, dorms, and study lounges reinforced that calm tools must travel with students not wait for a perfect quiet room.",
          },
        ],
      },
    ],
    prototype: {
      label: "Prototype Video",
      video: "/projects/calma/prototype.mp4",
    },
    deepDive: {
      label: "explore my work",
      title: "Feature Deep Dive: Guided Breathing Loop",
      href: "#",
    },
  },
  {
    slug: "amigo",
    title: "Amigo",
    buildingTitle: "Amigo",
    subtitle: "A friend indeed is what you need, a task management app helping kids manage academic tasks and time.",
    heroImage: "/projects/amigo/hero-child-laptop.png",
    heroImageAlt: "Child studying at a desk with Amigo open on a laptop for a science project",
    heroBackground: "#ECEFFA",
    headingColor: "#4f50fa",
    intro:
      "Amigo is a task management app for children aged 5–13 that helps students stay on top of their schoolwork, complete tasks on time, and build positive habits. Through gamification, rewards, and parent visibility, it reduces stress for both children and their parents.",
    meta: [
      {
        label: "MY ROLE",
        value: "Research, UX/UI Design, Prototyping and Testing",
      },
      {
        label: "DURATION",
        value: "6 months",
      },
      {
        label: "TOOLS",
        tools: [
          { name: "Figma", icon: "/tools/figma.png" },
          { name: "Miro", icon: "/tools/miro.png" },
          { name: "Premiere Pro", icon: "/tools/premierepro.png" },
        ],
      },
      {
        label: "TEAM",
        value: "Academic project",
      },
    ],
    whatIs: {
      heading: "Introduction",
      body: "Amigo is a gamified academic task management app that uses gamification to motivate children to complete assignments and projects through Bunny Coin rewards, progress tracking, and interactive challenges. Parents can assign tasks, monitor progress, and stay involved without constant micromanagement. A town inspired interface transforms core features into playful destinations including the Dashboard Centre, Job Centre, Rewards Centre, Leaderboard Centre, and Community Centre making task management feel engaging rather than overwhelming.",
    },
    challenge: {
      heading: "The Problem",
      intro:
        "Many students find it difficult to stay organised, often becoming distracted, missing deadlines, and gradually losing confidence in their academic abilities.",
      statementLabel: "Problem Statement",
      statement:
        "Poor time management and frequent distractions make it difficult for students to stay on top of their schoolwork, leading to missed deadlines, increased stress, declining confidence, and growing concern among parents about their child's learning and performance.",
      body: "Four pressures shaped the brief:",
      cards: [
        "Students lose focus and miss deadlines.",
        "Working parents cannot easily track academic tasks.",
        "Traditional timetables fail to keep kids motivated.",
        "Anxiety spikes near deadlines when tasks pile up.",
      ],
      closing:
        "The design needed an alternative to rigid schedules, one that keeps kids engaged through meaningful incentives while giving parents a single place to manage and monitor academic work.",
    },
    howMightWeLabel: "How Might We",
    howMightWe:
      "How might we help kids aged 5–13 manage their academic tasks and time more effectively, while giving parents the visibility and motivation tools they need without making the experience feel punitive?",
    primaryResearch: {
      label: "Research · Market Study",
      heading: "Relevant precedents",
      body: "I studied task-management and focus apps for children to understand what worked, what felt too clinical, and where Amigo could differentiate through rewards and gamification.",
      cards: [
        {
          title: "KazuTime",
          body: "A visual-timer app for kids aged 3–8 where a husky races along a path to show time remaining for chores or homework.",
          relevance:
            "Shows how visual time cues and personalized tasks can make deadlines feel approachable for younger users.",
          influence:
            "Informed Amigo's reward-point system and kid-friendly visual feedback around task completion.",
          image: {
            src: "/projects/amigo/competitor-kazutime-1.png",
            alt: "KazuTime visual timer app for children",
          },
        },
        {
          title: "Focus Keeper Pro",
          body: "A customizable Pomodoro-style timer with adjustable focus lengths, breaks, and background sounds for productivity.",
          relevance:
            "Demonstrates how timed focus sessions can help kids complete academic work in manageable chunks.",
          influence:
            "Inspired Amigo's focus timer feature for 30-minute concentration blocks with completion cues.",
          image: {
            src: "/projects/amigo/competitor-focus-keeper-1.jpeg",
            alt: "Focus Keeper Pro timer app interface",
          },
        },
        {
          title: "Chore Pad",
          body: "A chore-tracking system where parents assign tasks, kids mark completion, and rewards or penalty stars motivate follow-through.",
          relevance:
            "Highlights parent-assigned tasks and reward systems as proven patterns for household accountability.",
          influence:
            "Supported Amigo's parent task input, sticker rewards, and point deductions for missed deadlines.",
          image: {
            src: "/projects/amigo/competitor-chore-pad-1.jpeg",
            alt: "Chore Pad task assignment and tracking app",
          },
        },
      ],
      images: [
        {
          src: "/projects/amigo/competitor-analysis.png",
          alt: "Competitor analysis table comparing kid-friendly task and focus apps across key features",
          objectFit: "contain",
          width: 842,
          height: 595,
        },
      ],
    },
    userPersonas: {
      label: "Research · Users & Stakeholders",
      heading: "Who Amigo is for",
      cards: [
        {
          icon: "users",
          title: "Students",
          body: "Kids aged 5–13 who want to feel confident in school, stay on top of homework, and earn rewards for finishing tasks on time.",
        },
        {
          icon: "spark",
          title: "Parents",
          body: "Especially working parents or families with two or more children who need a simple way to assign, track, and motivate academic tasks.",
        },
        {
          icon: "grid",
          title: "Stakeholders",
          body: "Parents and students form the core user pair, with school schedules and academic routines shaping when tasks are assigned, completed, and due.",
        },
        {
          icon: "hourglass",
          title: "Everyday context",
          body: "Homework after school, weekend projects, and exam preparation can add up to 2–5 hours of academic work, making it important to balance study time with hobbies, rest, and family time.",
        },
      ],
    },
    journeyMapping: {
      label: "Research · Journey Mapping",
      body: "I mapped the existing customer journey to surface stress points near deadlines, then designed a desired journey where tasks, rewards, and parent visibility reduce anxiety and build habits early.",
      images: [
        {
          src: "/projects/amigo/journey-existing-1.png",
          alt: "Amigo existing customer journey map showing stress and procrastination near deadlines",
          objectFit: "contain",
          width: 2000,
          height: 1286,
        },
        {
          src: "/projects/amigo/journey-desired-table.jpg",
          alt: "Amigo desired customer journey with structured tasks, rewards, and parent support",
          objectFit: "contain",
          width: 1208,
          height: 569,
        },
      ],
    },
    needsAndFunctions: {
      label: "Research · Needs and Functions",
      body: "Interviews with 5 stakeholders and a survey of 45 parents translated into core product functions that balance student motivation with parent oversight.",
      images: [
        {
          src: "/projects/amigo/function-generation-01-02.png",
          alt: "Function generation mapping requirements to functions 01 and 02",
        },
        {
          src: "/projects/amigo/function-generation-03-04.png",
          alt: "Function generation mapping requirements to functions 03 and 04",
        },
      ],
    },
    gigaMap: {
      label: "Research · Giga Map",
      images: [
        {
          src: "/projects/amigo/giga-map.png",
          alt: "Amigo giga map synthesizing audience, pain points, journey, and solution concepts",
          objectFit: "contain",
          width: 1024,
          height: 720,
        },
      ],
    },
    ideaGeneration: {
      label: "Idea Generation",
      images: [
        {
          src: "/projects/amigo/idea-generation.png",
          alt: "Amigo idea generation board with incentivization, gamification, and feature concepts",
        },
      ],
      closing: "I categorized the idea into 5 groups.",
      afterImages: [
        {
          src: "/projects/amigo/idea-organization.png",
          alt: "Amigo idea organization and bundle grouping concepts into five categories",
          objectFit: "contain",
          width: 842,
          height: 595,
        },
      ],
    },
    lowFidelity: {
      label: "Low Fidelity",
      items: [
        "Explored early wireframes for task lists, rewards, and navigation before committing to the gamified town concept.",
        "Compared a simple side-nav approach against a building-based town map for kid-friendly wayfinding.",
      ],
      imageLayout: "grid",
      images: [
        { src: "/projects/amigo/lofi-p58-1.jpeg", alt: "Amigo low-fidelity wireframe — screen 1", objectFit: "contain", width: 387, height: 259 },
        { src: "/projects/amigo/lofi-p58-2.jpeg", alt: "Amigo low-fidelity wireframe — screen 2", objectFit: "contain", width: 283, height: 203 },
        { src: "/projects/amigo/lofi-p58-3.jpeg", alt: "Amigo low-fidelity wireframe — screen 3", objectFit: "contain", width: 294, height: 233 },
        { src: "/projects/amigo/lofi-p58-4.jpeg", alt: "Amigo low-fidelity wireframe — screen 4", objectFit: "contain", width: 258, height: 205 },
        { src: "/projects/amigo/lofi-p59-1.jpeg", alt: "Amigo low-fidelity wireframe — screen 5", objectFit: "contain", width: 368, height: 270 },
        { src: "/projects/amigo/lofi-p59-2.jpeg", alt: "Amigo low-fidelity wireframe — screen 6", objectFit: "contain", width: 383, height: 305 },
        { src: "/projects/amigo/lofi-p59-3.jpeg", alt: "Amigo low-fidelity wireframe — screen 7", objectFit: "contain", width: 368, height: 270 },
        { src: "/projects/amigo/lofi-p59-4.jpeg", alt: "Amigo low-fidelity wireframe — screen 8", objectFit: "contain", width: 419, height: 268 },
        { src: "/projects/amigo/lofi-p60-1.jpeg", alt: "Amigo low-fidelity wireframe — screen 9", objectFit: "contain", width: 274, height: 179 },
        { src: "/projects/amigo/lofi-p60-2.jpeg", alt: "Amigo low-fidelity wireframe — screen 10", objectFit: "contain", width: 274, height: 196 },
        { src: "/projects/amigo/lofi-p60-3.jpeg", alt: "Amigo low-fidelity wireframe — screen 11", objectFit: "contain", width: 258, height: 183 },
        { src: "/projects/amigo/lofi-p60-4.jpeg", alt: "Amigo low-fidelity wireframe — screen 12", objectFit: "contain", width: 258, height: 213 },
      ],
    },
    midFidelity: {
      label: "Mid Fidelity",
      body: "The mid fidelity prototypes focused on validating the app's core experience, introducing character selection, gamified navigation, task and project views, Bunny Coin rewards, leaderboards, and community study groups. Feedback from 5 participants guided iterations before developing the final high fidelity designs.",
      imageLayout: "grid",
      images: [
        { src: "/projects/amigo/midfi-p61-1.png", alt: "Amigo mid-fidelity — character selection", objectFit: "contain", width: 960, height: 682 },
        { src: "/projects/amigo/midfi-p61-2.png", alt: "Amigo mid-fidelity — gameplay storyline selection", objectFit: "contain", width: 960, height: 682 },
        { src: "/projects/amigo/midfi-p62-1.jpeg", alt: "Amigo mid-fidelity — onboarding screen", objectFit: "contain", width: 995, height: 707 },
        { src: "/projects/amigo/midfi-p62-2.png", alt: "Amigo mid-fidelity — navigation screen", objectFit: "contain", width: 1024, height: 547 },
        { src: "/projects/amigo/midfi-p62-3.png", alt: "Amigo mid-fidelity — town map navigation", objectFit: "contain", width: 925, height: 1238 },
        { src: "/projects/amigo/midfi-p63-1.png", alt: "Amigo mid-fidelity — project task details", objectFit: "contain", width: 1060, height: 1040 },
        { src: "/projects/amigo/midfi-p63-2.png", alt: "Amigo mid-fidelity — projects list", objectFit: "contain", width: 1000, height: 711 },
        { src: "/projects/amigo/midfi-p64-1.png", alt: "Amigo mid-fidelity — doubt center", objectFit: "contain", width: 1034, height: 735 },
        { src: "/projects/amigo/midfi-p64-2.png", alt: "Amigo mid-fidelity — messaging", objectFit: "contain", width: 1034, height: 735 },
        { src: "/projects/amigo/midfi-p65-1.jpeg", alt: "Amigo mid-fidelity — rewards centre", objectFit: "contain", width: 1034, height: 735 },
        { src: "/projects/amigo/midfi-p65-2.png", alt: "Amigo mid-fidelity — leaderboard", objectFit: "contain", width: 1034, height: 735 },
        { src: "/projects/amigo/midfi-p66-1.png", alt: "Amigo mid-fidelity — community study group", objectFit: "contain", width: 1026, height: 729 },
      ],
    },
    moodBoard: {
      label: "Brand Guidelines",
      heading: "Colour system",
      body: "The visual language pairs vibrant purple and orange accents with Plus Jakarta Sans typography to balance playfulness with clarity. Both light and dark modes were designed to provide a comfortable and accessible experience for children and parents alike.",
      colorPalettes: [
        {
          title: "Light mode",
          groups: [
            {
              label: "Primary colours",
              colors: [
                { hex: "#5051F9" },
                { hex: "#FFA833" },
                { hex: "#5F6388" },
                { hex: "#EAEEF6" },
                { hex: "#F3F4F8" },
              ],
            },
            {
              label: "Secondary colours",
              colors: [
                { hex: "#5051F9", hexEnd: "#1DA7FF", label: "Gradient" },
                { hex: "#1DA7FF" },
                { hex: "#ECEFFA" },
              ],
            },
          ],
        },
        {
          title: "Dark mode",
          groups: [
            {
              label: "Primary colours",
              colors: [
                { hex: "#5051F9" },
                { hex: "#FFA833" },
                { hex: "#1DA7FF" },
                { hex: "#1C2033" },
                { hex: "#0E111E" },
              ],
            },
            {
              label: "Secondary colours",
              colors: [
                { hex: "#5051F9", hexEnd: "#1DA7FF", label: "Gradient" },
                { hex: "#FFFFFF" },
                { hex: "#303651" },
                { hex: "#5F6388" },
                { hex: "#ECEFFA" },
              ],
            },
          ],
        },
      ],
    },
    outcome: {
      label: "Research · Usability Testing",
      heading: "Gathering feedback",
      body: "I conducted exploratory usability testing with 5 participants, out of which 3 parents and 2 children with varying levels of digital literacy used mid-fidelity prototypes to validate key user flows and identify improvements before developing the high-fidelity designs.",
      table: {
        headers: ["Task", "Participants passed", "Focus"],
        rows: [
          ["Create a project", "5/5", "Parent task input flow"],
          ["Create a task", "5/5", "Task creation inside projects"],
          ["View reward points", "4/5", "Rewards centre clarity"],
          ["View rank", "4/5", "Leaderboard comprehension"],
          ["Send connection request", "5/5", "Community friend flow"],
        ],
      },
      feedback: {
        heading: "Key feedback from participants:",
        items: [
          "Separate logins for parents and children, with passwords on the parent account for safety.",
          "Less cluttered dashboards — distinct parent and child views.",
          "Simpler navigation for parents; keep gamified town for kids.",
          "Fewer buildings — merge overlapping actions so users are not overwhelmed.",
          "Combine tasks and projects under one action for easier switching.",
        ],
      },
    },
    product: {
      label: "Final Design",
      heading: "Incorporating research & design elements",
      body: "The final concept is a responsive app where kids explore a gamified town, complete academic tasks to earn Bunny Coins, progress through checkpoints, and connect with friends. Parents can assign tasks, track progress, and manage rewards, while mini games like Animal Escape and Space Invaders, alongside a leaderboard, keep motivation high without compromising clarity.",
      images: [
        {
          src: "/projects/amigo/about-the-concept.png",
          alt: "About the Amigo concept covering task management, rewards, leaderboard, gamification, and goals",
          objectFit: "contain",
        },
      ],
    },
    highFidelity: {
      label: "High Fidelity",
      body: "High-fidelity screens were designed in both light and dark modes — covering dashboard, projects, tasks, rewards, community, group study, and messaging.",
      slideshowLayout: "stack",
      slideshows: [
        {
          label: "Light mode",
          mockup: "laptop",
          slides: [
            {
              title: "Dashboard",
              src: "/projects/amigo/hifi-dashboard-light.png",
              alt: "Amigo high-fidelity dashboard in light mode",
            },
            {
              title: "Projects",
              src: "/projects/amigo/hifi-projects-light.png",
              alt: "Amigo high-fidelity projects screen in light mode",
            },
            {
              title: "Rewards",
              src: "/projects/amigo/hifi-rewards-light.png",
              alt: "Amigo high-fidelity rewards screen in light mode",
            },
            {
              title: "Create Project",
              src: "/projects/amigo/hifi-create-project-light.png",
              alt: "Amigo high-fidelity create project screen in light mode",
            },
            {
              title: "Redeem Rewards",
              src: "/projects/amigo/hifi-redeem-rewards-light.png",
              alt: "Amigo high-fidelity redeem rewards screen in light mode",
            },
            {
              title: "Community",
              src: "/projects/amigo/hifi-community-light.png",
              alt: "Amigo high-fidelity community screen in light mode",
            },
            {
              title: "Messages",
              src: "/projects/amigo/hifi-messages-light.png",
              alt: "Amigo high-fidelity messages screen in light mode",
            },
            {
              title: "Group Study",
              src: "/projects/amigo/hifi-group-study-light.png",
              alt: "Amigo high-fidelity group study screen in light mode",
            },
            {
              title: "Doubt Center",
              src: "/projects/amigo/hifi-doubt-center-light.png",
              alt: "Amigo high-fidelity doubt center screen in light mode",
            },
            {
              title: "Leaderboard",
              src: "/projects/amigo/hifi-leaderboard-light.png",
              alt: "Amigo high-fidelity leaderboard screen in light mode",
            },
          ],
        },
        {
          label: "Dark mode",
          mockup: "laptop",
          slides: [
            {
              title: "Dashboard",
              src: "/projects/amigo/hifi-dashboard-dark.png",
              alt: "Amigo high-fidelity dashboard in dark mode",
            },
            {
              title: "Projects",
              src: "/projects/amigo/hifi-projects-dark.png",
              alt: "Amigo high-fidelity projects screen in dark mode",
            },
            {
              title: "Rewards",
              src: "/projects/amigo/hifi-rewards-dark.png",
              alt: "Amigo high-fidelity rewards screen in dark mode",
            },
          ],
        },
      ],
    },
    researchPaper: {
      label: "Research Paper",
      body: "The paper explored the challenges children face in managing academic tasks and examined how gamification, parental involvement, and positive reinforcement can improve motivation, organisation, and learning outcomes.",
      href: "/projects/amigo/research-paper.pdf",
      linkLabel: "View research paper",
    },
    prototype: {
      label: "Prototype Video",
      video: "/projects/amigo/promo-video.mp4",
    },
    detailGroups: [
      {
        label: "Design Decisions",
        items: [
          {
            heading: "Gamified town over traditional nav",
            body: "Kids explore a playful world of buildings of Dashboard, Jobs, Rewards, Leaderboard, and Community, turning everyday task management into an engaging experience rather than another chore.",
          },
          {
            heading: "Bunny coins and levels",
            body: "Each task earns reward points, with completed work adding Bunny Coins and unlocking new levels. Missed deadlines gently deduct points, encouraging consistency without relying on harsh punishment.",
          },
          {
            heading: "Parent and child experiences",
            body: "After usability testing, the design separates parent and child logins, dashboards, and navigation so each audience gets an interface matched to their goals.",
          },
        ],
      },
      {
        label: "Reflection",
        items: [
          {
            heading: "Research grounded the reward model",
            body: "Surveys and interviews revealed that parents value task tracking and meaningful incentives, while kids benefit from building healthy time management habits from an early age.",
          },
          {
            heading: "Testing simplified the experience",
            body: "Mid-fidelity usability sessions revealed that fewer buildings, merged task/project views, and separate parent flows were essential before high fidelity.",
          },
          {
            heading: "Balance fun with accountability",
            body: "While gamification, leaderboards, and focus timers make Amigo engaging, its real value lies in helping kids stay on track, finish their work on time, and reduce stress at home.",
          },
        ],
      },
    ],
    deepDive: {
      label: "explore my work",
      title: "Feature Deep Dive: Figma Prototype",
      href: "https://www.figma.com/proto/bTRbhgttVCVSqgrynGaech/PEDP-II?node-id=228%3A7183&viewport=1935%2C1050%2C0.07&scaling=min-zoom&starting-point-node-id=228%3A8852",
    },
  },
  {
    slug: "flip-design-system",
    title: "Design System",
    buildingTitle: "Design System",
    subtitle: "A scalable Figma design system for an Australian Telecom Provider with reusable components, design tokens, and accessibility standards to improve consistency and streamline design to development collaboration.",
    heroImage: "/projects/flip/hero-collage.jpg",
    heroImageAlt: "Design System collage with colour palette, plan cards, typography, and UI components",
    heroBackground: "#FFFFFF",
    headingColor: "#d60a0a",
    cardStrokeColor: "#ffa6a6",
    intro:
      "Designed and established a Design System for an Australian Telecom Provider, creating reusable UI components, design tokens, and documentation to improve consistency, scalability, and collaboration across digital products.",
    meta: [
      {
        label: "MY ROLE",
        value: "Design System, UI Design, Documentation",
      },
      {
        label: "PROJECT",
        value: "Internship",
      },
      {
        label: "TOOLS",
        tools: [
          { name: "Figma", icon: "/tools/figma.png" },
        ],
      },
      {
        label: "TEAM",
        value: "2 Person Design Team",
      },
    ],
    whatIs: {
      heading: "Why I created the design system",
      body: "Before the design system, the interface lacked consistency in colours, typography, spacing, and reusable components, leading to an inconsistent user experience and slower design workflows. To address these challenges, I designed a scalable design system that established a unified visual language through standardized colours, typography, design tokens, and reusable components, improving consistency, collaboration, and efficiency across the product.",
    },
    userPersonas: {
      heading: "About the company",
      body: "This Design System for an Australian Telecom Provider supports a company that offers affordable NBN and mobile plans through a digital-first platform. With a focus on simplicity, transparency, and customer convenience, the brand aims to make purchasing and managing internet services intuitive and hassle free. As the product expanded, maintaining consistency across its digital experiences became increasingly important, leading to the development of a scalable design system.",
    },
    confidentialityNote:
      "* This case study presents selected aspects of my contribution. Confidential and proprietary information has been omitted.",
    journeyMapping: {
      label: "Design System",
      heading: "Colour",
      body: [
        "The colour system was designed to establish a consistent and accessible visual language across the product. I created a structured palette consisting of primary, secondary, gradient, and link colours, each with clear usage guidelines to reinforce the brand identity, create visual hierarchy, and support intuitive user interactions. By standardising colour usage throughout the interface, the system ensured consistency, improved usability, and provided a cohesive experience across all digital touchpoints.",
        "I also made sure colour combinations were 100% WCAG 2.1 level AA compliant so that the design system creates products that are accessible to everyone.",
      ],
      colorPalettes: [
        {
          title: "Primary colours",
          colors: [
            { hex: "#000000", label: "Primary 1" },
            { hex: "#D70A0A", label: "Primary 2" },
            { hex: "#FFFFFF", label: "Primary 3" },
          ],
        },
        {
          title: "Secondary colours",
          colors: [
            { hex: "#D2D2D2", label: "Secondary 1" },
            { hex: "#F7CECE", label: "Secondary 2" },
            { hex: "#131313", label: "Secondary 3" },
            { hex: "#323232", label: "Secondary 4" },
          ],
        },
        {
          title: "Gradient & links",
          colors: [
            { hex: "#4E0000", hexEnd: "#B40000", label: "Gradient" },
            { hex: "#888888", label: "Link colour" },
          ],
        },
      ],
    },
    typography: {
      heading: "Typography",
      body: "Typography was defined to create a clear visual hierarchy and improve readability across the company's digital products. I established a structured type scale with consistent font sizes, weights, and line heights for headings, body text, navigation, and buttons, ensuring content remains legible and accessible across different screen sizes and contexts.",
      fontFamily: "Poppins",
      fontDescription:
        "Poppins is used across all product interfaces from marketing pages to product screens with a clear scale for headings, body copy, navigation, and buttons.",
      weights: [
        { label: "Bold", weight: 700 },
        { label: "Semi Bold", weight: 600 },
        { label: "Medium", weight: 500 },
        { label: "Regular", weight: 400 },
      ],
      groups: [
        {
          title: "Headings",
          items: [
            { token: "H1", size: "44px", weight: 700, weightLabel: "Bold", sample: "Heading 1", uppercase: true },
            { token: "H2", size: "42px", weight: 700, weightLabel: "Bold", sample: "Heading 2", uppercase: true },
            { token: "H3", size: "40px", weight: 700, weightLabel: "Bold", sample: "Heading 3", uppercase: true },
            { token: "H4", size: "36px", weight: 700, weightLabel: "Bold", sample: "Heading 4", uppercase: true },
            { token: "H5", size: "28px", weight: 700, weightLabel: "Bold", sample: "Heading 5", uppercase: true },
            { token: "H6", size: "22px", weight: 700, weightLabel: "Bold", sample: "Heading 6", uppercase: true },
          ],
        },
        {
          title: "Body text",
          items: [
            { token: "Body Text 1", size: "27px", weight: 400, weightLabel: "Regular", sample: "Body Text 1", uppercase: true },
            { token: "Body Text 2", size: "22px", weight: 400, weightLabel: "Regular", sample: "Body Text 2", uppercase: true },
            { token: "Body Text 3", size: "20px", weight: 400, weightLabel: "Regular", sample: "Body Text 3", uppercase: true },
            { token: "Body Text 4", size: "18px", weight: 400, weightLabel: "Regular", sample: "Body Text 4", uppercase: true },
            { token: "Body Text 5", size: "14px", weight: 400, weightLabel: "Regular", sample: "Body Text 5", uppercase: true },
            { token: "Body Text 6", size: "10px", weight: 400, weightLabel: "Regular", sample: "Body Text 6", uppercase: true },
          ],
        },
        {
          title: "Nav text",
          items: [
            { token: "Nav Selected", size: "20px", weight: 700, weightLabel: "Bold", sample: "Nav Selected", uppercase: true },
            { token: "Nav Regular", size: "18px", weight: 500, weightLabel: "Medium", sample: "Nav Regular", uppercase: true },
          ],
        },
        {
          title: "Button text",
          items: [
            { token: "Button Text 1", size: "27px", weight: 700, weightLabel: "Bold", sample: "Button Text 1", uppercase: true },
            { token: "Button Text 2", size: "24px", weight: 700, weightLabel: "Bold", sample: "Button Text 2", uppercase: true },
            { token: "Button Text 3", size: "22px", weight: 700, weightLabel: "Bold", sample: "Button Text 3", uppercase: true },
            { token: "Button Text 4", size: "20px", weight: 700, weightLabel: "Bold", sample: "Button Text 4", uppercase: true },
          ],
        },
      ],
    },
    icons: {
      heading: "Icons",
      body: "The design system includes a unified icon library with clear usage guidelines for navigation, actions, product features, and interface states. This ensures consistency, improves recognition, and creates a seamless experience across the product.",
      iconNames: [
        "Search",
        "Account",
        "Menu",
        "Arrow up",
        "Arrow down",
        "Chevron left",
        "Chevron right",
        "Person",
        "Call",
        "Email",
        "Mail",
        "Help",
        "Support",
        "Cancel",
        "Star",
        "Diamond",
        "Home shield",
        "Check box",
        "Home",
        "Wifi",
        "Done",
        "Info",
        "Lock",
        "Location",
      ],
    },
    buttons: {
      heading: "Buttons",
      body: "A comprehensive button system was created to support consistent interactions throughout the interface. Variants including primary, secondary, outlined, and on-dark were designed with clearly defined interaction states, helping establish visual hierarchy, improve usability, and maintain consistency across the product.",
    },
    shadows: {
      heading: "Shadows",
      body: "A consistent elevation system was developed using reusable shadow tokens that enhance depth and guide visual hierarchy. By defining a small range of shadow levels, components maintain a cohesive appearance across marketing pages and product interfaces while preserving the brand's clean, modern aesthetic.",
      groups: [
        {
          title: "Elevation",
          items: [
            {
              label: "Shadow 1",
              x: 0,
              y: 1,
              blur: 3,
              spread: 0,
              color: "#000000 · 8%",
              css: "0px 1px 3px 0px rgba(0, 0, 0, 0.08)",
            },
            {
              label: "Shadow 2",
              x: 0,
              y: 2,
              blur: 8,
              spread: 0,
              color: "#000000 · 10%",
              css: "0px 2px 8px 0px rgba(0, 0, 0, 0.10)",
            },
            {
              label: "Shadow 3",
              x: 0,
              y: 4,
              blur: 16,
              spread: 0,
              color: "#000000 · 12%",
              css: "0px 4px 16px 0px rgba(0, 0, 0, 0.12)",
            },
            {
              label: "Shadow 4",
              x: 0,
              y: 8,
              blur: 24,
              spread: 0,
              color: "#000000 · 16%",
              css: "0px 8px 24px 0px rgba(0, 0, 0, 0.16)",
            },
          ],
        },
        {
          title: "Focus & overlays",
          items: [
            {
              label: "Focus ring",
              x: 0,
              y: 0,
              blur: 0,
              spread: 3,
              color: "#D70A0A · 35%",
              css: "0px 0px 0px 3px rgba(215, 10, 10, 0.35)",
            },
            {
              label: "Modal overlay",
              x: 0,
              y: 12,
              blur: 40,
              spread: 0,
              color: "#000000 · 24%",
              css: "0px 12px 40px 0px rgba(0, 0, 0, 0.24)",
            },
          ],
        },
      ],
    },
    detailGroups: [
      {
        label: "Project Outcomes",
        metrics: [
          {
            value: "50+",
            label: "Reusable components with multiple variants and states",
          },
          {
            value: "30+",
            label: "Component variants designed",
          },
          {
            value: "80+",
            label: "Design tokens for colours, typography, spacing, and elevation",
          },
        ],
      },
      {
        label: "Reflection",
        items: [
          {
            heading: "Foundations decide everything else",
            body: "Getting colour and hierarchy right early made the component library easier to expand without creating conflicting patterns.",
          },
          {
            heading: "Systems should feel fast to use",
            body: "A design system fails if it slows designers down. Properties, clear tokens, and example screens matter as much as visual polish.",
          },
          {
            heading: "Accessibility is part of brand",
            body: "The brand's bold red identity only works if contrast and clarity hold up across light docs and dark product surfaces.",
          },
        ],
      },
    ],
    deepDive: {
      label: "explore my work",
      title: "Feature Deep Dive: Colour Tokens",
      href: "#",
    },
  },



];

export function getCaseStudy(slug: string) {
  return caseStudyDetails.find((study) => study.slug === slug);
}

/** Display / navigation order for work case studies */
export const caseStudyOrder = [
  "calma",
  "flip-design-system",
  "little-sprout",
  "amigo",
] as const;

function getOrderedCaseStudies() {
  return caseStudyOrder
    .map((slug) => caseStudyDetails.find((study) => study.slug === slug))
    .filter((study): study is CaseStudyDetail => Boolean(study));
}

export function getAllCaseStudySlugs() {
  return getOrderedCaseStudies().map((study) => study.slug);
}

export function getAdjacentCaseStudies(slug: string) {
  const ordered = getOrderedCaseStudies();
  const index = ordered.findIndex((study) => study.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }

  const total = ordered.length;
  const previousStudy = ordered[(index - 1 + total) % total];
  const nextStudy = ordered[(index + 1) % total];

  return {
    previous: { slug: previousStudy.slug, title: previousStudy.title },
    next: { slug: nextStudy.slug, title: nextStudy.title },
  };
}
