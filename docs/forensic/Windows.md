# Windows

## Ressources utiles

Plusieurs ressources très utiles existent sur Internet pour vous aider à localiser les fichiers d'intérêt (on appelle ces fichiers des **artefacts**). Windows étant un système d'exploitation très utilisé et très complexe, le nombre d'artefacts est conséquent et la nature des fichiers est diverse (base de données, fichiers de logs, images...).

Quelques ressources que vous *devriez* regarder : 

- [Windows Forensic Analysis Poster - SANS](https://cyber-ssct.com/SANS%20Digital%20Forensic%20Poster.pdf)

> Regroupe les artefacts natifs Windows les plus utiles. Ils sont regroupés par catégorie pour faciliter leur compréhension (par exemple : *Application Execution*, *Account Usage*,...). Pour chaque artefact : une description, une ou plusieurs localisation(s) ainsi qu'une interprétation sont fournies.

- [Windows DFIR Artifact Explorer](https://windows-dfir-artifact-explorer.com/)

> Ce site, en plus des artefacts issus du poster du SANS (voir point précédent), guide l'utilisateur dans le choix des catégories d'artefact à analyser.

- [Eric Zimmerman's tools](https://ericzimmerman.github.io/#!index.md)

> Ce site comporte une suite d'outils qui vous aideront à convertir certains artefacts au format texte. Ce sont des outils largement utilisés par les professionnels du secteur.

Néanmoins, pour les challenges les plus simples, les artefacts déjà convertis au format texte vous seront fournis. Pour les challenges un peu plus avancés, peut-être que vous pourriez avoir besoin de certains de ces outils...

## Exemples d'artefacts

Cette partie détaille certains artefacts Windows pour vous aider à y voir plus clair. Gardez à l'esprit que chaque artefact s'interprète différemment, et tous ne contiennent pas les mêmes informations ! Il s'agit ici d'une liste non exhaustive fournie à titre d'exemple.

### Amcache

Dans le [poster du SANS](https://cyber-ssct.com/SANS%20Digital%20Forensic%20Poster.pdf) (partie *Application Execution* ou *Program Execution* dans l'ancienne version), l'`Amcache` est décrite comme suit : 

> "L'`Amcache` référence les applications installées, les programmes exécutés (ou présents sur la machine), les pilotes chargés, etc. Ce qui distingue cet artefact, c'est qu'il référence également le hash des applications et des pilotes (disponible pour Windows 7 et plus)."

#### Qu'est-ce qu'un hash ?

Pour le dire simplement, un hash est comme une empreinte **unique** pour chaque fichier. Il prend la forme d'un texte d'une longueure **fixe**. Si le fichier change, ne serait-ce que *d'un seul bit*, alors le hash sera **complètement différent**. Il existe plusieurs *algorithmes* pour calculer un hash dont les plus connus sont : `MD5`, `SHA1`, `SHA256`...

Concrètement, si je dispose d'un fichier texte qui contient "NoBracketsCTF", le hash de ce fichier, calculé avec `MD5`, sera : `707a3dd7180304e71316bd18dca41139`. Maintenant, si je change une lettre ("NoBracketCTF" ; il manque le "s") et que je calcule de nouveau le hash avec `MD5`,  j'obtiens : `c87c64aaeb2893ff87d91ba566b3c3d1`.

Pour le dire autrement, **on peut identifier un fichier de manière certaine grâce à son hash**.

#### Exemple

Étant donné que `Amcache` est une base de données, cette dernière peut contenir plusieurs tables. Une table peut être vu comme un tableau sous Excel (avec des lignes et des colonnes). Par exemple, une table de l'`Amcache` peut contenir les colonnes suivantes : 

- `ApplicationName`

- `ProgramId` (identifiant pour chaque programme)

- `FileKeyLastWriteTimestamp` (dernière fois que cette valeur a été écrite)

- `SHA1` (hash de l'application/driver)

- `FullPath` (chemin complet de l'application/driver)

- `Name` (nom de l'application/driver)

- `Version`

- `Size` (taille de l'application/driver)

Pour le navigateur `Edge` les valeurs de ces colonnes pourraient être : 

- `ApplicationName` : Microsoft Edge

- `ProgramId` : `00001e3ef2a21c5fa51fc3820f2b6704e4890000ffff`

- `FileKeyLastWriteTimestamp` : 2024-08-07 12:38:44.5808733

- `SHA1` : `b5daa0e1faeb7836b4d988186ee3e2188699552a`

- `FullPath` : `c:\program files (x86)\microsoft\edge\application\127.0.2651.86\msedge.exe`

- `Name` : `msedge.exe`

- `Version` : 127.0.2651.86

- `Size` : 3814968

### Logs

Un *log* ou journal, est un fichier qui garde une trace des événements qui se produisent sur l'ordinateur. C'est comme un journal de bord où sont notés toute sorte d'événement (connexions, démarrage et arrêt de programmes, actions des programmes...). En cybersécurité, ils sont analysés avec attention car ils peuvent contenir des traces d'activités malveillantes. Chaque log contient un **horodatage** (ou *timestamp* en anglais) qui permet de savoir précisément quand s'est déroulée l'action.

#### Lecture des logs

Sous Windows, les logs sont situés ici : `C:\Windows\System32\winevt\Logs\`, ce sont les fichiers avec l'extension `evtx`. **Attention**, ce sont des fichiers **binaires** ce qui veut dire qu'on ne peut pas les ouvrir dans le bloc note ou un éditeur de texte classique. C'est pour cela que, parfois, pour simplifier le challenge, on vous donnera une "traduction" du fichier binaire en fichier textuel qui pourra être ouvert par le bloc note, sublime text, visual studio code... Néanmoins, cela ne veut pas dire qu'ils sont facilement *compréhensibles*.

#### Compréhension des logs

Le plus souvent, on vous fournira un fichier `csv`, qui est un fichier **textuel**. On peut donc l'ouvrir avec un éditeur de texte comme le bloc note, sublime text, visual studio code ou autre. Cependant, dans le cas d'un fichier `csv`, il est plus simple de l'ouvrir dans un **tableur** comme LibreOffice Calc, Excel ou Google Sheet. Un fichier `csv` est comme un tableau avec des **lignes** et des **colonnes**. Chaque ligne est une action qui a été effectuée sur le système et chaque colonne est une information.

**Il n'est pas nécessaire de tout comprendre.** En effet, les logs sont assez complexes, ils contiennent beaucoup d'informations. Pour simplifier la compréhension des logs, demandez à ChatGPT : prennez le temps de lui poser des questions. 
