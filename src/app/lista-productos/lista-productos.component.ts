import { Component, OnInit } from '@angular/core';
import { Producto } from '../clases/producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos: Producto[] = [
    {
      id:1,
      codigo:"FAria",
      nombre:"Fideos Arias",
      descripcion:"Fideos secos Arias 500gr",
      precioVenta: 45,
      precioCosto: 40,
      imagenUrl:"https://images-ti-vm1.tiendainglesa.com.uy/medium/P039591-1.jpg?20170830115429,Fideos-ADRIA-Tirabuzones-500-gr-en-Tienda-Inglesa",
      stock:10,
    },
    {
      id:2,
      codigo:"ABC",
      nombre:"Torta Alfajor",
      descripcion:"Torta artesanal",
      precioVenta: 349,
      precioCosto: 250,
      imagenUrl:"https://img.vixdata.io/pd/webp-large/es/sites/default/files/imj/elgranchef/r/receta-de-torta-rogel.jpg",
      stock:20,
    },
    {
      id:3,
      codigo:"ERR",
      nombre:"Cerveza artesanal",
      descripcion:"Cerveza artesana",
      precioVenta: 140,
      precioCosto: 120,
      imagenUrl:"https://www.distribuidorabebidas.com.uy/wp-content/uploads/sites/31/2018/01/cerveza_corana_botella_710.jpg",
      stock:40,
    },
    {
      id:4,
      codigo:"AAA",
      nombre:"Aceite de girasol",
      descripcion:"Aceite de girasol",
      precioVenta: 100,
      precioCosto: 80,
      imagenUrl:"https://tiaecuador.vteximg.com.br/arquivos/ids/170789/257426000.jpg?v=637348493537970000",
      stock:50,
    },
    {
      id:5,
      codigo:"BS2",
      nombre:"Lentejas",
      descripcion:"Lentejas 400g",
      precioVenta: 75,
      precioCosto: 50,
      imagenUrl:"https://images-ti-vm1.tiendainglesa.com.uy/large/P001696-1.jpg?20190524110502,Lentejas-LA-ABUNDANCIA-450g-en-Tienda-Inglesa",
      stock:25,
    },
    {
      id:6,
      codigo:"987",
      nombre:"coco",
      descripcion:"coco entero",
      precioVenta: 900,
      precioCosto: 700,
      imagenUrl:"https://bit.ly/3f3DC6v%22",
      stock:38,
    },
    {
      id:7,
      codigo:"987",
      nombre:"coco",
      descripcion:"coco entero",
      precioVenta: 900,
      precioCosto: 700,
      imagenUrl:"https://bit.ly/3f3DC6v%22",
      stock:38,
    },
    {
      id:8,
      codigo:"987",
      nombre:"coco",
      descripcion:"coco entero",
      precioVenta: 900,
      precioCosto: 700,
      imagenUrl:"https://bit.ly/3f3DC6v%22",
      stock:38,
    }
  ]

  sku = "";
  valor=0;
  backup: Producto[];
  constructor() {
    this.backup = this.productos;
   }

  ngOnInit(): void {
  }

  filtrar(){
    let filteredProducts = this.productos.filter(producto =>{
      return producto.codigo.toLowerCase() === this.sku.toLowerCase();
    })
    this.productos = filteredProducts;
    
  }

  //  incrementar() {
  //   let valor = document.getElementById("item");
  //   if (valor.value < 10)valor.value ++;
  //   }
  
  handleCod(){
    if (this.sku.length === 0) {
      this.productos = this.backup;
    }
  }
}
