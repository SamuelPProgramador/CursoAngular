import { Component, ViewChild } from '@angular/core';
import { HijoComponent } from "./hijo/hijo.component";

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  // mensajePadre: string ='Mensaje desde el componente padre'
  //mensaje: string  = '';
  
  @ViewChild(HijoComponent) componenteHijo! : HijoComponent;
  cambiarMensajeHijo(){
    this.componenteHijo.cambiarMensaje("Mensaje desde el componente padre.")


  }

  // recibirNotificacion(mensajeHijo: string) {
  //   this.mensaje = mensajeHijo;

  // }


}
