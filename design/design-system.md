# Design system — décisions de la phase C

Les valeurs sont centralisées dans `src/assets/styles/design-tokens.css`. L'atelier (sélecteur en bas à droite, visible uniquement avec `astro dev`) sert à comparer des variantes sur les vraies pages.

## Décisions prises

| Date | Élément | Décision | Raison |
| --- | --- | --- | --- |
| 1er nov. 2026 | Taille et interligne du texte d'article | 18 px, interligne 1,5 | Validé sur le prototype d'article : proche de Quanta, un peu plus grand car la colonne est plus large. |
| 1er nov. 2026 | Famille typographique | Serif partout | Approche de Quanta pour le texte et les titres ; l'auteur a ensuite préféré une interface en serif plutôt qu'en sans-serif. |
| 1er nov. 2026 | Police du texte | Literata | Choisie parmi Merriweather, Source Serif 4 et Literata, comparées sur le site. |
| 1er nov. 2026 | Police des titres | Fraunces | Choisie parmi Literata, Fraunces, Newsreader et Playfair Display : formes douces, chaleureuses et personnelles. |
| 1er nov. 2026 | Police de l'interface | Literata | Choisie parmi Satoshi, Inter, Instrument Sans et Literata : site homogène, entièrement en serif. |
| 1er nov. 2026 | Fond et texte (mode clair) | Palette « Papier » : fond #FAF8F5, texte #1D1A16 | Choisie parmi Pure, Craie, Papier et Lin : chaleur discrète, proche de Quanta. Contraste 16,4:1 (texte) et 9,3:1 (secondaire). |
| 1er nov. 2026 | Couleur d'accent | Terracotta #A94E2D | Choisie parmi bleu Pure, terracotta, vert sapin, bleu encre et prune. Contraste 5,2:1 sur Papier. Le bleu de Pure (4,2:1) était sous le seuil AA. |
| 1er nov. 2026 | Halo en haut de l'accueil | Supprimé | L'auteur veut un fond d'accueil uniforme, comme chez Maggie Appleton. |
| 1er nov. 2026 | Fond de l'accueil | Terracotta pâle #F4E7E1, uniforme ; accent foncé #843A1F sur l'accueil | Choisi parmi Papier, terracotta pâle, moyenne et pleine. Les articles gardent le fond Papier : transition d'un accueil chaleureux vers une lecture plus discrète. |
| 1er nov. 2026 | Mode sombre | « Charbon » : fond #1B1A18, texte crème, accent terracotta éclaircie #E19270 ; accueil #24201E | Choisi parmi Pure, charbon, brun et terre : sobre, presque neutre. Contrastes ≥ 6,6:1. |

## En cours d'exploration

Rien. L'atelier (`src/components/DesignWorkshop.astro`) est débranché ; voir son commentaire pour le réactiver.

## À explorer ensuite

- Largeur de lecture : la colonne d'article de Pure fait déjà environ 760 px sur grand écran, comme le prototype. À confirmer à l'œil.
