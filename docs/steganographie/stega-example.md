# Stéganographie

La [stéganographie](https://fr.wikipedia.org/wiki/Stéganographie) est une forme de dissimulation (ou d'offuscation) d'information dans le but de transmettre un message de manière inaperçue au sein d'un autre message. L'information utile est cachée au premier abord et à l'œil nu, mais non protégée pour qui sait où regarder.
Pour prendre une métaphore, la stéganographie consisterait à enterrer son argent dans son jardin là où la cryptographie consisterait à l'enfermer dans un coffre-fort. Cela dit, rien n'empêche de combiner les deux techniques, de même que l'on peut enterrer un coffre dans son jardin.

## Différence entre cryptographie et stéganographie

Alors que la cryptographie consiste en une écriture indéchiffrable d'un message ou d'une information (ainsi rendue secrète), la stéganographie va plutôt s'attacher à cacher un message dans un contenu pour qu'il soit, non pas indéchiffrable, mais indiscernable.

## Les différents types de stéganographie et leurs supports

Il existe deux types de stéganographie, physiques et numérique.
Un exemple de stéganographie physique serait [la scytale spartiate](https://www.apprendre-en-ligne.net/crypto/transpo/scytale.html) un procédé qui consistait à enrouler une bande de cuir autour d'un bâton pour déchiffrer le message écrit dessus.
Mais pour des raisons évidentes de praticité, on se concentrera plutôt sur les méthodes numériques dans ce wiki.

### Les différents types de support
Comme dit plus tôt, la stéganographie consiste à cacher un message ou une donnée dans un élément déjà existant.
De ce fait, la connaissance des différents supports permettant ce genre de chose est très importante.

#### Les message transporté dans un texte
L'utilisation de la stéganographie dans les textes pour cacher des informations est la plus ancienne de ses utilisations.
Comme mentionné plus tôt avec la scytale spartiate, le procédé existait déjà durant l'Antiquité.
Il fut ensuite repris par les hommes d'Église principalement, puis plus récemment par les [écrivains et poètes](https://www.monde-fantasy.com/les-messages-codes-la-steganographie/) qui on fait évoluer le procéder.
- Modulation fine d'un texte écrit
- Marquage de caractères
- Codage sous forme d'une apparence de spam

##### Ressources :
https://fr.wikipedia.org/wiki/Langage_de_programmation_exotique

#### Les message transporté dans une image
Les différentes manipulations ci-dessous peuvent s'appliquer sur l'ensemble des formats d'image (PNG, JPG, GIF, WEBP...)
- Manipulation des bits d'une image
- Manipulation de la palette de couleurs d'une image
- Message caché dans les images compressées
- Optimisation de l'emplacement du message caché dans une image

##### Ressources :
https://ctf-wiki.mahaloz.re/misc/picture/introduction/

#### Les message transporté dans un enregistrement
Il est possible de réaliser des opérations sténographiques sur différents types d'enregistrement :
- Audio
- Vidéo

##### Ressource :
https://ctf-wiki.mahaloz.re/misc/audio/introduction/

#### Les message transporté dans un binaire

## Ressources

https://stegonline.georgeom.net/upload
https://0xrick.github.io/lists/stego/
https://k-lfa.info/tools-stegano/
https://futureboy.us/stegano/
https://ctf-wiki.mahaloz.re/
https://book.hacktricks.xyz/crypto-and-stego/stego-tricks