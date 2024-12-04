//----------- Funcion Constructor ----------
export function Empleado(nombre, edad, puesto) {
    this.nombre = nombre;
    this.edad = edad;
    this.puesto = puesto;
}
    //Metodo Compartido para calcular salario
Empleado.prototype.calcularSalario = function() {
    const salarioBase = {
        "junior": 1500,
        "semiSenior": 2000,
        "senior": 3000
    };
    return salarioBase[this.puesto] || 0 ;
}

Empleado.prototype.info = function() {
        // Si lo vamos a usar en el DOM lo devolvemos con return, en este caso como no lo vamso a usar hacemos un clg
        console.log( `
            Nombre: ${this.nombre}  
            Edad: ${this.edad}  
            Puesto: ${this.puesto} 
            Salario: ${this.calcularSalario()}
        `);
}


//Clase hija de Empleado 
export function EmpleadoFreelance(nombre, edad, precioHora){
    Empleado.call(this, nombre, edad, "Freelance");
    this.precioHora = precioHora;


    //Metodo prototipico de la clase padre
    EmpleadoFreelance.prototype= Object.create(Empleado.prototype);
    EmpleadoFreelance.prototype.constructor = EmpleadoFreelance;
}

EmpleadoFreelance.prototype.info = function(numHoras) {
        console.log(`
            Nombre: ${this.nombre}
            Edad: ${this.edad}
            Puesto: ${this.puesto}
            Precio por hora: ${this.precioHora}
            Horas trabajadas: ${this.calcularSalario(this.numHoras)}
            `);
        }

    //Metodo para calcular el salario por horas
EmpleadoFreelance.prototype.calcularSalario = function(numHoras) {
        return numHoras * this.precioHora;
    }






//----------- Clase ----------

export class EmpleadoClases{
    constructor(nombre, edad, puesto){
        this.nombre = nombre;
        this.edad = edad;
        this.puesto = puesto;
    }
    calcularSalario(){
        const salarioBase = {
            junior: 1500,
            semiSenior: 2000,
            senior: 3000
        };
        return salarioBase[this.puesto] || 0 ;
    }
    info(){
        console.log( `
            Nombre: ${this.nombre}  
            Edad: ${this.edad}  
            Puesto: ${this.puesto} 
            Salario: ${this.calcularSalario()}
        `);
    }
}


export class EmpleadoFreelanceClases extends EmpleadoClases{
    constructor(nombre, edad, precioHora){
        super(nombre, edad, "Freelance");
        this.precioHora = precioHora;
    }

    info(horasTrabajadas){
        console.log(`
            Nombre: ${this.nombre}
            Edad: ${this.edad}
            Puesto: ${this.puesto}
            Precio por hora: ${this.precioHora}
            Salario: ${this.calcularSalario(horasTrabajadas)}
            `);
    }
    calcularSalario(horasTrabajadas){
        return horasTrabajadas * this.precioHora;
    }
}
