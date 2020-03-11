import Programs from "./programs";

const pythonDic = {
  left: [
    {
      title: "explications sur le langage python",
      key: 0,
      elements: [
        "Histoire",
        "Futurs perspectives du langage",
        "Fonctionnement du core"
      ]
    },
    {
      title: "versions python",
      key: 1,

      elements: [
        "Support des versions",
        "Différences v2/v3",
        "Exemples des différences",
        "Comment migrer ses outils"
      ]
    },
    {
      title: "environnement",
      key: 2,

      elements: [
        "Virtualisation",
        "IDE",
        "Configuration de son poste de travail"
      ]
    },
    {
      title: "les bases du dev",
      key: 3,

      elements: [
        "Serveur python synchrone et asychrone",
        "Architecture monolithique/webservice",
        "Découpage Front / Back",
        "REST / SOAP / ..."
      ]
    },
    {
      title: "les bases en programmation python",
      key: 4,

      elements: [
        "Ligne directrice python",
        "Normes de codage",
        "Librairies de vérification",
        "Typage",
        "Variables primitives",
        "Variables complexes",
        "Test conditionnel / boucle",
        "POO",
        "CLI / WEB"
      ]
    }
  ],
  right: [
    {
      title: "configurer un environnement",
      key: 5,

      elements: []
    },
    {
      title: "faire son premier script",
      key: 6,

      elements: []
    },
    {
      title: "tests unitaires",
      key: 7,

      elements: ["Pytest", "Intégrer avec Gitlab", "Intégrer avec Tox"]
    },
    {
      title: "trucs et astuces",
      key: 8,

      elements: []
    },
    {
      title: "python avancé",
      key: 9,

      elements: ["Yield", "Decorator"]
    },
    {
      title: "faire son package",
      key: 10,

      elements: ["Sémantique", "Librairies", "Publier son code"]
    },
    {
      title: "les frameworks web",
      key: 11,

      elements: ["Flask", "Django"]
    },
    {
      title: "devops avec gitlab",
      key: 12,

      elements: [
        "Configurer son projet",
        "Gestion des branches",
        "Utiliser les variables Gitlab",
        "Token Gitlab",
        "CI / CD",
        "Ansible"
      ]
    }
  ]
};

const dockerDic = {
  left: [
    {
      title: "Premiers pas avec Docker",
      key: 0,

      elements: [
        "Pourquoi docker",
        "Les technologies de virtualisation",
        "La conteneurisation",
        "Pourquoi Docker par rapport à la virtualisation",
        "Architecture docker",
        "Version Docker"
      ]
    },
    {
      title: "Prise en main",
      key: 1,

      elements: [
        "Installer sur son environnement",
        "Les commandes de bases",
        "Vérifier l’installation"
      ]
    },
    {
      title: "Images",
      key: 2,

      elements: [
        "Définitions",
        "Cycle de vie d’un conteneur",
        "Création image",
        "Registre"
      ]
    },
    {
      title: "Persistance",
      key: 3,

      elements: [
        "Union filesystem",
        "Copy-On-Write",
        "Volumes",
        "Sauvegarde / restauration données"
      ]
    }
  ],
  right: [
    {
      title: "Réseaux",
      key: 4,

      elements: [
        "Types de réseau",
        "DNS intégré",
        "Ports mapping",
        "Partage de donnée"
      ]
    },
    {
      title: "Orchestration",
      key: 5,

      elements: [
        "Docker Machine",
        "Docker compose",
        "Cluster",
        "Solutions logiciels",
        "Secrets"
      ]
    },
    {
      title: "Dev",
      elements: ["Utiliser API Docker", "Logs", "Gestion des conteneurs"]
    },
    {
      title: "Production",
      key: 6,

      elements: [
        "Boot auto",
        "Ressources",
        "Gestion des logs",
        "Monitoring",
        "Sécurité"
      ]
    }
  ]
};

const progromDetailsPython = {
  s1: {
    title: "python",
    content:
      "(Re)découvrez ce langage de programmation qui est très utilisé dans le cadre scientifique compte tenu des outils avancés qu'il dispose. Nous verrons durant cette formation tous les aspects nécessaires à une bonne maitrise du langage python."
  },
  s2: {
    title: "Public",
    content: [
      "Une équipe de développeurs.",
      "Un responsable technique.",
      "Une personne en reconversion profesionnelle."
    ]
  },
  s3: {
    title: "",
    content: ["5 jours", "du lundi", "au vendredi", "7h / jour"]
  },
  s4: {
    title: "objectifs",
    content: [
      "Comprendre et être capable de modifier un code python.",
      "Apprendre à créer une application python.",
      "Connaitre les outils qui gravitent autour du langage python.",
      "Comprendre des notions avancés de python."
    ]
  },
  s5: {
    title: "Satisfaction client",
    rate: "87%",
    content:
      "de nos clients sont satisfaits par la qualité de nos formations python."
  },
  s6: {
    title: "pré requis",
    content:
      "Avoir déjà les bases en développement python ou dans un autre langage. Les formations sont à la carte mais entre 1 et 2 ans d'expérience est conseillé."
  }
};
const progromDetailsDocker = {
  s1: {
    title: "Docker",
    content:
      "Docker est un outil qui s'est rapidement imposé sur le marché du développement. Il répond à un besoin d'isolation des ressources applicatives de manières aisées. Son utilisation très large nécessite de comprendre son fonctionnement pour l'utiliser correctement."
  },
  s2: {
    title: "Public",
    content: ["Développeur.", "DevOps.", "Architecte."]
  },
  s3: {
    title: "",
    content: ["2 jours", "", "", "14H de formation"]
  },
  s4: {
    title: "objectifs",
    content: [
      "Appréhender les bases.",
      "Comprendre le fonctionnement interne.",
      "Être capable de gérer des conteneurs.",
      "Connaitre des outils associés à Docker.",
      "Sécuriser la communication microservice."
    ]
  },
  s5: {
    title: "Satisfaction client",
    rate: "90%",
    content:
      "de nos clients sont satisfaits par la qualité de nos formations python."
  },
  s6: {
    title: "pré requis",
    content: [
      "Utiliser les commandes simples de Linux.",
      "Connaitre dans les bases du développement.",
      "Pas de pré requis Docker."
    ]
  }
};

const getProgTitles = (titles, subject) => {
  const dictionary = getProgram(subject);
  const pogramList = dictionary.left.concat(dictionary.right);
  const result = [];

  titles.forEach(key => {
    pogramList.forEach(el => {
      if (el.key === key) {
        result.push(el.title);
      }
    });
  });
  return result;
};

const getProgram = name => {
  switch (name) {
    case Programs.PYTHON:
      return pythonDic;
    case Programs.DOCKER:
      return dockerDic;
    default:
      return;
  }
};

const getProgramDetails = name => {
  switch (name) {
    case Programs.PYTHON:
      return progromDetailsPython;
    case Programs.DOCKER:
      return progromDetailsDocker;
    default:
      return;
  }
};

export default { getProgram, getProgramDetails, getProgTitles };
