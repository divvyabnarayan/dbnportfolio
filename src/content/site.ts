export const site = {
  name: "Divvya",
  fullName: "Divvya B. Narayan",
  role: "UX Designer",
  email: "divvyabnarayan@gmail.com",
  location: "Available worldwide",
} as const;

export const hero = {
  greeting: "Hello! I'm Divvya.",
  tagline: "UX design at heart. Crafting clarity for products people love.",
  ctas: [
    { label: "Hello!", emoji: "👋", href: "/about" },
    { label: "Resume", emoji: "📃", href: "/divya-resume.pdf" },
    { label: "Get in touch", emoji: "☕️", href: "#contact" },
  ],
} as const;

export type CaseStudy = {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  href: string;
  /** Cover image shown on the project card — swap this path anytime */
  image: string;
  imageAlt: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Calma",
    description:
      "A portable mindfulness companion for everyday academic stress.",
    tags: ["product design", "research", "physical"],
    slug: "calma",
    href: "/work/calma",
    image: "/projects/calma/work-card.jpg",
    imageAlt: "Calma handheld device on a pedestal with soft leaf shadows",
  },
  {
    title: "Design System",
    description:
      "A scalable Figma design system for an Australian Telecom Provider with reusable components, design tokens, and accessibility standards to improve consistency and streamline design to development collaboration.",
    tags: ["design system", "UI kit", "Figma"],
    slug: "flip-design-system",
    href: "/work/flip-design-system",
    image: "/projects/flip/work-card.png?v=3",
    imageAlt: "Australian Telecom design system with typography, colour, buttons, and components",
  },
  {
    title: "Little Sprout",
    description:
      "A pregnancy tracker that centralizes health data, symptom and medicine tracking, appointments, wellness support, and communication with doctors and caregivers.",
    tags: ["product design", "research", "healthcare"],
    slug: "little-sprout",
    href: "/work/little-sprout",
    image: "/projects/little-sprout/solution-slide-18.jpg",
    imageAlt: "Little Sprout low-fidelity wireframes from slide 18",
  },
  {
    title: "Amigo",
    description:
      "A gamified task management app helping kids aged 5–13 track academic work, earn rewards, and build confidence — with parent visibility built in.",
    tags: ["product design", "research", "mobile"],
    slug: "amigo",
    href: "/work/amigo",
    image: "/projects/amigo/work-card-logo.png",
    imageAlt: "Amigo logo on a dark background",
  },
];

export type OtherProject = {
  title: string;
  context: string;
  tags: string[];
  href: string;
  image: string;
  imageAlt: string;
};

export const otherProjects: OtherProject[] = [
  {
    title: "Toyx: A Toy Exchange App",
    context: "App Design",
    tags: ["product design", "research"],
    href: "https://www.behance.net/gallery/146008203/Toyx-A-Toy-Exchange-App",
    image: "/projects/toyx/cover.png",
    imageAlt: "Toyx toy exchange app cover",
  },
  {
    title: "Zest: A Chocolate App Design",
    context: "AR App Design",
    tags: ["product design", "mobile app"],
    href: "https://www.behance.net/gallery/174255055/Zest-A-Chocolate-App-Design",
    image: "/projects/zest/cover.png",
    imageAlt: "Zest chocolate app design cover",
  },
  {
    title: "Talhive: Logo Design",
    context: "Brand Design",
    tags: ["logo design", "brand design"],
    href: "https://www.behance.net/gallery/120250665/Talhive-Logo-Design",
    image: "/projects/talhive/cover.png",
    imageAlt: "Talhive logo design cover",
  },
];

export type Skill = {
  name: string;
  detail: string;
  level: number;
  image: string;
};

export const skills: Skill[] = [
  {
    name: "Figma",
    detail: "Wireframes, UI systems, design tokens, prototyping",
    level: 95,
    image: "/skills/figma.svg",
  },
  {
    name: "FigJam / Miro",
    detail: "User journeys, flows, information architecture",
    level: 90,
    image: "/skills/figjam.svg",
  },
  {
    name: "Prototyping",
    detail: "High-fidelity flows, usability tests, micro-interactions",
    level: 88,
    image: "/skills/prototyping.svg",
  },
  {
    name: "Research",
    detail: "Interviews, synthesis, competitive audits, usability testing",
    level: 85,
    image: "/skills/research.svg",
  },
];

export type ToolboxTool = {
  name: string;
  image: string;
  rotate: number;
  delay: number;
};

