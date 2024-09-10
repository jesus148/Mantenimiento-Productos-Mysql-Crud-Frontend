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

  // id del parametro para el actualizar
  id: number;

  // titulo para definir si es update o register
  operacion: string = 'Agregar ';




  // inicia
  constructor(
    // inyectando nesecario
    private fb: FormBuilder ,
    private _productService: ProductService ,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute
  ){
    // validaciones y aqui se guarda la data o tambien se carga la data del html
    this.form= this.fb.group({
      name:['', [Validators.required , Validators.maxLength(20)]],
      description:['',Validators.required],
      price:[null,Validators.required],
      stock:[null,Validators.required]
    })
    // obtiene el id enviado del ListProductsComponent.html al editar
    // con esto capturas el id , id = en componente
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }
  // inicia
  ngOnInit(): void {
    // diferente a 0 es editar
    if (this.id != 0) {
      // Es editar
      this.operacion = 'Editar ';
      // llama al metodo para llenar la data en el form
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

    // muestra la barra de progresion
    this.loading = true;

    // metodo actualiza si es distinto a 0
    if (this.id !== 0) {
      // Es editar


      // le agrega el producto al objeto arriba
      product.id = this.id;

      // metodo actualizar
      this._productService.updateProduct(this.id, product).subscribe(() => {
        // mensaje
        this.toastr.info(`El producto ${product.name} fue actualizado con exito`, 'Producto actualizado');
        this.loading = false; //esconde barra de progresion
        this.router.navigate(['/']); //regresa al listado
      })


      // registando un producto si es 0 el id
    } else {
      // Es registrar
      this._productService.saveProduct(product).subscribe(() => {
        // mensaje
        this.toastr.success(`El producto ${product.name} fue registrado con exito`, 'Producto registrado');
        this.loading = false; //esconde barra de progresion
        this.router.navigate(['/']); //regresa al listado
      })
    }
  }








  // metodo obtener datos atraves de su id para actaulizar
  // se obtiene la data y se pega en el form
  getProduct(id: number) {
    this.loading = true;//muestra la barra progresion
    // servicio
    this._productService.getProduct(id).subscribe((data: Product) => {
      this.loading = false;
      // seteando la data para copiar en el form
      // del back debe setear todo - el id
      // el patch.value se usa para setear solo ciertos datos , setValue se usa pa setear todo
      this.form.setValue({
        // seteando la data pa mostrar en el form
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock
      })
    })
  }









}
