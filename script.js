// Struttura dati: Array di oggetti per le spese [cite: 44, 72]
let elencoSpese = [];

// Selezione elementi DOM [cite: 71]
const inputDescrizione = document.getElementById('descrizione');
const inputImporto = document.getElementById('importo');
const btnAggiungi = document.getElementById('btn-aggiungi');
const divListaSpese = document.getElementById('lista-spese');
const spanTotale = document.getElementById('totale');

// Funzione per aggiornare la visualizzazione (Render) [cite: 46]
function aggiornaInterfaccia() {
    // Pulisce la lista attuale per evitare duplicati visivi
    divListaSpese.innerHTML = '';

    // Calcolo totale tramite JS [cite: 51]
    let totaleCalcolato = 0;

    // Ciclo su ogni spesa nell'array
    elencoSpese.forEach((spesa) => {
        // Creazione dinamica del div per la singola spesa [cite: 47]
        const divSpesa = document.createElement('div');
        divSpesa.classList.add('spesa-item'); // Uso corretto classi CSS [cite: 64]

        // Contenuto HTML della spesa: Descrizione, Importo, Bottone Elimina [cite: 33, 34, 35, 36]
        divSpesa.innerHTML = `
            <div class="spesa-info">
                <span class="spesa-desc">${spesa.descrizione}</span>
                <span class="spesa-importo">€ ${spesa.importo.toFixed(2)}</span>
            </div>
            <button class="btn-elimina" onclick="eliminaSpesa(${spesa.id})">Elimina</button>
        `;

        // Aggiunge l'elemento alla lista
        divListaSpese.appendChild(divSpesa);

        // Aggiorna somma totale
        totaleCalcolato += spesa.importo;
    });

    // Aggiorna il totale nell'HTML [cite: 52]
    spanTotale.textContent = totaleCalcolato.toFixed(2);
}

// Funzione: Inserimento Spesa [cite: 40]
function aggiungiSpesa() {
    // 1. Leggere i valori degli input [cite: 42]
    const descrizione = inputDescrizione.value.trim();
    const importo = parseFloat(inputImporto.value);

    // 2. Controllo campi vuoti o non validi [cite: 43]
    // Nota: Vietato usare alert()[cite: 67], quindi uso un return anticipato se i dati non vanno bene
    if (descrizione === '' || isNaN(importo) || importo <= 0) {
        console.error("Dati non validi: inserire una descrizione e un importo positivo.");
        return;
    }

    // 3. Creazione oggetto spesa con ID univoco (timestamp)
    const nuovaSpesa = {
        id: Date.now(),
        descrizione: descrizione,
        importo: importo
    };

    // 4. Salvare la spesa nella struttura dati [cite: 44]
    elencoSpese.push(nuovaSpesa);

    // 5. Reset degli input
    inputDescrizione.value = '';
    inputImporto.value = '';

    // 6. Aggiornare l'interfaccia [cite: 12]
    aggiornaInterfaccia();
}

// Funzione: Eliminazione Spesa [cite: 53]
// Questa funzione viene chiamata dall'onclick generato dinamicamente nel render
function eliminaSpesa(idDaEliminare) {
    // Filtra l'array rimuovendo l'elemento con l'ID specificato [cite: 56]
    elencoSpese = elencoSpese.filter(function(spesa) {
        return spesa.id !== idDaEliminare;
    });

    // Aggiorna lista e totale [cite: 57]
    aggiornaInterfaccia();
}

// Event Listener sul bottone "Aggiungi" [cite: 41, 70]
btnAggiungi.addEventListener('click', aggiungiSpesa);