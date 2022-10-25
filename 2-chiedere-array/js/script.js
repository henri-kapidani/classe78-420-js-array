/*
chiedere all'utente quanti dati vuole darci, e poi chiederli con dei prompt e costruire un array, e poi stampare l'array
*/

const nElements = parseInt(prompt('Quanti elementi ci darai?'));

const arrElements = [];
for (let i = 0; i < nElements; i++) {
	const element = prompt('Inserisci l\'elemento in posizione ' + i);
	arrElements.push(element);
}

// console.log(arrElements);

// soluzione A (non necessita dell'ul in pagina)
// let myHTML = '<ul>';
// console.log(myHTML);

// for (let i = 0; i < arrElements.length; i++) {
// 	myHTML += `<li>${arrElements[i]}</li>`;
// 	console.log(myHTML);
// }

// myHTML += '</ul>';
// console.log(myHTML);

// document.body.innerHTML = myHTML;

// soluzione B (l'ul deve essistere gia' in pagina)
const eleUl = document.querySelector('ul');
for (let i = 0; i < arrElements.length; i++) {
	eleUl.innerHTML += `<li>${arrElements[i]}</li>`;
}

// soluzione C (usando l'append) e ciclo inverso
// const eleUl = document.querySelector('ul');
// for (let i = arrElements.length - 1; i >= 0; i--) {
// 	if (arrElements[i] % 2 == 0) {
// 		const eleLi = document.createElement('li');
// 		eleLi.append(arrElements[i]); // eleLi.innerHTML = arrElements[i];
// 		eleUl.append(eleLi);
// 	}
// }