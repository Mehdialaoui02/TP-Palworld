# TP-Palworld

📋 Objectifs
Conception d'une architecture de microservices : Créer une plateforme modulaire et extensible.
Définition d'une API RESTful : Répondre aux besoins de l'interface homme-machine (IHM) (IHM non incluse dans le projet).
Implémentation de services backend : Assurer la prise en charge des fonctionnalités décrites.
Conteneurisation de l'application : Fournir une solution exécutable avec docker-compose.

🛠️ Fonctionnalités Principales
Pour les joueurs
Gestion de compte :
Créer un compte et se connecter.
Modifier les informations personnelles.

Gestion des créatures :
Consulter les créatures disponibles dans le Store.
Acheter ou vendre des créatures pour composer une équipe.

Participation à des matchs :

Créer ou rejoindre un match.
Participer à un match via des manches successives.
Consulter les détails des matchs et des manches.
Recevoir des notifications de badges.

Clubs :

Créer et gérer des clubs.
Inviter ou rejoindre un club.

Interaction avec les autres joueurs :

Consulter les profils d'autres joueurs.
Envoyer et recevoir des messages.

Pour les administrateurs :

Gérer les joueurs, matchs et badges.
Accéder à des statistiques avancées (matchs, créatures, victoires, etc.).
Modérer la communauté en bannissant des joueurs.

Pour les reporters
Extraire et consulter les statistiques de la plateforme.

⚙️ Besoins Techniques
Authentification et Sécurité

Accès restreint aux API (sauf pour l'inscription et le login).
Proxy/Gateway pour accéder aux microservices.

Architecture

Modularité : Adaptation à d'autres types de jeux et règles.
Extensibilité : Prévoir des extensions (IA, nouveaux modes de jeu).

Contraintes

Limitation à 3 matchs simultanés par joueur.
Gestion des accès pour les détails des manches (joueurs vs administrateurs).
Génération de statistiques sans surcharger les microservices.

🚀 Livrables

Document d’architecture :
    Contient la description des microservices, leur interaction, et les choix techniques.
Documentation de l’API :
    Swagger ou OpenAPI pour décrire les endpoints, méthodes et schémas.
Implémentation :
    Code hébergé dans un repository GitHub.
Conteneurisation :
    Application packagée et exécutable avec docker-compose.

💡 Suggestions d'implémentation

PokeAPI : Inspirez-vous des ressources de cette API pour modéliser les créatures.
Notifications Push : Étudiez les mécanismes de notifications pour les badges et les invitations.

🧰 Pré-requis Techniques

Langages : TypeScript.
Outils :
    Docker, Docker Compose.
    Base de données relationnelle (PostgreSQL) ou NoSQL (MongoDB).

📁 Structure du Projet

/docs : Documentation (architecture, API).
/services : Code source des microservices.
    auth-service/ : Gestion des utilisateurs et authentification.
    store-service/ : Gestion des créatures et gadgets.
    match-service/ : Gestion des matchs et manches.
    notification-service/ : Gestion des notifications.
    statistics-service/ : Calcul des statistiques.
/docker : Fichiers Docker et configuration docker-compose.yml.

📝 Instructions d'utilisation

Clonez le repository GitHub 

Lancez l'application via Docker Compose :

docker-compose up

Accédez à l'API à l'adresse : http://localhost:<port>.

Pour toute question ou amélioration, n'hésitez pas à contribuer au projet ou ouvrir une issue sur GitHub. 🎮