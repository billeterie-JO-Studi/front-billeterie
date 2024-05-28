# Application front billeterie

cette application est le front de l'application billeterie

## Installation

### Méthode manuel

**Prérequis** : [NodeJs](https://nodejs.org/en/)

1. crée le fichier `.env` en utilisant le fichier `.env.example`
2. modifier la variable de l'adresse API dans le .env pour qui correspond à l'adresse API réel.
3. installer les dépendance: `npm install`
4. lancer le build avec la commande `npm run build`
5. recupéré le dossier dist et faire le service par un serveur web ( Nginx, apache )

**Remarque**: configurer votre serveur web pour qui charge toujours le fichier index.html ( _SPA_ )

### installation Avec Docker

**Prérequie** : [Docker engine](https://docs.docker.com/engine/install/)

1. lancer la commande `docker build --build-arg API_URL="https://api.example.com" -t ma-billeterie .`
2. pour lancer l'image : `docker run -dp 80:8080 ma-billeterie`

**remarque**: changer par la bonne adress api dans l'argument API_URL.
API_URL ne peut pas etre changé après le build. si besoin de changer, rebuilder une nouvelle image.

l'image expose le port 8080 pour le serveur web.
