//----------- Clase ----------
export class Producto {
    #precio;  

    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.#precio = precio;
        this.stock = stock;
    }

    // Getters y Setters
    setPrecio(newPrecio) {
        this.#precio = newPrecio;
    };
    
    getPrecio() {
        return this.#precio;
    };
    
    calcularTotal(){
        return this.#precio * this.stock;
    }

    updateStock(catidad) {
        this.stock += catidad;
        return `Stock actualizado a ${this.getStock()}`;
    };

    obtenerInfo() {
        return `Nombre: ${this.nombre}\n Precio: ${this.#precio}\n Stock: ${this.stock}, Total: ${this.calcularTotal()}`;
    };



}