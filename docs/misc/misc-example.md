# Exemple d'un challenge de Misc

## T'es pas tout 9 : énoncé 

J'ai reçu un message bizarre : il semble avoir été composé sur un appareil ancien. Ça me rappelle quelque chose dont m'ont parlé mes parents...
`33 99 33 6 7 555 33 {6 444 7777 222 7777 88 66 3 33 777 777 8 33 3}`

Format du flag : `exemple{le_capitaine_jack_sparrow}`

## Résolution

Le message est composé de chiffres de 1 à 9, groupés par un, deux, trois ou quatre.
De plus, on devine que c'est un flag grâce aux crochets. 
Ici, important de bien relire le nom du challenge (souvent un bon indice !) : *T'es pas tout 9* 
Le 9 écrit en caractère numérique interpelle : avec le "t'es", ça évoque la saisie T9 des vieux téléphones : une touche, par exemple la touche 1, présente les lettres a, b et c. Presser la la touche une fois écrit la lettre a, deux fois la lettre b, etc.

Pour déchiffrer le message, on peut sortir son vieux nokia d'un tiroir, ou alors chercher sur internet : on tombe sur dcode, un site très utile : https://www.dcode.fr/multitap-abc-cipher

On entre le message, et voilà notre flag : `EXEMPLEMISCISUNDERRATED`

En passant en minuscule comme dans le format du flag, et en replaçant les crochets, ça donne : `exemple{misc_is_underrated}`