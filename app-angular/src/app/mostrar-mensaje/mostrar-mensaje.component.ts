import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-mensaje.component.html',
  styleUrl: './mostrar-mensaje.component.css'
})
export class MostrarMensajeComponent {
  mensaje = "";

  resetearMensaje() {
    this.mensaje = "";
  }
  mostrarMensaje() {
    this.mensaje = "ha echo click en mostra mensaje"
  }

}
