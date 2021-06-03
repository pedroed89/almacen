import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private _productoService: ProductoService,private _router: Router) { }

  ngOnInit(): void {
    this._productoService.getAll().subscribe(response =>{
      this.productos = response;
      console.log(this.productos)
    })
  }

  updateProducto(producto:Producto){
    this._router.navigate(["/add-producto",producto.id])
  }

  deleteProducto(id: number){
    this._productoService.eliminarProducto(id).subscribe((response:any)=>{
      console.log(response)
      const newItems = this.productos.filter((item:any)=>{
        return item.id !== id
      });
      this.productos = newItems;
    })
  }

  insertarProducto(){
    // this._productoService.insertarProducto().subscribe(response => {
    //     console.log(response)
    // })
  }

}
