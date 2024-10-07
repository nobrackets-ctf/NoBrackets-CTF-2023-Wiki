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

On peut commencer par tout simplement executer le binaire et voir ce que ça fait :

```bash
└─$ ./example
wiww u find my passwowd ? UwU
AAAAAAAAAAaaaaaaaaaa
u wost ! >w<
```
il nous demande d'entrer un mot de passe, on rentre un mdp au hazard et le programme s'arrête après nous avoir dis que l'on avait tort.
Bien sûr on ne va pas chercher à brute force le mot de passe, cela prendrait **beaucouuuuup** trop de temps.


Passons d'abord notre fichier dans un desassembler, personnellement pour la suite de cet exemple, je vais utiliser la version cloud de [binary ninja](https://cloud.binary.ninja/), mais d'autre existe comme ghidra, ida, etc.

Si on regarde le "**main**", on se retrouve avec ça :

![image](https://github.com/user-attachments/assets/dc40a76f-e84d-4990-a50c-43500cbdfdde)

Ici on recupère la valeur que vous avez donné au programme :

![image](https://github.com/user-attachments/assets/f2655498-cfd1-4efd-bf4c-9cbc55297651)

Ici on passe l'input dans la fonction **sub_1230**, on peut en deviner que le retour de la fonction est un bouléan (0 ou 1), si 0 (donc faux) on affiche la suite de valeur dans **data_2030** sinon on affiche **"u won ! OwO\n"**.

![image](https://github.com/user-attachments/assets/7f098c4d-c5d9-4fa7-8fde-17cb6c22a113)

Il est très conseillé de renomer les différents éléments qui nous sont donné !
Je vais donc renommer **sub_1230** par **check_password**, **data_2030** par **loosing_output** et **buf** par **input**

Allons voir à quoi ressemble check_password :

On voit que la fonction prend un String :

![image](https://github.com/user-attachments/assets/ff5fe498-1de6-4185-958e-683c1eecd707)

et qu'elle retourne un booléan, si **increment** est égale à 22 (0x16) :

![image](https://github.com/user-attachments/assets/88dda9df-71a4-4e5f-bcc6-083f4db8b506)

et surtout elle opère une suite d'opérations et de comparaison sur les différents caractère de l'argument donné et incrément l'incrément de 1 si la comparaison est vrai :

![image](https://github.com/user-attachments/assets/7c5d06a1-51c5-4aea-848a-e6bb9027d137)

Il y a 22 suite d'opération et de comparaison comme celle ci en tout, un detail près est que le type d'opération change.
Il y a 3 type d'opération, soit un xor (^), soit un plus (+) et soit un (-)

Comme nous avons le résultat de chaque opération ainsi que l'un des deux opérande, on peut retrouver le mot de passe initial !

Soit a un des caractère de notre mdp, b l'opérande donné: - si l'opération est un xor a = b ^ résultat
                                                          - si l'opération est un plus a = résultat - b
                                                          - si l'opération est un moins a = résultat + b

On peut écrire un simple script python pour retrouver le mdp :

```python
opResult = [0x39,0x99,0x79,0xf2,0xb,0xde,0xc7,0xff,0,0x6e,0xb,0xaa,0x60,0x21,0xeb,9,0xa3,0x58,0xc9,0x41,0x85,0x89]
b = [0xf,0xab,0x32,0xc0,0x70,0x66,0xff,0x37,0x5f,0xa,0x56,0x41,0x13,0x54,0x80,0x60,0x44,0x3c,0x64,0x32,0xf0,0xc]
op = "-^+^-+^--^-+^-^-+^+-^+"
print(len(op)==len(opResult))

def soluce(opResult,b,op):
    code = ""
    for i in range(len(op)):
        if op[i] == "^":
            code+=chr(b[i]^opResult[i])
        if op[i] == "+":
            code+=chr(opResult[i]-b[i])
        if op[i] == "-":
            code+=chr(opResult[i]+b[i])
    return code

print(soluce(opResult,b,op))
```

le flag est **H2G2{x8Ķ_daisuki_desu}**

On peut le vérifier :

```bash
└─$ ./example
wiww u find my passwowd ? UwU
H2G2{x8Ķ_daisuki_desu}
u won ! OwO
```



