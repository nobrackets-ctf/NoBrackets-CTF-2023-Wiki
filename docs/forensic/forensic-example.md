# Introduction au Forensic
## Qu'est ce que le Forensic

L’analyse forensique (plus fréquemment appelée « forensic ») consiste à investiguer un système d’information. Les analystes vont collecter l’ensemble des données brutes (fichiers effacés, disques durs, sauvegardes, journaux des systèmes…), les étudier pour comprendre ce qu’il s’est passé et établir des conclusions. 
Cette tâche, parfois ardue, permet de produire des preuves nécessaires à une action interne ou au lancement d’une procédure judiciaire par exemple.


## Les différents types d'analyse Forensic

### Analyse à froid

L'analyse à froid (anglais : dead forensics) est le cas où on prend soin de copier toutes les données à analyser sur un support dédié. Cela permet d'isoler le support potentiellement dangereux pour l'analyse sans impacter le support originel.

### Analyse à chaud

L'analyse à chaud (anglais : live forensics) est le cas où le support est directement analysé dans ce cas. Ce type d'analyse est particulièrement adapté si l'on souhaite directement analyser la mémoire vive et les processus actifs d'un appareil que l'on suspecte.

### Analyse en temps réel

Ce type d'analyse est une analyse préventive où l'on examine régulièrement un support sensible. On peut notamment surveiller en temps réel le trafic réseau d'un appareil pour analyser, détecter et comprendre une attaque réseau qui arrive subitement. 

## Cyber Threat Intelligence (CTI) :

La CTI, ou "Cyber Threat Intelligence," est un domaine de la cybersécurité qui consiste à collecter, analyser et utiliser des informations sur les menaces informatiques pour anticiper et répondre aux incidents de sécurité. Les analystes CTI collectent des données provenant de diverses sources, telles que les indicateurs de compromission (IOC), les rapports de sécurité, les flux de données réseau, les forums underground, etc. Ils analysent ces données pour identifier les tendances, les attaques potentielles et les acteurs malveillants. En résumé, la CTI permet d'anticiper les menaces et de prendre des mesures proactives pour les contrer

## Chasse aux Menaces (Threat Hunting) :

La chasse aux menaces, ou "threat hunting," est une approche proactive de la cybersécurité. Contrairement à la détection automatique des menaces, qui se base sur des règles prédéfinies, la chasse aux menaces implique des analystes de sécurité qui recherchent activement des signes d'activités malveillantes ou de compromission au sein d'un environnement informatique. Les chasseurs de menaces utilisent souvent des informations de la CTI pour guider leurs recherches, en explorant les systèmes et les réseaux à la recherche d'anomalies subtiles qui pourraient indiquer une intrusion. Cette méthode permet de découvrir des menaces qui pourraient échapper aux systèmes de détection automatisés.