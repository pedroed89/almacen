import { Component, OnInit } from '@angular/core';
import { Producto } from '../clases/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos:Producto[] = []
  sku = "";
  desde = 0;
  hasta = 0; 

  backup: Producto[];
  constructor(private productoService: ProductoService) {
    this.backup = this.productos;
   }

  ngOnInit(): void {
    this.productoService.getAll().subscribe(response => {
      console.log("Response",response)
      this.productos = response;
    })
  }

  /*filtrar(){
   let filteredProducts = this.productos.filter(producto =>{
      return producto.codigo.toLowerCase() === this.sku.toLowerCase();
    })
    this.productos = filteredProducts;*/
    filtrar(){

      if(this.sku.length > 0){
        let filteredProducts = this.productos.filter(producto =>{
          return producto.codigo.toLowerCase() === this.sku.toLowerCase();
        })
        this.productos = filteredProducts;
        if(this.productos.length <= 0){
          alert('No existen productos con ese código');
          this.limpiar();
        };
      };
  
      if(this.desde > 0 && this.hasta > 0){
        let filteredProducts = this.productos.filter(producto =>{
          return producto.precioVenta >= this.desde && producto.precioVenta <= this.hasta;
        });
        this.productos = filteredProducts; 
      /*if (this.desde <= this.hasta) {
          alert('El precio hasta debe ser mayor a desde');
          this.limpiar();
      };*/
    }
    }
  

/*  handleCod(){
    if (this.sku.length === 0) {
      this.productos = this.backup;
    }
  }
}*/
handleCod(){
  if(this.sku.length === 0){
    this.productos = this.backup;
  };
  if(this.desde === 0){
    this.productos = this.backup;
  }
  if(this.hasta === 0){
    this.productos = this.backup;
  };
}
limpiar(){
  this.sku = "",
  this.desde = 0,
  this.hasta = 0,
  this.productos = this.backup;
}
}
