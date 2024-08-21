import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

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
    // imprimiendo valor del form

  }






}
