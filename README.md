# [cite_start]Gestore di Spese Personali (Web App) [cite: 1]

[cite_start]Questo progetto consiste nella realizzazione di una web app per tracciare le spese quotidiane [cite: 3][cite_start], permettendo l'inserimento, la visualizzazione e la gestione dinamica dei dati[cite: 4]. [cite_start]L'applicazione è sviluppata esclusivamente con tecnologie web standard (HTML, CSS e JavaScript), senza l'ausilio di framework esterni[cite: 5, 66].

## [cite_start]🎯 Obiettivo del Progetto [cite: 6]
L'applicazione permette all'utente di:
* [cite_start]Inserire nuove spese[cite: 8].
* [cite_start]Visualizzare l'elenco delle spese inserite[cite: 9].
* [cite_start]Calcolare e visualizzare il totale complessivo[cite: 10, 49].
* [cite_start]Eliminare singole spese dalla lista[cite: 11, 53].
* [cite_start]Aggiornare automaticamente i dati nella pagina senza ricaricarla[cite: 12, 48].

## [cite_start]🛠️ Tecnologie Utilizzate [cite: 13]
* [cite_start]**HTML**: Per la struttura della pagina[cite: 14].
* [cite_start]**CSS**: Per lo stile, il layout e il design responsive[cite: 15].
* [cite_start]**JavaScript**: Per la logica applicativa, la gestione degli eventi e la manipolazione del DOM[cite: 16].

## [cite_start]📂 Struttura dei File [cite: 17]
Il progetto segue questa organizzazione:
* [cite_start]`index.html`: Struttura dell'interfaccia[cite: 19].
* [cite_start]`style.css`: Foglio di stile[cite: 20].
* [cite_start]`script.js`: Logica di funzionamento[cite: 21].

## 💻 Funzionalità e Requisiti

### [cite_start]Interfaccia Utente (HTML) [cite: 22]
* [cite_start]**Sezione Inserimento**: Input per descrizione (testo) e importo (numero) con bottone di aggiunta [cite: 25-30].
* [cite_start]**Elenco Spese**: Ogni spesa mostra descrizione, importo e un bottone "Elimina" [cite: 31-36].
* [cite_start]**Riepilogo**: Un `div` dedicato che evidenzia il totale delle spese[cite: 37, 38, 63].

### [cite_start]Logica Applicativa (JavaScript) [cite: 39]
* [cite_start]**Gestione Dati**: Utilizzo di un array di oggetti per salvare le spese[cite: 44, 72].
* [cite_start]**Validazione**: Controllo che i campi non siano vuoti prima del salvataggio[cite: 43].
* [cite_start]**Dinamismo**: Aggiornamento automatico del totale e della lista a ogni inserimento o eliminazione[cite: 52, 57].
* [cite_start]**Eventi**: Utilizzo di `addEventListener` o `onclick` e selettori del DOM (`getElementById`/`querySelector`)[cite: 70, 71].

## [cite_start]🚫 Vincoli [cite: 65]
* [cite_start]Vietato l'uso di librerie esterne o framework (es. Bootstrap, React)[cite: 66].
* [cite_start]Vietato l'uso di `alert()` per mostrare i dati[cite: 67].

## [cite_start]🌟 Estensioni Facoltative (Bonus) [cite: 73]
* [cite_start]Salvataggio persistente in `localStorage`[cite: 74].
* [cite_start]Gestione di categorie (cibo, trasporti, ecc.) e filtri[cite: 75, 76].
* [cite_start]Messaggio "Nessuna spesa inserita" quando la lista è vuota[cite: 77].
* [cite_start]Pulsante di "Reset" per ripulire l'intera lista[cite: 79].
