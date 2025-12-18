# Gestore di Spese Personali (Web App)

[cite_start]Questo progetto consiste nella realizzazione di una web app semplice ed intuitiva che permette agli utenti di tenere traccia delle proprie spese quotidiane[cite: 3, 4]. [cite_start]L'applicazione è sviluppata interamente con tecnologie web standard senza l'ausilio di framework esterni[cite: 5].

## 🎯 Obiettivo del Progetto
L'obiettivo principale è creare una pagina dinamica che consenta di:
* [cite_start]Inserire nuove spese[cite: 8].
* [cite_start]Visualizzare l'elenco completo delle spese registrate[cite: 9].
* [cite_start]Visualizzare il totale delle spese calcolato automaticamente[cite: 10].
* [cite_start]Eliminare singole spese dalla lista[cite: 11].
* [cite_start]Aggiornare i dati mostrati nella pagina in tempo reale[cite: 12].

## 🛠️ Tecnologie Utilizzate
* [cite_start]**HTML**: Per la struttura della pagina[cite: 14].
* [cite_start]**CSS**: Per lo stile e il layout[cite: 15].
* [cite_start]**JavaScript**: Per la logica, la gestione degli eventi e la manipolazione del DOM[cite: 16].

## 📂 Struttura dei File
[cite_start]Il progetto deve essere organizzato con la seguente gerarchia[cite: 18]:
* [cite_start]`index.html` [cite: 19]
* [cite_start]`style.css` [cite: 20]
* [cite_start]`script.js` [cite: 21]

## 💻 Funzionalità dell'Interfaccia

### 1. Inserimento Spese
[cite_start]La pagina include una sezione dedicata con[cite: 25]:
* [cite_start]Un campo di testo per la descrizione della spesa[cite: 26].
* [cite_start]Un campo numerico per l'importo[cite: 27].
* [cite_start]Un bottone "Aggiungi spesa" per confermare l'inserimento[cite: 29, 30].

### 2. Elenco e Riepilogo
* [cite_start]**Lista Spese**: Ogni voce inserita viene mostrata in un `div` specifico contenente descrizione, importo e un bottone "Elimina"[cite: 32, 33, 34, 35, 36].
* [cite_start]**Totale**: Un'area dedicata mostra il totale complessivo delle spese, aggiornato costantemente[cite: 37, 38, 52].

## ⚙️ Requisiti Tecnici (JavaScript)
* [cite_start]**Validazione**: All'inserimento, il sistema controlla che i campi non siano vuoti[cite: 43].
* [cite_start]**Data Management**: Le spese devono essere salvate in un array di oggetti[cite: 44, 72].
* [cite_start]**Aggiornamento Dinamico**: La pagina non deve mai essere ricaricata per mostrare i nuovi dati[cite: 48].
* [cite_start]**Gestione Eventi**: Utilizzo obbligatorio di `addEventListener` o eventi `onclick`[cite: 70].

## 🎨 Requisiti Visuali (CSS)
* [cite_start]Layout ordinato con un contenitore centrale[cite: 60, 61].
* [cite_start]Spese ben separate visivamente tra loro[cite: 62].
* [cite_start]Evidenziazione chiara del totale delle spese[cite: 63].

## 🚫 Vincoli
* [cite_start]Vietato l'uso di librerie o framework (es. Bootstrap, React)[cite: 66].
* [cite_start]Vietato l'uso di `alert()` per mostrare i dati[cite: 67].

---
[cite_start]*Progetto basato sulle specifiche del documento "Gestore di Spese Personali"[cite: 1].*
