import type { ProjectGroup } from "@/lib/data";

/**
 * French translations of everything in lib/data.ts.
 *
 * lib/data.ts stays the English source of truth and owns the structure
 * (slugs, images, tags, links, ordering). This file only carries the strings
 * that change language, keyed by the stable identifier of each entry —
 * slug for projects, index for expertise/process, year for the record.
 * lib/i18n/content.ts merges the two into one localized content object.
 */

export const groupsFr: Record<ProjectGroup, string> = {
  Web: "Web",
  "Infrastructure & Cloud": "Infrastructure & Cloud",
  Cybersecurity: "Cybersécurité",
  Networking: "Réseaux",
  "Data & AI": "Données & IA",
  "Mobile & Robotics": "Mobile & Robotique",
};

type ProjectFr = {
  title?: string;
  kind: string;
  summary: string;
  tags?: string[];
};

type CaseStudyFr = ProjectFr & {
  year: string;
  context: string;
  role: string;
  outcome: string;
  lesson: string;
  problem: string;
  decisions: { title: string; body: string }[];
  challenges: string;
  result: string;
};

export const caseStudiesFr: Record<string, CaseStudyFr> = {
  "frinux-technologies": {
    kind: "Studio d’ingénierie logicielle — fondateur",
    tags: ["Next.js", "TypeScript", "GSAP", "Marque & stratégie", "Studio"],
    summary:
      "Le studio d’ingénierie logicielle que j’ai fondé — là où l’artisanat rencontre l’infrastructure : sites, produits, applications mobiles et systèmes IA pour des marques ambitieuses.",
    year: "2026 — aujourd’hui",
    context:
      "Les fondateurs ambitieux, au Cameroun et ailleurs, trouvent facilement des développeurs ; ce qu’ils ne trouvent pas, c’est une équipe qui traite le design et l’infrastructure comme une seule et même discipline. Frinux existe pour être cette équipe.",
    role:
      "Fondateur et ingénieur principal — positionnement, marque, design system, site, et le processus de livraison derrière chaque mission client.",
    outcome:
      "Un studio au standard défini : cinq disciplines, six étapes entre l’idée et le lancement, et des produits mis en production plutôt que présentés en maquette.",
    lesson:
      "Un studio est une promesse avant d’être un portfolio. Énoncer publiquement le standard, c’est ce qui permet de s’y tenir sur chaque projet.",
    problem:
      "La plupart des agences découpent le travail : les designers passent la main aux développeurs, et l’infrastructure devient le problème de quelqu’un d’autre après le lancement. Résultat : des produits qui ont l’air justes et se comportent mal — lents, fragiles, difficiles à maintenir. Frinux a été fondé pour combler cet écart en refusant purement et simplement ce passage de relais.",
    decisions: [
      {
        title: "Design et ingénierie sous un même standard",
        body: "Le studio associe la rigueur de l’ingénierie réseau à l’obsession du design. Les mêmes personnes qui choisissent la typographie sont responsables du déploiement — la performance, l’accessibilité et la maintenabilité deviennent donc des décisions de design, et non des rattrapages.",
      },
      {
        title: "Cinq disciplines, une seule équipe",
        body: "Web, produit, mobile, systèmes IA et infrastructure sous un même toit. Les clients obtiennent une équipe unique et responsable sur toute la chaîne, au lieu de coordonner des prestataires qui se renvoient la faute.",
      },
      {
        title: "Un processus en six étapes, publié ouvertement",
        body: "De la découverte au lancement, tout est documenté sur le site lui-même. Publier le processus fixe les attentes avant le premier appel et engage le studio sur un standard reproductible à chaque mission.",
      },
      {
        title: "Des outils choisis pour des problèmes, pas pour l’affiche",
        body: "Next.js, TypeScript, Supabase, React Native, intégration IA — une stack délibérément ennuyeuse là où la fiabilité compte, et moderne là où cela se justifie, plutôt que de courir après la mode.",
      },
    ],
    challenges:
      "Construire depuis le Cameroun une marque de studio crédible auprès de clients internationaux imposait que le site soit lui-même la preuve — chaque budget de performance, chaque décision d’animation et chaque ligne de texte est un argument montrant que l’équipe mérite qu’on lui confie le produit de quelqu’un d’autre.",
    result:
      "Frinux Technologies est en ligne sur frinux.vercel.app : un studio pour les fondateurs et les équipes qui refusent la moyenne, avec des produits en production sur le web, le mobile et l’IA.",
  },

  "terra-talent-hub": {
    kind: "Plateforme de vérification des compétences",
    tags: ["React", "Supabase", "Paiements", "Certificats QR"],
    summary:
      "Une plateforme camerounaise de vérification des compétences pour les talents et les employeurs, avec évaluations, scores, certificats vérifiés et tableaux de bord employeur.",
    year: "2024 — 2026",
    context:
      "Partout en Afrique, les employeurs peinent à vérifier ce que les candidats savent réellement faire. Un certificat est facile à revendiquer et difficile à croire.",
    role:
      "Développeur full-stack au sein de l’équipe Tera 5 — évaluations DigComp, classements, certificats vérifiés par QR code, paiements par paliers, backend API sécurisé et tableau de bord employeur.",
    outcome:
      "Une plateforme en production où les talents obtiennent des certificats vérifiables par QR code, et où les employeurs recrutent sur preuves plutôt que sur déclarations.",
    lesson:
      "La confiance est une fonctionnalité produit. Chaque décision de conception — du scoring à la vérification par QR code — devait faire de l’honnêteté le chemin de moindre résistance.",
    problem:
      "Un certificat est une affirmation, et les affirmations ne coûtent rien. Pour que le recrutement fonctionne, un employeur face à un candidat doit pouvoir confirmer — en quelques secondes — qu’une évaluation a bien eu lieu, ce qu’elle mesurait et quel score le candidat a obtenu. Rien sur le marché local ne proposait cela.",
    decisions: [
      {
        title: "Une évaluation standardisée plutôt que des quiz improvisés",
        body: "Les évaluations reposent sur le référentiel DigComp, afin qu’un score signifie la même chose pour tous les talents — une échelle commune que les employeurs peuvent réellement comparer, au lieu de tests maison que personne ne sait interpréter.",
      },
      {
        title: "La vérification au moment du doute",
        body: "Chaque certificat porte un QR code qui renvoie à sa fiche en direct. Le contrôle a lieu exactement là où la confiance se décide — en entretien, sur un téléphone — et non dans un échange d’e-mails quelques jours plus tard.",
      },
      {
        title: "Des paiements par paliers pour garder la porte ouverte",
        body: "Un modèle tarifaire par paliers permet aux talents de commencer gratuitement et de payer à mesure que la valeur augmente, ce qui garde la plateforme accessible sur un marché où un péage strict exclurait justement ceux pour qui elle existe.",
      },
      {
        title: "Un produit côté employeur, pas seulement des profils",
        body: "Les employeurs ont reçu leur propre tableau de bord — classements, résultats vérifiés, preuves des candidats — parce qu’une plateforme de vérification ne compte que si le côté qui vérifie s’en sert vraiment.",
      },
    ],
    challenges:
      "Les vrais problèmes étaient de nature adversariale : concevoir un scoring difficile à contourner, garder la vérification des certificats instantanée et infalsifiable, et câbler des flux de paiement sur plusieurs paliers via un backend API sécurisé — tout en gardant un produit assez simple pour un premier usage.",
    result:
      "Terra Talent Hub est en ligne sur terratalenthub.com. Les talents passent des évaluations standardisées, obtiennent des certificats classés et vérifiables par QR code, et les employeurs recrutent sur preuves plutôt que sur déclarations.",
  },

  "reign-cuts": {
    kind: "Site premium pour barbershop",
    tags: ["React", "Vercel", "Design de marque", "Réservation"],
    summary:
      "Un site premium pour barbershop — « Là où la précision rencontre le style » — avec une identité or sur noir, des services, une galerie et des appels à l’action prêts pour la réservation.",
    year: "2025",
    context:
      "Les barbershops locaux se battent sur le savoir-faire mais perdent leurs clients en ligne face à des sites génériques et lents — ou à l’absence de site. Reign Cuts est le contre-argument.",
    role:
      "Design et développement, de bout en bout — direction de marque, architecture de l’information, intégration responsive et déploiement.",
    outcome:
      "Un site qui ressemble au salon qu’il vend : précis, stylé, sûr de lui — avec la réservation à un clic depuis chaque section.",
    lesson:
      "Pour une entreprise de service, l’atmosphère est le produit. Le site doit donner la sensation du fauteuil avant même que le client ne s’y assoie.",
    problem:
      "Un barbershop premium pratique des prix premium, et son site doit les justifier avant qu’un mot ne soit lu. Le brief : une vitrine numérique où le visiteur comprend instantanément le niveau de savoir-faire — et peut réserver sans friction.",
    decisions: [
      {
        title: "Une identité or sur noir, pas une palette de template",
        body: "La typographie serif d’affichage et le schéma or sur fond sombre ont été choisis pour évoquer le soin de luxe, pas un site tech. Chaque section respecte la même discipline bichromatique, pour que la marque reste tenue.",
      },
      {
        title: "La réservation comme seule issue",
        body: "Accueil, services, galerie, à propos — chaque section converge vers « Réserver ». Une seule action, proposée à chaque instant où le visiteur peut être convaincu, sans liens concurrents qui dilueraient l’intention.",
      },
      {
        title: "Une mise en page pilotée par la photographie",
        body: "De grandes images d’ambiance portent le savoir-faire ; le texte reste court et affirmé. Le hero oppose la typographie à une photographie pleine hauteur, pour que le style du salon soit la première chose qui s’affiche.",
      },
    ],
    challenges:
      "Concilier richesse et rapidité : de la photographie pleine hauteur et une élégance générale, maintenues rapides sur connexion mobile grâce à l’optimisation des images et à un build React léger — parce qu’un site de luxe lent se contredit lui-même.",
    result:
      "Un site en ligne qui dit « barbershop premium » au premier coup d’œil — coupes expertes, sculpture de barbe, soins de luxe — structuré pour que chaque défilement rapproche le visiteur du fauteuil.",
  },

  "brightwell-cleaning": {
    title: "Brightwell Cleaning Co.",
    kind: "Site pour entreprise de services locale",
    tags: ["React", "Design de conversion", "SEO local", "Capture de leads"],
    summary:
      "Un site orienté confiance pour une entreprise de nettoyage domestique et commercial — tarifs transparents, comparatif avant/après et demande de devis sur chaque écran.",
    year: "2026",
    context:
      "Les entreprises de services locales vivent ou meurent par la confiance. Une société de nettoyage demande à des inconnus de lui confier les clés de leur logement — le site doit répondre à cette inquiétude avant de demander la réservation.",
    role:
      "Design et développement, de bout en bout — architecture des services, présentation des tarifs, comparatif avant/après interactif, formulaire de devis et déploiement.",
    outcome:
      "Un site où chaque objection trouve sa réponse sur place : assurance, personnel vérifié, absence d’engagement, tarifs horaires et forfaitaires transparents, et une demande de devis jamais à plus d’un défilement.",
    lesson:
      "Pour les services de proximité, la précision fait la crédibilité. Nommer de vrais quartiers et des prix exacts convertit mieux que n’importe quel adjectif.",
    problem:
      "Les sociétés de nettoyage affrontent une présomption de risque — vont-elles venir, le personnel est-il vérifié, combien cela coûtera-t-il vraiment ? La plupart des sites répondent par des photos de banque d’images et un « contactez-nous pour un devis », ce qui demande au visiteur de parier d’abord et de comprendre ensuite.",
    decisions: [
      {
        title: "Les prix sur la page, pas derrière un formulaire",
        body: "Chaque service s’ouvre sur un chiffre réel — à partir de 18 £/heure, à partir de 150 £, à partir de 160 £. Publier les prix écarte les demandes hors cible et rassure celles qui correspondent.",
      },
      {
        title: "Un avant/après interactif comme preuve",
        body: "Un curseur à faire glisser révèle une cuisine avant et après un nettoyage en profondeur. C’est l’élément le plus persuasif de la page, parce qu’il démontre le résultat au lieu de le décrire.",
      },
      {
        title: "Des marqueurs de confiance là où naît le doute",
        body: "Entièrement assuré, personnel contrôlé, produits écologiques, satisfaction garantie — affichés en bandeau juste sous le hero, exactement là où commence l’hésitation d’un nouveau visiteur.",
      },
      {
        title: "Deux façons de convertir, toujours visibles",
        body: "Un formulaire de devis pour ceux qui planifient, un bouton WhatsApp pour ceux qui décident tout de suite. Les demandes de services locaux arrivent par les deux canaux : le site n’impose donc jamais un seul comportement.",
      },
    ],
    challenges:
      "Concilier volume et clarté : six services, des paliers tarifaires, une FAQ, des avis et un parcours de réservation sur une seule page risquent de former un mur. La solution : un découpage strict et un appel à l’action répété, pour que la page se lise comme une conversation guidée plutôt que comme une brochure.",
    result:
      "Un site d’entreprise locale complet — services aux tarifs transparents, preuve avant/après, réservation expliquée en trois étapes, avis, FAQ et formulaire de devis le jour même — en ligne sur cleaning-site-demo.vercel.app.",
  },

  "cybersecurity-lab": {
    title: "Laboratoire de sécurité d’entreprise",
    kind: "Environnement d’attaque et de défense multi-OS",
    tags: ["Kali Linux", "MikroTik", "Wazuh", "Zabbix", "Metasploit"],
    summary:
      "Un laboratoire de sécurité virtuel multi-OS, avec routage MikroTik, supervision Wazuh et Zabbix, et Metasploit pour des tests d’intrusion sur deux sous-réseaux.",
    year: "2025",
    context:
      "De vraies compétences d’attaque et de défense ne s’apprennent pas sur des diapositives. Il leur faut une infrastructure proche de la production, que l’on peut casser sans risque.",
    role:
      "Architecte et opérateur — conception de la topologie à deux sous-réseaux, déploiement du routage, de la supervision SIEM et de l’outillage offensif sur machines virtuelles.",
    outcome:
      "Un environnement entièrement supervisé où les attaques sont lancées, détectées et analysées de bout en bout — offensive et défensive dans un seul système.",
    lesson:
      "La détection est plus difficile que l’intrusion. Construire le côté défensif m’a appris davantage que n’importe quel exploit.",
    problem:
      "Des compétences de sécurité apprises sur diapositives ne survivent pas au contact d’un vrai réseau. S’exercer à l’attaque et à la défense exige une infrastructure qui se comporte comme la production — routée, supervisée, multi-OS — tout en restant sûre à casser. Les laboratoires publics fournissent des cibles ; ils n’apprennent pas à tenir la défense.",
    decisions: [
      {
        title: "Deux sous-réseaux, une frontière MikroTik",
        body: "Les réseaux attaquant et défenseur ont été séparés par du routage MikroTik, de sorte que chaque attaque devait franchir une véritable frontière réseau — le même chemin qu’en production, visible par les mêmes contrôles.",
      },
      {
        title: "La détection comme citoyen de premier rang",
        body: "Wazuh (SIEM) et Zabbix (supervision) ont été déployés avant le premier exploit. L’objectif n’a jamais été seulement d’entrer — mais d’observer à quoi ressemble une intrusion depuis le fauteuil du défenseur.",
      },
      {
        title: "Le multi-OS, volontairement",
        body: "Kali pour l’offensive, des cibles hétérogènes pour la défense — parce que les environnements réels sont hétérogènes, et que des règles de détection qui ne fonctionnent que sur un seul OS donnent un faux sentiment de sécurité.",
      },
    ],
    challenges:
      "Le vrai travail, c’était le réglage : des règles de détection qui repèrent l’activité Metasploit sans se noyer dans le bruit d’alertes, et faire tenir toute une entreprise supervisée dans les machines virtuelles d’un seul hôte, sans que le laboratoire s’effondre sous sa propre consommation.",
    result:
      "Une boucle attaque-défense complète sur ma propre infrastructure : lancer une intrusion sur un sous-réseau, la voir remonter dans le SIEM sur l’autre, et retracer la chaîne d’attaque de bout en bout.",
  },

  "linux-infrastructure": {
    title: "Infrastructure Linux à 7 serveurs",
    kind: "Pile de services d’entreprise",
    tags: ["Ubuntu", "DNS", "DHCP", "Apache", "Postfix", "Samba + AD"],
    summary:
      "Sept serveurs sur un seul hôte Ubuntu servant des VM clientes via un réseau interne VMware : DHCP, DNS, hébergement virtuel Apache, messagerie Postfix, NFS, SSH et Samba avec Active Directory.",
    year: "2024",
    context:
      "Les services essentiels d’une entreprise — nommage, adressage, web, messagerie, fichiers, identité — comme un seul système cohérent, construit à partir de zéro.",
    role:
      "Ingénieur unique — provisionnement, configuration et interconnexion des sept services, puis validation de chacun depuis les postes clients.",
    outcome:
      "Une véritable colonne vertébrale d’entreprise, où chaque service résout, authentifie et sert de vrais clients sur le réseau.",
    lesson:
      "L’infrastructure récompense la patience. Quand le DNS, le DHCP et l’identité s’accordent, tout ce qui repose dessus devient simple.",
    problem:
      "La vie numérique d’une entreprise repose sur des services que personne ne voit : nommage, adressage, web, messagerie, fichiers, identité. Le défi était de bâtir toute cette fondation depuis zéro — sept serveurs interdépendants — et de prouver qu’elle fonctionne non pas depuis les serveurs eux-mêmes, mais depuis les clients qui en dépendent.",
    decisions: [
      {
        title: "L’ordre des dépendances, pas l’ordre de la checklist",
        body: "Le DNS et le DHCP d’abord, parce que tout le reste suppose leur existence. Construire dans l’ordre des dépendances a transformé sept services distincts en un système cohérent, au lieu de sept îlots fragiles.",
      },
      {
        title: "L’identité au centre",
        body: "Samba avec Active Directory porte l’authentification de l’environnement : l’accès aux fichiers et les services se résolvent contre une source de vérité unique, plutôt que contre des comptes créés serveur par serveur.",
      },
      {
        title: "La validation côté client comme définition du « terminé »",
        body: "Aucun service n’était considéré comme fini tant qu’une VM cliente sur le réseau interne VMware ne pouvait pas le consommer — résoudre le nom, obtenir le bail, charger le site, envoyer le courrier, monter le partage.",
      },
    ],
    challenges:
      "La difficulté venait de l’interdépendance : la messagerie échoue en silence quand les enregistrements DNS sont faux, les jonctions au domaine échouent quand la résolution de noms et la dérive d’horloge divergent, et déboguer sept services partageant un même hôte Ubuntu signifie que chaque correctif risque de déranger le voisin.",
    result:
      "Une colonne vertébrale d’entreprise complète — DHCP, DNS, hébergement virtuel Apache, Postfix, NFS, SSH et Samba avec AD — servant de vraies machines clientes sur un réseau interne, construite et validée de bout en bout.",
  },

  "openstack-cloud": {
    title: "Cloud privé OpenStack",
    kind: "Déploiement de cloud privé",
    tags: ["OpenStack", "MicroStack", "Ubuntu", "SSH"],
    summary:
      "Un cloud privé bâti avec MicroStack sur Ubuntu : réseaux virtuels, routeur cloud, instances de calcul, volumes de stockage et accès SSH distant.",
    year: "2025",
    context:
      "Le cloud public cache la machinerie. Pour comprendre ce que fait réellement AWS, j’ai construit la machinerie moi-même — un cloud OpenStack sur mon propre matériel.",
    role:
      "Ingénieur unique — déploiement de MicroStack, conception de la topologie réseau virtuelle, et provisionnement du calcul, du stockage et des accès de bout en bout.",
    outcome:
      "Un cloud privé fonctionnel : lancer une instance, y attacher un volume, la router à travers un réseau virtuel, l’atteindre en SSH — tout le cycle de vie, auto-hébergé.",
    lesson:
      "Le cloud n’a rien de magique : c’est du réseau, du stockage et du calcul avec de bonnes API. Posséder toute la pile une seule fois rend chaque service managé lisible pour toujours.",
    problem:
      "Des compétences cloud acquises via une console apprennent des boutons, pas des systèmes. L’objectif était de monter toute la couche IaaS — la partie qu’AWS ne montre jamais — et de l’exploiter : réseaux, routage, images, instances, volumes et accès.",
    decisions: [
      {
        title: "MicroStack pour une pile complète sur un seul hôte",
        body: "MicroStack empaquette les services centraux d’OpenStack pour tourner sur une seule machine Ubuntu — l’architecture complète (réseau Neutron, calcul Nova, stockage Cinder) sans la facture matérielle d’un datacenter.",
      },
      {
        title: "La topologie virtuelle avant les instances",
        body: "Réseaux, sous-réseaux et routeur cloud ont été conçus en premier, afin que chaque instance démarre dans une topologie voulue plutôt que dans un réseau plat par défaut — la même discipline qu’en conception de réseau physique.",
      },
      {
        title: "L’accès distant comme test de recette",
        body: "Le déploiement n’était considéré comme terminé qu’une fois une instance joignable en SSH depuis l’extérieur du cloud — IP flottante, règles de sécurité et routage prouvés en une seule connexion.",
      },
    ],
    challenges:
      "Pression sur les ressources et opacité : les services d’OpenStack sont lourds pour un seul hôte, et quand le réseau d’une instance échoue, la faute peut se nicher dans n’importe laquelle de quatre couches. Déboguer consistait à lire la vision du monde de chaque service jusqu’à ce qu’elles concordent.",
    result:
      "Un cloud privé auto-hébergé avec réseaux virtuels, routeur, instances de calcul et volumes de stockage attachés — administré à distance en SSH, d’un Ubuntu nu jusqu’à des charges de travail en fonctionnement.",
  },
};

