import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

 Heroes: string[] = ["Spiderman","Ironman","Hulk","Thor","D Strange"];

 HeroeBorrado: string = "";


borrarHeroe(): void{
 const HeroeBorrado =  this.Heroes.shift();

/* console.log("Borrando...");
console.log(HeroeBorrado) */

this.HeroeBorrado = HeroeBorrado || " "; 
}

}
