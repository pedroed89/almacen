import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CajaComponent } from './caja/caja.component';
import { ProductoComponent } from './producto/producto.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ProductoService } from './services/producto.service';
import { ProductoCrudComponent } from './producto-crud/producto-crud.component';
import { AddProductoComponent } from './producto-crud/add-producto/add-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CajaComponent,
    ProductoComponent,
    ListaProductosComponent,
    ProductoDetalleComponent,
    ProductoCrudComponent,
    AddProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
