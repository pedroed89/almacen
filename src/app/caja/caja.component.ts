import { Component, OnInit } from '@angular/core';
import { Producto } from '../clases/producto';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {

  encabezado = [
    'Cantidad',
    'Codigo',
    'Nombre',
    'Precio Venta'
  ]

 
  constructor() { }
 
  ngOnInit(): void {
    sessionStorage.getItem("Lista");
  
  }


  
  cambio(){
    
  }

  eliminar(){
    
  }
}