Gestore di Spese Personali (Web App)

Questo progetto consiste nella realizzazione di una semplice web app per tracciare le spese quotidiane, permettendo l'inserimento, la visualizzazione e la gestione dinamica dei dati.

🎯 Obiettivo

L'applicazione permette all'utente di:

    Inserire nuove spese.

Visualizzare l'elenco completo delle spese inserite.

Visualizzare il totale complessivo.

Eliminare singole spese.

Aggiornare i dati in tempo reale senza ricaricare la pagina.

🛠️ Tecnologie Utilizzate

Il progetto è sviluppato esclusivamente con tecnologie web standard, senza l'ausilio di framework esterni:

    HTML: Struttura della pagina.

CSS: Stile, layout e design responsive.

JavaScript: Logica applicativa, gestione eventi e manipolazione del DOM.

📂 Struttura del Progetto

La directory di progetto è organizzata come segue:

    index.html: Struttura dell'interfaccia.

style.css: Foglio di stile.

script.js: Logica di funzionamento.

💻 Funzionalità e Requisiti

Interfaccia Utente (HTML/CSS)

    Sezione Inserimento: Campi input per descrizione (testo) e importo (numero), con relativo bottone "Aggiungi spesa".

Elenco Spese: Lista dinamica dove ogni voce mostra descrizione, importo e un bottone "Elimina".

Riepilogo: Un'area dedicata che evidenzia il totale calcolato.

Design: Layout ordinato con un contenitore centrale e spese visivamente separate.

Logica Applicativa (JavaScript)

    Gestione Dati: Le spese sono salvate in una struttura dati basata su un array di oggetti.

Validazione: Controllo dei campi vuoti prima dell'inserimento.

Calcolo Totale: Il totale viene ricalcolato automaticamente a ogni aggiunta o rimozione.

Manipolazione DOM: Uso di addEventListener (o onclick) e selettori come getElementById o querySelector.

🚫 Vincoli e Regole

    Nessun Framework: È vietato l'uso di librerie come Bootstrap, React, ecc..

Nessun Alert: È vietato l'uso di alert() per mostrare i dati.

🌟 Estensioni Facoltative (Bonus)

È possibile arricchire l'app con le seguenti funzionalità:

    Salvataggio persistente tramite localStorage.

Assegnazione di una categoria (cibo, trasporti, ecc.) e relativi filtri.

Messaggio di stato "Nessuna spesa inserita".

Evidenziazione delle spese che superano una certa soglia.

Pulsante per il reset totale delle spese.
