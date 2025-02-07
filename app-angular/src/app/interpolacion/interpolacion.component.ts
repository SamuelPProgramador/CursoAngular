import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  standalone: true,
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})
export class InterpolacionComponent {
  titulo = "Univerisidad Angular"
  usuario ={
    nombre:"Samuel",
    apellido:"Arias",
    edad:23,
    correro:"sarias@gmail.com"

  }
  saludar(){
    return `Hola ${this.usuario.nombre}`
  }
  depedida(){
    return `Adios ${this.usuario.nombre}`
  }
}
