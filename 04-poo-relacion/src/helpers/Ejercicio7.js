// Gestion de Usuarios desde una API

export function Usuario(id, nombre, email, rol) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.rol = rol;

    Usuario.prototype.info = function() {
        console.log(`
            ID: ${this.id}
            Nombre: ${this.nombre}
            Email: ${this.email}
            Rol: ${this.rol}
        `);
    }
}

export function GestionUsuarios() {
    this.usuarios = [];
}

GestionUsuarios.prototype.fetchUsuarios = async function() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){
            throw new Error("Error en la peticion");
        }
        const data = await response.json();
        
        //construimos los usuarios
        // this.usuarios = data.map((user) => {
        //     const { id, name, email } = user;
        //     return new Usuario(id, name, email, "Usuario");
        // })
        this.usuarios = data.map(({ id, name, email }) => new Usuario(id, name, email , "Usuario"));
        
        return this.usuarios;

    } catch (error) {
        console.log("Error fetching data", error);
    }
}

GestionUsuarios.prototype.guardarLocalStorage = function() {
    localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
}

GestionUsuarios.prototype.cargarLocalStorage = function() {
    const usuarios = JSON.parse(localStorage.getItem("usuarios"));
    if(usuarios){
        this.usuarios = usuarios.map(user => new Usuario(user.id, user.nombre, user.email, user.rol));
    }
    
}

    
// ----------- Clases Ejercicio 7 -----------


export class UsuarioClases {
    constructor(id, nombre, email, rol) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
    }

    info() {
        return`
            ID: ${this.id}
            Nombre: ${this.nombre}
            Email: ${this.email}
            Rol: ${this.rol}
        `;
    }
}

const apiURL = import.meta.env.VITE_URL;

export class GestionUsuariosClases {
    constructor() {
        this.usuarios = [];
    }

    async fetchUsuarios() {
        try {
            const response = await fetch(apiURL);
            if (!response.ok) {
                throw new Error("Error en la peticion");
            }
            const data = await response.json();

            //construimos los usuarios
            this.usuarios = data.map(({ id, name, email }) => new UsuarioClases(id, name, email, "Usuario"));

            return this.usuarios;        

        } catch (error) {
            console.log("Error fetching data", error);
        }
    }

    guardarLocalStorage() {
        localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
    }

    cargarLocalStorage() {
        const usuarios = JSON.parse(localStorage.getItem("usuarios"));
        if (usuarios) {
            this.usuarios = usuarios.map(user => new UsuarioClases(user.id, user.nombre, user.email, user.rol));
        }
    }
}


// renderizar en el dom un formulario que permita atraves de un input y un boton buscar por un nombre y buscar por nombre los usuarios de mi clase gestorUsuariosClases ademas pintaremos en un div llamado listadeusuarios utilizando li la data de todos los usuarios menos id  junto con el boton de borrar(Icono papelera) el boton tendra funcionalidad
