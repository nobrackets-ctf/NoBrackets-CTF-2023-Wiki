# Introduction à la programmation

La programmation est l'art de créer des instructions pour ordinateurs et autres dispositifs pour exécuter des tâches spécifiques. Elle consiste à écrire des séquences d'instructions, généralement sous forme de code informatique, permettant de résoudre des problèmes, réaliser des tâches ou développer des applications logicielles.

Les langages de programmation sont utilisés pour écrire ces instructions, et chaque langage a sa propre syntaxe et ses règles spécifiques. Les programmeurs utilisent ces langages pour concevoir des programmes, des sites web, des applications, des jeux et diverses solutions logicielles. 

Pour savoir programmer il faut maîtriser certains concepts : algorithmique, structures de données, logique, principes mathématiques.

## Débuter en programmation

Pour apprendre les bases, il faut commencer par choisir un langage. **Python** est conseillé pour les débutants : il est simple et polyvalent.

Il vous faudra également un éditeur de code, ou *IDE*.
On peut citer : 
- [Notepad++](https://notepad-plus-plus.org/)  : la base de la base(Windows uniquement)
- [Sublime Text](https://www.sublimetext.com/) : épuré, ne propose pas de fonctionnalités avancées.
- [Visual Studio](https://code.visualstudio.com/) : outil très complet qui propose beaucoup de fonctionnalités. 

Il en existe un grand nombre, à vous d'explorer et de trouver celui qui vous convient.
Pour débuter, Sublime Text est une bonne piste.

Une fois que vous êtes équipés, de très nombreux tutoriels pour débutants sont disponibles sur Internet.
Ces sites français méritent d'être cités :
- [OpenClassrooms, anciennement le Site du Zéro](https://openclassrooms.com/fr/)
- [Zeste de Savoir](https://zestedesavoir.com/)

## La programmation en CTF

Les challenges de programmation en CTF sont souvent donnés sous forme de connexion TCP : il faut récupérer des données, les traiter ou effectuer des calculs, puis renvoyer d'autres données en réponse.

Pour résoudre ces challenges commencer par tester la connexion TCP avec `netcat` et examiner les données reçues peut être une bonne idée.
Ensuite, il ne reste plus qu'à écrire un programme prêt à recevoir ces données et à renvoyer les bonnes en retour.
Le langage **python** et la libraire **pwntools** sont très utilisés, mais libre à vous de choisir la solution qui vous convient.

Un exemple de challenge est disponible sur le wiki.

## Ressources

- Liste des langages les plus utilisés : https://www.blogdumoderateur.com/classement-langages-informatiques-populaires-tiobe-mai-2023/
- Cours de python débutant : https://openclassrooms.com/fr/courses/7168871-apprenez-les-bases-du-langage-python
