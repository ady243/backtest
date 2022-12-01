## Backend API

## Table of Contents

1. [General Info](#general-info)
2. [Prérequis](#prérequis)
3. [Installation](#installation)
4. [Documentation](#documentation)

## General Info

Le but de ce projet est de créer une mini api pour consulter des produits et des utilisateurs.


Le projet se décompose en deux parties:

- **Backend**: ce qui est fait en Node JS.
- **Frontend**: ce qui est fait en React JS.

Le backend est donc une API REST qui permet de gérer les données de notre blog.


---
## Prérequis

Vous devez avoir [Node JS](https://nodejs.org/en/) sur votre machine.

---
## Installation

📦 Il vous faut installer l'ensemble des dépendances avec `npm` en suivant la commande suivante :

```bash
npm install
```

---


### Configuration de l'application

#### Création du fichier `.env`

Vous pouvez copier le fichier `.env.example` et le renommer `.env` et remplacer les valeurs par défaut par vos propres valeurs.

> NB: Pensez à bien créer vos bases de données avant d'utiliser l'application.
> En mongoDB avec une table `users` et une table `products`

### Pour lancer les migrations

```bash
npm run migrate:up
```

### Pour vider la base de données et les migrations

```bash
npm run migrate:down
```

### ✅ Pour lancer le serveur

- En mode production

```bash
npm run start
```

- En mode développement

```bash
npm run dev
```


---

## Documentation

Pour consulter toute la documentation de l'API REST, il vous suffit de suivre le lien suivant : 
URL_API_REST + `/api-docs`.
Exemple : `http://localhost:4000/api-docs`
