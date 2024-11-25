//----------- Clase ----------
export class ProductoClases {
    #nombre
    #precio
    #stock

    constructor(nombre, precio, stock) {
        this.#nombre = nombre;
        this.#precio = precio;
        this.#stock = stock;
    }

    // Getters y Setters
    setNombre(nombre) {
        this.#nombre = nombre;
    };

    getNombre() {
        return this.#nombre;
    };

    setPrecio(precio) {
        this.#precio = precio;
    };
    
    getPrecio() {
        return this.#precio;
    };
    
    setStock(stock) {
        this.#stock = stock;
    };

    getStock() {
        return this.#stock;
    };

    updateStock(catidad) {
        this.stock += catidad;
        return `Stock actualizado a ${this.getStock()}`;
    };

    obtenerInfo() {
        return `Nombre: ${this.getNombre()}\n Precio: ${this.getPrecio()}\n Stock: ${this.getStock()}`;
    };



}