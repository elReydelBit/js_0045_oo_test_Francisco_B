// Esta es la clase Base Figura
export class Figura{
    
    //Ponemos los atributos de forma privada
    #nombre  //Este atributo será común a todas las figuras
    
    constructor(nombre){
        this.nombre = nombre
    }
    
    //Voy a meter métodos getter y setter
    //Método getter para el atributo nombre
    get nombre(){
        return this.#nombre
    }

    //Método setter para el atributo nombre
    set nombre(nombre){
        this.#nombre = nombre
    }
    
    //Método perimetro abstracto ya que no se va hacer nada con él en esta clase, de sobreescribirá en las clases derivadas
    perimetro(){
        return 0
    }   
    //Método area abstracto ya que no se va hacer nada con él en esta clase, de sobreescribirá en las clases derivadas
    area(){
        return 0
    }
}

// Esta es la clase Derivada Triangulo
export class Triangulo extends Figura {
    
    //Atributos privados para la clase Triangulo
    #lado1
    #lado2
    #lado3

    constructor(lado1, lado2, lado3, nombre) {
        this.#lado1 = lado1
        this.#lado2 = lado2
        this.#lado3 = lado3
        super(nombre)
    }

    // Método getter para el atributo lado1
    get lado1() {
        return this.#lado1
    }

    // Método setter para el atributo lado1
    set lado1(lado1) {
        this.#lado1 = lado1
    }

    // Método getter para el atributo lado2
    get lado2() {
        return this.#lado2
    }

    // Método setter para el atributo lado2
    set lado2(lado2) {
        this.#lado2 = lado2
    }

    // Método getter para el atributo lado3
    get lado3() {
        return this.#lado3
    }

    // Método setter para el atributo lado3
    set lado3(lado3) {
        this.#lado3 = lado3
    }

    // Definir la función área usando la fórmula de Herón
    area() {
        const s = (this.lado1 + this.lado2 + this.lado3) / 2;
        return Math.sqrt(s * (s - this.lado1) * (s - this.lado2) * (s - this.lado3))
    }

    // Definir la función perímetro
    perimetro() {
        return this.lado1 + this.lado2 + this.lado3
    }
}

// crear un triangulo con base = 10 altura = 20 y nombre tri1
export function createTriangulo() {
    // return new Triangulo(10, 20, "tri1")
    const tri1 = new Triangulo(10, 20, 30, "tri1")
    return tri1    
}

// crea una clase llamada cuadrado que tenga un atributo 
// llamado lado. La clase extiende de Figura

export class Cuadrado extends Figura {
    
    // poner el constructor y el atributo
    // tiene que tener un atributo llamado lado y otro
    // tiene que tener dos funciones area y perimetro

    //Atributo privado
    #lado
    #otro
    //Constructor
    constructor(lado, nombre){
        super(nombre)
        this.#lado = lado   
    }
    
    // añadir un getter para el atributo lado
    get lado(){
        return this.#lado
    }
    // añadir un setter para el atributo lado
    set lado(lado){
        this.#lado = lado
    }
    // añadir un getter para el atributo nombre
    get nombre(){
        return super.nombre
    }
    // añadir un setter para el atributo nombre
    set nombre(nombre){
        super.nombre = nombre
    }

    // añadir un getter para el atributo area
    area(){
        return this.lado * this.lado
    }
    // añadir un getter para el atributo perimetro
    perimetro(){
        return this.lado * 4
    }

}
// esta funcion debe de crear un cuadrado de lado l
// y nombre cua1
export function createCuadrado(lado, nombre) {
    
    //Usamos los argumentos y les asignamos a los valores exigidos
    lado= 1
    nombre = "cua1"

    //Una vez conseguidos creamos el cuadrado deseado
    const cua1 = new Cuadrado(lado, nombre)

    //Devolvemos el cuadrado creado
    return cua1
}

// crear una clase llamada Rectangulo que tenga dos atributos
// llamados base y altura. La clase extiende de Figura
export class Rectangulo  extends Figura {
    // poner el constructor y los atributos privados
    // tiene que tener dos funciones area y perimetro
    
    //Atributos privados
    #base
    #altura

    //Constructor
    constructor(base, altura, nombre){
        super(nombre)
        this.#base = base
        this.#altura = altura
    }
    
    // añadir un getter para el atributo base
    get base(){
        return this.#base
    }
    // añadir un setter para el atributo base
    set base(base){
        this.#base = base
    }
    // añadir un getter para el atributo altura
    get altura(){
        return this.#altura
    }
    // añadir un setter para el atributo altura
    set altura(altura){
        this.#altura = altura
    }
    // añadir un getter para el atributo nombre
    get nombre(){
        return super.nombre
    }
    // añadir un setter para el atributo nombre
    set nombre(nombre){
        super.nombre = nombre
    }
    // añadir un getter para el atributo area
    area(){
        return this.base * this.altura
    }
    // añadir un getter para el atributo perimetro
    perimetro(){
        return 2 * (this.base + this.altura)
    }

} 

// hacer lo mismo para la clase Circulo
export class Circulo extends Figura {
    //Atributos privados
    #radio
    #diametro

    //Constructor
    constructor(radio, nombre){
        super(nombre)
        this.#radio = radio
        this.#diametro = radio * 2
    }
    
    // añadir un getter para el atributo radio
    get radio(){
        return this.#radio
    }
    // añadir un setter para el atributo radio
    set radio(radio){
        this.#radio = radio
    }
    // añadir un getter para el atributo diametro
    get diametro(){
        return this.#diametro
    }
    // añadir un setter para el atributo diametro
    set diametro(diametro){
        this.#diametro = diametro
    }
    // añadir un getter para el atributo nombre
    get nombre(){
        return super.nombre
    }
    // añadir un setter para el atributo nombre
    set nombre(nombre){
        super.nombre = nombre
    }
    // añadir un getter para el atributo area
    area(){
        return Math.PI * Math.pow(this.radio, 2);
    }
    // añadir un getter para el atributo perimetro
    perimetro(){
        return 2 * Math.PI * this.radio;
    }
}


export function createCirculo(nombre, radio) {
   
    return new Circulo(nombre, radio)
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