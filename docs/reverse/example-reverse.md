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

Ici on recupère la valeur que vous avez donné au programme :
![image](https://github.com/user-attachments/assets/f2655498-cfd1-4efd-bf4c-9cbc55297651)

Ici on passe l'input dans la fonction **sub_1230**, on peut en deviner que le retour de la fonction est un bouléan (0 ou 1), si 0 (donc faux) on affiche la suite de valeur dans **data_2030** sinon on affiche **"u won ! OwO\n"**.
![image](https://github.com/user-attachments/assets/7f098c4d-c5d9-4fa7-8fde-17cb6c22a113)

Il est très conseillé de renomer les différents éléments qui nous sont donné !
Je vais renommer **sub_1230** par **check_password**
                 **data_2030** par **loosing_output**
                 **buf** par **input**





