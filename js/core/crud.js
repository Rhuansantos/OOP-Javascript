import {PetProfile} from './petProfile';
export let petArray = [];

export class PetCreate extends PetProfile{

  constructor(){
    super();
    this.petArray = petArray;
    this.create();
  }
  create (){

    let template = `
        <h1>${this.name}</h1>
        <h1>${this.age}</h1>
         <h1>${this.shelter}</h1>
        <hr />
      `;
  
    let shelterStatic = document.getElementById('shelter').value;

    // checking the array
    for (let i = 0; i < this.petArray.length; i ++){
      if(this.petArray[i].shelter === shelterStatic){
          console.log('looks same');
      }else{  
      // if something looks diferent then change it for every single element
      this.petArray.forEach( function(el, i) {
          petArray[i].shelter = shelterStatic;
        });
      }
    }
    
    document.getElementById('main').insertAdjacentHTML('beforebegin', template);

    console.log(petArray);
  }

}
