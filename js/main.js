import {Crud} from './core/crud';

// waiting for the document to be ready
window.addEventListener("load", () => {

  // form
  let petForm = document.getElementById('insertPet');


  petForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let page = new Crud();

  });




});
