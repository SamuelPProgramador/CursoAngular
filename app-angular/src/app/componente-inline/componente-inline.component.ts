import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-inline',
  standalone: true,
  imports: [],
  template: `
  <h1>{{componeteEnLinea}}</h1>
 
    <p>
      componente-inline works!
    </p>
  `,
  styles: `
  p{
    color: red;
  }
  
  `
})
export class ComponenteInlineComponent {
  componeteEnLinea = "Nuevo componente en linesa"

}