export const toolboxTools: ToolboxTool[] = [
  { name: "Figma", image: "/tools/figma.png", rotate: -8, delay: 0.05 },
  { name: "Sketch", image: "/tools/sketch.png", rotate: 6, delay: 0.12 },
  { name: "Claude", image: "/tools/claude.png", rotate: -5, delay: 0.19 },
  { name: "Framer", image: "/tools/framer.png", rotate: 7, delay: 0.26 },
  { name: "Miro", image: "/tools/miro.png", rotate: -6, delay: 0.33 },
  { name: "Photoshop", image: "/tools/photoshop.png", rotate: 5, delay: 0.4 },
  { name: "Illustrator", image: "/tools/illustrator.png", rotate: -7, delay: 0.47 },
  { name: "Webflow", image: "/tools/webflow.png", rotate: 8, delay: 0.54 },
  { name: "ChatGPT", image: "/tools/chatgpt.png", rotate: -4, delay: 0.61 },
];

export type ProcessStep = {
  stage: string;
  number: string;
  title: string;
  bullets: string[];
};

export const processSteps: ProcessStep[] = [
  {
    stage: "Research",
    number: "01",
    title: "Understand What (and Who) We're Designing For",
    bullets: [
      "I uncover user needs, business goals, and market opportunities through research to ensure we're solving the right problem.",
    ],
  },
  {
    stage: "Strategy",
    number: "02",
    title: "Define Goals and Set a Clear Direction",
    bullets: [
      "I turn research insights into a clear roadmap by prioritising goals, user needs, and product requirements.",
    ],
  },
  {
    stage: "Ideation",
    number: "03",
    title: "Explore Ideas Without Limiting Creativity",
    bullets: [
      "I generate and refine ideas through sketches, user flows, and collaboration to identify the strongest solution.",
    ],
  },
  {
    stage: "UI/UX Design",
    number: "04",
    title: "Design Beautiful, Functional Interfaces",
    bullets: [
      "I design intuitive, accessible, and visually consistent interfaces that balance user needs with business objectives.",
    ],
  },
  {
    stage: "Validation",
    number: "05",
    title: "Test with Real People, Not Just Opinions",
    bullets: [
      "I validate designs with real users, gather feedback, and iterate to improve usability and overall experience.",
    ],
  },
  {
    stage: "Handoff & Dev Collab",
    number: "06",
    title: "Build in Sync with Developers",
    bullets: [
      "I prepare developer ready designs and work closely with engineers to ensure the final product matches the vision.",
    ],
  },
  {
    stage: "Iteration",
    number: "07",
    title: "Launch, Learn, and Keep Improving",
    bullets: [
      "I measure product performance, gather user insights, and continuously refine the experience after launch.",
    ],
  },
];

export const footer = {
  eyebrow: "Designing at the edge of AI",
  headline: "You made it this far 👀",
  subline: "Might as well say hi! Let's build something cool.",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/divvya-b-narayan" },
    { label: "Email", href: "mailto:divvyabnarayan@gmail.com" },
    { label: "Behance", href: "https://www.behance.net/divvyabnarayan" },
  ],
} as const;

