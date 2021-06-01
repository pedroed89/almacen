import { Component, OnInit } from '@angular/core';
import { Producto } from '../clases/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-producto-crud',
  templateUrl: './producto-crud.component.html',
  styleUrls: ['./producto-crud.component.css']
})
export class ProductoCrudComponent implements OnInit {
  columnas = [
    '',
    'nombre',
    'codigo',
    'descripcion',
    'precioVenta',
    'precioCosto',
    'stock'
  ]

  productos:Producto[] = []
  sku = "";
  desde = 0;
  hasta = 0;
  search = "";
  showTrash = false;
  showJumbotron = false

  backup: Producto[] = [];
  constructor(private productoService: ProductoService) {

  }

  ngOnInit(): void {
    this.productoService.getAll().subscribe(response => {
      console.log("Response",response)
      this.productos = response;
      this.backup = this.productos;
    })
  }

  updateProducto(producto:Producto){
    alert("Actualizar el producto " + producto.nombre )
  }

  deleteProducto(id: number){
    alert("Eliminar producto con id : "+ id)
  }

  insertarProducto(){
    // this._productoService.insertarProducto().subscribe(response => {
    //     console.log(response)
    // })
  }

//Hecho por Anto
  filtrarporSku(){
    let filteredProducts = this.productos.filter(producto =>{
      return producto.codigo.toLowerCase() === this.sku.toLowerCase();
    })
    this.productos = filteredProducts;
  }

  filtrarporPrecio(){
    let filteredProducts = this.productos.filter(producto =>{
      return (producto.precioVenta <= this.hasta && producto.precioVenta >= this.desde);
    })
    this.productos = filteredProducts;
  }

  filtrarporNombre(){
    let filteredProducts = this.productos.filter(producto =>{
      return producto.nombre.toLowerCase().slice(0,this.search.length) === this.search.toLowerCase();
    })
    this.productos = filteredProducts;
  }


  handleCod(){
    if (this.sku.length === 0) {
      this.productos = this.backup;
    }
  }
}

