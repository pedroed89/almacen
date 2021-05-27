import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../clases/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() producto:Producto = new Producto();
  cantidad= 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementar() {
      this.cantidad = this.cantidad + 1;
    console.log(this.cantidad);
    }

  decrementar() {
    if (this.cantidad>0) {
      this.cantidad = this.cantidad - 1
    } else {
        alert("Error: el numero debe mayor a 0");
    }
  }

}
