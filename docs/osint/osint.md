# Introduction à l'OSINT

L'OSINT signifie "Open Source Intelligence" (en français, "Renseignement en source ouverte"). Il s'agit de la pratique de collecte et d'analyse d'informations à partir de sources publiques accessibles à tous afin de recueillir des informations, des données et des renseignements sur un large éventail de sujets. L'OSINT est utilisé à diverses fins, notamment la sécurité, les enquêtes, l'analyse concurrentielle et la recherche.

## Source Ouverte
L'OSINT repose sur des informations accessibles à n'importe qui par le biais de canaux publics. Cela peut inclure des sites web, des réseaux sociaux, des articles de presse, etc.

## Éthique
Non-i ntrusif : l'OSINT n'implique pas de piratage ou de méthodes illégales pour obtenir des informations. En s'inflitrant dans un système d'informations, en accédant à des informations privées ou encore en espionnant quelqu'un, vous sortez du cadre de l'OSINT.
Il est très important de rester conscient de ces limites lors de la résolution d'un défi d'OSINT en CTF. Le respect de la vie privée des individus et le respect des lois et réglementations sont des aspects essentiels d'une OSINT responsable.

## En CTF 
Un défi d'OSINT en CTF consiste à répondre à des questions sur un sujet particulier. Cela peut aller de retrouver la date de naissance d'une célébrité à creuser dans des documents du siècle dernier, en passant par lister le menu d'un restaurant à une date précise.


## Outils et Techniques 
Les praticiens de l'OSINT utilisent une large gamme d'outils et de techniques pour collecter des données. Voici quelques outils communément utilisés :
- Moteur de recherche
- Cartes et images satellites
- Moyens de dissimulation/révélation de l'information (simples), stéganographie ou cryptographie
- Réseaux sociaux
- Caméras publiques

Pour accéder aux informations, tous les moyens légaux et éthiques sont bons à prendre !

### Shodan

Shodan est un moteur de recherche spécialement conçu pour découvrir des dispositifs et des systèmes connectés à Internet. Contrairement aux moteurs de recherche traditionnels qui indexent des sites web, Shodan se concentre sur la recherche d'appareils et d'infrastructures, tels que serveurs, routeurs, caméras de sécurité, imprimantes, dispositifs IoT (Internet des objets) et bien d'autres, qui sont connectés à Internet.

Voici quelques caractéristiques et utilisations courantes de Shodan :

1. **Exploration d'appareils connectés :** Shodan explore Internet en analysant les ports ouverts et les bannières (des informations textuelles transmises par les serveurs) pour identifier les dispositifs et les services qui sont accessibles en ligne. Cela permet aux chercheurs en sécurité, aux administrateurs système et à d'autres utilisateurs de découvrir des dispositifs vulnérables ou mal configurés.

2. **Recherche avancée :** Les utilisateurs de Shodan peuvent effectuer des recherches avancées en utilisant des filtres (dorks) pour affiner les résultats en fonction de critères tels que le pays, le système d'exploitation, le fournisseur de services, les mots-clés dans les bannières, etc. Cette fonctionnalité permet d'obtenir des informations précises sur des dispositifs spécifiques.

3. **Identification de vulnérabilités :** Shodan peut être utilisé pour identifier des dispositifs vulnérables à des attaques en recherchant des versions obsolètes de logiciels, des ports mal configurés ou d'autres indicateurs de sécurité faible. Cela peut aider les administrateurs système à renforcer leur sécurité.

4. **Suivi de l'Internet des objets :** En raison de la croissance rapide de l'Internet des objets, Shodan est devenu un outil important pour identifier les appareils IoT mal sécurisés. Les chercheurs en sécurité peuvent utiliser Shodan pour repérer des caméras de sécurité, des thermostats, des réfrigérateurs intelligents, etc., qui pourraient être vulnérables aux cyberattaques.

5. **Surveillance de la sécurité :** Les entreprises et les organisations utilisent parfois Shodan pour surveiller leur propre infrastructure et s'assurer que leurs dispositifs ne sont pas exposés de manière inappropriée sur Internet.

Il est important de noter que Shodan peut être utilisé à des fins légitimes, telles que l'amélioration de la sécurité, mais aussi à des fins malveillantes. Par conséquent, son utilisation doit être conforme aux lois et aux politiques de sécurité, et l'accès à certaines informations peut être restreint pour des raisons de confidentialité et de sécurité.

## Ressources

- [ozint.eu : apprendre l'OSINT par des défis](https://ozint.eu)
- [Osint FR communauté française d'osint](https://osintfr.com/fr/accueil/)
- [CTF d'Osint FR](https://ctf.challenge-osint.fr/)
- Open Source Intelligence Methods and Tools: A Practical Guide to Online Intelligence - Nihad A. Hassan, Rami Hijazi
