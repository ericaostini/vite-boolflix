# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

# Boolflix 
Creazione prototipo (clone) sito a Netlifx chiamato Boolflix, attraverso l'uso del framework Vue.js

![homepage](/public/images/chrome-capture%20copia%202.png)

## Project Setup
### Creo progetto

- apro la cartella degli esercizi in vs  code
- digitare:
  ```sh
    npm create vue@latest
  ``` 
  alla prima domanda sul nome del progetto mettere il nome della repo

  proseguire rspondendo sempre no

  mi porto dentro la cartella creata:
  ```sh
        cd  nome repo
        code . -r
    ```
- digitare:
    ```sh
        npm install
    ```
- per controllare che tutto funziona far partire il server
    ```sh
        npm run dev
    ```
- per arrestare il server:
```sh
        ctrl + c
``` 


### Pulizia dello scaffolding

- Apro App.vue e cancello tutto e scrivo il mio codice in modalità 'options'
- Apro la cartella components e la svuoto
- Apro la cartella assets svuoto tutto tranne main.css
- Cancello tutto il contenuto del main.css e lo rinomino in main.scss
- creo in assets le cartelle images e styles
- sposto dentro la cartella styles main.scss
- aggiorno il path a main.scss in main.js
- aggiungo eventuale cartella immagini a public
- aggiungo dentro la cartella styles una cartella partials per i file partial scss (es. varibili, animazioni, mixins, ecc) 


### Installare dipendenze

```sh
        npm install -D sass
``` 

```sh
        npm install bootstrap axios  @fortawesome/fontawesome-free
``` 

```sh
        npm install vue3-carousel
``` 

- importo bootstrap dentro main.scss @import 'bootstrap/scss/bootstrap';
- importo webfonts da cartella node_modules per utilizare font awesone, nella cartella assets
- importo vue3-carousel da cartella node_modules per utilizzare carosello, nella cartella assets. Importo componenti carosello in App.vue.
```javascript
        import { Carousel, Navigation, Slide } from './assets/vue3-carousel';
``` 

## Milestone 1 
*Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film o di una serie tv. Possiamo, cliccando il  bottone, cercare sull’API tutti i film e serie tv che contengono ciò che ha scritto l’utente.
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato:*
- *Titolo*
- *Titolo Originale*
- *Lingua*
- *Voto*

Creo layout base con serchbar in HeaderComponent 
Chiamata API tramite funzione e $emit che passa la funziona da componente figlio (HeaderComponent) a componente genitore (App.vue)
Display card ricercate con componente riutilizzato PosterComponent

## Milestone 2
*Trasformiamo la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente , gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API.*

## Milestone 3
*Aggiungiamo la copertina del film o della serie al nostro elenco.*
*Prendiamo quindi l’URL base delle immagini: https://image.tmdb.org/t/p/ per poi aggiungere la dimensione che vogliamo generare (w185) per poi aggiungere la parte finale dell’URL passata dall’API.*

*Trasformiamo poi il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da permetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti vuote.*

## Milestone 4
*Andando con il mouse sopra una card (on hover), appaiono le informazioni aggiuntive già prese nei punti precedenti più la overview*

## Milestone 6(opzionale)
*Creare una lista di generi richiedendo quelli disponibili all'API e creare dei filtri con i generi tv e movie per mostrare/nascondere le schede ottenute con la ricerca.*

Utilizzo array già creati di getPopularFilms e getPopularSeries
Lista generi con chiamata API in MainComponent





