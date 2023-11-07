# Communication Série (Serial)

La communication série est un moyen courant de transfert de données entre des dispositifs électroniques. Vous pouvez interagir avec des périphériques série tels que des microcontrôleurs, des capteurs ou d'autres équipements en utilisant le module serial en python ou directement en utilisant minicom ou putty. Ce wiki abordera les principes de base de la communication série, en se concentrant sur le protocole UART.

## Le Protocole Serial et UART
UART (Universal Asynchronous Receiver/Transmitter)

UART est un protocole de communication série largement utilisé qui permet la transmission de données entre deux dispositifs en utilisant deux fils : un fil de données (TX - Transmit) et un fil de réception (RX - Receive). Le protocole UART est asynchrone, ce qui signifie qu'il n'y a pas d'horloge commune partagée entre les dispositifs. Au lieu de cela, les données sont transmises en fonction d'une vitesse de transmission ((baud rate)[https://fr.wikipedia.org/wiki/UART#Vitesse_de_transmission]) prédéfinie.

![Connexion UART RX TX](serial_rx_tx.png)

Le protocole UART utilise des trames de données pour structurer les informations transmises. Chaque trame de données comprend généralement les éléments suivants :

    Start bit : indique le début de la trame.
    Données : les octets de données à transmettre.
    Bits de parité (optionnels) : utilisés pour détecter les erreurs de transmission.
    Bits d'arrêt : indiquent la fin de la trame.

## Comment interagir avec en Utilisant Minicom

Minicom est un utilitaire de terminal qui vous permet de communiquer avec des dispositifs série depuis la ligne de commande. Voici comment utiliser Minicom pour interagir avec un périphérique série :

 ### Installez Minicom
Si Minicom n'est pas déjà installé sur votre système, vous pouvez l'installer en utilisant un gestionnaire de paquets (par exemple, apt-get sur les distributions basées sur Debian).

### Identifiez le port série
Vous devez connaître le nom du port série auquel est connecté votre périphérique. Vous pouvez utiliser la commande `dmesg | grep tty` pour lister les ports série disponibles.
En général sous Ubuntu les ports séries sont les suivants : `/dev/ttyUSB0` ; `/dev/ttyACM0`.

### Lancez Minicom
Utilisez la commande `minicom -b <baud_rate> -D <serial_device>` pour lancer Minicom en spécifiant la vitesse de transmission (`<baud_rate>`) et le périphérique série (`<serial_device>` ex : `/dev/ttyACM0`).

### Communiquez avec le périphérique
Une fois dans Minicom, vous pouvez envoyer et recevoir des données en utilisant le clavier de votre ordinateur. Pour quitter Minicom, vous pouvez utiliser la combinaison de touches Ctrl-A suivi de Z puis X.

## Comment interagir avec Python3

Python offre une bibliothèque native appelée serial pour la communication série. Voici comment interagir avec un périphérique série en utilisant Python 3 :

### Installez la bibliothèque pyserial
Vous pouvez installer la bibliothèque `pyserial` en utilisant pip avec la commande `pip install pyserial`.

### Importez la bibliothèque serial
Dans votre script Python, importez la bibliothèque serial en utilisant import serial.

### Configurez le port série
La classe Serial de la bibliothèque serial permet de configurer le port série en spécifiant le port, la vitesse de transmission et d'autres paramètres nécessaires.

    Lisez et écrivez des données : Vous pouvez utiliser les méthodes read() et write() de l'objet Serial pour lire et écrire des données depuis et vers le périphérique série.

Voici un exemple simple de code Python pour communiquer avec un périphérique série :

```python
#!/usr/bin/env python3
import serial

ser = serial.Serial('/dev/ttyUSB0', 9600)  # Exemple de configuration à 9600 bauds

ser.write(b'Hello, World!')  # Envoi de données
data = ser.read(12)  # Lecture de données
print(data)

ser.close()  # Fermeture du port série
```

Ce code se connecte à un port série, envoie "Hello, World!" et lit 12 octets de données depuis le périphérique série.

Bon flag !