export const archiveProjectsFr: Record<string, ProjectFr> = {
  "coach-marcus": {
    kind: "Site fitness orienté conversion",
    tags: ["React", "Vercel", "Landing page"],
    summary:
      "Un site moderne de coaching sportif, avec des sections orientées conversion pour les programmes, les offres, les témoignages et le contact.",
  },
  "school-management": {
    title: "Système de gestion scolaire",
    kind: "Plateforme multi-utilisateurs",
    tags: ["PHP", "MySQL", "WAMP"],
    summary:
      "Plateforme web multi-utilisateurs pour l’administration scolaire : notes, contrats, paiements, documents téléchargeables et gestion des comptes administrateurs.",
  },
  "ai-network-assistant": {
    title: "Assistant réseau IA",
    kind: "Outil d’apprentissage assisté par IA",
    tags: ["Python", "Flask", "SQLite", "IA"],
    summary:
      "Application web légère à base d’IA pour les étudiants en réseaux : idées de projets, explication de code, débogage et leçons interactives.",
  },
  "android-weather": {
    title: "Application météo — Java & Flutter",
    kind: "Application mobile, deux versions",
    tags: ["Android Studio", "Java", "Flutter", "Dart", "API OpenWeather"],
    summary:
      "Application météo avec autocomplétion des villes, données en temps réel OpenWeather et stockage local des villes favorites — développée deux fois : une version Android native en Java et une version multiplateforme en Flutter.",
  },
  "parking-robot": {
    title: "Robot de stationnement autonome",
    kind: "Système embarqué",
    tags: ["Arduino", "C++", "Capteurs ultrasoniques"],
    summary:
      "Robot physique qui détecte les places de stationnement libres à l’aide de capteurs ultrasoniques et exécute une manœuvre de stationnement, avec affichage d’état sur écran LCD.",
  },
  "nosql-social-db": {
    title: "Backend NoSQL de réseau social",
    kind: "Persistance polyglotte",
    tags: ["MongoDB", "Cassandra", "Redis", "Neo4j", "Docker"],
    summary:
      "Backend de réseau social réparti sur MongoDB, Cassandra, Redis et Neo4j, avec une façade Flask/FastAPI et des services conteneurisés avec Docker.",
  },
  "delivery-database": {
    title: "Base de données de livraison de colis",
    kind: "Conception relationnelle",
    tags: ["MySQL", "Triggers", "Transactions"],
    summary:
      "Base relationnelle pour la livraison interurbaine de colis : suivi expéditeur/destinataire, modèles MCD/MLD, triggers, transactions et requêtes complexes.",
  },
  "air-quality-analysis": {
    title: "Analyse mondiale de la qualité de l’air",
    kind: "Data science",
    tags: ["Python", "PCA", "Kaggle"],
    summary:
      "Analyse d’environ 3 600 enregistrements de polluants mondiaux à l’aide de l’ACP et de Python, pour identifier les tendances de pollution.",
  },
  "accessibility-audit": {
    title: "Mise en conformité d’accessibilité web",
    kind: "Audit & réécriture",
    tags: ["WCAG", "axe DevTools", "HTML/CSS"],
    summary:
      "Audit d’un site non conforme avec axe DevTools, puis réécriture du HTML/CSS pour corriger les problèmes WCAG, ergonomiques et heuristiques.",
  },
  "agripreneur-cameroon": {
    kind: "Site de programme",
    tags: ["HTML", "CSS", "JavaScript"],
    summary:
      "Site officiel du programme Who Wants to Be an Agripreneur Cameroon — visibilité, présentation de la marque et mise en relation des participants.",
  },
  "handyman-marketplace": {
    title: "Marketplace d’artisans",
    kind: "Marketplace",
    tags: ["PHP", "MySQL"],
    summary:
      "Marketplace mettant en relation les clients et les artisans locaux — les prestataires publient leurs services, les clients cherchent ou demandent de l’aide.",
  },
  "coach-webflow": {
    title: "Portfolio de coach (Webflow)",
    kind: "Site client, no-code",
    tags: ["Webflow", "Génération de leads"],
    summary:
      "Site professionnel no-code pour un coach personnel, centré sur la génération de prospects, la marque et la conversion.",
  },
  "ensp-network-labs": {
    title: "Laboratoires réseau Huawei eNSP",
    kind: "Ingénierie des protocoles",
    tags: ["OSPF", "Wireshark", "VLAN", "MPLS", "NAT"],
    summary:
      "Laboratoires réseau professionnels couvrant OSPF, l’analyse Wireshark, les VLAN, MPLS, NAT et le diagnostic de pannes réseau.",
  },
  hackthissite: {
    title: "Défis HackThisSite",
    kind: "Pratique offensive",
    tags: ["CTF", "Sécurité web", "Cryptographie"],
    summary:
      "Résolution des défis HackThisSite basiques et réalistes — pratique concrète des vulnérabilités web, des failles logiques et de la cryptographie.",
  },
  "mobsf-analysis": {
    title: "Analyse statique de sécurité mobile",
    kind: "Évaluation AppSec",
    tags: ["MobSF", "Android", "Analyse statique"],
    summary:
      "Analyse statique de sécurité d’APK Android avec MobSF — vulnérabilités, permissions, revue de code et rapports.",
  },
  "docker-orchestration": {
    title: "Conteneurisation Docker",
    kind: "Workflow DevOps",
    tags: ["Docker", "Compose", "Docker Hub"],
    summary:
      "Création d’images Docker et de Dockerfiles, publication sur Docker Hub, et orchestration de configurations multi-conteneurs avec Docker Compose.",
  },
};

