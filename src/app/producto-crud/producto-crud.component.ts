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
  productos: Producto[] = []
  constructor(private _productoService: ProductoService) { }

  ngOnInit(): void {
    this._productoService.getAll().subscribe(response =>{
      this.productos = response;
      console.log(this.productos)
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

}
