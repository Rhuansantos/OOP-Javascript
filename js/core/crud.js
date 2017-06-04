import {PetProfile} from './petProfile';

export class PetCreate extends PetProfile{

  constructor(_method){
    super();
    this.method = _method;
    this.create();

  }
  create (){

    // console.log(petList);
    let template = `
        <h1>${this.name}</h1>
        <h1>${this.age}</h1>
         <h1>${this.shelter}</h1>
        <hr />
      `;

    document.getElementById('main').insertAdjacentHTML('beforebegin', template);
  }


}
