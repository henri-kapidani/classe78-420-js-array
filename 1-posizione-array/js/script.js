/*
posizione array: entriamo nel concetto di array. Chiediamo un numero all'utente e stampiamo l'elemento che si trova nella posizione indicata dall'utente all'interno dell'array.
*/

const parole = ['ciao', 'salmon', 'classe', 'gold', 'greenyellow'];

console.log(parole);

const index = parseInt(prompt('dammi un numero tra 0 e ' + (parole.length - 1)));
if (!isNaN(index) && (index >= 0) && (index < parole.length)) {
	console.log(parole[index]);
} else {
	alert('aggiorna la pagina e metti valori corretti');
}
