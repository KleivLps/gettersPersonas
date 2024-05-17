//1. QUE SON LOS GETTERS, SETTERS

//Son metodos que permiten acceder y modificar los atributos (propiedades) de un objeto de una manera controlada. Estos metodos ofrecen una forma de encapsulacion, lo que significa que ocultan los detalles internos de la implementacion de las propiedades y proporcionan una interfaz para interactuar con ellas 

//1. GETTER (Metodo de acceso) : un getter es un metodo que se utiliza para obtener el valor de una propiedad privada de un objeto. Se define utilizando la palabra clave get seguida del nombre de la propiedad que se quiere obtener. Los getters no toman argumentos y se invocan simplemente llamando al nombre de la propiedad como si fuera un atributo.

//ejemplo: supongamos que tennemos una clase persona con una propiedad privada_edad y un getter paraacceder a esa propiedad:

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre ;
        this._edad = edad;
    }

    get edad() {
        return this._edad;
    }
}

const personas = new Persona("juan", 30);
console.log(persona.edad); //Output:30

//2.SETTER (Metodo de modificacion):Un setter es un metodo que se utiliza para modificar el valor de una propiedad privada de un objeto.Se define Utilizando la palabra clave set seguida del nombre de la propiedad que se quiere modificar. Los setters toman un argumento que representa el nuevo valor de la propiedad y se invocan como si estuvieras asignando un valor a una propiedad.

//ejemplo: Agregando un setter para modificar la edad de la persona:

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this._edad = edad;
    }

    get edad() {
        return this._edad;
    }

    set edad(nuevaEdad) {
        if(nuevaEdad > 0) {
            this._edad = nuevaEdad;
        }
    }
}
const persona = new Persona("juan", 30);
console.log(persona.edad); // Output: 30

persona.edad = 35;
console.log(persona.edad); //Output: 35

persona.edad = -5; //No se permiten valores negativos.
console.log(persona.edad); //Outpot: 35