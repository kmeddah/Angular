# Formation Angular, maîtriser le framework Front-End de Google - J02


> Information : un dépôt git a été créé sur github.com.


## Remarque :

Pour les services, l’annotation est ‘@Injectable’


##  Installation :

Nous allons un certain nombre de plugin :

Angular Essentials (pour l’Angular Langage Service pour tenter de nous fournir de la complétion JavaScript dans notre HTML)


Ajout du composant screen-home dans le AppComponent :

```html
<app-screen-home></app-screen-home>
```

> Ne pas oublier le app en préfixe de l’appel du composant screen-home. En effet, le module screen a été importé dans AppModule.

Dans notre screen-chat.component.html, on embarque du coup nos component comme ceci :

```html
<app-sport-banner></app-sport-banner>
<app-shop-button></app-shop-button>
<app-user-list></app-user-list>
<app-chat-topic></app-chat-topic>
<app-chat></app-chat>
```


Je suis la cible du routing, va nous permettre d’administrer la navigation entre nos écrans.

Pour nos tests de routage, on ajoute dans notre app.component.html :
```html
<router-outlet></router-outlet>
```


**Dans le fichier app-routing.module.ts** :
```ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenHomeComponent } from './screen/screen-home/screen-home.component';
import { ScreenChatComponent } from './screen/screen-chat/screen-chat.component';
import { ScreenShopComponent } from './screen/screen-shop/screen-shop.component';

const routes: Routes = [
  {
    path: 'home',
    component:ScreenHomeComponent
  },
  {
    path: 'chat',
    component: ScreenChatComponent
  },
  {
    path: 'shop',
    component: ScreenShopComponent
  }
];
```


btn-block : pour qu’un bouton occupe l’ensemble de l’espace.

On peut utiliser une card pour créer un bloc de connection.

[ ] : pour directive d’attribut
() : événement

Donc [(ngModel)] écoute et met à jour les données.

Dans un formulaire, on doit mettre un name sur les input.


Autre raccourci:

div.row*2>div.col*2
height: 60vh: permet aux colonnes d’occuper une certaine hauteur.
Et le display: block; permet aux éléments d’occuper un maximum d’espace.

Pour réécrire une propriété CSS, on peut simplement écrire le nom de la classe CSS même et si elle appartient à Bootstrap, elle sera mis à jour.

Pour écrire des règles globales côté CSS, il faut modifier le fichier style.css à la racine. Sinon, les règles CSS sont de manière générale locale.


Quatre manières de communiquer sans Angular.


Projection de contenu :

ng-content : C’est une directive qui permet la projection de contenu.
Son équivalent en Angular JS  est ng-transclude.

Remplacement du :

<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">{{ title }}</a>
</nav>

par :

<app-shared-navbar>{{ title }}</app-shared-navbar>


Le selector de ng-content est un sélecteur CSS.
