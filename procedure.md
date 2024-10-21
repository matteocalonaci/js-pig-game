
## Come Giocare
1. **Inizia una Nuova Partita**: Clicca sul pulsante "🔄 Nuova partita" per inizializzare il gioco.
2. **Lancia il Dado**: Clicca sul pulsante "🎲 Lancia dado" per lanciare il dado.
   - Se lanci un numero tra 2 e 6, verrà aggiunto al tuo punteggio attuale.
   - Se lanci un 1, il tuo punteggio attuale si azzera e il turno passa all'altro giocatore.
3. **Salvare il Punteggio**: Clicca sul pulsante "📥 Mantieni" per aggiungere il punteggio attuale al tuo punteggio totale e passare all'altro giocatore.
4. **Vincere il Gioco**: Il primo giocatore a raggiungere 100 punti vince la partita, e il suo nome viene evidenziato.

## Spiegazione del Codice

### Logica JavaScript
- **Selezione degli Elementi**: Il gioco seleziona gli elementi dal DOM utilizzando `querySelector` e `getElementById`.
- **Inizializzazione del Gioco**: La funzione `init` azzera i punteggi e nasconde il dado.
- **Cambio di Giocatori**: La funzione `switchPlayer` alterna il giocatore attivo e azzera il punteggio attuale.
- **Lancio del Dado**: Il listener per il pulsante "Lancia" genera un numero casuale e aggiorna il punteggio attuale o cambia giocatore in base al risultato.
- **Salva il Punteggio**: Il listener per il pulsante "Salva" aggiunge il punteggio attuale al punteggio totale del giocatore e verifica la condizione di vittoria.
