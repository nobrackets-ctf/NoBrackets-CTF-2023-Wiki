# Exemple d'un challenge d'OSINT

## Enoncé

Voici un exemple d'énoncé que vous pourriez rencontrer en ctf :


La SNCF archive les documents importants de son histoire : https://ressources.data.sncf.com/explore/dataset/archives-sncf-new/table/?sort=-id

Après la guerre, un grand projet de reconstruction des voies détruites a été lancé.

Nous recherchons des informations sur une voie entre une ville du Grand Est et une ville des Hauts-de-France, près de la frontière belge.

La compagnie des chemins de fer de l'est a dessiné un plan de la ligne.
- Ou a été dressé le plan ?
- En quelle année cette ville a-t-elle changé de nom pour un nom plus connu ?

Format du flag : exemple{paris_1877}


## Résolution
Et bien allons-y. Tout d'abord, l'énoncé nous donne la première étape du défi : les archives numériques de la sncf.

On peut éplucher à la main chaque ligne qui nous intéresse, par exemple celle de la thématique "Les chemins de fer pendant la guerre", mais ce serait plutôt long.
En revanche, nous avons déjà des informations géographiques : l'onglet "carte" nous intéresse donc plus.
En explorant la frontière belgique/hauts-de-france/grand est, on tombe sur un point géographique à Hirson : https://medias.sncf.com/sncfcom/open-data/archives/tr_sardo_1749.pdf

Ça ressemble beaucoup à ce qu'on recherche : on retrouve le mot clé "compagnie des chemins de fer de l'est", et **Hirson** se situe dans les Hauts-de-France et **Amagne** dans le Grand Est.

Le champ "dressé à" indique la ville de **Charleville**. On a donc la première moitié du flag !

La deuxième étape nécessite des recherches sur Charleville. Une simple recherche de ce mot ne nous donne que des liens vers Charleville-Mézières : normal, c'est une grosse ville des Ardennes.
Affinons un peu notre recherche grâce aux Google Dorks :
`charleville intitle:"charleville" & -intitle:"Mézières"`
Cette recherche ne renverra que des résultats dont le titre ne contient pas "Mézières".
Et voilà, on tombe tout de suite sur la page Wikipedia de Charleville ! 
https://fr.wikipedia.org/wiki/Charleville_(Ardennes)
Après un peu de lecture, on apprend que cette ville a été renommée Charleville-Mézières en 1966.

Ça y est, on a toutes les informations : 

`Flag : exemple{charleville_1966}`

# Récapitulatif

Voilà comment se passe la résolution d'un challenge d'OSINT : on cherche, on tâtonne.
En cas de blocage : 
- Être imaginatif dans ses recherches : internet est vaste !
- Ne pas hésiter à prendre du recul et à reconsidérer les résultats déjà obtenus.
- Être attentif au format du flag : par exemple, ici le nom de la ville est écrit sans majuscule.