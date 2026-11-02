# Traduction et relecture FR / EN

Le français conserve ses URL. Les pages anglaises sont sous `/en/`. Les deux langues utilisent les mêmes composants et styles. Le sélecteur conduit à la traduction du même article ou projet ; il est désactivé si elle n'est pas disponible, sans rediriger vers un autre contenu.

## Parcours retenu

1. Écrire ou modifier le français.
2. Demander à l'agent de préparer ou actualiser sa traduction anglaise. Il génère un brouillon dans un fichier distinct et conserve les corrections humaines lors des mises à jour. Aucun moteur payant ou appel d'API n'est configuré : cette première version utilise l'agent à la demande.
3. Relire et corriger le fichier anglais, ou transmettre les corrections à l'agent. Les six articles et le projet d'exemple ont déjà leurs premiers brouillons.
4. Demander explicitement la validation après relecture, ou lancer la commande `approve` ci-dessous.
5. Toute modification du français signale « à actualiser ». Toute modification d'un anglais validé exige une nouvelle validation. Aucun texte n'est réécrit automatiquement.

Les brouillons de traduction sont visibles avec un avertissement dans le serveur **dev**. Ils sont exclus du build de production, des liens alternatifs, de la navigation entre articles et du RSS tant qu'ils ne sont pas validés et à jour. `preview` montre la version de production, donc pas les traductions à relire. Aucun déploiement n'est déclenché par ces commandes.

## Commandes PowerShell, depuis la racine du dépôt

```powershell
# Voir les traductions à relire, validées, modifiées ou manquantes
npm.cmd run translations

# Facultatif : préparer un dossier avec le français et l'anglais existant pour l'agent
npm.cmd run translations -- prepare blog/exemples/modele-humeur

# Après génération ou actualisation par l'agent : enregistrer la source du brouillon
npm.cmd run translations -- stage blog/en/exemples/modele-humeur

# Après ta relecture : valider exactement ces versions des deux fichiers
npm.cmd run translations -- approve blog/en/exemples/modele-humeur

# Pour un projet
npm.cmd run translations -- approve projects/en/exemple-variations-humeur
```

`prepare` écrit un dossier JSON dans `.astro/translation-requests/`, ignoré par Git. Cette commande ne traduit pas elle-même et n'envoie rien à un service. `stage` enregistre un brouillon sans le valider ; il retire une éventuelle validation antérieure. `approve` est réservé à une demande explicite de l'auteur après relecture.

## Structure des fichiers

- Français : `src/content/blog/exemples/modele-humeur.md`.
- Anglais : `src/content/blog/en/exemples/modele-humeur.md`.
- Projets : même principe dans `src/content/projects/`.
- Ajouter `locale: en` et `translationOf: exemples/modele-humeur` dans le frontmatter anglais. La source française reste intacte ; sa langue vaut `fr` par défaut.
- Le statut de relecture est conservé dans `translations/reviews.json`, avec des empreintes SHA-256 des deux fichiers. Les fins de ligne Windows/Linux sont normalisées pour éviter les fausses alertes.
- Conserver Markdown/MDX, formules, code, imports et dates. Traduire aussi les résumés, les légendes et les libellés du projet. Vérifier les ancres après traduction des titres et les chemins des images depuis le sous-dossier `en/`.
- Les articles du starter sont conservés avec leurs anciennes URL ; ils n'ont pas été retraduits ni intégrés aux six aperçus éditoriaux.

Les libellés fixes des pages et de la navigation sont traduits dans les vues partagées. Leur relecture passe par les modifications de code usuelles ; le suivi par empreintes concerne les articles et les projets.
