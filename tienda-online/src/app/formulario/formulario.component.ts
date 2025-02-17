import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Producto } from '../listado-productos/producto/producto.model';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  @ViewChild("descripcionInput") descripcionInput!: ElementRef;
  @ViewChild("precioInput") precioInput!: ElementRef;
  @Output() nuevoProducto = new EventEmitter<Producto>();

  agregarProducto(envento: Event){
    envento.preventDefault();
    //Validamos
    if( this.descripcionInput.nativeElement.value.trim() === '' 
    || this.precioInput== null 
    || this.precioInput.nativeElement.value <=0){
      console.log("debe de agregar una descripcion");
      return;
    }
    const producto = new Producto(this.descripcionInput.nativeElement.value,
      this.precioInput.nativeElement.value);
      this.nuevoProducto.emit(producto);
    
    //Limpiamos los campos
    this,this.descripcionInput.nativeElement.value = '';
    this.precioInput.nativeElement.value = null;
    }
}
