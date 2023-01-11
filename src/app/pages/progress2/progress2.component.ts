import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress2',
  templateUrl: './progress2.component.html',
  styleUrls: ['./progress2.component.css']
})
export class Progress2Component implements OnInit {
  progreso: number = 40;
  constructor() { }

  ngOnInit(): void {
  }


  


  get getPorcentaje(){
    return `${this.progreso}%`
  }

  cambiarValor( valor:number){

    if(this.progreso>=100 && valor>=0){
      this.progreso=100;
      return
    }


    if(this.progreso<=0 && valor<0){
      return this.progreso=0;
      
    }


    this.progreso= this.progreso + valor;
  }


   onlyNumberKey(evt) {
          
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

}


