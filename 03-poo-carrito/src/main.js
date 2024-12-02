// 1 gestion dinamica de un carrito de la compra mediante funciones construcuturas y poo , 
// el objetivo  -- agregar prodictos al carrito guardadndo nombre cantida y precio
//              -- editar productos permitiendo  cambiar la cantidad.
//              -- eliminar productos.
//              -- actualizar a pagar dinamicamente.

import Carrito from "./Components/Carrito";

const carrito = new Carrito();
//cargamos los daos del localStorage al carrito
// carrito.cargarLocalStorage();

function pintarInterfazWeb () {
    const app = document.getElementById('app');
    
    function pintarCarrito () {
        const lista = document.getElementById('lista-productos');
        lista.innerHTML = carrito.productos.map(
            (producto, index) => {
                return `
                <li data-id="${index}">${producto.obtenerInfo()}
                <button class="btn-editar" data-id="${index}">Editar</button>
                <button class="btn-borrar" data-id="${index}">Borrar</button>
                </li>`
            }).join('');
        //calcular total del carrito

    }

    const handlerSubmit = (event) => {
        event.preventDefault();
        const nombre = document.getElementById('nombre-producto').value.trim();
        const stock = Number(document.querySelector('#stock-producto').value);
        const precio = Number(document.querySelector('#precio-producto').value);
        //Validacion del formulario basicos
        if (!nombre || stock < 0 || precio < 0) {
            alert(`Valores del formulario erroneos`)
        }

        //añadimos el nombre,stock,precio a un producto del carrito
        carrito.agregarProducto(nombre, stock, precio)
        pintarCarrito()
    };

    const opcionesProducto = (event) => {
        //target es el componente donde he hecho click o lo que sea 
        const indice =  Number(event.target.dataset.id)
        if (event.target.classList.contains('btn-borrar')) {
            carrito.borrarProducto(indice)
            pintarCarrito();
        }
        if (event.target.classList.contains('btn-borrar')) {
            alert('Voy a Borrar');
            carrito.borrarProducto
        }

    }
    
    app.innerHTML = `
        <h1> Carrito de la Compra de Product </h1>
        <form id="form-producto">
            <input id="nombre-producto" type="text" placeholder="Nombre del Producto">
            <input id="stock-producto" type="number" placeholder="Stock del Producto">
            <input id="precio-producto" type="number" placeholder="Precio del Producto">
            <button type="submit"> Agregar Producto</button>
        </form>
        <br></br>

        <div id="lista-productos"> </div>
    `;


    document.getElementById("form-producto").addEventListener("submit", handlerSubmit)

    document.getElementById("lista-productos").addEventListener("click", opcionesProducto);
    

}

pintarInterfazWeb();