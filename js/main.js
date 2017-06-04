import {PetCreate as pet, petArray} from './core/crud';

// waiting for the document to be ready
window.addEventListener("load", () => {

	let petForm = document.getElementById('insertPet');
	let petContainer = document.getElementById('petList');
	let petList = document.querySelectorAll('#petList li');
	console.log(petList);

	// listen to the form
	petForm.addEventListener('submit', (e) => {
		e.preventDefault();
		petContainer.innerHTML = '';
		let newPet = new pet();
		petArray.push(newPet);
	});

});