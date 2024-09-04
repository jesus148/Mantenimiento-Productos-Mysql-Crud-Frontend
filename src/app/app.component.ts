import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ListProductsComponent } from "./components/list-products/list-products.component";


// decorador
@Component({
  // como un id para llamarlo
  selector: 'app-root',

  // componente independiente , osea se importa defrente de aqui mismo
  standalone: true,
  // cuando es standlone se importa defrente , otros componentes o dependencias de angular
  imports: [NavbarComponent, ListProductsComponent, RouterOutlet],
  // lo que ira cuando lo llames en otro componente
  templateUrl: './app.component.html',
  // estilos
  styleUrl: './app.component.css'
})
// clase
export class AppComponent {
  title = 'frontend';
}
