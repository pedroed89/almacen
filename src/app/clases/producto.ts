export class Producto {
    codigo:string;
    nombre:string;
    descripcion:string;
    precioVenta: number;
    precioCosto: number;
    imagenUrl:string;
    stock:number;

    constructor(){
      this.codigo = "";
      this.nombre = "";
      this.descripcion = "";
      this.precioVenta = 0;
      this.precioCosto = 0;
      this.imagenUrl = "";
      this.stock = 0;
    }

}
