# Critères de sélection d’un thème Astro

Phase 0.5 — grille validée par l’auteur. Phase A réalisée dans `theme-comparison.md`. Aucun thème sélectionné ni installé.

## Base validée

Les compositions de l’accueil, de l’article et de la page projet ont été approuvées par l’auteur. Les prototypes servent de références de structure et de confort, pas de thème final ni de contenus à publier.

Direction : revue personnelle avec touches de carnet. Fil conducteur : mieux vivre, avec soi-même et en société. La personnalité viendra notamment des dessins et collages de l’auteur, dont le style reste à construire.

## Indispensables

| Critère | Ce qu’il faudra vérifier pour chaque candidat |
| --- | --- |
| Astro, gratuit et open source | Licence explicite autorisant l’usage et l’adaptation ; version et compatibilité avec le projet à vérifier. |
| Deux espaces et accueil transversal | Pages Essays et Recherche distinctes ; accueil personnalisable en trois colonnes : recherche, psychiatrie, politique générale. |
| Présentation des textes | Illustration modérée, résumé complet et compact, blocs de même hauteur, titre ouvrant directement l’article ; aucun aperçu dépliable. |
| Articles longs | Hiérarchie de titres, figures et légendes, notes, bibliographie, sommaire et progression discrets ; structure réutilisable entre essais et recherche. |
| Pages de projet | Question, approche, avancement, résultats et limites, ressources, équipe, liens vers des articles explicatifs. |
| Français et anglais | Traductions systématiques, association des versions d’un même contenu et navigation de langue réalisables sans duplication fragile des composants. |
| Contenus scientifiques | Possibilité d’intégrer équations, citations, références, figures et présentations avec slides et texte. Vérifier ce qui est natif et ce qui demande un ajout. |
| Accessibilité et responsive | Structure sémantique, clavier, focus, contrastes visant WCAG 2.2 AA, zoom, adaptation mobile et absence de texte tronqué. Ne pas déduire la conformité d’une capture. |
| Maintenance et performance | HTML/CSS privilégiés, JavaScript limité aux fonctions utiles ; dépendances et procédure de mise à jour compréhensibles. |
| Préservation du projet | Coût d’intégration explicité, contenus conservés, aucune migration ni installation avant les accords prévus. |

« Indispensable » décrit le résultat attendu, pas nécessairement une fonction déjà intégrée au thème. Pour une fonction absente, préciser la solution envisageable et son coût. Un candidat peut être adapté s’il possède une base saine et que les ajouts restent raisonnables.

## Préférences de composition et de lecture

- Présentation personnelle contenue, suivie rapidement des textes ; environ deux tiers de textes personnels et un tiers de recherche sur l’accueil.
- Structure régulière et catégories faciles à identifier ; éviter le catalogue chargé et les grandes images dominantes.
- Accueil plus chaleureux et personnel que les pages de lecture ; touches graphiques facultatives, sans copier Maggie Appleton.
- Contraste et typographie appréciés chez Quanta ; largeur de lecture inspirée du ressenti Medium.
- Réglage approuvé dans le prototype : texte à 18 px, interlignage 1,5, largeur maximale de 760 px. Ces valeurs seront réévaluées avec la police finale ; elles ne prouvent pas une équivalence visuelle avec Quanta ou Medium.
- Sommaire latéral sur grand écran, placé avant le texte sur petit écran. Figures ou petite vidéo d’ouverture lorsque le contenu le justifie.
- Aucun style d’illustration uniforme exigé pour commencer ; place disponible pour l’évolution des dessins et collages.

## Coût des adaptations

| Généralement peu coûteux si les styles sont centralisés | Plus structurel, à estimer dans le code |
| --- | --- |
| Couleurs, fonds, bordures et espacements | Accueil thématique à trois colonnes et organisation des collections |
| Taille de texte, interlignage et largeur | Association des traductions et routes bilingues |
| Familles de polices (licences et chargement à vérifier) | Modèle de projet, métadonnées et ressources scientifiques |
| Détails décoratifs et légendes | Intégration des commentaires, votes, classement et modération |
| Ajustements simples du sommaire existant | Refonte d’une navigation, système de bibliographie ou formats interactifs |

Ces coûts sont relatifs : un thème très rigide peut rendre une petite modification visuelle difficile. La comparaison devra examiner les fichiers et composants, pas seulement la démo.

## Fonctions à prévoir sans imposer immédiatement un service

- Commentaires lisibles, fils de réponses, votes et classement. Comparer la possibilité d’intégration ; solution, comptes, modération, données et coûts récurrents restent à décider.
- Contact privé simple ; choix entre lien e-mail et formulaire encore ouvert.
- RSS et découverte transversale par thèmes à examiner ; ne pas ajouter automatiquement une fonction non priorisée.
- Slides accompagnées de texte et visualisations ponctuelles : possibilité à préserver, pas exigence d’une infrastructure interactive lourde.

## Vérification technique et comparaison

Pour chaque thème, relever : démo, dépôt, licence, versions, activité de maintenance datée, dépendances, organisation des composants et contenus, documentation, fonctions existantes et adaptations requises. Distinguer les faits vérifiés, les estimations et les informations inconnues.

Utiliser les mêmes statuts par critère : **natif**, **adaptation légère**, **adaptation structurelle**, **non vérifié**, **incompatible**. Ne pas masquer un obstacle important derrière une note globale. Fournir une estimation qualitative de l’intégration et de la maintenance.

La phase A comparera trois à cinq candidats gratuits et open source, dont AstroPaper et Astro Cactus, puis présentera trois finalistes. Le choix du thème reste celui de l’auteur.

## Point d’arrêt

La grille a été confirmée par l’auteur. Le prochain point d’arrêt est son choix du thème à partir de la comparaison. La validation des prototypes ne sélectionne aucune palette, police ou solution de commentaires, et n’autorise pas l’installation d’un thème.
