import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

// decorador
@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [
    //importar esto para el listado
    RouterOutlet,
    CommonModule,
    RouterLink
  ],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
// clase
export class ListProductsComponent {


  // COMPONENTE LISTA O LA TABLA
  listProducts : Product[] =[
    {id: 1, name :'Coca Cola' ,description: 'bebida con azucar' , price:4 , stock:200 },
    {id: 2 , name :'Corona' ,description: 'corona con azucar' , price:4 , stock:200 }
  ]



  // inicia
  constructor(){
  }



  // inicia
  ngOnInit():void{

  }


}
