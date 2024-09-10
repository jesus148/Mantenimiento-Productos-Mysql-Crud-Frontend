import { RouterModule, Routes } from '@angular/router';

// componentes
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { NgModule } from '@angular/core';


// para routear REDIRECCIONAR
export const routes: Routes = [

  // cuando esta vacio
  {path:  '' , component : ListProductsComponent},
  // ruta especifica
  {path:  'add' , component : AddEditProductComponent},

  // ruta especifica con un parametro
  {path:  'edit/:id' , component : AddEditProductComponent},

  // cualquiera ruta , esto debe ir al ultimo , es como un else
  // cualquier ruta me redirecciona al ListProductsComponent
  {path : '**' , redirectTo:  '' , pathMatch :  'full'}

];


// esto se debe agregar
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes { }
