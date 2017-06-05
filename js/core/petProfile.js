import {Shelter} from './shelter';

export class Pet extends Shelter{

  constructor(){
  	super();
    this.name = document.getElementById('name').value;
    this.age =  document.getElementById('age').value;
    this.type = document.getElementById('type');
    this.shelterLocation = document.getElementById('shelter').value; ////overide from Shelter
    
  }
}