export const storyFr = [
  "Je m’appelle Ateh Frank Ateh, développeur full-stack et ingénieur réseaux, originaire de Yaoundé au Cameroun et formé à SUP’PTIC. Je construis des plateformes web, des applications mobiles, des API, des flux de paiement, des laboratoires réseau et des projets d’infrastructure.",
  "Ma curiosité a commencé tôt, après avoir débloqué un téléphone Android au terme de semaines de recherche, d’essais et d’erreurs. Ce moment m’a appris à regarder sous la surface de la technologie et à comprendre les systèmes en profondeur.",
  "Depuis, j’ai construit des plateformes de gestion scolaire, des applications Android, des outils d’apprentissage assistés par IA, des environnements Linux multi-serveurs, des déploiements cloud OpenStack, des systèmes NoSQL, des laboratoires de cybersécurité et des sites clients.",
  "Professionnellement, j’ai travaillé sur la présence web de Zenorva Support, la plateforme de vérification des compétences de Terra Talent Hub, les réseaux IP de production de CAMTEL, le site de Dewise Energy, et la plateforme éducative de Cam e-guide / Skolarr.",
  "Je me décris comme un vibe coder parce que je construis à l’instinct, vite et par l’expérimentation, mais j’associe cette énergie à une ingénierie soignée : interfaces propres, architecture pragmatique, conscience de la sécurité et déploiement fiable.",
  "Au-delà du code, je tiens à bâtir des entreprises et des opportunités depuis l’Afrique. J’ai fondé Absurd Geeks, une agence de marketing digital, et Frinux Technologies — et je continue d’apprendre, du logiciel aux réseaux, de la cybersécurité au cloud.",
];

