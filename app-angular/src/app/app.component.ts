import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from "./nuevo-componente/nuevo-componente.component";
import { ComponenteInlineComponent } from "./componente-inline/componente-inline.component";
import { InterpolacionComponent } from "./interpolacion/interpolacion.component";
import { PadreComponent } from "./padre/padre.component";
import { MostrarMensajeComponent } from "./mostrar-mensaje/mostrar-mensaje.component";
import { ReplicadorComponent } from "./replicador/replicador.component";
import { SaludarComponent } from "./saludar/saludar.component";
import { ComponenteIfComponent } from "./componente-if/componente-if.component";
import { AgregarTareaComponent } from "./agregar-tarea/agregar-tarea.component";
import { ComponenteForComponent } from "./componente-for/componente-for.component";
import { ViewChildComponent } from "./view-child/view-child.component";
import { MensajeService } from './mensaje.service';
import { ListadoUsuariosComponent } from "./listado-usuarios/listado-usuarios.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NuevoComponenteComponent, ComponenteInlineComponent, InterpolacionComponent, PadreComponent, MostrarMensajeComponent, ReplicadorComponent, SaludarComponent, ComponenteIfComponent, AgregarTareaComponent, ComponenteForComponent, ViewChildComponent, ListadoUsuariosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Servicios & Observable en  Angular';

  mensaje:string;

  constructor(mensajeService: MensajeService){
    this.mensaje = mensajeService.obtenerMensaje();
    

  }

}
