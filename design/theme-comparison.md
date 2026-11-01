# Audit Astro et comparaison de thèmes

Phase A — vérifications du 1er novembre 2026. Aucun thème installé ou choisi.

Décision ultérieure de l’auteur : **Astro Theme Pure retenu**, pour sa proximité visuelle avec le résultat souhaité, en acceptant le travail de migration vers Astro 7. Cette décision prévaut sur la recommandation et le classement historiques ci-dessous. Plan de phase B dans `pure-integration-plan.md`. Aucun thème installé à ce stade.

## Résultat de l’audit local

Le projet existant compile : `npm run build` réussit, génère huit pages, le RSS et le sitemap, et optimise les images. Astro installé : **7.4.4**. Node local : **26.13.0**. Aucun paquet installé ; seuls les artefacts de compilation sont générés. Aucun changement de fichier suivi par Git après le build.

Le projet ressemble au starter de blog Astro : accueil, index de blog, route dynamique d’article, page About, cinq textes d’exemple. `src/content.config.ts` utilise une collection `blog` avec chargeur `glob`, titre, description, dates et image. MDX, RSS et sitemap sont déjà présents. Le style est du CSS local, avec les polices Atkinson locales. Les prototypes restent dans `design/` et ne sont pas inclus dans les pages Astro.

Configuration du site : `https://paul-marcin.github.io`. Un workflow GitHub Pages existe pour `main`, avec Node 24. Le déploiement distant n’a pas été lancé ou vérifié. Le titre de site reste « Astro Blog ». Il n’y a pas encore de routes bilingues, modèles de projet ou commentaires dans le code examiné.

La compilation valide la base technique, pas l’accessibilité ou le rendu de chaque page. Aucun serveur de développement n’a été nécessaire pour cet audit.

## Méthode et limites

Quatre candidats examinés à partir des dépôts officiels, manifestes, README, configurations et schémas de contenu. Les démos de Paper, Cactus et Pure sont accessibles à l’outil de consultation ; pas d’inspection visuelle automatisée. La démo Polyglow n’a pas pu être consultée (timeout, puis échec DNS via une seconde méthode).

Les dates ci-dessous sont celles du dernier commit retourné par l’API GitHub, pas une garantie de maintenance future. Les quatre dépôts sont non archivés. Les thèmes n’ont pas été installés ou compilés localement : leur compatibilité est une comparaison des versions et configurations, pas une validation de leurs dépendances résolues. En particulier les versions MDX de Paper et Polyglow diffèrent de celle du projet actuel et devront être vérifiées avant intégration.

## Vue d’ensemble

| Candidat | Licence du dépôt | Astro déclaré | Dernier commit observé (UTC) | Intégration estimée |
| --- | --- | --- | --- | --- |
| AstroPaper 7.0.0 | MIT | ^7.4.2 | 01/11/2026 09:00 | Moyenne à importante : bilinguisme et modèles éditoriaux |
| Astro Cactus 8.3.0 | MIT | 7.3.2 | 01/11/2026 09:20 | Moyenne à importante : bilinguisme, accueil et projets |
| Astro Theme Pure 4.1.6 | Apache-2.0 | 6.4.8 | 26/09/2026 12:20 | Importante : migration Astro et dépendance au paquet du thème |
| Polyglow 7.0.0 | MIT | ^7.2.9 | 24/10/2026 14:13 | Importante : simplification et adaptation éditoriale |

Versions lues dans les `package.json`, pas déduites des titres des démos. Les licences des illustrations, polices et dépendances restent à examiner séparément lors de l’intégration.

## 1. AstroPaper — finaliste pour une base de blog documentée

