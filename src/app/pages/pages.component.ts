import { Component } from '@angular/core';
import { SettingService } from '../services/setting.service';

declare function customInitFunctions() ;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent  {
 
  constructor( private settingService:SettingService){

  }

  ngOnInit(): void {

    customInitFunctions(); //  Esta FUNCTION VIENE DESDE <script src="./assets/js/custom.js"></script>
    
  }
//   progreso: number = 40;


//   get getPorcentaje(){
//     return `${this.progreso}%`
//   }

//   cambiarValor( valor:number){

//     if(this.progreso>=100 && valor>=0){
//       this.progreso=100;
//       return
//     }


//     if(this.progreso<=0 && valor<0){
//       return this.progreso=0;
      
//     }


//     this.progreso= this.progreso + valor;
//   }


//    onlyNumberKey(evt) {
          
//     // Only ASCII character in that range allowed
//     var ASCIICode = (evt.which) ? evt.which : evt.keyCode
//     if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
//         return false;
//     return true;





// }



}
