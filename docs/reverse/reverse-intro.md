# Rétro-ingénierie ?

En rétro-ingénierie il y a deux grandes méthodes pour comprendre le fonctionnement d'un système, l'analyse **statique** et l'analyse **dynamique**

## Statique

### Kézako ?

L'analyse statique est l'analyse du "code" du système que l'on étudie. Cette méthode semble intuitive mais sa difficulté se trouve dans ce "*code*" qui souvent ne se lit pas facilement.

Entre méthode d'obfuscations ou juste l'utilisation de langages compilés nous donnant des *bytecodes*, des instructions que la machine peut interpréter. Il ne suffit pas de lire ce "code" pour le comprendre. **Exemple !**

```asm
sub_1750:
   mov eax, ecx
   add eax, edx
   ret
```

Pour beaucoup cette suite d'instructions ne diront rien à première lecture mais elles représentent une simple addition !

```c
additionne( a , b )
```

### Quels méthodes appliquer ?

En analyse statique on utilise divers outils nous facilitant l'analyse. Voici une liste non exhaustive gratuite: [Ghidra](https://ghidra-sre.org) ; [IDA *](https://hex-rays.com/ida-free) ; [Binary Ninja *](https://cloud.binary.ninja) ; [DogBolt](https://dogbolt.org) : [Page Github avec +](https://github.com/wtsxDev/reverse-engineering)

``*`` nécessite la création d'un compte :(

Bien sûr les outils ne font pas tout, une **méthodologie générale** que je conseillerais:

- Regarder les **informations** (souvent le *Header*) de l'application, ce avec quoi on travaille. C'est un executable Windows? Un binaire Linux? Avons-nous accès aux noms des fonctions? etc etc
- Analyser les "**Strings**", des bouts de textes dans l'application, chercher des 'flag', 'password', 'NBCTF' et autres pour peut-être trouver des points d'intérêts dans l'application
- **Renommer** des fonctions et variables pour pouvoir mieux comprendre le fonctionnement de l'application et surtout ne pas s'y perdre !
- Regarder les **données** de l'application. Si on affiche le flag alors il est présent dans les données de l'application, ou du moins calculé à partir de ces données. Il est important de regarder qui accède à ces données et les transformations qui leurs sont appliqués.


## Dynamique

### Kézako

L'analyse dynamique est l'analyse du *comportement* du système que l'on étudie. Pour cela on execute le code de l'application que l'on souhaite analyser ! Bien sûr il est essentiel de le faire dans un environnement contrôlé pour pouvoir mieux analyser mais surtout pour se protéger si c'est un virus qu'on analyse 😳

### Quels méthodes appliquer ?

Parfois il suffit juste de lancer l'application qu'on souhaite analyser pour faire une analyse dynamique, mais parfois il est nécessaire d'avoir plus de contrôle sur ce qu'on analyse: pouvoir procéder étape par étape, lire le contenue des variables à chaque étape, changer l'état de l'application à certaines étapes, etc

Pour cela on utilise souvent des **débogueurs**, sur navigateur par exemple il est simple de déboguer et faire une analyse dynamique du code Javascript d'un site web grâce au débogueur intégré au navigateur (Dev Tools > Source)

Pour des binaires (Linux) il y a de nombreux débogueurs mais le plus connu est sûrement GDB, pour en apprendre plus je vous laisse lire [la page suivante](https://wiki.nobrackets.fr/docs/reverse/reverse-dynamique-avec-gdb) du wiki qui sera sur le sujet ;)

Dernier point, parfois en analyse dynamique il nous suffit juste de regarder rapidement ce que demande de faire l'application. Pour regarder si un binaire souhaite: faire une comparaison, afficher du texte, demander un input à l'utilisateur, etc. Pour cela on utilise des outils comme ``strace`` ou ``ltrace``
