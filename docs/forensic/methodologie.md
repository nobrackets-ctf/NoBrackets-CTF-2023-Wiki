# Méthdologie Forensic

## Méthodologie

Il est facile de perdre énormément de temps sur un challenge, un outil qui ne fonctionne pas ou un problème quelconque. Avant de vous lancer dans la résolution d'un problème, posez-vous les bonnes questions :
- existe-t-il une méthode plus simple (croyez-moi, la réponse est souvent oui) ?
- quelle est la question à laquelle je dois répondre ?
- ais-je exploré toute les autres pistes ?
- **est-ce que l'un de mes coéquipiers a déjà eu un problème similaire ?**

Se poser ces questions avant de foncer tête baisée dans la technique vous fera gagner un temps précieux.

## Type de fichier

Lorsqu'on investigue sur des systèmes, il est courant de tomber sur des fichiers "exotiques". Entendez par là des fichiers aux extensions un peu mystérieuses comme `db`, `plist`, `raw`, `pf`... Lorsque vous rencontrez un fichier dans ce style il est courant d'être un peu perdu. 

- il peuvent être difficiles voire impossibles à ouvrir sans logiciels adaptés
- on ne sait pas ce qu'ils contiennent ni à quoi ils servent
- les ouvrir avec un éditeur de texte type Bloc-Note va souvent vous afficher des caractères sans significations

**Rappellez-vous qu'un fichier n'est de toute façon qu'une suite de 0 et de 1, la seule différence entre un fichier texte et une image est la façon dont ces données sont lues.**

**Que faire quand on rencontre un fichier étrange ?**

Plusieurs options s'offrent à vous :

1. utilisez la commande `file <fichier.xyz>` (Linux) ou `Get-Item <fichier.xyz>` (Windows), elle peuvent vous fournir plus d'informations sur le type de fichier
2. clic droit > Propriétés, cela offre généralement moins d'informations que la première méthode mais c'est un point de départ
3. **recherchez sur internet** et si possible en anglais
4. demandez à ChatGPT, c'est un outil très puissant et un bon point de départ, attention cependant à ne pas vous faire "intoxiquer" : ChatGPT à tendance à inventer lorsqu'il ne sait pas

Une fois que vous avez identifié le type de fichier, à quoi il sert et les informations qu'il pourrait contenir, essayez de l'ouvrir. Pour cela, il existe plusieurs méthodes :

- essayer d'ouvrir le fichier dans un éditeur de texte (Bloc Note, VScode, SublimeText...). Privilégiez Bloc Note à Libre Office et Word, ces programmes peuvent vous induire en erreur en vous indiquant que le fichier est corrompu, vide alors qu'il ne l'est pas forcément. Parfois, ouvrir un fichier dans un éditeur de texte peut vous permettre de lire des bouts du fichier, voire de le lire complètement !
- extraire les "strings" (chaînes de caractères) d'un fichier : lorsque vous tenterez d'ouvrir un fichier avec un éditeur de texte, il se peut que vous ayiez énormément de données illisibles et seulement quelques mots qui ont du sens. Il est possible de filtrer tout ce "bruit" pour n'avoir que la données textuelle grâce à des outils comme `strings <fichier.xyz>` (Linux & Windows).
- essayez de l'ouvrir avec d'autres logiciels que vous avez déjà (votre visualiseur d'image, votre navigateur...) (ceux qui sont encore ici à lire, c'est un indice gratuit : parfois certains fichiers sont compressés, comme des archives WinRAR ou 7z, les ouvrir avec des logiciels fait pour ce type de fichier pourraient vous aider).
- cherchez un logiciel spécialisé sur internet (ou demandez à ChatGPT s'il en connaît), si vous en trouvez un et que vous arrivez à le faire fonctionner c'est jackpot !