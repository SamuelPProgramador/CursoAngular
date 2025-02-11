import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-calculadora';
  operandoA: number = 0;
  operandoB: number = 0;
  resultado: number = 0;
  sumar(){
     return this.resultado = this.operandoA + this.operandoB;
  }

  //agregar Restar, Multiplicar y Dividir...
  
}
