import {Pet} from './petProfile';
import {Util} from './util';
export let petArray = [];

export class CreatePet extends Pet{
  constructor(){
    super();
    this.petType = this.type.options[this.type.selectedIndex].value;
    this.create();
  }
  create (){
    petArray.push(this);
    let petContainer = document.getElementById('petList');
    let shelterStatic = document.getElementById('shelter').value;
    // checking the array
    for (let i = 0; i < petArray.length; i ++){
      // if something looks diferent then change it for every single element
      if(petArray[i].shelter != shelterStatic){
        petArray.forEach( (el, i) => {
            petArray[i].shelter = shelterStatic;
         });
      }
    }
    console.log(shelterStatic);
    let tempAge = [];
    // print pets from array
    petArray.forEach( (el, i) => {
      // getting age avg from static method
      tempAge.push(Number(el.age));
      let template = `
        <li data-key=${i}>
           <h4>Name: ${el.name}</h4>
           <h4>Age: ${el.age}</h4>
           <h4>Type: ${el.petType}</h4>
           <h4>Location: ${el.shelter}</h4>
            <hr />
        </li>
      `;
      petContainer.insertAdjacentHTML('beforeend', template);

    });
    let ageAvg = Util.avg(tempAge);
    document.getElementById('ageAvg').innerHTML = ageAvg;
  }
}
