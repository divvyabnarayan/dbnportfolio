export type AiExperiment = {
  title: string;
  description: string;
  tools: string[];
  image: string;
  imageAlt: string;
  href?: string;
};

export const aiExperiments: AiExperiment[] = [
  {
    title: "Wordle",
    description:
      "A playable Wordle like clone designed and shipped with AI assisted coding, where I created this for my friends to guess the word I decided.",
    tools: ["Cursor", "ChatGPT", "GitHub"],
    image: "/projects/ai-coding/wordle.png",
    imageAlt: "Wordle game board with colored letter tiles",
    href: "https://divvyabnarayan.github.io/wordle/",
  },
  {
    title: "Graduation Invite",
    description:
      "I designed and built a graduation invite for my close friends, inviting them for my graduation with all the details they needed to attend my ceremony.",
    tools: ["Cursor", "Claude", "GitHub"],
    image: "/projects/ai-coding/graduation-invite.png",
    imageAlt: "Graduation cap and diploma illustration with gold accents on a cream background",
    href: "https://divvyabnarayan.github.io/graduation-invite/",
  },
];
