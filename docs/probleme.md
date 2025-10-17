---
sidebar_position: 4
---

# Problèmes récurrents

> Vous avez des problèmes avec Python, "nc" et/ou à savoir quoi faire avec certains challenges ? Nous avons peut-être la réponse ici !

## from flag import FLAG

Vous n'arrivez pas à avoir le flag même après avoir installer le module "Flag" ?

C'est normal ! On n'installe pas de module !

Quand on écrit ``from flag import FLAG``, ce que Python fait vraiment c'est importer la variable "FLAG" depuis un fichier flag ou flag.py

Il ne s'agit pas d'une importation de module traditionnel comme ``from collections import Counter``

Essayez donc de créer un fichier "flag.py" dans le même dossier que le fichier python du challenge avec pour contenu: ``FLAG="nbctf{flag_de_test}"``

Normalement votre problème est réglé. Cependant vous avez peut-être maintenant une erreur comme quoi "Flag n'a pas de variable FLAG" (parce que vous avez installé le module "Flag").

Il suffit de ``pip unsinstall flag`` ou juste de remplacer la ligne ``from flag import FLAG`` par ``FLAG="nbctf{flag_de_test}"``

## nc challenges.nobrackets.fr ? nc ?

Si vous posez cette question c'est surement que vous êtes sur Windows !

Sur Windows ce n'est pas ``nc`` mais ``ncat`` !

De plus il vous faut l'installer => https://nmap.org/dist/ncat-portable-5.59BETA1.zip

(Au passage il vous proposera d'autres logiciels à installer tel que Nmap, n'hésitez pas à les prendre. Vous en aurez besoin plus tard dans votre possible futur vie d'expert en cybersécurité)
