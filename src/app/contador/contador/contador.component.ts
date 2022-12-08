import {Component} from "@angular/core"
@Component({
  selector: "app-contador",
  template: `
  
  <h1>{{titulo}}</h1>


<h3>La base es : <strong>{{base}}</strong></h3>


<button (click)="acumularNeg()"> - 5</button>



<button (click)="acumularPos()"> + 5</button>
   
  
  
  `
})
export class ContadorComponent {
  public titulo: string = 'Contador App';
  numero: number = 0;

  base: number = 5;

  acumularPos() {
    this.base += 5;
  }

  acumularNeg() {
    this.base -= 5;
  }

  /*   restar(){
     this.numero -= 1;
    } */
}