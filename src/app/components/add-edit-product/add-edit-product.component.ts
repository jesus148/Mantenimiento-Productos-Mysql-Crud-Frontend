import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Product } from '../../interfaces/product';

// decorador
@Component({
  selector: 'app-add-edit-product',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.css'
})
// clase
export class AddEditProductComponent implements OnInit{



  // validaciones
  form : FormGroup;



  // inicia
  constructor(private fb: FormBuilder){
    // validaciones
    this.form= this.fb.group({
      name:['', [Validators.required , Validators.maxLength(20)]],
      description:['',Validators.required],
      price:[null,Validators.required],
      stock:[null,Validators.required]
    })
  }

  // inicia
  ngOnInit(): void {

  }



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

    console.log(product);


  }






}