[Démo](https://astro-paper.pages.dev/) · [Dépôt officiel](https://github.com/satnaing/astro-paper) · [Licence](https://github.com/satnaing/astro-paper/blob/main/LICENSE) · [Manifeste](https://github.com/satnaing/astro-paper/blob/main/package.json)

**Vérifié :** Markdown/MDX, collections typées, recherche Pagefind, RSS, sitemap, pagination, brouillons, sommaire repliable, Tailwind 4 et configuration centralisée. Documentation pour équations et intégration Giscus. Le README décrit des essais de lecteurs d’écran ; cela ne remplace pas notre audit d’accessibilité.

**Atouts :** structure de blog lisible et documentée, version Astro proche du projet, bonnes bases pour articles longs. Couleurs et typographie se personnalisent ; le style monospace de la démo n’est pas une obligation.

**Limites :** « i18n ready » correspond ici à une base de traduction d’interface : la configuration active uniquement `en`, les routes sont non préfixées et le schéma d’article ne possède pas de langue ou de clé de traduction. Il faut donc construire les paires FR/EN et leur navigation. Le sommaire repliable n’est pas encore notre sommaire latéral. L’image sociale `ogImage` ne remplace pas automatiquement notre illustration éditoriale.

**Adaptation :** accueil en trois colonnes, images et résumés, deux espaces, modèle de projet, bilinguisme, progression et commentaire à intégrer. Les guides Giscus/équations décrivent des ajouts, pas des fonctions automatiquement activées. Les votes et le classement souhaités restent à vérifier séparément.

Sources décisives : [configuration Astro](https://github.com/satnaing/astro-paper/blob/main/astro.config.ts), [schéma de contenu](https://github.com/satnaing/astro-paper/blob/main/src/content.config.ts), [traductions d’interface](https://github.com/satnaing/astro-paper/tree/main/src/i18n).

## 2. Astro Cactus — finaliste pour une structure de contenu explicite

[Démo](https://astro-cactus.chriswilliams.dev/) · [Dépôt](https://github.com/chrismwilliams/astro-theme-cactus) · [Licence](https://github.com/chrismwilliams/astro-theme-cactus/blob/main/LICENSE) · [Manifeste](https://github.com/chrismwilliams/astro-theme-cactus/blob/main/package.json)

**Vérifié :** Astro 7, Tailwind 4, Markdown/MDX, Pagefind, RSS, images de couverture avec texte alternatif, composants de sommaire, pages de tags, Webmentions. Les contenus sont répartis en articles, notes et tags.

**Atouts :** composants explicites, images de couverture déjà modélisées, collections et pages thématiques utiles pour notre organisation. Personnalisation des styles documentée.

**Limites :** accueil d’origine beaucoup plus minimal que le prototype ; rubrique Notes à retirer. Le schéma plafonne les titres à 60 caractères, à assouplir pour nos titres français. Ni langue ni association des traductions dans les collections examinées. Les Webmentions ne répondent pas à elles seules au besoin de commentaires avec votes et classement.

**Adaptation :** refaire l’accueil et les modèles recherche/projet, ajouter le bilinguisme et les fonctions de lecture manquantes. Malgré sa présentation minimaliste, le manifeste comporte plusieurs outils (recherche, code, génération d’images sociales) ; ne pas confondre sobriété visuelle et faible nombre de dépendances.

**Écart documentaire repéré :** le README cite des chemins `src/content`, mais le schéma actuel utilise `./content/posts`, `./content/notes` et `./content/tags`. L’intégration devra suivre le code à la révision retenue.

Sources : [schéma](https://github.com/chrismwilliams/astro-theme-cactus/blob/main/src/content.config.ts), [sommaire](https://github.com/chrismwilliams/astro-theme-cactus/blob/main/src/components/blog/TOC.astro), [README](https://github.com/chrismwilliams/astro-theme-cactus#readme).

## 3. Astro Theme Pure — examiné, écarté des trois finalistes

[Démo](https://astro-pure.js.org/) · [Dépôt](https://github.com/cworld1/astro-theme-pure) · [Licence](https://github.com/cworld1/astro-theme-pure/blob/main/LICENSE) · [Manifeste](https://github.com/cworld1/astro-theme-pure/blob/main/package.json)

**Vérifié :** blog, documentation, page Projects, sommaire, recherche, composants de présentation, KaTeX/remark-math et client Waline. La page Projects existante n’est pas la preuve d’un modèle scientifique identique à notre prototype. La configuration définit une langue globale ; le bilinguisme article par article n’est pas établi.

**Atouts :** bibliothèque de composants riche, mathématiques présentes, nombreuses possibilités de présentation.

**Limites :** le template et le paquet `astro-pure` dépendent d’Astro **6.4.8** ; le paquet apporte aussi MDX 5 et UnoCSS. Il faudrait vérifier et migrer cet ensemble pour conserver Astro 7. La configuration de démonstration active un service Waline et une citation distante ; ils ne seraient pas à reprendre automatiquement. Le README signale également des options de personnalisation encore en développement.

**Conclusion :** possible, mais coût technique peu justifié ici face aux bases déjà sur Astro 7. Pas déclaré incompatible par principe ; compatibilité Astro 7 non démontrée.

Sources : [paquet astro-pure](https://github.com/cworld1/astro-theme-pure/blob/main/packages/pure/package.json), [configuration](https://github.com/cworld1/astro-theme-pure/blob/main/src/site.config.ts).

## 4. Polyglow — troisième finaliste, sous réserve de vérifier la démo et le build

[Démo annoncée](https://polyglow.zbz.ai/) · [Dépôt](https://github.com/zbzailabs/Polyglow) · [Licence](https://github.com/zbzailabs/Polyglow/blob/main/LICENSE) · [Manifeste](https://github.com/zbzailabs/Polyglow/blob/main/package.json)

**Vérifié dans le code et la documentation :** routes `[lang]`, contenus par langue, dictionnaires FR et EN parmi onze langues, catégories, tags, images éditoriales, recherche et flux localisés. Astro 7 et Tailwind 4. Un fonctionnement statique sans compte externe est annoncé.

**Atout principal :** le bilinguisme est déjà structurel. Il faudra néanmoins vérifier le passage entre deux traductions précises, notamment si leurs slugs diffèrent, et réduire les langues à FR/EN.

**Limites :** le thème embarque des fonctions de publicité, d’analytique et de paiement x402 optionnelles, désactivées par défaut selon le README, avec des dépendances Solana/x402 présentes dans le manifeste. Elles sont étrangères au besoin et augmentent le travail de simplification. Son interface annoncée comme riche en images et effets demanderait une adaptation ; aucun jugement de rendu visuel n’est établi ici puisque la démo est inaccessible à nos outils.

**Adaptation :** simplifier les intégrations et le style, créer les espaces Essays/Recherche et le modèle de projet, vérifier/ajouter sommaire et progression, intégrer les besoins scientifiques et les commentaires. Il reste finaliste pour son architecture bilingue, avec davantage de réserves que Paper et Cactus.

Sources : [locales](https://github.com/zbzailabs/Polyglow/blob/main/src/config/locales.ts), [routes](https://github.com/zbzailabs/Polyglow/tree/main/src/pages), [README](https://github.com/zbzailabs/Polyglow#readme).

## Matrice appliquée au résultat souhaité

**N** = natif constaté ; **L** = adaptation légère estimée ; **S** = adaptation structurelle estimée ; **?** = non vérifié. Les estimations ne sont pas des garanties de coût.

| Critère | Paper | Cactus | Pure | Polyglow |
| --- | --- | --- | --- | --- |
| Licence ouverte gratuite | N | N | N | N |
| Astro 7 déclaré | N | N | S | N |
| Build local de ce thème validé | ? | ? | ? | ? |
| Accueil à trois colonnes thématiques | S | S | S | S |
| Espaces Essays/Recherche et projets scientifiques | S | S | S | S |
| FR/EN avec articles associés | S | S | S / ? | N pour routes, ? pour association exacte |
| Articles Markdown/MDX | N | N | N | N |
| Sommaire conforme à notre prototype | L (repliable existant) | L (composants existants) | L (composants existants) | ? |
| Barre de progression conforme | L à ajouter/vérifier | L à ajouter/vérifier | ? | ? |
| Équations | L, guide disponible | ? | N, dépendances présentes | ? |
| Bibliographies structurées et slides/texte | S selon format | S selon format | S selon format | S selon format |
| Commentaires, votes et classement exacts | S | S | S malgré Waline | S |
| RSS / recherche | N / N | N / N | N / N | N / N |
| Palette, polices et largeur | L | L | L | L |
| WCAG AA et confort réel après adaptation | ? | ? | ? | ? |

Aucun de ces thèmes ne réalise déjà notre site. La personnalisation de la composition restera nécessaire, quelle que soit la base choisie. Aucun score Lighthouse ou argument commercial n’est traité comme une certification d’accessibilité.

## Proposition de choix

**AstroPaper** est ma première proposition si l’on privilégie une base de blog documentée et une adaptation maîtrisée à nos prototypes. Son principal chantier reste le bilinguisme.

**Cactus** est une alternative proche si l’on préfère ses composants et son modèle de couverture/tags ; l’effort structurel reste comparable, avec nettoyage des notes et adaptation des contraintes de titres.

**Polyglow** est pertinent si l’architecture bilingue existante prime, en acceptant un chantier de simplification plus important et une vérification préalable supplémentaire.

Le projet actuel fonctionne déjà et ses prototypes sont isolés : le gain d’un thème doit être mis en balance avec sa migration. Cette observation ne remplace pas le choix demandé et n’autorise aucune refonte.

## Point d’arrêt

Attendre le choix explicite de l’auteur. Après ce choix : établir les différences et le plan d’intégration, proposer une branche ou une sauvegarde, puis obtenir l’accord prévu avant toute modification structurelle ou installation. Ne rien déployer pendant cette phase.
