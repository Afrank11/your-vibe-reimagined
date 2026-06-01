import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import SEO from '@/components/SEO';
import { useLanguage } from '@/components/LanguageProvider';
import { ArrowRight, BookOpen } from 'lucide-react';

const posts = [
  {
    slug: 'openstack-private-cloud',
    title: { en: 'Building a Small OpenStack Private Cloud', fr: 'Construire un petit cloud prive OpenStack' },
    excerpt: {
      en: 'What I learned turning an Ubuntu machine into a private cloud with virtual networks, instances, storage, and SSH access.',
      fr: "Ce que j'ai appris en transformant une machine Ubuntu en cloud prive avec reseaux virtuels, instances, stockage et acces SSH.",
    },
    date: '2026',
    tag: 'Cloud',
    readTime: { en: '5 min read', fr: '5 min de lecture' },
    body: {
      en: [
        'OpenStack taught me that cloud computing is not magic. It is a careful combination of compute, networking, identity, images, storage, and routing. Once those pieces start talking to each other, a normal server begins to feel like a small data center.',
        'For my private cloud lab, I started with Ubuntu and MicroStack because I wanted a practical path to a working environment. The goal was simple: create virtual networks, launch instances, attach volumes, and reach those instances through SSH like real production machines.',
        'The hardest part was not launching a VM. The real learning was networking: creating a router, connecting internal networks to external access, assigning floating IPs, and understanding why an instance can run perfectly while still being unreachable from outside.',
        'That project changed how I think about infrastructure. A good deployment is not just a list of commands. It is documentation, naming, repeatability, and knowing how to debug when DNS, routing, security groups, or keys refuse to cooperate.',
        'My biggest takeaway: if you can build a small private cloud, you understand public cloud services with much more confidence. The vocabulary becomes real because you have touched the parts yourself.',
      ],
      fr: [
        "OpenStack m'a montre que le cloud n'est pas magique. C'est une combinaison precise entre calcul, reseau, identite, images, stockage et routage. Quand ces pieces communiquent bien, un simple serveur commence a ressembler a un petit data center.",
        "Pour mon lab cloud prive, j'ai utilise Ubuntu et MicroStack afin d'obtenir rapidement un environnement fonctionnel. L'objectif etait simple : creer des reseaux virtuels, lancer des instances, attacher des volumes et acceder aux machines par SSH.",
        "La partie la plus difficile n'etait pas le lancement d'une VM. Le vrai apprentissage etait le reseau : routeur, reseaux internes, acces externe, IP flottantes et diagnostic quand une instance tourne mais reste inaccessible.",
        "Ce projet a change ma facon de voir l'infrastructure. Un bon deploiement n'est pas seulement une liste de commandes. C'est aussi de la documentation, des noms clairs, de la repetabilite et une vraie methode de debogage.",
        "Ma conclusion : si on peut construire un petit cloud prive, on comprend beaucoup mieux les services cloud publics parce qu'on a touche les composants soi-meme.",
      ],
    },
  },
  {
    slug: 'security-lab-lessons',
    title: { en: 'Lessons From Building an Enterprise Security Lab', fr: "Lecons d'un lab de securite d'entreprise" },
    excerpt: {
      en: 'A practical reflection on designing a lab with multiple operating systems, monitoring, routing, vulnerable machines, and controlled testing.',
      fr: 'Retour pratique sur la conception d un lab avec plusieurs OS, supervision, routage, machines vulnerables et tests controles.',
    },
    date: '2026',
    tag: 'Security',
    readTime: { en: '6 min read', fr: '6 min de lecture' },
    body: {
      en: [
        'A cybersecurity lab becomes useful when it behaves like a real environment. I wanted more than a Kali machine and a target VM, so I built a multi-OS setup with Windows, Ubuntu, Kali Linux, Metasploitable, routing, monitoring, and separated subnets.',
        'The first lesson was segmentation. Placing machines into different networks forced me to think like both an attacker and a defender. Where should traffic pass? What should be blocked? Which logs prove that something happened?',
        'The second lesson was visibility. Tools like Wazuh and Zabbix make the lab feel alive because every scan, failure, service issue, or suspicious event becomes something you can observe instead of guess.',
        'The third lesson was restraint. A lab is powerful because it gives you permission to break things safely. That means every test must stay inside the environment, every target must be intentional, and every result should teach something measurable.',
        'This lab helped me connect networking, systems administration, and security. It is one of the best ways I know to move from theory to real operational understanding.',
      ],
      fr: [
        "Un lab cybersecurite devient utile lorsqu'il ressemble a un vrai environnement. Je voulais plus qu'une machine Kali et une VM cible, donc j'ai construit un environnement multi-OS avec Windows, Ubuntu, Kali Linux, Metasploitable, routage, supervision et sous-reseaux separes.",
        "La premiere lecon etait la segmentation. Mettre les machines dans differents reseaux m'a oblige a penser comme attaquant et comme defenseur. Quel trafic doit passer ? Que faut-il bloquer ? Quels logs prouvent ce qui s'est passe ?",
        "La deuxieme lecon etait la visibilite. Des outils comme Wazuh et Zabbix rendent le lab vivant, car chaque scan, panne, probleme service ou evenement suspect devient observable.",
        "La troisieme lecon etait la discipline. Un lab est puissant parce qu'il permet de casser les choses sans danger. Mais chaque test doit rester dans l'environnement, chaque cible doit etre intentionnelle et chaque resultat doit apprendre quelque chose.",
        "Ce lab m'a aide a relier reseaux, administration systeme et securite. C'est l'une des meilleures facons de passer de la theorie a une vraie comprehension operationnelle.",
      ],
    },
  },
  {
    slug: 'building-from-africa',
    title: { en: 'Building Useful Technology From Africa', fr: "Construire une technologie utile depuis l'Afrique" },
    excerpt: {
      en: 'Why projects like Terra Talent Hub matter, and how local problems can become strong technical products.',
      fr: 'Pourquoi des projets comme Terra Talent Hub comptent, et comment les problemes locaux peuvent devenir de vrais produits techniques.',
    },
    date: '2026',
    tag: 'Product',
    readTime: { en: '4 min read', fr: '4 min de lecture' },
    body: {
      en: [
        'Some of the best software ideas start with a problem you can see around you. In Cameroon and across Africa, talent is everywhere, but verification, trust, visibility, and access to opportunity are still serious gaps.',
        'That is one reason Terra Talent Hub matters to me. It is not just a website. It is a system for helping talents prove what they can do through assessments, rankings, verified certificates, and employer-facing tools.',
        'Building for a local context forces practical engineering decisions. Payment flows must match the market. Interfaces must work on everyday devices. The product must be clear enough for first-time users but strong enough for serious employers.',
        'I believe African builders have an advantage: we understand constraints deeply. Limited connectivity, budget pressure, mixed devices, and trust problems are not abstract. They are design inputs.',
        'The future I want to build toward is simple: technology that feels global in quality but local in intelligence. That is where impact becomes real.',
      ],
      fr: [
        "Certaines des meilleures idees logicielles commencent par un probleme visible autour de soi. Au Cameroun et en Afrique, le talent existe partout, mais la verification, la confiance, la visibilite et l'acces aux opportunites restent de vrais defis.",
        "C'est pour cela que Terra Talent Hub compte pour moi. Ce n'est pas seulement un site web. C'est un systeme qui aide les talents a prouver leurs competences par des evaluations, classements, certificats verifies et outils pour employeurs.",
        "Construire pour un contexte local oblige a faire des choix techniques pratiques. Les paiements doivent correspondre au marche. Les interfaces doivent fonctionner sur les appareils du quotidien. Le produit doit etre clair pour les nouveaux utilisateurs et solide pour les employeurs.",
        "Je crois que les builders africains ont un avantage : nous comprenons les contraintes en profondeur. Connectivite limitee, budget, appareils varies et probleme de confiance ne sont pas abstraits. Ce sont des donnees de conception.",
        "Le futur que je veux construire est simple : une technologie de qualite mondiale, mais intelligente localement. C'est la que l'impact devient reel.",
      ],
    },
  },
];

