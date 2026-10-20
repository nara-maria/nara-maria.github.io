export type Story = {
  id: string;
  name: string;
  role: string;
  summary: string;
  videoUrl: string;
};

export const site = {
  flags: {
    showPrice: false,
    showDraftPlaceholders: true,
    useColorImages: false,
    showGymShots: false,
  },

  links: {
    instagramUrl: "https://www.instagram.com/xjoshjonesx/",
    instagramDmUrl: "https://ig.me/m/xjoshjonesx",
    bookingUrl: "",
  },

  // DRAFT stand-ins. Swap for the approved portrait + documentary shot. Empty string = neutral placeholder block.
  assets: {
    portrait:
      "https://images.unsplash.com/photo-1539125530496-3ca408f9c2d9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    documentary:
      "https://images.unsplash.com/photo-1631885627891-19651751251f?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    gymShots: [] as string[],
    offerVideoUrl: "",
  },

  brand: {
    name: "Josh Jones",
    role: "Mentor",
    location: "United Kingdom",
    timezone: "GMT",
  },

  nav: [
    { id: "for-who", label: "Who it's for" },
    { id: "approach", label: "Approach" },
    { id: "sprint", label: "The sprint" },
    { id: "stories", label: "Stories" },
    { id: "about", label: "About" },
    { id: "faq", label: "FAQ" },
  ],

  cta: {
    primary: "Start a conversation",
    secondary: "See how it works",
  },

  hero: {
    eyebrow: "1:1 mentoring · Business, sales & self-employed men",
    headline: ["Clear direction.", "Consistent execution."],
    proposition:
      "You already know what to do. You're just not doing it consistently. I work with capable men to cut the overthinking, decide faster, and follow through — for 90 days straight.",
    tags: ["1:1 only", "Plain English", "90-day sprints"],
  },

  marquee: [
    "Decide faster",
    "Follow through",
    "Fewer open loops",
    "Clear priorities",
    "Honest feedback",
    "No hype",
  ],

  whoFor: {
    eyebrow: "Who the work is for",
    title: "Capable men who are stuck in their own heads.",
    forTitle: "This is for you if",
    forList: [
      "You run a business, a team, a pipeline — or yourself — and results are inconsistent.",
      "You think clearly about everything except your own next move.",
      "You start strong and drift by week three.",
      "You want direct feedback from someone who isn't impressed by you.",
    ],
    notTitle: "Not for you if",
    notList: [
      "You want motivation, mindset content or a hype man.",
      "You're looking for a done-for-you service.",
      "You're not prepared to be honest about what's actually happening.",
      "You need a therapist. That's a different and valuable kind of help.",
    ],
  },

  approach: {
    eyebrow: "Approach",
    title: "Two things decide your results. We work on both.",
    pillars: [
      {
        num: "01",
        name: "The operator",
        tag: "You",
        lead: "How you think, decide and hold yourself under pressure.",
        points: [
          "Decision hygiene — fewer, faster, better calls.",
          "Attention: where it goes, where it leaks.",
          "Standards you actually keep when nobody is watching.",
          "Energy and recovery as a business input, not a luxury.",
        ],
      },
      {
        num: "02",
        name: "The operation",
        tag: "Your work",
        lead: "The systems that carry your week when motivation doesn't.",
        points: [
          "A weekly rhythm with one clear priority at a time.",
          "Pipeline and follow-up that run on schedule, not mood.",
          "Bottleneck diagnosis — what's really slowing you down.",
          "Simple scorecards so progress is visible, not felt.",
        ],
      },
    ],
  },

  sprint: {
    eyebrow: "The offer",
    title: "A 90-day sprint. One operator. One operation.",
    intro:
      "Ninety days is long enough to change how you work and short enough to stay sharp. We meet weekly, fix the real bottleneck, and build a cadence you can keep.",
    phases: [
      {
        num: "01",
        days: "Days 1–14",
        name: "Audit",
        text: "We get honest about where you are. What's working, what you're avoiding, what the numbers say. You leave with one priority.",
      },
      {
        num: "02",
        days: "Days 15–70",
        name: "Build",
        text: "Weekly calls. A fixed rhythm. We install the habits and systems, then stress-test them against a real week.",
      },
      {
        num: "03",
        days: "Days 71–90",
        name: "Hold",
        text: "Less of me, more of you. We remove friction, lock in what held, and set the next 90 days before we finish.",
      },
    ],
    includes: [
      "12 weekly 1:1 calls (60 min)",
      "Direct message access between calls",
      "A written plan, updated weekly",
      "Day-90 review and next-quarter map",
    ],
    price: "£—",
    priceNote: "Pricing is discussed in the first conversation. No surprises.",
  },

  stories: {
    eyebrow: "Client stories",
    title: "In their words.",
    emptyTitle: "Stories coming",
    emptyText: "Recorded with permission. Published when approved.",
    slots: [
      { id: "s1", name: "", role: "Founder", summary: "", videoUrl: "" },
      { id: "s2", name: "", role: "Sales director", summary: "", videoUrl: "" },
      { id: "s3", name: "", role: "Self-employed", summary: "", videoUrl: "" },
    ] as Story[],
  },

  about: {
    eyebrow: "About Josh",
    title: "I'm not here to impress you. I'm here to be useful.",
    paragraphs: [
      "I've spent my working life around men who were good at what they did and still felt behind. Not because they lacked ability — because they lacked a straight line between what they knew and what they did each day.",
      "Mentoring, for me, is a practical thing. We talk plainly. We look at your actual week. We pick the one thing that changes the most and we do it until it holds.",
      "No slogans. No dream boards. Just a clearer head, a tighter operation and someone in your corner who will tell you the truth.",
    ],
    facts: [
      { k: "Format", v: "1:1, weekly" },
      { k: "Length", v: "90 days" },
      { k: "Based", v: "UK · GMT" },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Straight answers.",
    items: [
      {
        q: "Is this coaching, consulting or therapy?",
        a: "Mentoring. I'll share what I know, ask direct questions and hold you to what you say you'll do. It isn't therapy and it isn't done-for-you consulting.",
      },
      {
        q: "Why 90 days?",
        a: "Long enough for new habits to survive a bad fortnight. Short enough that we stay urgent. Most men know within 90 days whether the change is real.",
      },
      {
        q: "How much time does it take each week?",
        a: "One 60-minute call plus the work itself — which is your normal work, done with more intent. Expect an extra hour or two of thinking and planning.",
      },
      {
        q: "What happens between calls?",
        a: "You have direct message access. Short, specific questions get short, specific answers. We don't do long voice-note therapy.",
      },
      {
        q: "What does it cost?",
        a: "We talk about that in the first conversation, once we both know it's a fit. There's no pressure and no scripts.",
      },
      {
        q: "How do we start?",
        a: "Send a message. Tell me what you do and what's not working. If I think I can help, we'll book a call.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Next step",
    title: ["You don't need more", "information.", "You need a decision."],
    text: "One message. Tell me what you do and what's not working. I'll reply personally.",
  },

  footer: {
    note: "Mentoring for men who build things.",
  },
};

export type Site = typeof site;
