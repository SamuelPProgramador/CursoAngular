import { Component } from '@angular/core';
import { ProductoComponent } from "./producto/producto.component";
import { Producto } from './producto/producto.model';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [ProductoComponent, FormsModule ],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {
  productos: Producto[]=[
    new Producto("Pantalon", 150),
    new Producto("Camisa", 300),
    new Producto("boxer", 400)
  ];

  descripcionInput: string = '';
  precioInput: number | null = null;


  agregarProducto(){
  //Validamos
  if( this.descripcionInput.trim() === '' || this.precioInput == null || this.precioInput <=0){
    console.log("debe de agregar una descripcion");
    return;
  }
  const producto = new Producto(this.descripcionInput, this.precioInput);
  this.productos.push(producto);
  
  //Limpiamos los campos
  this,this.descripcionInput = '';
  this.precioInput = null;
  }

}

