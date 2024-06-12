// Esta es la clase Base Figura
export class Figura{
    constructor(nombre){
        this.nombre = nombre
    }
    perimetro(){
        return 0
    }   
    area(){
        return 0
    }
}

// Esta es la clase Derivada Triangulo
export class Triangulo extends Figura {
    constructor(base, altura, nombre){
        super(nombre)
        this.base = base
        this.altura = altura
    }
    // definir la funcion area y la funcion perimetro
}

// crear un triangulo con base = 10 altura = 20 y nombre tri1
export function createTriangulo() {
    // return new Triangulo(10, 20, "tri1")
}

// crea una clase llamada cuadrado que tenga un atributo 
// llamado lado. La clase extiende de Figura

export class Cuadrado {
    // poner el constructor y el atributo
    // tiene que tener un atributo llamado lado y otro
    // tiene que tener dos funciones area y perimetro

    // añadir un getter para el atributo lado
    // añadir un setter para el atributo lado
    // añadir un getter para el atributo nombre
    // añadir un setter para el atributo nombre
    // añadir un getter para el atributo area
    // añadir un getter para el atributo perimetro
}
// esta funcion debe de crear un cuadrado de lado l
// y nombre cua1
export function createCuadrado(lado, nombre) {
    return new Cuadrado(lado, "cua1")
}

// crear una clase llamada Rectangulo que tenga dos atributos
// llamados base y altura. La clase extiende de Figura
export class Rectangulo {
    // poner el constructor y los atributos privados
    // tiene que tener dos funciones area y perimetro
    // añadir un getter para el atributo base
    // añadir un setter para el atributo base
    // añadir un getter para el atributo altura
    // añadir un setter para el atributo altura
    // añadir un getter para el atributo nombre
    // añadir un setter para el atributo nombre
    // añadir un getter para el atributo area
    // añadir un getter para el atributo perimetro

} 

// hacer lo mismo para la clase Circulo
export class Circulo {

}


export function createCirculo(nombre, radio) {
    
}


// module.exports = {
//     createObject,
//     Figura,
//     Triangulo,
//     Cuadrado,
//     Rectangulo,
//     Circulo,
    
//     createTriangulo,
//     createCuadrado,
//     createCirculo,
//     createRectangulo
// };
// 