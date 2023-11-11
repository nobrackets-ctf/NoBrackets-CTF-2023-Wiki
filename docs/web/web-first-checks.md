# Introduction aux Premières Étapes en CTF Web

Lorsque vous abordez une épreuve web, les premières étapes sont cruciales pour comprendre la structure de la page, effectuer une prise d'informations et identifier d'éventuelles vulnérabilités. Voici quelques astuces et techniques pour vous aider à démarrer :

## 1. **Examiner le Code Source (Ctrl+U ou clic droit -> Afficher le code source) :**
   - Le code source de la page web peut contenir des commentaires, des indices ou même des informations sensibles laissées accidentellement par les développeurs.
   - Recherchez des références à des fichiers JavaScript, des commentaires intrigants, ou des chaînes qui pourraient être utiles pour la suite.

## 2. **Explorer le fichier robots.txt :**
   - Ajoutez "/robots.txt" à l'URL de la page pour accéder au fichier robots.txt qui spécifie les zones de l'application que les robots d'indexation ne devraient pas explorer.
   - Parfois, des répertoires ou des chemins spécifiques sont mentionnés dans le fichier robots.txt, ce qui peut conduire à des ressources intéressantes.

## 3. **Ouvrir la Console du Navigateur (F12 ou clic droit -> Inspecter) :**
   - La console du navigateur est un outil puissant pour déboguer et inspecter les éléments d'une page web.
   - Consultez la console pour les erreurs JavaScript, les avertissements, et exécutez des commandes JavaScript pour interagir dynamiquement avec la page.

## 4. **Observer le Trafic Réseau (Onglet "Network" dans l'Inspecteur) :**
   - En observant le trafic réseau, vous pouvez repérer des requêtes HTTP/S sortantes. Ces requêtes peuvent révéler des API, des appels backend, ou des informations utiles comme les **en-têtes/headers** des requêtes.
   - Identifiez les requêtes suspectes ou celles qui renvoient des données intéressantes.

## 5. **Analyser les Cookies (Onglet "Application" dans l'Inspecteur) :**
Les cookies sont de petits morceaux de données stockés par le navigateur d'un utilisateur sur son appareil après avoir visité un site web. Ces fragments d'information sont cruciaux pour de nombreuses fonctionnalités web tel que le maintiens d'une session après connexion.
   - Les cookies stockent souvent des informations importantes. Examinez les cookies pour voir s'il y a des données qui pourraient être exploitées pour des attaques, telles que l'authentification contournée.

## 6. **Chercher des éléments Cachés (clic droit -> Inspecter) :**
   - Certains éléments peuvent être masqués ou rendus invisibles sur la page. Utilisez l'inspecteur pour rechercher des éléments cachés, des divs avec des classes spécifiques, ou des commentaires HTML dissimulés.