export const factsFr = [
  { label: "Base", value: "Yaoundé, Cameroun" },
  { label: "Formation", value: "SUP’PTIC — Ingénierie Télécommunications & TIC, 2026" },
  { label: "Socle", value: "Informatique" },
  { label: "Fondateur", value: "Absurd Geeks · Frinux Technologies" },
  { label: "Langues", value: "Anglais · Français" },
  { label: "Statut", value: "Disponible pour des projets choisis" },
];

export const expertiseFr: Record<string, { title: string; description: string; tools: string[] }> = {
  "01": {
    title: "Ingénierie frontend",
    description:
      "Des interfaces auxquelles on fait confiance au premier regard — rapides, accessibles et précises, du design system au produit déployé.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Flutter", "GSAP", "Webflow"],
  },
  "02": {
    title: "Backend & API",
    description:
      "Des couches de service qui tiennent : authentification, paiements et modèles de données qui restent prévisibles à mesure que le produit grandit.",
    tools: ["Node.js", "Supabase", "PHP", "Python · Flask", "MySQL", "PostgreSQL"],
  },
  "03": {
    title: "Réseaux & télécommunications",
    description:
      "Mon cœur d’ingénieur — garder des réseaux IP de production routés, diagnostiqués et vivants, à l’échelle télécom.",
    tools: ["OSPF", "MPLS", "VLAN", "NAT", "Wireshark", "MikroTik", "Huawei eNSP"],
  },
  "04": {
    title: "Cybersécurité",
    description:
      "Une défense informée par l’attaque — des systèmes conçus en sachant comment on les attaquera, supervisés pour que les intrusions se voient.",
    tools: ["Wazuh", "Zabbix", "Metasploit", "Kali Linux", "MobSF", "Audits WCAG"],
  },
  "05": {
    title: "Systèmes & infrastructure",
    description:
      "Du Linux nu au cloud privé — la couche invisible qui nomme, route, authentifie et livre de façon fiable.",
    tools: ["Linux", "OpenStack", "Docker", "VMware", "Samba + AD", "DNS/DHCP"],
  },
  "06": {
    title: "IA & automatisation",
    description:
      "De l’intelligence utile — des outils assistés par IA et de l’analyse de données qui suppriment de vraies frictions, au lieu d’ajouter des démos.",
    tools: ["Python", "ACP / Data science", "Flask", "Intégration IA", "SQLite"],
  },
  "07": {
    title: "Vision produit",
    description:
      "Le regard du fondateur — cadrer ce qui compte, concevoir pour la conversion et la confiance, livrer ce que les utilisateurs adoptent.",
    tools: ["Cadrage", "Architecture & contenu", "Design de conversion", "Paiements & tarification", "Lancement"],
  },
};

