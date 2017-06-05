import {Pet} from './petProfile';
import {Util} from './util';
export let petArray = [];

export class CreatePet extends Pet{
  constructor(){
    super();
    this.create();
  }
  create (){
    let petContainer = document.getElementById('petList');
    let shelterStatic = document.getElementById('shelter').value;
    // checking the array
    for (let i = 0; i < petArray.length; i ++){
      // if something looks diferent then change it for every single element
      if(petArray[i].shelter != shelterStatic){
        petArray.forEach( function(el, i) {
            petArray[i].shelter = shelterStatic;
         });
      }
    }
    // print pets from array
    petArray.forEach( function(el, i) {
      let ageAvg = Util.avg(petArray[i].age, petArray.length);
      document.getElementById('ageAvg').innerHTML = ageAvg;
      let template = `
        <li data-key=${i}>
           <h4>${petArray[i].name}</h4>
           <h4>${petArray[i].age}</h4>
           <h4>${petArray[i].shelter}</h4>
            <hr />
        </li>
      `;
      petContainer.insertAdjacentHTML('beforeend', template);

    });
  }
}