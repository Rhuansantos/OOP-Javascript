import {Pet} from './petProfile';

export class Crud extends Pet{

  constructor(){
    super();
    // this.container = document.getElementById('main');

    // this.create();

  }
  create (){


    console.log('from create');
    let template = `
        <h1>Olá</h1>
      `;

    // this.container.innerHtml(template);
    this.container.insertAdjacentHTML('afterbegin', template);
  }

  delete(){

  }

  update(){

  }
}
