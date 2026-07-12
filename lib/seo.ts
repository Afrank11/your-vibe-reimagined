import { contact } from "./data";

export const SITE = {
  url: "https://atehfrank.com",
  name: "Frank Ateh",
  fullName: "Ateh Frank Ateh",
  title: "Frank Ateh — Telecommunications Engineer & Web Developer | Cameroon",
  description:
    "Frank Ateh (Ateh Frank Ateh) is a telecommunications & ICT engineer and full-stack web developer from Yaoundé, Cameroon. SUP'PTIC engineer. Premium websites, networks, cybersecurity — 20+ documented projects.",
  ogImage: "/ateh.jpg",
  twitterHandle: "@Afrank11",
} as const;

const alternateNames = [
  "Frank Ateh",
  "Ateh Frank",
  "Ateh Frank Ateh",
  "Ateh Frank Junior",
  "Ateh Frank Jr",
  "Franck Ateh",
  "Ateh Franck",
  "Frank Ateh Ateh",
  "Afrank11",
];

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE.url}/#person`,
  name: SITE.fullName,
  givenName: "Frank",
  familyName: "Ateh",
  alternateName: alternateNames,
  url: SITE.url,
  image: `${SITE.url}/ateh.jpg`,
  jobTitle: ["Telecommunications Engineer", "Software Engineer", "Web Developer"],
  description:
    "Ateh Frank Ateh (Frank Ateh) is a telecommunications & ICT engineer, full-stack web developer, and founder from Cameroon. SUP'PTIC engineer based in Yaoundé.",
  nationality: "Cameroonian",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Yaoundé",
    addressCountry: "Cameroon",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "SUP'PTIC — National Advanced School of Posts, Telecommunications and ICT",
      sameAs:
        "https://en.wikipedia.org/wiki/National_Advanced_School_of_Posts,_Telecommunications_and_Information_and_Communication_Technologies",
    },
  ],
  knowsAbout: [
    "Telecommunications",
    "Network Engineering",
    "Software Engineering",
    "Web Development",
    "Cybersecurity",
    "React",
    "Next.js",
    "TypeScript",
    "Linux",
    "OpenStack",
    "MikroTik",
    "Penetration Testing",
  ],
  knowsLanguage: ["English", "French"],
  sameAs: [contact.github, contact.linkedin],
  email: `mailto:${contact.email}`,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Frank Ateh — Portfolio",
  alternateName: ["Ateh Frank Portfolio", "Ateh Frank Ateh", "Franck Ateh"],
  url: SITE.url,
  inLanguage: "en",
  author: { "@id": `${SITE.url}/#person` },
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Frank Ateh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frank Ateh (Ateh Frank Ateh, also written Ateh Frank or Franck Ateh) is a telecommunications & ICT engineer, full-stack web developer, and founder from Cameroon — a SUP'PTIC engineer based in Yaoundé who builds premium websites, networks, and secure systems.",
      },
    },
    {
      "@type": "Question",
      name: "Where did Frank Ateh study?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frank Ateh studied at SUP'PTIC (National Advanced School of Posts, Telecommunications and ICT) in Yaoundé, Cameroon, after a background in computer science.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact Frank Ateh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By email at atehfrank11@gmail.com, on GitHub at github.com/Afrank11, on LinkedIn at linkedin.com/in/frank-ateh-ateh-98760321a, or on WhatsApp at +237 653 667 494.",
      },
    },
  ],
};

export const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Work", item: `${SITE.url}/work` },
    { "@type": "ListItem", position: 3, name: "Notes", item: `${SITE.url}/notes` },
  ],
};