export const recordFr: Record<string, { title: string; org: string; detail: string }> = {
  "2022": {
    title: "Contributeur technique & spécialiste données",
    org: "Cam e-guide / Skolarr Cameroon",
    detail:
      "J’ai contribué à construire et déployer une plateforme d’éducation numérique servant des milliers d’élèves camerounais.",
  },
  "2023": {
    title: "Développeur web · Étudiant ingénieur",
    org: "Dewise Energy · SUP’PTIC",
    detail:
      "Conception et déploiement du site de Dewise ; début du cycle d’ingénieur en télécommunications et TIC à SUP’PTIC.",
  },
  "2024": {
    title: "Développeur full-stack",
    org: "Tera 5 — Terra Talent Hub",
    detail:
      "Construction de la plateforme de vérification des compétences : évaluations DigComp, certificats vérifiés par QR code, paiements, tableaux de bord employeur.",
  },
  "2025": {
    title: "Ingénieur systèmes réseau",
    org: "CAMTEL — CESIR-IP",
    detail:
      "Supervision et maintenance d’une infrastructure IP de production — diagnostics, analyse de trafic et support au routage dans un environnement télécom en exploitation.",
  },
  "2026": {
    title: "Développeur web · Diplôme d’ingénieur",
    org: "Zenorva Support · SUP’PTIC",
    detail:
      "Construction de toute la présence web de Zenorva ; fin du cycle d’ingénieur — mémoire : un relais numérique intelligent pour l’optimisation de la bande passante.",
  },
};

