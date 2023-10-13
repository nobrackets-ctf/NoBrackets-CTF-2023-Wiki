# Exemple d'un challenge de Programmation

## la Question : énoncé 
Quelle est la réponse à la grande question sur la vie, l’univers et le reste ? Répondez en toutes lettres.

`nc question.nobracketsctf.fr 1212`
## Résolution

Cette forme de challenge est très fréquente en catégorie programmation : il faut écrire un script pour communiquer en TCP avec un serveur.
Vous allez voir, c'est très simple.

Commençons par nous connecter directement au challenge, sans script. On peut faire ça en utilisant l'outil netcat, en précisant le nom de domaine et le port : 

```bash
$nc question.nobracketsctf.fr 1212
Quelle est la réponse à la grande question sur la vie, l’univers et le reste ? Répondez en toutes lettres.
>>> 
Temps écoulé. Trop lent !
```

Le serveur nous demande la réponse à la Question : après une petite recherche internet, on trouve que c'est une référence au roman "Le guide du voyageur galactique" et que la réponse est 42. Il faut donc répondre **quarante-deux**, en toutes lettres.

Problème : le serveur ne nous donne pas le temps d'écrire la réponse. Il faut donc passer par un script pour répondre rapidement ! 

Un langage de programmation simple à utiliser et polyvalent est **python**.
Pour l'installer : https://wiki.python.org/moin/BeginnersGuide/Download.

Nous aurons également besoin de la libraire python [pwntools](https://docs.pwntools.com/en/stable/), une librairie qui permet la communication avec un exécutable ou un serveur.

Pour l'installer : `pip3 install pwntools`

Et voilà un script qui résoud le challenge :
```python
from pwn import * # Import de la librairie pwntools

# hote et port auxquels se connecter
HOST = "question.nobracketsctf.fr"
PORT = 1212
REPONSE = "quarante-deux"

# Initialisation de la connexion
connexion = remote(HOST,PORT)

print(connexion.recvuntil(">>>").decode("utf-8")) # Attendre qu'on nous demande d'envoyer la réponse
print("[+] Sending, "+ REPONSE) # Envoyer la réponse

connexion.sendline(REPONSE.encode("utf-8"))  # Envoyer la réponse
connexion.interactive()                     # Laisser les messages suivant dérouler sans rien faire
```

Il ne reste plus qu'à écrire ça dans un fichier **solve.py** et à l'exécuter avec python : 

```bash
$ python3 solve.py 
[+] Opening connection to question.nobracketsctf.fr on port 1212: Done
solve.py:11: BytesWarning: Text is not bytes; assuming ASCII, no guarantees. See https://docs.pwntools.com/#bytes
  print(connexion.recvuntil(">>>").decode("utf-8")) # Attendre qu'on nous demande d'envoyer la réponse
Quelle est la réponse à la grande question sur la vie, l’univers et le reste ? Répondez en toutes lettres.
>>>
[+] Sending  quarante-deux
[*] Switching to interactive mode
 Bien joué, jeune auto stoppeur :  exemple{N3V3r_F0r637_Y0Ur_70W31}
[*] Got EOF while reading in interactive
```

Et voilà notre flag : `exemple{N3V3r_F0r637_Y0Ur_70W31}`