import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CajaComponent } from './caja/caja.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductoCrudComponent } from './producto-crud/producto-crud.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';

const routes: Routes = [
  {path:'',component: InicioComponent},
  {path:'caja',component: CajaComponent},
  {path:'producto/:id',component:ProductoDetalleComponent},
  {path:'productos',component:ProductoCrudComponent}, 
  {path:'crear-producto',component:CrearProductoComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  