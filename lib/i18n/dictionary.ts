import type { Locale } from "./config";

/**
 * Every interface string on the site, in both languages.
 * Content (projects, story, essays) lives in lib/i18n/content.ts — this file
 * is chrome only: navigation, labels, buttons, and micro-copy.
 */

const en = {
  meta: {
    skipToContent: "Skip to content",
  },

  nav: {
    homeAria: "Ateh Frank Ateh — home",
    primary: "Primary",
    mobile: "Mobile",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    work: "Work",
    about: "About",
    expertise: "Expertise",
    record: "Record",
    distinctions: "Distinctions",
    process: "Process",
    contact: "Contact",
    blog: "Blog",
    index: "Index",
    projectIndex: "Project index",
  },

  locale: {
    switchAria: "Language",
    switchTo: "Lire cette page en français",
  },

  cv: {
    short: "CV",
    download: "Download CV",
    chooseTitle: "Download the CV",
    chooseBody: "Two editions, same record. Pick the language you need.",
    close: "Close",
    pending: "French edition coming shortly.",
    english: "English",
    french: "French",
    fileNote: "PDF",
  },

  preloader: {
    caption: "Frank Ateh — Portfolio",
  },

  hero: {
    roles: ["Software Engineer", "Digital Product Builder", "Telecommunications Engineer"],
    statement:
      "I design and engineer digital experiences where technology, creativity, and performance meet.",
    exploreWork: "Explore my work",
    getInTouch: "Get in touch",
    figure: "Fig. 01 — The engineer",
    scroll: "Scroll",
    available: "Available for select projects",
    portraitAlt: "Frank Ateh — software engineer and telecommunications engineer",
  },

  about: {
    label: "About",
    headingA: "From a locked phone",
    headingB: "to ",
    headingAccent: "production",
    headingC: " networks.",
    portraitAlt: "Frank Ateh, telecommunications engineer and web developer, in Yaoundé",
    caption: "Yaoundé, CM",
    readMore: "Read my full story",
    readLess: "Read less",
  },

  expertise: {
    label: "Expertise",
    headingA: "Capabilities, ",
    headingAccent: "not",
    headingB: " keywords.",
  },

  work: {
    label: "Selected work",
    headingA: "Projects that ",
    headingAccent: "carry",
    headingB: " weight.",
    context: "Context",
    role: "Role",
    outcome: "Outcome",
    lesson: "Lesson",
    readCaseStudyAria: (title: string) => `Read the ${title} case study`,
    viewCaseStudy: "View case study",
    readCaseStudy: "Read case study",
    visitLiveSite: "Visit live site",
    fullIndex: (n: number) => `Full index — ${n} projects`,
  },

  record: {
    label: "Record",
    headingA: "A short history of ",
    headingAccent: "shipping.",
    distinctions: "Distinctions",
  },

  process: {
    label: "Process",
    headingA: "A method you can ",
    headingAccent: "rely",
    headingB: " on.",
  },

  signals: {
    label: "Signals",
    headingA: "The work ",
    headingAccent: "speaks",
    headingB: " first.",
    trustedBy: "Built with & for",
  },

  contact: {
    label: "Contact",
    replies: "Replies within 24h",
    headingA: "Let’s build something",
    headingB: "that ",
    headingAccent: "lasts.",
    intro:
      "A product to launch, a site that should feel premium, a network that has to hold — tell me what you’re building and where it needs to go.",
    pickChannel: "Pick a channel — every row is one click",
    email: "Email",
    phone: "Call · WhatsApp",
    github: "GitHub",
    linkedin: "LinkedIn",
  },

  footer: {
    rights: (year: number) => `© ${year} Frank Ateh — Yaoundé, Cameroon`,
    localTime: "Local time",
    backToTop: "Back to top",
  },

  workPage: {
    title: "Work — Project Index",
    description:
      "The complete project index of Frank Ateh: web platforms, network infrastructure, cybersecurity labs, cloud deployments, and data systems — 23 documented builds.",
    eyebrow: "Index",
    count: (n: number) => `${n} projects — 2022 → today`,
    headingA: "Everything",
    headingB: "I’ve ",
    headingAccent: "built.",
    intro:
      "Web platforms, enterprise infrastructure, security labs, telecom networks, data systems, and embedded machines — every documented project, filterable by field.",
    filterAria: "Filter projects by category",
    all: "All",
    colNumber: "Nº",
    colProject: "Project",
    colSummary: "Summary",
    colField: "Field",
  },

  caseStudy: {
    backToWork: "Work",
    caseLabel: (index: string) => `Case ${index}`,
    metaTitle: (title: string) => `${title} — Case Study`,
    ogTitle: (title: string) => `${title} — Case Study by Frank Ateh`,
    year: "Year",
    field: "Field",
    role: "Role",
    stack: "Stack",
    context: "Context",
    problem: "The problem",
    decisions: "Decisions",
    challenges: "Challenges",
    result: "Result",
    lesson: "Lesson",
    visitLiveSite: "Visit live site",
    nextCase: "Next case",
  },

  blogPage: {
    title: "Blog — Engineering Essays & Build Logs",
    description:
      "Field notes by Frank Ateh: essays on infrastructure, cybersecurity, networks, and building digital products — written from real builds, not theory.",
    eyebrow: "Blog",
    count: (n: number) => `${n} entries — build logs & essays`,
    headingA: "Field",
    headingAccent: "notes.",
    intro:
      "Thinking in public — infrastructure, security, networks, and product. Every entry comes from something I actually built.",
    readSuffix: "read",
    nextEntry: "Next entry",
  },

  notFound: {
    eyebrow: "404 — Signal lost",
    headingA: "This route doesn’t ",
    headingAccent: "resolve.",
    home: "Return home",
  },
};

