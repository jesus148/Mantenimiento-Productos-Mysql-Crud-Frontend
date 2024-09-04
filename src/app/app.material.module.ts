import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";

import { AppRoutes, routes } from "./app.routes";


// modulos
import {ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from "@angular/common";





// material se usa cuando los componentes son standole
// decorador
@NgModule({
  //  componentes dentro otros compopnentes
  declarations:[
    // AppComponent //componente raíz que se usa como punto de entrada para la aplicación.

  ],
  // poder angular
  imports: [
    BrowserModule, // Angular funcione correctamente en un navegador.
    // routes // Importas las rutas, aunque esto debería ser RouterModule en la mayoría de los casos
    ReactiveFormsModule,
    ReactiveFormsModule,
    AppRoutes,
    CommonModule

  ],
  exports:[

  ],
  // rest
  providers:[],
  bootstrap:[] // Indicas que AppComponent es el componente de inicio
})


// clase
export class AppMaterialModule{

}
