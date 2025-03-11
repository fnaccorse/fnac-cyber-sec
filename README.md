# 🛡️ FNAC-CORSE — Exercice de Sensibilisation à la Cybersécurité

Bienvenue dans ce projet d’entraînement à la cybersécurité. Il s'agit d'une **simulation pédagogique** visant à sensibiliser les utilisateurs aux risques liés au phishing, au vol d'identifiants et à la vigilance numérique.

---

## 🎯 Objectif du projet

- Piéger les utilisateurs dans un environnement **contrôlé et sans danger**
- Déclencher une **alerte simulée** lorsqu’un utilisateur clique sur le bouton "Se connecter"
- **Enregistrer anonymement** :
  - le nombre de **clics**
  - le nombre de **visites**
  - la **source de la visite** (QR code, lien direct, email...)
  - le **navigateur** utilisé
  - le **type d’appareil** (mobile / desktop)

---

## 🌐 Technologies utilisées

| Élément           | Technologie                          |
|------------------|--------------------------------------|
| 🔤 Page web       | HTML, CSS, JS                        |
| ☁️ Hébergement     | GitHub Pages                         |
| ⚙️ Backend Serverless | Netlify Functions                    |
| 🧐 Base de données | MongoDB Atlas                        |

---

## 🧹 Fonctionnement

1. L’utilisateur accède à la page HTML (par QR code ou autre)
2. Une requête `POST` est envoyée à une **fonction Netlify**
3. Cette fonction enregistre les données dans **MongoDB Atlas**
4. Si l’utilisateur clique sur “Se connecter”, une **alerte pédagogique** s’affiche
5. Une deuxième requête `POST` est envoyée pour enregistrer ce clic

---

## 📊 Données enregistrées

Exemple de document stocké :

```json
{
  "type": "click",
  "timestamp": "2025-03-11T17:22:51.123Z",
  "source": "qr",
  "browser": "Chrome",
  "device": "desktop",
  "userAgent": "Mozilla/5.0 ..."
}
```

---

## 🧐 Objectif pédagogique

> *"Ce n’est pas parce qu’un site semble officiel qu’il l’est vraiment."*

Cette fausse page reprend les codes visuels d’un service réel, dans le but de provoquer un **réflexe de prudence** chez l'utilisateur. Aucune donnée réelle n’est collectée.

---

## 🚀 Déploiement

- **Frontend** : déployé sur GitHub Pages
- **Fonctions serverless** : hébergées sur Netlify
- **Base de données** : MongoDB Atlas

---

## ✍️ Auteurs
**L'équipe de Fnac-corse :**
- **Nicolas** – gestion du frontend, intégration backend, MongoDB
- **Badre** – Aide au devellopement, Traque des cibles, Scraping, Gestion des comptes de hacking
- **Dorian** – Affiche, Gestion de la DA, Aide au dévellopement

---

## 🔐 Mentions légales

⚠️ Ce projet est **strictement éducatif** et ne doit en aucun cas être utilisé pour tromper ou collecter des données à des fins malveillantes.  
Il respecte les principes de l’**éthique informatique** et de la **sensibilisation positive**.

---

## 🎭 Attrape nous si tu peux

