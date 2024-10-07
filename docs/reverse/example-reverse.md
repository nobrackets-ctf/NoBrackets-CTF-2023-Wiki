# Exemple d'un chall de Reverse

## Enoncé :

Mince j'ai oublier mon mot de passe, aidez moi à le retrouver.

Avec un fichier executable.

## Résolution : 

Donc nous avons un simple fichier exectutable, la première étape pourrait être de regarder quel type de fichier nous avons affaire :

```bash
└─$ file example
example: ELF 64-bit LSB pie executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, for GNU/Linux 3.2.0, not stripped
```

On voit que c'est ELF 64 bit et que le fichier est "not stripped", c'est-à-dire que les informations de debbug n'ont pas été enlevé.

On peut commencer par passer notre fichier dans un desassembler, personnellement pour la suite de cet exemple, je vais utiliser la version cloud de [binary ninja](https://cloud.binary.ninja/), mais d'autre existe comme ghidra, ida, etc.

Si on regarde le main, on se retrouve avec ça :
![image](https://github.com/user-attachments/assets/dc40a76f-e84d-4990-a50c-43500cbdfdde)
