import { Component  , OnInit} from '@angular/core';
import { Product } from '../../interfaces/product';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { ProgressBarComponent } from '../../shared/progress-bar/progress-bar.component';

// decorador
@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [
    //importar esto para el listado
    RouterOutlet,
    CommonModule,
    RouterLink,
    ProgressBarComponent
  ],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
// clase
export class ListProductsComponent implements OnInit {


  // COMPONENTE LISTA O LA TABLA
  // listProducts : Product[] =[
  //   {id: 1, name :'Coca Cola' ,description: 'bebida con azucar' , price:4 , stock:200 },
  //   {id: 2 , name :'Corona' ,description: 'corona con azucar' , price:4 , stock:200 }
  // ]

  listProducts: Product[] = []

  loading: boolean = false;



  // inicia
  // _productoService : los service comienzan con _
  constructor(private _productoService:ProductService ,  private toastr: ToastrService){
  }



  // inicia
  ngOnInit(): void{
    this.getListProducts();
  }


  // metodo lista
  getListProducts(){

    this.loading = true;
    this._productoService.getListProducts().subscribe((data : any )=>{
      console.log(data);
      this.loading= false;
      this.listProducts=data.listProduct;
    })
  }




  deleteProduct(id: number) {
    this.loading = true;
    this._productoService.deteleProduct(id).subscribe(() => {
      this.getListProducts();
      this.toastr.warning('El producto fue eliminado con exito', 'Producto eliminado');
    })
  }




}
