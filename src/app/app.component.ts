import { Component } from '@angular/core';

@Component({//ESTO ES UN DECORADOR, ESTE LE DICE A ANGULAR QUE PUEDE SER INYECTADO EN UN ARCHIVO HTML
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Sam';
  apellido = "Abn";
}
