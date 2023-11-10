# Reseau
## Qu'est-ce que c'est ?
Les challenges de la catégorie réseau consistent pour la plupart à l'analyse de captures de traffic sur un réseau. On vous y demandera de retrouver des informations à partir de paquets réseau, qu'ils soient tirés d'une attaque (se rapprochant du forensic) ou d'une simple communication.

## Les bases du réseau
### Adresses
Avant de se pencher sur les challenges de CTF, il est bon de faire un court rappel du fonctionnement des réseaux informatiques. Aujourd'hui, chaque machine connectée possède trois identifiants : 
- l'adresse MAC est unique (mais spoofable) et désigne le système matériel.
- l'adresse IP désigne plus un élément connecté. Elle existe sur un réseau local (10.0.0.0/8 ; 172.16.0.0/12 ; 192.168.0.0/16) généralement en IPv4, et sur Internet, en IPv6 (transformable en IPv4 grâce à de la [magie noire](https://fr.wikipedia.org/wiki/Transition_d%27IPv4_vers_IPv6)). L'IP d'une machine est généralement automatiquement attribuée par un serveur [DHCP](https://fr.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol), et peut être amenée à changer.

### Protocoles
La transmission de données entre deux machines se fait grâce à des protocoles. Il y en a une infinité, tous plus pourris et complexes les uns que les autres, mais ils ne restent au final qu'une manière définie de transmettre les données nécessaires au fonctionnement d'un service, afin que le recepteur puisse les comprendre.

Certains protocoles servent de base à d'autres : le protocole IP est plus ou moins le principal, supportant TCP et UDP, sur lesquels se basent ARP, DNS...la liste est longue. Les données de chaque protocole empilé s'ajoutent à la fin du paquet, ajoutant petit à petit des informations cruciales : l'Ethernet donne l'adresse MAC, l'IP l'adresse IP, le TCP le port et l'état de la connexion... Pour en apprendre plus, voir le [modèle OSI](https://fr.wikipedia.org/wiki/Mod%C3%A8le_OSI).

## Le réseau en CTF
Comme expliqué précédemment, le réseau en CTF consiste à analyser des captures de traffic entre deux machines. Pour ce faire, nous n'auront besoin que D'UN SEUL outil (contrairement à la steg :) ) : [Wireshark](https://www.wireshark.org/download.html). Il va nous permettre d'ouvrir les fichiers .pcap ou .pcapng et d'analyser leur contenu.

Une fois le fichier ouvert, un grand d'informations se montrent à nous.
![Wireshark](ws1.jpg)
Le bloc principal liste tous les paquets du fichier. Vous pouvez cliquer dessus pour les sélectionner.
J'ai magnifiquement entouré les parties les plus intéressantes, voici un résumé :
- *Blanc* : Contenu brut du paquet selectionné.
- *Vert* : Contenu traduit et parsé champ par champ par wireshark **si il connait le protocole utilisé**. On peut y voir les trois layers : Ethernet, IP, et ICMP.
- *Jaune* : Adresses IP de source et de destination du paquet.
- *Rouge* : Protocole du paquet (il n'y en a qu'un ici mais il peut y en avoir beaucoup de différrents).
- *Bleu* : Barre de recherche qui permet d'appliquer des filtres à la liste, pour n'afficher que les paquets de tel ou tel protocole, ou de telle ou telle source par exemple.

Wireshark permet également de créer des captures, et a plein d'autres fonctionnalités hyper cool. Je vous mets cette [cheatsheet](https://stationx-public-download.s3.us-west-2.amazonaws.com/Wireshark-Cheat-Sheet-v1.pdf) pour les différents filtres et modes. (Tips : clic-droit + "Suivre le flux" permet d'afficher à la suite tout le contenu d'une discussion avec un machine dans un protocole donné)

En CTF, il faudra probablement que vous compreniez l'enchaînement de paquets pour retrouver l'information que vous cherchez. Si vous ne connaissez pas le protocole utilisé, cherchez son fonctionnement, et quelles informations / paquets pourraient être importants. 

Bon courage !