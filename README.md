# Tech blog with Hacker News API

Questo progetto è stato realizzato con l'utilizzo di:

> <img src="https://img.icons8.com/color/24/null/html-5--v1.png"/> HTML

> <img src="https://img.icons8.com/color/24/null/sass.png"/> SCSS

> <img src="https://img.icons8.com/color/24/null/javascript--v1.png"/> JavaScript

> <img src="https://img.icons8.com/color/24/null/webpack.png"/> WebPack 5

Le librerie esterne utilizzate per questo progetto sono:

> Lodash
 
> Axios

![GitHub last commit](https://img.shields.io/github/last-commit/dusan39/Rajkovic-Dusan-JavaScript-Advanced)

## Cosa troverete in questo file

- Link depoly dell'app con netlify
- Funzionalità
- Struttura del progetto
- Logiche del progetto

## Link deploy dell'app con netlify

Link: [https://tech-news-test.netlify.app](https://tech-news-dr.netlify.app/)

## Funzionalità 

Questo progetto si bassa su delle chiamate API del servizio di Hacker News che fornisce una lista di 500 ID e tamite quelli con una specifica chiamata API ti permette di estrapolare i dettagli della notizia che corrisponde allo specifico ID, in questo caso viene mostrato il titolo della notizia, quando è stata scritta e il link se presente della notizia, perchè in alcuni casi non si tratta di notizie ma di commenti, storie, lavori e sondaggi.
Inizialmente la pagina chiamerà l'API per ottenre gli id delle prime 10 notizie più recenti, in caso queste non fossero effettivamente delle notizie ma altri tipi di dati allora quell'id viene saltato e non viene visualizzato in colonna e in fondo alle notizie iniziali si troverà un tasto 'Load more' che a sua volta caricherà altre notizie sino ad arrivare alla fine della lista fornita.

## Struttura del progetto

<img width="349" alt="Screenshot 2023-03-05 alle 14 32 31" src="https://user-images.githubusercontent.com/114413164/222963836-3f6f799d-b348-4afa-ae73-86559629a95d.png">

Il progetto è suddiviso principalmente in:

> index.html = qua abbiamo la struttura della pagina ma il grosso degli elementi vengono creati dinamicamente tramite js.

> createHTML.js = qua abbiamo due funzioni per creare gli elementi html tramite una funzione passandogli i parametri necessari e tutti gli elementi html creati tramite queste due funzioni.

> index.js = in questo file abbiamo tutte le funzioni che permettono il funzionamento dell'applicazione.

> webpack.config.js = è il file di configurazione di webpack 5 che mi ha permesso di implementare i vari plugin che mi sono serviti durante lo sviluppo del progetto.

> .env = si trovano le Environment Variables che non sono state pubblicate nella repository ma per permettere il funzionamento ho utilizzato la funzionalità di netlify per permettere comunque le chiamate API necessarie per ottenere tutte le informazioni.

## Logiche del progetto

Questo progetto è costituito principalmente da due file JavaScript e il file Sass per lo stile degli elementi HTML, inizialmente la pagina dovrà mostrare un loader al centro che verrà rimosso finchè non caricherà tutti gli elementi iniziali.
Quando si vogliono visualizzare più notizie premendo il tasto load more, quel tasto cambia il testo in 'loading...' e aggiungendo un piccolo spinner di caricamento finchè non finisce la chiamata API per poter visualizzare le altre notizie.
L'utilizzo di strumenti esterni come WebPack, Lodash e Axios mi hanno aiutato a semplificare lo sviluppo del progetto quando sono riuscito a capire effettivamente il loro potenziale. 