const Blog = () => {
  const { language, t } = useLanguage();
  const [activeSlug, setActiveSlug] = useState(posts[0].slug);
  const activePost = posts.find(post => post.slug === activeSlug) ?? posts[0];

  return (
    <div className="pt-24 md:pt-20 pb-20 px-4 relative z-10 min-h-screen">
      <SEO title="Blog & Insights - Ateh Frank Ateh" description="Articles by Ateh Frank Ateh on cloud infrastructure, enterprise security labs, African tech, networking and software engineering." path="/blog" />
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('Blog &', 'Blog &')} <span className="text-primary text-glow">{t('Insights', 'idees')}</span>
          </h1>
          <p className="font-mono-game text-muted-foreground text-sm">&gt; cat blog/*</p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.95fr_1.35fr] gap-6 items-start">
          <div className="space-y-4">
            {posts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <button
                  type="button"
                  onClick={() => setActiveSlug(post.slug)}
                  className={`w-full text-left bg-card border rounded-xl p-6 hover:border-primary/30 transition-all group ${
                    activeSlug === post.slug ? 'border-primary/60 box-glow' : 'border-border'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded font-mono-game">{post.tag}</span>
                    <span className="text-muted-foreground text-xs">{post.date}</span>
                    <span className="text-muted-foreground text-xs">- {post.readTime[language]}</span>
                  </div>
                  <BookOpen size={20} className="text-primary mb-3" />
                  <h2 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{post.title[language]}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt[language]}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-mono-game text-xs">
                    {t('Read post', "Lire l'article")} <ArrowRight size={14} />
                  </span>
                </button>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.15}>
            <article className="bg-card border border-border rounded-xl p-6 md:p-8 sticky top-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded font-mono-game">{activePost.tag}</span>
                <span className="text-muted-foreground text-xs">{activePost.date}</span>
                <span className="text-muted-foreground text-xs">- {activePost.readTime[language]}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{activePost.title[language]}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{activePost.excerpt[language]}</p>
              <div className="space-y-4">
                {activePost.body[language].map(paragraph => (
                  <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Blog;
