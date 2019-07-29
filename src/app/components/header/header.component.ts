import { Component } from '@angular/core';//IMPORTAMOS EL DECORADOR O CLASE COMPONENT

@Component({
    selector: 'app-header',
    template: `<h1>Header component</h1>`//SI EN ESTA LINEA FUERA ALGO MÁS COMPLEJO SE DEBERÍA PONER EN UN ARCHIVO APARTE
})

export class HeaderComponent {//LA PALABRA RESERVADA export ES PARA INDICAR QUE ESTA CLASE SERÁ USADA FUERA O EXPORTADA.
    
    

}