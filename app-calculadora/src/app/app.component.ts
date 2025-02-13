import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from "./formulario/formulario.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'app-calculadora';
  resultado: number = 0;
  procesarResultado(resultado: number) {
    this.resultado = resultado;
  }
  
  //agregar Restar, Multiplicar y Dividir...
  
}
