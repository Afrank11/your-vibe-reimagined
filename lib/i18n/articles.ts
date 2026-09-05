import { articles, type Article } from "@/lib/articles";
import type { Locale } from "./config";

/**
 * French editions of the blog posts. lib/articles.ts keeps the structure — slug,
 * ISO date, block order — and this file carries the prose. Blocks are matched
 * by position, so a translated article must keep the same block sequence.
 */

type ArticleFr = {
  title: string;
  excerpt: string;
  displayDate: string;
  readingTime: string;
  tags: string[];
  body: string[];
};

const articlesFr: Record<string, ArticleFr> = {
  "engineering-trust-terra-talent-hub": {
    title: "Concevoir la confiance : ce que Terra Talent Hub m’a appris sur la vérification",
    excerpt:
      "Un certificat est une affirmation, et les affirmations ne coûtent rien. Construire une plateforme de vérification des compétences, c’était concevoir un système où l’honnêteté devient le chemin de moindre résistance.",
    displayDate: "Juillet 2026",
    readingTime: "5 min",
    tags: ["Produit", "Full-stack", "Paiements"],
    body: [
      "Chaque conversation de recrutement contient une question silencieuse : est-ce que tout cela est vrai ? Le CV annonce « Excel avancé », le certificat annonce « développement web », et l’employeur n’a aucun moyen de vérifier l’un ou l’autre avant d’engager un créneau d’entretien — sans parler d’un salaire. En construisant Terra Talent Hub avec l’équipe Tera 5, ce silence était le brief produit.",
      "Les affirmations ne coûtent rien. La vérification doit coûter encore moins.",
      "Notre première intuition était économique, pas technique. Falsifier un diplôme ne coûte rien : le vérifier doit donc coûter encore moins — quelques secondes, pas des coups de téléphone. Ce recadrage a piloté toute l’architecture : chaque certificat porte un QR code qui renvoie à sa fiche en direct. Le contrôle a lieu exactement au moment du doute, en entretien, sur un téléphone. Si la vérification avait vécu dans un fil d’e-mails ou un portail d’administration, personne ne s’en serait servi, et les certificats n’auraient été qu’une décoration.",
      "Un score ne compte que s’il se compare",
      "Le deuxième problème était le sens. Un quiz fait maison produit un nombre, mais un nombre que personne ne sait interpréter n’est que du bruit. Nous avons bâti les évaluations sur le référentiel DigComp, pour qu’un score signifie la même chose pour chaque talent de la plateforme — une échelle commune sur laquelle les employeurs peuvent réellement classer. La standardisation est une ingénierie sans gloire, mais c’est elle qui transforme « elle a eu 84 % » en information.",
      "L’état d’esprit adverse",
      "Une plateforme de vérification est une cible par définition. Tous ceux qui gagnent à un meilleur score ont intérêt à contourner l’évaluation ; tous ceux qui l’ont ratée ont intérêt à en falsifier le résultat. Mon expérience des réseaux et de la sécurité s’est invitée de manière utile : à quoi ressemble ce parcours pour quelqu’un qui cherche à le tromper ? Cette question a façonné la conception du scoring, la surface de l’API et la façon dont les fiches de certificats sont servies.",
      "Ce que je dirais à qui construit des produits de confiance",
      "La confiance n’est pas une fonctionnalité qu’on ajoute — c’est le produit. Chaque décision, des paliers tarifaires qui laissent la porte ouverte aux nouveaux venus jusqu’à un tableau de bord employeur qui fait du côté vérificateur un citoyen de premier rang, renforce la confiance ou la laisse fuir. Concevez pour le sceptique qui est dans la pièce. Si votre système le convainc, tous les autres suivent.",
    ],
  },

  "seven-servers-one-lesson": {
    title: "Sept serveurs, une leçon : l’infrastructure est un graphe de dépendances",
    excerpt:
      "Construire une colonne vertébrale d’entreprise complète — DNS, DHCP, web, messagerie, fichiers, identité — à partir de zéro m’a appris que l’ordre des opérations fait tout.",
    displayDate: "Juin 2026",
    readingTime: "5 min",
    tags: ["Linux", "Infrastructure", "Réseaux"],
    body: [
      "L’énoncé ressemble à une liste de courses : déployer sept serveurs sur un seul hôte Ubuntu — DHCP, DNS, hébergement virtuel Apache, Postfix, NFS, SSH, Samba avec Active Directory — et servir des VM clientes sur un réseau interne VMware. Les listes de courses mentent. Ce que le projet enseigne réellement, c’est que l’infrastructure d’entreprise est un graphe de dépendances, et que ce graphe ne pardonne rien.",
      "Construire dans l’ordre des dépendances, ou déboguer en rond",
      "Tout suppose le nommage et l’adressage. La messagerie échoue en silence quand les enregistrements DNS sont faux. Les jonctions au domaine échouent quand la résolution de noms et la dérive d’horloge divergent. Un serveur web qui répond par IP mais pas par nom d’hôte n’a rien d’un problème web. Dès que j’ai commencé à construire strictement dans l’ordre des dépendances — DHCP et DNS d’abord, l’identité ensuite, les applications en dernier — la moitié des pannes mystérieuses ne s’est tout simplement plus produite.",
      "Le client est le seul juge",
      "Ma définition du « terminé » a changé pendant ce projet. Un service n’est pas fini quand il démarre proprement ; il est fini quand une machine cliente, qui ne sait rien de votre configuration, peut le consommer — obtenir le bail, résoudre le nom, charger le site, envoyer le courrier, monter le partage. Valider depuis le côté client du réseau a révélé des problèmes parfaitement invisibles depuis le shell du serveur lui-même.",
      "Sept services, un hôte, aucune isolation",
      "Faire tourner l’ensemble sur un seul hôte ajoute une cruauté particulièrement pédagogique : chaque correctif risque de déranger un voisin. Redémarrez le réseau pour appliquer la modification DNS, et les baux DHCP vacillent. Cela force à comprendre ce que chaque service touche réellement — et c’est précisément la compréhension que les diapositives et les schémas ne donnent jamais.",
      "Quand le DNS, le DHCP et l’identité s’accordent, tout ce qui repose dessus devient simple.",
      "Cette phrase résume tout le projet. Les applications que les gens voient — le site web, la messagerie, les disques partagés — sont la couche facile. La couche invisible en dessous, là où les noms se résolvent et les identités s’authentifient, est celle où la fiabilité se construit vraiment.",
    ],
  },

  "detection-is-harder-than-intrusion": {
    title: "La détection est plus difficile que l’intrusion",
    excerpt:
      "J’ai construit un laboratoire de sécurité à deux sous-réseaux avec MikroTik, Wazuh, Zabbix et Metasploit. Entrer était la moitié facile — voir l’intrusion, c’était l’apprentissage.",
    displayDate: "Mai 2026",
    readingTime: "4 min",
    tags: ["Cybersécurité", "SIEM", "Réseaux"],
    body: [
      "La sécurité offensive a un excellent marketing. Les exploits sont cinématographiques ; les tableaux de bord ne le sont pas. Alors, en concevant mon laboratoire de sécurité virtuel, je me suis fixé une règle qui a déterminé tout le reste : la pile de supervision est déployée avant le premier exploit. Wazuh et Zabbix sont entrés dès le premier jour. Metasploit a attendu.",
      "Deux sous-réseaux, une frontière honnête",
      "Le laboratoire est découpé en un sous-réseau attaquant et un sous-réseau défenseur, séparés par du routage MikroTik. Cette frontière est tout l’intérêt. Une attaque qui doit franchir une véritable limite routée se comporte comme une attaque en production — elle emprunte le même chemin, touche les mêmes contrôles et laisse les mêmes traces. Les laboratoires à réseau plat sautent précisément la partie qui compte.",
      "Le problème du bruit",
      "Voici ce que le marketing ne mentionne jamais : un SIEM par défaut voit tout et ne vous dit rien. Mes premières exécutions de Metasploit sont bien remontées dans Wazuh — enfouies sous des centaines d’alertes qui ne signifiaient rien. Régler les règles de détection pour capter un vrai comportement d’attaque sans se noyer dans le bruit m’a pris plus de temps que tous les exploits réunis. C’est aussi, j’en suis convaincu aujourd’hui, la compétence la plus employable que ce laboratoire m’ait apprise.",
      "La défense change la façon d’attaquer",
      "Une fois qu’on s’est assis du côté du défenseur à regarder sa propre intrusion apparaître dans les journaux, on attaque différemment — et on construit différemment. Chaque système que j’ai déployé depuis, des plateformes web à l’infrastructure Linux, est conçu avec une question dans la pièce : à quoi cela ressemblera-t-il dans le SIEM quand quelqu’un viendra ? La défense informée par l’attaque n’est pas un slogan ; c’est une boucle de rétroaction, et faire tourner les deux côtés sur ma propre infrastructure a définitivement bouclé cette boucle.",
    ],
  },
};

function localizeArticle(article: Article): Article {
  const fr = articlesFr[article.slug];
  if (!fr) return article;
  return {
    ...article,
    title: fr.title,
    excerpt: fr.excerpt,
    displayDate: fr.displayDate,
    readingTime: fr.readingTime,
    tags: fr.tags,
    // block types are structural; only the text is translated
    body: article.body.map((block, i) => ({ ...block, text: fr.body[i] ?? block.text })),
  };
}

const frenchArticles = articles.map(localizeArticle);

export function getArticles(locale: Locale): Article[] {
  return locale === "fr" ? frenchArticles : articles;
}

export function getArticleFor(locale: Locale, slug: string): Article | undefined {
  return getArticles(locale).find((article) => article.slug === slug);
}
