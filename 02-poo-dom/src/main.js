import { Producto } from "./Components/Producto.js";
import { ProductoClases } from "./Components/ProductoClases.js";

// clase para modelar un sistema de usuarios que puedan iniciar sesión y cerrar sesión y actualizar su perfil

// //-------- SOLUCION CON FUNCIONES CONSTRUTURAS --------

// function Usuario(nombre, email, password) {
//     this.nombre = nombre;   //variables de instancia publicas
//     this.email = email;
//     let _password = password; //si tiene la barra baja al principio, esto hace que sea privada

//     // Metodos publicos 
//     this.login = function(email, password) {
//         //quiero evaluar si email y password son correctos
//         if (this.email === email && _password === password) {
//             return `Bienvenido ${nombre}`;
//         }
//             return "Usuario o contraseña incorrectos";
//     };

//     this.updateEmail = function(newEmail) {
//         this.email = newEmail;
//         return `Email actualizado a ${this.email}`;
//     };
// }


// // Crear un Usuario

// const usuario1 = new Usuario("Raul", "raul@gmail.com", "123456");

// // -------- Lo mostraremos en la DOM -----------

// const app = document.getElementById("app");

// function renderUsuario() {
//     app.innerHTML = 
//         `<h2> Usuario : ${usuario1.nombre}</h2>
//          <p> Email : ${usuario1.email}</p>
//         <button id="btnLogin">Login</button>
//         `;

    
//     //Añadir evento al boton
//     const btnLogin = document.getElementById("btnLogin");
//     btnLogin.addEventListener("click", () => {
//         alert(usuario1.login("pepe@gmail.com", "123456"));
//     });
// }



// // -------- SOLUCION CON CLASES --------


// class UsuarioClases {
//     //las variables privadas son declaradas anteponiendo el símbolo de # al nombre
//     #password;

//     constructor(nombre, email, password) {
//         this.nombre = nombre;
//         this.email = email;
//         this.#password = password;
//     }

//     login(email, password) {
//         if (this.email === email && this.#password === password) {
//             return `Bienvenido ${this.nombre}`;
//         }
//         return "Usuario o contraseña incorrectos";
//     }

//     updateEmail(newEmail) {
//         this.email = newEmail;
//         return `Email actualizado a ${this.email}`;
//     }
// }

// // Crear un Usuario
// const usuario2 = new UsuarioClases("Raul", "raul@gmail.com", "123456");


// 2. Implementar un modelo de producto con funciones constructoras y clases que permita obtener informacion del producto,
// actualizar el stock debiendo registrar nombre, precio y stock


// -------- Array de productos --------

const productos = [
    new Producto("Portatil", "510", "10"),
    new Producto("Movil", "1000", "5"),
    new Producto("Tablet", "200", "20")
];

// -------- Renderizar los productos --------

const app = document.getElementById("app");

app.innerHTML = `
    <h2>Gestion de productos</h2>
    ${productos.map((producto, index) => {
        return `<li> 
            ${producto.obtenerInfo()} 
            <button class="btnUpdateStock" data-index="${index}">Actualizar stock</button>
            
        </li> `;
    })
    .join('')}
    `;

// Añadir evento al boton de actualizar stock

document.querySelectorAll(".btnUpdateStock").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        alert("Actualizando stock");
    });
});