export type Dictionary = typeof en;

/** Same shape, in French. */
const fr: Dictionary = {
  meta: {
    skipToContent: "Aller au contenu",
  },

  nav: {
    homeAria: "Ateh Frank Ateh — accueil",
    primary: "Principale",
    mobile: "Mobile",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    work: "Projets",
    about: "À propos",
    expertise: "Expertise",
    record: "Parcours",
    distinctions: "Distinctions",
    process: "Méthode",
    contact: "Contact",
    blog: "Blog",
    index: "Index",
    projectIndex: "Index des projets",
  },

  locale: {
    switchAria: "Langue",
    switchTo: "Read this page in English",
  },

  cv: {
    short: "CV",
    download: "Télécharger le CV",
    chooseTitle: "Télécharger le CV",
    chooseBody: "Deux éditions, le même parcours. Choisissez votre langue.",
    close: "Fermer",
    pending: "Version française bientôt disponible.",
    english: "Anglais",
    french: "Français",
    fileNote: "PDF",
  },

  preloader: {
    caption: "Frank Ateh — Portfolio",
  },

  hero: {
    roles: ["Ingénieur logiciel", "Créateur de produits numériques", "Ingénieur télécoms"],
    statement:
      "Je conçois et développe des expériences numériques où la technologie, la créativité et la performance se rejoignent.",
    exploreWork: "Découvrir mes projets",
    getInTouch: "Me contacter",
    figure: "Fig. 01 — L’ingénieur",
    scroll: "Défiler",
    available: "Disponible pour des projets choisis",
    portraitAlt: "Frank Ateh — ingénieur logiciel et ingénieur télécommunications",
  },

  about: {
    label: "À propos",
    headingA: "D’un téléphone bloqué",
    headingB: "aux réseaux en ",
    headingAccent: "production",
    headingC: ".",
    portraitAlt: "Frank Ateh, ingénieur télécoms et développeur web, à Yaoundé",
    caption: "Yaoundé, CM",
    readMore: "Lire mon parcours complet",
    readLess: "Réduire",
  },

  expertise: {
    label: "Expertise",
    headingA: "Des compétences, ",
    headingAccent: "pas",
    headingB: " des mots-clés.",
  },

  work: {
    label: "Projets sélectionnés",
    headingA: "Des projets qui ",
    headingAccent: "pèsent",
    headingB: " vraiment.",
    context: "Contexte",
    role: "Rôle",
    outcome: "Résultat",
    lesson: "Leçon",
    readCaseStudyAria: (title: string) => `Lire l’étude de cas ${title}`,
    viewCaseStudy: "Voir l’étude de cas",
    readCaseStudy: "Lire l’étude de cas",
    visitLiveSite: "Voir le site en ligne",
    fullIndex: (n: number) => `Index complet — ${n} projets`,
  },

  record: {
    label: "Parcours",
    headingA: "Une brève histoire de ce que j’ai ",
    headingAccent: "livré.",
    distinctions: "Distinctions",
  },

  process: {
    label: "Méthode",
    headingA: "Une méthode sur laquelle vous pouvez ",
    headingAccent: "compter",
    headingB: ".",
  },

  signals: {
    label: "Signaux",
    headingA: "Le travail ",
    headingAccent: "parle",
    headingB: " en premier.",
    trustedBy: "Conçu avec & pour",
  },

  contact: {
    label: "Contact",
    replies: "Réponse sous 24 h",
    headingA: "Construisons quelque chose",
    headingB: "qui ",
    headingAccent: "dure.",
    intro:
      "Un produit à lancer, un site qui doit inspirer confiance, un réseau qui doit tenir — dites-moi ce que vous construisez et jusqu’où cela doit aller.",
    pickChannel: "Choisissez un canal — chaque ligne est un clic",
    email: "E-mail",
    phone: "Appel · WhatsApp",
    github: "GitHub",
    linkedin: "LinkedIn",
  },

  footer: {
    rights: (year: number) => `© ${year} Frank Ateh — Yaoundé, Cameroun`,
    localTime: "Heure locale",
    backToTop: "Haut de page",
  },

  workPage: {
    title: "Projets — Index",
    description:
      "L’index complet des projets de Frank Ateh : plateformes web, infrastructures réseau, laboratoires de cybersécurité, déploiements cloud et systèmes de données — 23 réalisations documentées.",
    eyebrow: "Index",
    count: (n: number) => `${n} projets — 2022 → aujourd’hui`,
    headingA: "Tout ce que",
    headingB: "j’ai ",
    headingAccent: "construit.",
    intro:
      "Plateformes web, infrastructures d’entreprise, laboratoires de sécurité, réseaux télécoms, systèmes de données et machines embarquées — chaque projet documenté, filtrable par domaine.",
    filterAria: "Filtrer les projets par catégorie",
    all: "Tous",
    colNumber: "Nº",
    colProject: "Projet",
    colSummary: "Résumé",
    colField: "Domaine",
  },

  caseStudy: {
    backToWork: "Projets",
    caseLabel: (index: string) => `Cas ${index}`,
    metaTitle: (title: string) => `${title} — Étude de cas`,
    ogTitle: (title: string) => `${title} — Étude de cas par Frank Ateh`,
    year: "Année",
    field: "Domaine",
    role: "Rôle",
    stack: "Stack",
    context: "Contexte",
    problem: "Le problème",
    decisions: "Décisions",
    challenges: "Difficultés",
    result: "Résultat",
    lesson: "Leçon",
    visitLiveSite: "Voir le site en ligne",
    nextCase: "Cas suivant",
  },

  blogPage: {
    title: "Blog — Essais d’ingénierie & carnets de bord",
    description:
      "Les notes de terrain de Frank Ateh : essais sur l’infrastructure, la cybersécurité, les réseaux et la création de produits numériques — écrits depuis de vrais projets, pas depuis la théorie.",
    eyebrow: "Blog",
    count: (n: number) => `${n} entrées — carnets de bord & essais`,
    headingA: "Notes de",
    headingAccent: "terrain.",
    intro:
      "Réfléchir à voix haute — infrastructure, sécurité, réseaux et produit. Chaque entrée vient de quelque chose que j’ai réellement construit.",
    readSuffix: "de lecture",
    nextEntry: "Entrée suivante",
  },

  notFound: {
    eyebrow: "404 — Signal perdu",
    headingA: "Cette adresse ne ",
    headingAccent: "répond pas.",
    home: "Retour à l’accueil",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, fr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
