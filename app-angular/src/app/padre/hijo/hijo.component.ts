import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  
  mensaje: string = 'Mensaje desde el componente Hijo....'

  cambiarMensaje(nuevoMensaje:string){
    this.mensaje = nuevoMensaje;
  }



  // @Output() notificarPadre = new EventEmitter<string>();

  // enviarMensaje(){
  //   this.notificarPadre.emit("Mensaje desde el componente padre al hijo");
  // }


  // @Input() mensaje!: string;

}
