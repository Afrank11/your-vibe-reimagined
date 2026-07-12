/**
 * Notes — engineering essays and build logs.
 * Add a new object to publish; /notes and the sitemap pick it up automatically.
 */

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  displayDate: string;
  readingTime: string;
  tags: string[];
  body: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "engineering-trust-terra-talent-hub",
    title: "Engineering trust: what Terra Talent Hub taught me about verification",
    excerpt:
      "A certificate is a claim, and claims are cheap. Building a skills verification platform meant designing a system where honesty is the path of least resistance.",
    date: "2026-07-02",
    displayDate: "July 2026",
    readingTime: "5 min",
    tags: ["Product", "Full-stack", "Payments"],
    body: [
      {
        type: "p",
        text: "Every hiring conversation contains a silent question: is any of this true? The CV says advanced Excel, the certificate says web development, and the employer has no way to check either before committing an interview slot — let alone a salary. Building Terra Talent Hub with team Tera 5, that silence was the product brief.",
      },
      { type: "h2", text: "Claims are cheap. Verification has to be cheaper." },
      {
        type: "p",
        text: "Our first insight was economic, not technical. Faking a credential costs nothing, so verifying one has to cost even less — seconds, not phone calls. That reframing drove the architecture: every certificate carries a QR code that resolves to its live record. The check happens at the exact moment of doubt, in the interview, on a phone. If verification had lived in an email thread or an admin portal, nobody would have used it, and the certificates would have been decoration.",
      },
      { type: "h2", text: "Scores only matter if they compare" },
      {
        type: "p",
        text: "The second problem was meaning. A homemade quiz produces a number, but a number nobody can interpret is noise. We built assessments on the DigComp framework so that a score means the same thing for every talent on the platform — a shared scale employers can rank against. Standardization is unglamorous engineering, but it is what turns 'she got 84%' into information.",
      },
      { type: "h2", text: "The adversarial mindset" },
      {
        type: "p",
        text: "A verification platform is a target by definition. Everyone who benefits from a better score has an incentive to game the assessment; everyone who failed one has an incentive to forge the result. My networking and security background kept intruding in useful ways: what does this flow look like to someone trying to cheat it? That question shaped the scoring design, the API surface, and how certificate records are served.",
      },
      { type: "h2", text: "What I'd tell anyone building trust products" },
      {
        type: "p",
        text: "Trust is not a feature you add — it is the product. Every decision, from pricing tiers that keep the door open for first-time users, to an employer dashboard that makes the verifying side a first-class citizen, either compounds trust or leaks it. Design for the skeptic in the room. If your system convinces them, everyone else follows.",
      },
    ],
  },
  {
    slug: "seven-servers-one-lesson",
    title: "Seven servers, one lesson: infrastructure is a dependency graph",
    excerpt:
      "Building a complete enterprise backbone — DNS, DHCP, web, mail, files, identity — from zero taught me that order of operations is the whole game.",
    date: "2026-06-10",
    displayDate: "June 2026",
    readingTime: "5 min",
    tags: ["Linux", "Infrastructure", "Networking"],
    body: [
      {
        type: "p",
        text: "The assignment sounds like a checklist: deploy seven servers on one Ubuntu host — DHCP, DNS, Apache virtual hosting, Postfix, NFS, SSH, Samba with Active Directory — and serve client VMs over a VMware internal network. Checklists lie. What the project actually teaches is that enterprise infrastructure is a dependency graph, and the graph is unforgiving.",
      },
      { type: "h2", text: "Build in dependency order or debug in circles" },
      {
        type: "p",
        text: "Everything assumes naming and addressing. Mail delivery fails silently when DNS records are wrong. Domain joins fail when name resolution and time drift disagree. A web server that works by IP and fails by hostname isn't a web problem at all. Once I started building strictly in dependency order — DHCP and DNS first, identity next, applications last — half the mysterious failures never happened.",
      },
      { type: "h2", text: "The client is the only judge" },
      {
        type: "p",
        text: "My definition of done changed during this build. A service isn't finished when it starts cleanly; it's finished when a client machine that knows nothing about your configuration can consume it — get the lease, resolve the name, load the site, send the mail, mount the share. Validating from the client's side of the network caught problems that looked invisible from the server's own shell.",
      },
      { type: "h2", text: "Seven services, one host, zero isolation" },
      {
        type: "p",
        text: "Running everything on a single host adds a distinctly educational cruelty: every fix risks disturbing a neighbor. Restart networking for the DNS change and DHCP leases wobble. It forces you to understand what each service actually touches — which is precisely the understanding that slides and diagrams never give you.",
      },
      {
        type: "quote",
        text: "When DNS, DHCP, and identity agree, everything above them becomes simple.",
      },
      {
        type: "p",
        text: "That sentence is the whole project. The applications people see — the website, the mail, the shared drives — are the easy layer. The invisible layer underneath, where names resolve and identities authenticate, is where reliability is actually engineered.",
      },
    ],
  },
  {
    slug: "detection-is-harder-than-intrusion",
    title: "Detection is harder than intrusion",
    excerpt:
      "I built a dual-subnet security lab with MikroTik, Wazuh, Zabbix, and Metasploit. Getting in was the easy half — seeing the intrusion was the education.",
    date: "2026-05-18",
    displayDate: "May 2026",
    readingTime: "4 min",
    tags: ["Cybersecurity", "SIEM", "Networking"],
    body: [
      {
        type: "p",
        text: "Offensive security has excellent marketing. Exploits are cinematic; dashboards are not. So when I designed my virtual security lab, I made a rule that shaped everything after it: the monitoring stack gets deployed before the first exploit is run. Wazuh and Zabbix went in on day one. Metasploit waited.",
      },
      { type: "h2", text: "Two subnets, one honest boundary" },
      {
        type: "p",
        text: "The lab is split into attacker and defender subnetworks separated by MikroTik routing. That boundary is the point. An attack that has to cross a real routed edge behaves like an attack in production — it takes the same path, touches the same controls, and leaves the same traces. Flat-network labs skip the part that matters.",
      },
      { type: "h2", text: "The noise problem" },
      {
        type: "p",
        text: "Here is what the marketing never mentions: a default SIEM sees everything and tells you nothing. My first Metasploit runs surfaced in Wazuh — buried in hundreds of alerts that meant nothing. Tuning detection rules to catch real attack behavior without drowning in noise took longer than every exploit combined. It is also, I now believe, the most employable skill the lab taught me.",
      },
      { type: "h2", text: "Defense changes how you attack" },
      {
        type: "p",
        text: "Once you've sat on the defender's side watching your own intrusion surface in the logs, you attack differently — and you build differently. Every system I've deployed since, from web platforms to Linux infrastructure, gets designed with one question in the room: what would this look like in the SIEM when someone comes for it? Offense-informed defense isn't a slogan; it's a feedback loop, and running both sides of it on my own infrastructure closed the loop for good.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
