const petArray = [];
import {PetCreate as pet} from './core/crud';

// waiting for the document to be ready
window.addEventListener("load", () => {

  let petForm = document.getElementById('insertPet');


  // listen to the form
 	petForm.addEventListener("submit", (e) => {

	 	let shelterStatic = document.getElementById('shelter').value;

    e.preventDefault();
    // creating a new instance
    let newPet = new pet('create');
    //then push it to the array
    petArray.push(newPet);
    // checking the array
    for (let i = 0; i < petArray.length; i ++){
    	if(petArray[i].shelter === shelterStatic){
    		console.info('looks same');
    	}else{  
    		// if something looks diferent then change it for every single element
	  		petArray.forEach( function(el, i) {
						petArray[i].shelter = shelterStatic;
					});
  		}
    }

    console.log(petArray);
  });

});