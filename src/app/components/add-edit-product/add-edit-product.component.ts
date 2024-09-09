import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { ProgressBarComponent } from '../../shared/progress-bar/progress-bar.component';

// decorador
@Component({
  selector: 'app-add-edit-product',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    ProgressBarComponent
  ],
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.css'
})
// clase
export class AddEditProductComponent implements OnInit{



  // validaciones
  form : FormGroup;

  // para barra de progresion
  loading: boolean = false;

  // id del parametro
  id: number;

  // titulo
  operacion: string = 'Agregar ';




  // inicia
  constructor(
    private fb: FormBuilder ,
    private _productService: ProductService ,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute
  ){
    // validaciones
    this.form= this.fb.group({
      name:['', [Validators.required , Validators.maxLength(20)]],
      description:['',Validators.required],
      price:[null,Validators.required],
      stock:[null,Validators.required]
    })
    // obtiene el id enviado del ListProductsComponent.html
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }
  // inicia
  ngOnInit(): void {
    if (this.id != 0) {
      // Es editar
      this.operacion = 'Editar ';
      this.getProduct(this.id);
    }
  }






  // metodo agrega y actualiza
  addProduct(){
    // formas de obtener de la data del form
    // imprimiendo valor del form pa ver las propiedades
    // console.log(this.form.value.name);
    // console.log(this.form.get('name')?.value);

    // juntando la data en un objeto pa guardar
    const product:Product ={
      name : this.form.value.name,
      description : this.form.value.description,
      price : this.form.value.price,
      stock : this.form.value.stock
    }

    this.loading = true;

    // metodo actualiza
    if (this.id !== 0) {
      // Es editar
      product.id = this.id;

      // metodo actualizar
      this._productService.updateProduct(this.id, product).subscribe(() => {
        this.toastr.info(`El producto ${product.name} fue actualizado con exito`, 'Producto actualizado');
        this.loading = false;
        this.router.navigate(['/']);
      })


      // registando un producto
    } else {
      // Es agregagar
      this._productService.saveProduct(product).subscribe(() => {
        this.toastr.success(`El producto ${product.name} fue registrado con exito`, 'Producto registrado');
        this.loading = false;
        this.router.navigate(['/']);
      })
    }

  }




  // metodo obtener datos atraves de su id
  getProduct(id: number) {
    this.loading = true;
    this._productService.getProduct(id).subscribe((data: Product) => {
      this.loading = false;
      this.form.setValue({
        // seteando la data pa mostrar
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock
      })
    })
  }









}
