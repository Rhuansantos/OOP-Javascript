import {PetProfile} from './petProfile';
export let petArray = [];

export class PetCreate extends PetProfile{

  constructor(){
    super();
    this.create();
    
  }
  create (){
    let petContainer = document.getElementById('petList');
    let shelterStatic = document.getElementById('shelter').value;

    // checking the array
    for (let i = 0; i < petArray.length; i ++){
      if(petArray[i].shelter === shelterStatic){
          console.log('looks same');
      }else{  
      // if something looks diferent then change it for every single element
      petArray.forEach( function(el, i) {
          petArray[i].shelter = shelterStatic;
        });
      }
    }

    petArray.forEach( function(el, i) {

    let template = `
      <li data-key=${i}>
           <h1>${petArray[i].name}</h1>
           <h1>${petArray[i].age}</h1>
           <h1>${petArray[i].shelter}</h1>
          <hr />
      </li>
    `;

      petContainer.insertAdjacentHTML('beforeend', template);

    });

  }

}
