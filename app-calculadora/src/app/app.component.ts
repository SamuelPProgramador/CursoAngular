import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from "./formulario/formulario.component";
import { ResultadoComponent } from "./resultado/resultado.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, FormularioComponent, ResultadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'app-calculadora';
  resultadoPadre: number = 0;
  procesarResultado(resultadoHijo: number) {
    this.resultadoPadre = resultadoHijo;
  }
  
  //agregar Restar, Multiplicar y Dividir...
  
}