export const distinctionsFr = [
  "Fondateur sélectionné — accélérateur soutenu par l’ambassade des États-Unis",
  "Mention bronze — Hackathon ODSA",
  "Mention bronze — International Youth Math Challenge",
  "Fondateur — Absurd Geeks, agence de marketing digital",
  "Fondateur — Frinux Technologies",
  "23 projets documentés · plus de 50 000 lignes de code",
];

export const processFr: Record<string, { title: string; description: string }> = {
  "01": {
    title: "Découverte",
    description:
      "J’apprends votre activité avant de toucher au code — objectifs, audience, contraintes, et ce que le succès mesure réellement.",
  },
  "02": {
    title: "Stratégie",
    description:
      "Architecture, structure de contenu et choix technologiques — écrits noir sur blanc, validés ensemble et cadrés honnêtement.",
  },
  "03": {
    title: "Design",
    description:
      "Identité, mise en page et animation conçues comme un seul système. Vous voyez la direction avant que quoi que ce soit ne soit construit.",
  },
  "04": {
    title: "Développement",
    description:
      "Du code de production propre et typé — relu, versionné et pensé pour être maintenu par celui qui viendra après moi.",
  },
  "05": {
    title: "Optimisation",
    description:
      "Budgets de performance, structure SEO, accessibilité et tests sur de vrais appareils — pas seulement sur ma machine.",
  },
  "06": {
    title: "Lancement",
    description:
      "Déploiement, supervision et transfert — documentés, avec un accompagnement après la mise en ligne, et pas seulement jusque-là.",
  },
};

export const statsFr = [
  "Projets documentés",
  "Organisations servies",
  "Lignes de code",
  "Langues de travail",
];
