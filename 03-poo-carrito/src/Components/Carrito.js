import { Producto } from "./Producto";

export default class Carrito {
    constructor() {
        this.productos = [];

    }

    //Metodos
    agregarProducto(nombre, precio, stock) {
        this.productos.push(new Producto(nombre, precio, stock));
        //lo guardamos en el localStorage
        this.guardarLocalStorage();

    }

    borrarProducto(index){
        this.productos.splice(index, 1);
        //lo actualizo o modifico en el localStorage
        this.guardarLocalStorage();
    }


    editarProducto(index, newStock) {
        if ( newStock >= 0 ){
            this.productos[index].stock = newStock;
        }
        //lo actualizo o modifico en el localStorage
        this.guardarLocalStorage();
    }

    calcularTotalCarrito() {
        return this.productos.reduce((total, producto) => total + producto.calcularTotalCarrito(), 0 );
    }


    guardarLocalStorage(){
        localStorage.setItem('carrito', JSON.stringify(this.productos));
    }

    cargarLocalStorage(){
        const datoCarrito = JSON.parse(localStorage.getItem('carrito'));

        if (datoCarrito){
            this.productos = datoCarrito.map((producto) =>  new Producto(producto.nombre, producto.stock, producto.precio));
        }   
    }





}