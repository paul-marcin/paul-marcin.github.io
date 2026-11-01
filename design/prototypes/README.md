# Atelier de composition — accueil

## Prototype de projet scientifique

Ouvrir `projet.html` ou suivre le lien dans la rubrique Travaux en cours de `recherche.html`. Le projet est explicitement fictif. La page reprend les styles de lecture approuvés (18 px, interlignage 1,5), le sommaire et la progression, avec un en-tête synthétique et des accès directs aux ressources.

Sections : question, approche, avancement et résultats, publications et code, équipe, article explicatif lié. Aucun lien vers un dépôt, publication ou personne n’est inventé. Les ressources absentes sont décrites comme à renseigner, sans boutons inactifs. Les informations de synthèse passent en une colonne sur mobile.

Fichiers ajoutés : `projet.html` et `projet.css`. Le comportement de lecture réutilise `article.js`. Liens locaux, ancres, ressources et syntaxe du script vérifiés ; rendu visuel à examiner dans le navigateur. Le site Astro reste inchangé.

## Prototype d’article long

Dernier ajustement demandé : suppression des commandes « Ouvrir l’aperçu » sur les trois pages actuelles. Le titre du seul article de démonstration disponible mène directement à `article.html` ; les autres titres restent des exemples sans destination inventée. La comparaison initiale est conservée comme archive.

Le corps de l’article passe à 18 px, interlignage 1,5 et marge entre paragraphes de 1 rem. Les styles Quanta consultés indiquent un interlignage de 1,5 pour `.post__content p` et une marge de 1 rem pour les paragraphes ; il s’agit d’une lecture des règles CSS, sans mesure du rendu calculé. Les valeurs ci-dessous décrivant 19 px / 1,75 sont celles de la première version, désormais remplacées.

Ouvrir `article.html`, ou cliquer sur le titre « Que peut expliquer un modèle de l’humeur ? » depuis l’accueil ou Recherche. Le texte est un exemple de lecture explicitement signalé, pas un travail attribué à Paul. Il contient six sections, une citation interne d’exemple, des emplacements de figures et une note avec retour au texte.

La largeur maximale est de 760 px, avec un corps de 19 px et un interlignage de 1,75 (18 px sur petit écran). Ce sont des valeurs à évaluer, pas des mesures de Medium. Le sommaire reste à gauche sur grand écran, puis passe au-dessus du texte sous 1100 px. La barre supérieure suit le corps de l’article, hors en-tête et pied de page. Le sommaire et la note fonctionnent sans JavaScript ; la progression et le repère de section utilisent `article.js`.

À examiner : confort des lignes, espace laissé au sommaire, rythme des paragraphes et taille des figures. Les commentaires, la traduction et le choix graphique final restent pour les étapes suivantes. Vérifications effectuées : syntaxe JavaScript, liens et ressources locales. Le rendu et les interactions doivent encore être examinés dans un navigateur.

## Version actuelle : trois colonnes et pages distinctes

Les aperçus ont désormais une hauteur commune sur chaque page, calculée sur le bloc le plus haut par `equal-previews.js`. Elle est recalculée au redimensionnement, après chargement des polices et à l’ouverture d’un détail. Aucun résumé n’est tronqué ; les commandes d’ouverture sont alignées en bas. Sans JavaScript, les blocs retrouvent leur hauteur naturelle. La syntaxe du script est vérifiée ; le rendu doit encore être examiné dans le navigateur.

L’introduction de l’accueil présente maintenant le fil conducteur demandé : « Mieux vivre, avec soi-même et en société. »

Ouvrir `index.html` dans un navigateur. L’accueil propose trois colonnes thématiques : Recherche, Réflexions sur la psychiatrie, Réflexions politiques. Chacune contient deux aperçus. Sous 950 px, les domaines se succèdent verticalement avec leurs titres.

La navigation mène à deux fichiers distincts : `essays.html` et `recherche.html`. Essays regroupe les deux familles de réflexions ; Recherche propose les articles scientifiques et les emplacements pour intérêts, publications, travaux en cours et CV. Ces pages sont des prototypes, pas des pages intégrées au site Astro.

Les résumés restent entiers, avec la même quantité de texte. Ils passent à 16 px et un interlignage de 1,45, contre 16,56 px et 1,6 auparavant. La largeur maximale de l’accueil est augmentée pour accueillir les trois colonnes. Les titres et catégories de deux exemples ont été ajustés à leur rubrique ; aucun texte réel n’est inventé.

La comparaison précédente reste accessible dans `comparaison-initiale.html` et par le lien en haut des pages. Les instructions ci-dessous concernent cette version initiale.

## Comparaison initiale conservée

Ouvrir `index.html` directement dans un navigateur (double-clic depuis l’explorateur). Aucun serveur, installation ou connexion n’est nécessaire. Le sélecteur en haut permet de passer de A à B ; il se commande aussi au clavier avec les flèches lorsque l’un des boutons radio a le focus.

- A : deux colonnes d’aperçus sur grand écran.
- B : une liste verticale centrée.

Le contenu, l’ordre des six aperçus, la hauteur des images, la typographie provisoire, l’introduction et les espaces entre éléments restent les mêmes. Seule la disposition des aperçus change (nombre de colonnes et largeur disponible). Les deux variantes passent en une colonne sur petit écran.

Les titres et résumés sont fictifs, explicitement signalés comme exemples. Aucun travail scientifique ou biographique supplémentaire n’est attribué à l’auteur. Les aperçus se déplient pour rappeler ce statut ; ils ne conduisent pas à de faux articles. La navigation mène aux sections présentes. Les emplacements CV, publications et projets sont indiqués comme à concevoir. La traduction, le contact, les commentaires et les pages d’article ne font pas partie de cet essai.

## À comparer

1. Comprends-tu la démarche sans devoir trop défiler avant les textes ?
2. Dans quelle variante trouves-tu le plus facilement un texte à ouvrir ?
3. Le résumé a-t-il assez de place, et l’image en prend-elle trop ?
4. La présence personnelle te semble-t-elle suffisante ?

Réduire ensuite la fenêtre pour examiner la lecture sur petit écran. Les gris et polices système sont des outils de composition, pas une proposition de palette ou un choix typographique final.

## Fichiers

- `index.html` : contenus communs et contrôles de comparaison.
- `prototype.css` : styles communs, variante de disposition et adaptation mobile.
- `prototype.js` : changement de variante, sans stockage ni dépendance externe.

Les fichiers restent hors de `src/` et de `public/` : ils ne sont pas intégrés au site Astro ni publiés. Cette étape concerne l’accueil uniquement ; l’essai long et la page de projet viendront après discussion de cette première comparaison.
