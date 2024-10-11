---
sidebar_position: 2
---

# Déployer un challenge

Certains challenges ont besoin d'être lancés dans une instance individuelle pour éviter qu'un autre joueur ne détruise le challenge et vous empêche de le résoudre.

Si un challenge nécessite de lancer une instance, une adresse en `https://deploy.nobrackets.fr/` est présente dans le challenge, par exemple :

![alt text](image-3.png)

Si vous accédez à la plateforme de déploiement pour la première fois, vous verrez ce message :

![alt text](image-7.png)

En effet, il est nécessaire de connecter la plateforme de déploiement à votre compte sur la plateforme de CTF. Vous pouvez cliquer sur le lien pour générer un token. Il est également possible d'aller dans vos paramètres sur https://ctf.nobrackets.fr/ dans le menu "Access Tokens".

![alt text](image-8.png)

Choisir une date d'expiration après le CTF (par exemple le 31/10/2024), laisser la description vide et cliquer sur "Générer".

Votre clé apparaît. Vous pouvez utiliser l'icône à droite pour le copier. Attention, elle ne vous sera jamais montrée une 2e fois ! Si perdez cette clé, il est tout à fait possible d'en faire une nouvelle.

Retourner sur https://deploy.nobrackets.fr/ et entrez la clé que vous venez de copier.

Une fois le token rentré, la page ressemble à ça :

![alt text](image-9.png)

Vous pouvez sélectionner le nom du challenge avec le menu déroulant "Select a challenge". Ensuite, cliquer sur "Run instance".

Vous retrouverez la liste des instances déployées par les membres de votre équipe :

![alt text](image-10.png)

Dans mon exemple, le challenge est déployé à l'adresse node1.nobrackets.fr, sur le port 38396. Comme le challenge présente un site web, je dois résoudre le challenge en visitant l'URL `http://node1.nobrackets.fr:38396/`. Pour les autres types de challenge, il peut être nécessaire de se connecter à l'adresse et au port en utilisant netcat ou Python.
