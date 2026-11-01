# Intégration de Pure — plan proposé

Pure est choisi par l’auteur. La migration vers Astro 7 est acceptée dans son principe. Ce document prépare l’accord préalable à la branche de travail et aux modifications structurelles prévu dans le guide.

## Différences à traiter

| Projet actuel | Pure examiné | Conséquence |
| --- | --- | --- |
| Astro 7.4.4, MDX 8 | Template et paquet astro-pure sur Astro 6.4.8, MDX 5 dans le paquet | Adapter aussi le paquet, pas seulement le package.json du site. |
| CSS local | UnoCSS et composants astro-pure | Reprendre le système de styles nécessaire à l’identité Pure. |
| Sortie statique, workflow GitHub Pages | Configuration de démo en sortie serveur avec adaptateur Vercel | Préparer une sortie statique et vérifier les fonctions qui supposeraient un serveur. |
| Une collection blog | Collections et composants Pure | Établir une correspondance des métadonnées sans perdre les contenus existants. |
| Aucun service de commentaires | Waline et services de démonstration configurés | Désactiver les services de démonstration ; choisir les commentaires séparément. |
| Pas de langues multiples | Une locale globale dans Pure | Construire ensuite les routes FR/EN et l’association des traductions. |

Sources : [configuration Pure](https://github.com/cworld1/astro-theme-pure/blob/main/astro.config.ts), [paquet Pure](https://github.com/cworld1/astro-theme-pure/blob/main/packages/pure/package.json), [intégration Pure](https://github.com/cworld1/astro-theme-pure/blob/main/packages/pure/index.ts), [guide de migration Astro 7](https://docs.astro.build/en/guides/upgrade-to/v7/).

## Stratégie proposée : intégration progressive dans le dépôt existant

1. Créer la branche `feat/pure-astro7`. Avant modification, faire une sauvegarde locale datée de `src/`, `public/`, `.github/`, `.ai/`, `design/` et des fichiers de configuration et dépendances. Une branche seule ne protège pas `.ai/` et `design/`, actuellement non suivis par Git. Aucun push.
2. Récupérer une révision identifiée de Pure et conserver les licences et l’origine des fichiers repris. Conserver les prototypes comme références et les contenus existants.
3. Adapter une copie locale versionnée du paquet Pure si nécessaire, au lieu de modifier `node_modules`. Aligner ses intégrations avec Astro 7 et vérifier la chaîne Markdown/MDX, les hooks, UnoCSS, les images et la recherche. Les correctifs exacts dépendent du build ; aucune garantie de migration en un changement de version.
4. Intégrer la base Pure dans le projet, en sortie statique. Installer uniquement les dépendances nécessaires. Préserver l’URL du site et le principe du déploiement GitHub Pages. Retirer les connexions aux services de démonstration. Les couleurs et polices initiales de Pure servent de base temporaire, pas de choix définitif.
5. Compiler et vérifier une page d’accueil, un article MDX, une figure, des équations et le sommaire. Démarrer avec `astro dev --background`, communiquer l’URL locale réelle et présenter cette base fonctionnelle avant les personnalisations suivantes.

Avantage : conserver le dépôt, les contenus et le contexte tout en reprenant réellement Pure. Coût : une copie adaptée du paquet devra être maintenue et les futures mises à jour amont fusionnées avec discernement.

Alternative : repartir du template Pure dans un dossier séparé puis migrer les contenus et le déploiement. L’isolation facilite l’expérimentation mais duplique la configuration et ne supprime ni la migration Astro 7 ni le travail bilingue. La fusion progressive est proposée ici.

## Étapes suivantes, après présentation de la base

- Atelier visuel : retrouver la chaleur de Pure en respectant la lisibilité et les réglages approuvés ; palette et polices à décider avec l’auteur.
- Architecture : accueil à trois colonnes, pages Essays et Recherche distinctes, modèle de projet validé.
- Bilinguisme : langue et identifiant partagé par traduction dans les contenus, routes FR/EN, sélecteur conservant le contenu correspondant, navigation et métadonnées localisées. Modèle à préparer tôt pour éviter une seconde migration, puis à implémenter comme étape vérifiable.
- Services : contact, commentaires, votes et classement à choisir et tester séparément. Aucun compte ou service externe activé automatiquement.

## Accord attendu

Accord pour la branche, la sauvegarde et l’intégration technique de Pure avec les dépendances nécessaires, jusqu’à une base Astro 7 fonctionnelle présentée localement. Aucun déploiement et aucune personnalisation finale ne sont inclus dans cette étape.
