import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { routes } from "./app.routes";
import FormsModule from '@angular/forms';

// modulos
import {ReactiveFormsModule} from '@angular/forms';



// material se usa cuando los componentes son standole
// decorador
@NgModule({
  declarations:[
    // AppComponent //componente raíz que se usa como punto de entrada para la aplicación.
  ],
  imports: [
    BrowserModule, // Angular funcione correctamente en un navegador.
    // routes // Importas las rutas, aunque esto debería ser RouterModule en la mayoría de los casos
    ReactiveFormsModule

  ],
  exports:[

  ],
  providers:[],
  bootstrap:[] // Indicas que AppComponent es el componente de inicio
})


// clase
export class AppMaterialModule{

}
