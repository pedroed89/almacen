import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CajaComponent } from './caja/caja.component';
import { InicioComponent } from './inicio/inicio.component';
import { InventarioComponent } from './inventario/inventario.component';

const routes: Routes = [
  {path:'',component: InicioComponent},
  {path:'caja',component: CajaComponent},
  {path:'inventario',component: InventarioComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