export const about = {
  intro: [
    "You can call me Di or DBN, that's what I am popularly known as!",
    "My journey as a designer began with curiosity, a fascination with how people interact with technology and why some experiences feel intuitive while others create friction. That curiosity led me to study UX Design, where I learned to combine research, empathy, accessibility, and design thinking to create meaningful user experiences. As I worked across startups, enterprise teams, and client projects, I gained experience designing digital products, building design systems, and collaborating with cross-functional teams, each challenge shaping the way I approach problem solving. Today, I enjoy bringing ideas to life by blending UX research, interaction design, front end development, and AI assisted workflows to create intuitive, engaging, and scalable products. I see design as an ongoing journey of learning, experimenting, and evolving one where every project is an opportunity to make technology more thoughtful, accessible, and impactful for the people who use it.",
  ],
  about:
    "I bring empathy, structure, and craft to every project. From user research and journey mapping to high-fidelity prototypes, I focus on designs that feel thoughtful, inclusive, and easy to use. I thrive in collaborative environments where design, product, and engineering work closely together.",
  journey: [
    {
      id: "curious-kid",
      title: "Curious Kid",
      body: "Always asking 'why?' Exploring, imagining and figuring out how things work.",
      image: "/brand/journey/stage-01.png",
      alt: "Curious Kid chapter card with telescope, puzzle pieces, paper plane, and lightbulb",
      background: "#F4F1FE",
      accent: "#7B6CF0",
    },
    {
      id: "student",
      title: "Student",
      body: "Learning design thinking & UX. Researching, prototyping, and understanding people and their needs.",
      image: "/brand/journey/stage-02.png",
      alt: "Student chapter card with desk lamp, graduation cap, and design thinking book",
      background: "#F5F2FA",
      accent: "#6B5CA8",
    },
    {
      id: "designer",
      title: "Designer",
      body: "Internships • Enterprise • Startups. Different teams, different problems, big learning.",
      image: "/brand/journey/stage-03.png",
      alt: "Designer chapter card with laptop, mug, and company logos",
      background: "#FFF4EA",
      accent: "#F28C33",
    },
    {
      id: "builder",
      title: "Builder",
      body: "Turning ideas into meaningful experiences. Design Systems • AI • Front-end • Product Design.",
      image: "/brand/journey/stage-04.png",
      alt: "Builder chapter card with building blocks, wrench, and skill cards",
      background: "#EEF6F0",
      accent: "#2F7A4F",
    },
    {
      id: "whats-next",
      title: "What's Next?",
      body: "Creating products that make a meaningful impact. The journey continues...",
      image: "/brand/journey/stage-05.png",
      alt: "What's Next chapter card with Explore, Collaborate, and Impact signpost plus goal cards",
      background: "#F5F2FB",
      accent: "#7B6CF0",
    },
  ],
  cta: {
    heading: "Wanna build something meaningful?",
    button: "Work with me",
    href: "mailto:divvyabnarayan@gmail.com",
  },
  quote: {
    label: "The quote I design by",
    text: "People ignore design that ignores people.",
    attribution: "Frank Chimero",
  },
  pluckCards: [
    {
      before: "My favourite Yo-Chi flavour is ",
      highlight: "Salted Butterscotch",
      background: "#FF5A3C",
      color: "#FFF6F1",
    },
    {
      before: "I can eat the same meal five days in a row and call it a system",
      background: "#6B4EFF",
      color: "#F4F1FF",
    },
    {
      before: "I have started more journals than I have finished",
      background: "#00B8A4",
      color: "#F0FFFC",
    },
    {
      before: "I have rewatched Friends more times than I would like to admit.",
      background: "#FF3D7F",
      color: "#FFF0F5",
    },
    {
      before: "Steph Curry is the ",
      highlight: "GOAT",
      background: "#F47920",
      color: "#FFFFFF",
    },
    {
      before: "My favorite superhero is ",
      highlight: "SPIDERMAN",
      background: "#0055A5",
      color: "#F4F8FF",
      highlightColor: "#ED1C24",
    },
  ],
  latestWork: {
    label: "Latest Work",
    title: "Little Sprout — Pregnancy tracker",
    href: "/work/little-sprout",
    image: "/projects/little-sprout/hifi-screens/medicine-log-page.png",
    imageAlt: "Little Sprout medicine log screen",
  },
  services: [
    {
      title: "Product Design",
      description: "End-to-end UX for web and mobile products",
      emoji: "📱",
    },
    {
      title: "User Research",
      description: "Interviews, testing, and insight synthesis",
      emoji: "🔍",
    },
    {
      title: "Prototyping",
      description: "Interactive flows for validation and handoff",
      emoji: "✨",
    },
  ],
  socialIcons: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/divvya-b-narayan", emoji: "in" },
    { label: "Dribbble", href: "#", emoji: "🏀" },
    { label: "Behance", href: "https://www.behance.net/divvyabnarayan", emoji: "Bē" },
  ],
  photos: [
    {
      src: "/brand/photos/yomg-bowls.jpg",
      alt: "Three colourful YOMG frozen yogurt bowls with toppings",
      objectPosition: "center 22%",
    },
    {
      src: "/brand/photos/marigold-field.jpg",
      alt: "Standing with arms open in a field of orange marigold flowers",
      objectPosition: "center 22%",
    },
    {
      src: "/brand/photos/brunch-avocado.jpg",
      alt: "Avocado toast brunch plate with iced drinks at a cafe",
    },
    {
      src: "/brand/photos/airport-rainbow.jpg",
      alt: "Full rainbow over a public buses terminal after a storm",
    },
    {
      src: "/brand/photos/dog-banana.jpg",
      alt: "Fluffy dog resting in a banana-shaped pet bed",
    },
    {
      src: "/brand/photos/beach-skyline.jpg",
      alt: "Beach with ocean waves and a distant city skyline",
    },
    {
      src: "/brand/photos/opera-house.jpg",
      alt: "Sydney Opera House at night under the moon",
    },
    {
      src: "/brand/photos/coastal-islands.jpg",
      alt: "Coastal view with blue water, islands, and boats",
    },
    {
      src: "/brand/photos/lookout.jpg",
      alt: "Looking out over a coastal peninsula from a scenic lookout",
    },
    {
      src: "/brand/photos/thali.jpg",
      alt: "Indian thali meal served on a banana leaf",
      scale: 0.9,
    },
  ],
} as const;
