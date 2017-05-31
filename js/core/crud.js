import {Pet} from './petProfile';

export class Crud extends Pet{

  constructor(){
    super();
    this.container = document.getElementById('main');
    this.create();
  }
  create (){

    console.log('from create', this.name);
    let template = `
        <h1>${this.name}</h1>
        <h1>${this.age}</h1>
        <hr />
      `;

    // this.container.innerHtml(template);
    this.container.insertAdjacentHTML('beforebegin', template);
  }

  delete(){

  }

  update(){

  }
}
