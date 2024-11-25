//----------- Funcion constructora ----------

export function Producto(nombre, precio, stock) {
    let _nombre = nombre;
    let _precio = precio;
    let _stock = stock;

    // Metodos publicos
    // Getters y Setters
    this.setNombre = function(nombre) {
        _nombre = nombre;
    };

    this.getNombre = function() {
        return _nombre;
    };

    this.setPrecio = function(precio) {
        _precio = precio;
    };
    
    this.getPrecio = function() {
        return _precio;
    };
    
    this.setStock = function(stock) {
        _stock = stock;
    };

    this.getStock = function() {
        return _stock;
    };

    this.updateStock = function(catidad) {
        _stock += catidad;
        return `Stock actualizado a ${this.getStock()}`;
    };

    this.obtenerInfo = function() {
        return `Nombre: ${this.getNombre()}\n Precio: ${this.getPrecio()}\nStock: ${this.getStock()}`;
    };

}




