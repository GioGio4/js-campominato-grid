// TRACCIA//
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro
// ed emetto un messaggio in console con il numero della cella cliccata.
// -----------------------------------------------------------------------------//


/************************************************
 *                                              *
 *                 ON LOAD                      *
 *                                              *
************************************************/

const btn_play_game = document.getElementById("btn-play-game");



/************************************************
 *                                              *
 *               EVENT LISTENER                 *
 *                                              *
************************************************/

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
btn_play_game.addEventListener(
    "click",
    function () {
        const grid_el = document.getElementById("grid");
        create_grid(grid_el);
    }
)




/************************************************
 *                                              *
 *                 FUNCTION                     *
 *                                              *
 ************************************************/


//Creiamo una funzione che genera dei DIV con classe .square da inserire nella grid
function create_grid(grid) {

    grid.innerHTML = ("");
    //Generiamo un ciclo che riproduca la funzione per 100 volte
    for (let i = 0; i < 100; i++) {


        // Creaiamo un div
        const square_el = document.createElement("div");

        // Aggiungiamo al DIV la classe Square
        square_el.classList.add("square");

        // Inseriamo il div nella GRID
        grid.append(square_el);

        //Generiamo una sequenza di numeri da 1 a 100 che andranno inseriti dentro ogni Square (in HTML)
        square_el.append(i + 1);

        // Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro

        square_el.addEventListener(
            "click",
            function () {
                // Al verificarsi del click su uno square, la classe Active si aggiunge o si toglie (Toggle) dal DIV
                square_el.classList.toggle("active");

                // ed emetto un messaggio in console con il numero della cella cliccata.
                console.log("Il numero cliccato è: " + (i + 1));
            }
        )

    }


}