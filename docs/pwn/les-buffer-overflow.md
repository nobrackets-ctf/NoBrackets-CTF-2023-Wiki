# Exploitation de binaire - Buffer Overflow

## Késako ?
Les buffers overflows (ou dépassement de tampon en français) sont un type d'attaque qui cible les binaires qui vont gérer des entrées utilisateurs. Le but est d'entrer un nombre conséquent de données pour dépasser la taille autorisée par le programme. 

Par exemple, un programme doit enregistrer le prénom d'un utilisateur. Le développeur prévoit 10 octets (unités de mémoire cf. les octets). Cependant si un utilisateur a un nom supérieur à 10 octets alors le binaire va crasher et on aura l'erreur: SEGFAULT ou Segmentation Fault. 

De là, nous pourrons détourner l'exécution du programme et faire des choses...😈

Si vous voulez voir une attaque complète, je vous conseille d'aller voir la vidéo dans les sources "Computerphile" (Attention il faut comprendre l'anglais).


## Glossaire
Voici un petit dictionnaire des mots/symboles qui peuvent revenir souvent dans des documentations.

**Executable Linked File (ELF)**: Programme exécutable mais pour Linux (Comme un .exe sous Windows).

**x86**: Architecture 32bits

**x86_64**: Architecture 64bits

**EIP/RIP**: Le pointeur d'instruction, c'est notre cible PRINCIPALE dans du pwn ! C'est un registre qui va diriger quelle instruction/fonction va être executée par notre programme.

**La stack (ou la pile)**: C'est l'endroit où sont stockées, les variables et les fonctions appelées par le programme. C'est là, qu'on va aller taper.

**La heap (ou le tas)**: C'est des blocs mémoires alloués dynamiquement. Il existe des attaques qui ciblent cette partie mais nous n'en traitont pas ici. 

**Shellcode**: Les shellcodes sont des petits bouts de code machine (assembleur) qui peuvent être injectés dans un programme pour en prendre le contrôle.

## Les outils
Bien sûr pour faire ça, nous avons des outils :


**GDB**: Le débugger de base pour comprendre le fonctionnement d'un programme ELF. (Vieux et moche) 

**PWNDBG**: Un débugger basé sur GDB mais beaucoup plus simple à utiliser et contenant pleins de scripts d'automatisation (à utiliser) 

**Pwntools**: Librairie python avec BEAUCOUP de fonctions très utiles pour du pwn. (Ouvrir des sessions SSH, TCP, construire des paylaods, etc...)

**Readelf**: readelf est un programme en ligne de commandes qui affiche des informations sur un ou plusieurs fichiers au format ELF. Les options contrôlent les informations particulières à afficher

**Objdump**: objdump est un programme en ligne de commandes permettant d'afficher diverses informations sur les ELF.

## Sources
- Computerphile (anglais): https://www.youtube.com/watch?v=1S0aBV-Waeo

- Introduction au pwn par Dvorhack (français) : https://youtu.be/JNSCPUq38BA?si=QmrxlIyo1NFB\_vMr

- Nasm\_re (français) : https://www.youtube.com/@nasmRE

- Série complète pour apprendre le pwn par LiveOverflow (anglais) : https://www.youtube.com/watch?v=iyAyN3GFM7A&list=PLhixgUqwRTjxglIswKp9mpkfPNfHkzyeN

- Gdb: https://www.gdbtutorial.com/tutorial/how-install-gdb

- Pwntools: https://docs.pwntools.com/

- Readelf: https://man7.org/linux/man-pages/man1/readelf.1.html

- Objdump: https://sourceware.org/binutils/docs/binutils/objdump.html

- Les octets: https://fr.vikidia.org/wiki/Octet
