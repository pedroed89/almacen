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
      codigo:"FAria",
      nombre:"Fideos Arias",
      descripcion:"Fideos secos Arias 500gr",
      precioVenta: 45,
      precioCosto: 40,
      imagenUrl:"https://images-ti-vm1.tiendainglesa.com.uy/medium/P039591-1.jpg?20170830115429,Fideos-ADRIA-Tirabuzones-500-gr-en-Tienda-Inglesa",
      stock:10,
    },
    {
      codigo:"ABC",
      nombre:"Torta Alfajor",
      descripcion:"Torta artesanal",
      precioVenta: 349,
      precioCosto: 250,
      imagenUrl:"https://img.vixdata.io/pd/webp-large/es/sites/default/files/imj/elgranchef/r/receta-de-torta-rogel.jpg",
      stock:20,
    },
    {
      codigo:"ERR",
      nombre:"Cerveza artesanal",
      descripcion:"Cerveza artesana",
      precioVenta: 140,
      precioCosto: 120,
      imagenUrl:"https://www.distribuidorabebidas.com.uy/wp-content/uploads/sites/31/2018/01/cerveza_corana_botella_710.jpg",
      stock:40,
    },
    {
      codigo:"AAA",
      nombre:"Aceite de girasol",
      descripcion:"Aceite de girasol",
      precioVenta: 100,
      precioCosto: 80,
      imagenUrl:"https://supercampo.perfil.com/wp-content/uploads/2016/10/aceite-de-girasol-624x429.jpg",
      stock:50,
    },
    {
      codigo:"BS2",
      nombre:"Lentejas",
      descripcion:"Lentejas 400g",
      precioVenta: 75,
      precioCosto: 50,
      imagenUrl:"https://images-ti-vm1.tiendainglesa.com.uy/large/P001696-1.jpg?20190524110502,Lentejas-LA-ABUNDANCIA-450g-en-Tienda-Inglesa",
      stock:25,
    },
    {
      codigo:"987",
      nombre:"coco",
      descripcion:"coco entero",
      precioVenta: 900,
      precioCosto: 700,
      imagenUrl:"https://bit.ly/3f3DC6v%22",
      stock:38,
    },
    {
      codigo:"987",
      nombre:"coco",
      descripcion:"coco entero",
      precioVenta: 900,
      precioCosto: 700,
      imagenUrl:"https://bit.ly/3f3DC6v%22",
      stock:38,
    },
    {
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
  desde = 0;
  hasta = 0; 

  backup: Producto[];
  constructor() {
    this.backup = this.productos;
   }

  ngOnInit(): void {
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
