import { CARA_ANSWER_DOESNT_KNOW } from "@/lib/cara-shared-answers";

export const RETAIL_META = {
  title: "Cara for Retail",
  description:
    "Cara on your shop phone line when your team is busy. Multiple calls, priced per store.",
} as const;

/** Placeholder until live demo line is configured */
export const RETAIL_DEMO_PHONE_DISPLAY = "0XX XXX XXXX" as const;
export const RETAIL_DEMO_PHONE_HREF = "tel:+353000000000" as const;

export const RETAIL_HERO = {
  eyebrow: "Built for retail",
  titleDark: "Every call answered.",
  titleGradient: "Even when you're on the floor.",
  rotatingWords: [
    "on the floor",
    "with a customer",
    "short-staffed",
    "after hours",
    "at the till",
  ] as const,
  intro: "Your shop phone still rings. If nobody gets it, Cara answers.",
  titleMobileLines: ["Every call", "answered."] as const,
  introMobileLines: [
    "Your shop phone still rings.",
    "If nobody gets it, Cara answers.",
  ] as const,
} as const;

export const RETAIL_BACKUP = {
  headingDark: "When nobody can get it.",
  headingGradient: "Cara answers.",
  body: "If someone's on the floor, nothing changes. Multiple calls at once. No engaged tone. Especially when the line's engaged all day.",
  image: {
    src: "/how-cara-works/retail-shop-calls.png",
    alt: "Your shop phone still rings. Cara answers if nobody gets it.",
  },
} as const;

export const RETAIL_SHOP = {
  headingDark: "Whatever they ring about.",
  headingGradient: "Cara takes the details.",
  body: `Cara answers questions using your approved shop information. For shelf stock or a collection request, Cara records what the customer needs for your team to confirm. ${CARA_ANSWER_DOESNT_KNOW}`,
  image: {
    src: "/how-cara-works/retail-on-the-call.png",
    alt: "Cara takes an enquiry for a shop department.",
  },
} as const;

export const RETAIL_CUSTOM = {
  headingDark: "Completely custom.",
  headingGradient: "Your shop sets the rules.",
  body: "Choose which questions Cara can answer and which enquiries go to each department. Your team confirms availability and collection requests.",
  image: {
    src: "/how-cara-works/retail-custom.png",
    alt: "Cara configured for your shop only, built around what you want on the line.",
  },
} as const;

export const RETAIL_SETUP = {
  headingDark: "We visit your shop.",
  headingGradient: "Agree a launch date.",
  body: "We visit your shop and see how it runs, then work with you to configure Cara around that. Priced per store, one dashboard per shop. Your team still picks up when they're free. Keep your number. Calls and follow-ups in your dashboard. We text management when something needs you.",
  image: {
    src: "/how-cara-works/retail-setup.png",
    alt: "We visit your shop and configure Cara. Agree a launch date.",
  },
} as const;

export const RETAIL_HEAR_CARA = {
  headingDark: "Ring Cara now.",
  headingGradient: "Hear what your customers hear.",
  body: "Call below and ask what a customer would. Or press play.",
  ringLabel: "Ring Cara now",
  demoPhoneDisplay: RETAIL_DEMO_PHONE_DISPLAY,
  demoPhoneHref: RETAIL_DEMO_PHONE_HREF,
} as const;

export const RETAIL_FAQ_INTRO = {
  titleDark: "Common ",
  titleGradient: "questions.",
} as const;

export const RETAIL_CTA = {
  title: "Ready to hear Cara on your shop line?",
  body: "Give us a ring. We'll visit your shop and talk through pricing per store.",
  button: "Contact us",
} as const;
