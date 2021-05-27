import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../clases/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() producto:Producto = new Producto();

  constructor() { }

  ngOnInit(): void {
  }
  
  lista = new Array();
  
  Agregar(){     
    console.log(this.producto);
    this.lista.push(this.producto.codigo)
    console.log("lista " + this.lista);

    sessionStorage.setItem("lista", this.lista.toString());
  }
}
