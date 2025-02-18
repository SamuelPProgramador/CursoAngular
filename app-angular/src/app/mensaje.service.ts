import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  private mensaje: string ='Hola desde el servicio mensaje...'

  constructor() { 
    
  }
  obtenerMensaje():string{
    return this.mensaje;
  }

}
