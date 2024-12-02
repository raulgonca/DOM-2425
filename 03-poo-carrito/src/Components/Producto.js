//----------- Clase ----------
export class Producto {

    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    
    //Metodos
    
    calcularTotal(){
        return this.precio * this.stock;
    }

    updateStock(catidad) {
        this.stock += catidad;
        return `Stock actualizado a ${this.getStock()}`;
    };

    obtenerInfo() {
        return `Nombre: ${this.nombre} --- Precio: ${this.precio} --- Stock: ${this.stock} --- Total: ${this.calcularTotal()}`;
    };



}