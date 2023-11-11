# Web

La catégorie Web en CTF se concentre sur la sécurité des applications web et la découverte de vulnérabilités dans ces applications. La catégorie peut inclure une variété de défis visant la recherche de failles de sécurité pour obtenir des informations ou accéder à des ressources protégées. Voici quelques-unes des attaques les plus couramment rencontrées dans cette catégorie, ainsi que des ressources associées pour approfondir chaque sujet.

1. **Injection SQL:**
   - **Description:** L'injection SQL est une attaque dans laquelle un attaquant insère du code SQL malveillant dans une requête SQL. Cela peut permettre à l'attaquant de manipuler la base de données, obtenir des informations sensibles, voire prendre le contrôle du système.
   - **Ressources:**
     - [PortSwigger - SQL injection](https://portswigger.net/web-security/sql-injection)   
     - [OWASP - SQL Injection](https://owasp.org/www-community/attacks/SQL_Injection)

2. **Cross-Site Scripting (XSS):**
   - **Description:** XSS permet à un attaquant d'injecter du code exécutable (généralement JavaScript) dans une page web, qui est ensuite exécuté par le navigateur des utilisateurs.
   - **Ressources:**
     - [PortSwigger - Cross-site scripting
 (XSS)](https://portswigger.net/web-security/cross-site-scripting)   
     - [OWASP - XSS](https://owasp.org/www-community/attacks/xss/)


3. **Cross-Site Request Forgery (CSRF):**
   - **Description:** CSRF exploite la confiance que le site a envers l'utilisateur en forçant l'utilisateur à effectuer des actions non voulues sans son consentement.
   - **Ressources:**
     - [PortSwigger - Cross-site request forgery (CSRF)](https://portswigger.net/web-security/csrf)
     - [OWASP CSRF](https://owasp.org/www-community/attacks/csrf)

4. **Command Injection:**
   - **Description:** Cette attaque consiste à injecter des commandes système malveillantes dans une application, souvent en exploitant les entrées utilisateur mal filtrées.
   - **Ressources:**
     - [PortSwigger - OS command injection](https://portswigger.net/web-security/os-command-injection)

5. **Path Traversal (LFI/RFI):**
   - **Description:** L'attaque de traversée de chemin permet à un attaquant d'accéder à des fichiers auxquels il n'est pas censé avoir accès en manipulant les chemins d'accès fournis par l'application.
   - **Ressources:**
     - [PortSwigger - Path Traversal](https://portswigger.net/web-security/file-path-traversal)

6. **Insecure Direct Object References (IDOR):**
   - **Description:** IDOR se produit lorsque l'accès à des objets non autorisés est possible en manipulant les références directes aux objets.
   - **Ressources:**
     - [PortSwigger - Insecure direct object references (IDOR)](https://portswigger.net/web-security/access-control/idor)

7. **Server-Side Request Forgery (SSRF):**
   - **Description:** L'attaquant peut influencer le serveur pour effectuer des requêtes à des ressources internes ou externes non autorisées.
   - **Ressources:**
     - [PortSwigger - Server-side request forgery (SSRF)](https://portswigger.net/web-security/ssrf)

Dans la majeure partie des ressources externes ci-dessus, vous aurez remarqué que les liens pointent vers [PortSwigger](https://portswigger.net/web-security/all-topics). En effet, leur section "Académie" est excellente pour débuter sur le sujet, qu'il s'agisse d'attaque novice ou très avancée.