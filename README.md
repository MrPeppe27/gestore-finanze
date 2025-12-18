Gestore di Spese Personali (Web App)

🧩 Contesto
Molte applicazioni reali permettono agli utenti di tenere traccia delle proprie spese
quotidiane.
In questo progetto dovrai realizzare una semplice web app che consenta di inserire,
visualizzare e gestire spese, aggiornando dinamicamente la pagina.
Il progetto deve essere sviluppato utilizzando HTML, CSS e JavaScript, senza framework
esterni.
🎯 Obiettivo
Creare una pagina web che permetta all’utente di:
● inserire nuove spese
● visualizzare l’elenco delle spese inserite
● visualizzare il totale delle spese
● eliminare una spesa
● aggiornare automaticamente i dati mostrati nella pagina
🛠 Tecnologie da utilizzare
● HTML → struttura della pagina
● CSS → stile e layout
● JavaScript → logica, eventi e manipolazione del DOM
📁 Struttura del progetto
gestore-spese/
│── index.html
│── style.css
│── script.js
🧱 Struttura dell’interfaccia (HTML)
La pagina deve contenere almeno:
1. Titolo dell’applicazione
2. Sezione di inserimento spesa
○ input testo → descrizione spesa
○ input numero → importo
○ bottone → “Aggiungi spesa”
3. Sezione elenco spese
○ una lista di elementi (div)
○ ogni spesa deve mostrare:
■ descrizione
■ importo
■ bottone “Elimina”
4. Sezione riepilogo
○ div che mostra il totale delle spese
⚙ Funzionalità obbligatorie (JavaScript)
1⃣ Inserimento spesa
● Alla pressione del bottone:
○ leggere i valori degli input
○ controllare che i campi non siano vuoti
○ salvare la spesa in una struttura dati (array di oggetti)
2⃣ Visualizzazione spese
● Le spese devono essere mostrate dinamicamente nella pagina
● Ogni spesa deve essere visualizzata in un proprio div
● La pagina non deve essere ricaricata
3⃣ Calcolo del totale
● Il totale delle spese deve essere:
○ calcolato tramite JavaScript
○ aggiornato automaticamente a ogni inserimento o eliminazione
4⃣ Eliminazione spesa
● Ogni spesa deve avere un bottone “Elimina”
● Cliccando il bottone:
○ la spesa viene rimossa dall’array
○ la lista e il totale vengono aggiornati
🎨 Requisiti CSS
● Layout ordinato e leggibile
● Contenitore centrale
● Spese ben separate visivamente
● Evidenziare il totale delle spese
● Uso corretto di classi CSS
🚫 Vincoli
● ❌ Vietato usare librerie o framework (Bootstrap, React, ecc.)
● ❌ Vietato usare alert() per mostrare i dati
● ✅ Obbligatorio usare:
○ addEventListener o eventi onclick
○ document.getElementById / querySelector
○ array e oggetti JavaScript
⭐ Estensioni facoltative (bonus)
● Salvataggio delle spese in localStorage
● Categoria della spesa (cibo, trasporti, altro)
● Filtro per categoria
● Messaggio “Nessuna spesa inserita”
● Evidenziare spese sopra una certa soglia
● Pulsante “Reset spese”
