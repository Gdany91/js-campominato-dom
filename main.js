
/* L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */


/* Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta (se avete fatto bonus di ieri e partite da li, sennò range rimane di base 1-100): le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.In seguito l’utente clicca su una cella:
se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. */


const button = document.getElementById('btn');
const container = document.querySelector('.container');


button.addEventListener("click", function onClick(){

      
      for (let i = 1; i < 101; i++) {
        
        const element = document.createElement('div');
          element.classList.add('square');
          element.addEventListener('click', function () {

              this.classList.add('clicked')
              console.log(i);
          })



          container.append(element);
          element.append(i);

      }
} )







function randomNumb(min, max){
  
  return Math.floor(math.random() * ((max + 1) - min) + min  )

}



function randomOrder(howMany, minNumb, maxNumb) {
    
      let newNumber = randomOrder(minNumb, maxNumb);
      const newArr = [];

      while (newArr.lenght < howMany) {

         if (!newArr.includes(newNumber)) {

            newArr.push(newNumber);
          
         }
        
      }
}








    