//---------- Ejercicio 3 -----------
import { Empleado, EmpleadoClases, EmpleadoFreelance, EmpleadoFreelanceClases } from "./helpers/Ejercicio3.js";
import { GestionUsuarios, GestionUsuariosClases } from "./helpers/Ejercicio7.js";


// console.log("Ejercicio 3");
// const Empleado1 = new Empleado("Jorge", 30, "junior");
// const Empleado2 = new Empleado("Maria", 25, "senior");


// Empleado1.info();
// Empleado2.info();

// const Freelance1 = new EmpleadoFreelance("Marino", 30, 50);
// const Freelance2 = new EmpleadoFreelance("Juan", 25, 60);

// // Freelance1.info(20);
// Freelance2.info();


// console.log("----------- Ejercicio3 con Clases ---------------");

// const EmpleadoClase = new EmpleadoClases("Pedro", 40, "senior");
// const EmpleadoClase2 = new EmpleadoClases("Laura", 25, "junior");


// EmpleadoClase.info();
// EmpleadoClase2.info();

// const FreelanceClase = new EmpleadoFreelanceClases("Ana", 30, 50);
// const FreelanceClase2 = new EmpleadoFreelanceClases("Alvaro", 25, 60);

// FreelanceClase.info(20);
// FreelanceClase2.info(10);


console.log("----------- Ejercicio 7 con Clases ---------------");


function handlerSubmitUsuario(event) {
    event.preventDefault();
    alert("buscaru usuario");
}

async function init() {
    try {

        function handlerClickEliminar(event) {

            if (event.target.classList.contains("btn-borrar")) {
                const indice = event.target.dataset.id;
                gestorUser.usuarios.splice(indice, 1);
            }
            
        }

        const gestorUser = new GestionUsuariosClases();
        console.log(await gestorUser.fetchUsuarios());

        renderGestion();

        function renderGestion() {
            const app = document.getElementById("app");
            if (!app) {
                console.error("Elemento 'app' no encontrado en el DOM");
                return;
            }

            const h1element = document.createElement("h1");
            h1element.innerText = "Uso de POO con JSONPLACEHOLDER";
            app.appendChild(h1element);

            const divBuscarUsuarios = document.createElement("div");
            divBuscarUsuarios.id = "buscar-usuarios";
            app.appendChild(divBuscarUsuarios);
            divBuscarUsuarios.innerHTML = `
            <form id="form-usuarios">
                <input id="nombre-buscar" type="text" placeholder="Nombre a buscar">
                <button type="submit" id="buscar" class="btn-buscar">Buscar Usuario</button>
            </form>
            `;

            const divListaUsuarios = document.createElement("div");
            divListaUsuarios.id = "lista-usuarios";
            app.appendChild(divListaUsuarios);

            if (Array.isArray(gestorUser.usuarios)) {
                divListaUsuarios.innerHTML = gestorUser.usuarios.map((user, index) => {
                    return `
                    <li data-id="${index}">
                        ${user.info()}
                        <button data-id="${index}" class="btn-borrar">Borrar</button>
                    </li>
                    `;
                }).join("");
            }

            document.getElementById("lista-usuarios").addEventListener("click", handlerClickEliminar);
            document.querySelector("#form-usuarios").addEventListener("submit", handlerSubmitUsuario);



        }
    } catch (error) {
        console.error("Error al inicializar la aplicación:", error);
    }
}

init();

