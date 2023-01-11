import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.btnClass=`btn ${ this.btnClass}`;
  }


  // progreso: number = 40;

  // AGREGAR ESTA OPCION PARA EL PADRE
  // @Input()progreso: number = 24;
  @Input('valor') progreso: number = 24;
  @Input() btnClass: string = 'btn-primary';
  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();



  // get getPorcentaje(){
  //   return `${this.progreso}%`
  // }

  cambiarValor( valor:number){

    if(this.progreso>=100 && valor>=0){
      this.valorSalida.emit(100)
      this.progreso=100;

      return
    }


    if(this.progreso<=0 && valor<0){
      this.valorSalida.emit(0)
      return this.progreso=0;

      
    }


    this.progreso= this.progreso + valor;
    this.valorSalida.emit(this.progreso)
  }


   onlyNumberKey(evt) {
          
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}




onChange(nuevoValor :number){

  if(nuevoValor >= 100){
    this.progreso = 100;

  }else if(nuevoValor<=0){
  this.progreso = 0;
  } else {
    this.progreso=nuevoValor;
  }

  this.valorSalida.emit(this.progreso)
}
}
