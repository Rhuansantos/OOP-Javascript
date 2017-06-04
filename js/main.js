import {PetCreate as pet, petArray} from './core/crud';

// waiting for the document to be ready
window.addEventListener("load", () => {
	
	let petForm = document.getElementById('insertPet');
	// listen to the form
	petForm.addEventListener("submit", (e) => {
		e.preventDefault();
		let newPet = new pet();
		petArray.push(newPet);
	});

});