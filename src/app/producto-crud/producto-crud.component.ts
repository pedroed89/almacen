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
    this._productoService.insertarProducto({
      "id":9,
      "codigo": "FAria",
      "nombre": "Fideos Arias",
      "descripcion": "Fideos secos Arias 500gr",
      "precioVenta": 45,
      "precioCosto": 40,
      "imagenUrl": "https://images-ti-vm1.tiendainglesa.com.uy/medium/P039591-1.jpg?20170830115429,Fideos-ADRIA-Tirabuzones-500-gr-en-Tienda-Inglesa",
      "stock": 10
  }).subscribe(response => {
        console.log(response)
    })
  }

}
