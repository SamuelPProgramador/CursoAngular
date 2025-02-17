import { Component } from '@angular/core';
import { ProductoComponent } from "./producto/producto.component";
import { Producto } from './producto/producto.model';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from "../formulario/formulario.component";



@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [ProductoComponent, FormsModule, FormularioComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {

  productos: Producto[]=[
    new Producto("Pantalon", 150),
    new Producto("Camisa", 300),
    new Producto("boxer", 400)
  ];

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
    }



}

