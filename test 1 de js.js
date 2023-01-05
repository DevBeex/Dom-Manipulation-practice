var nombre = String;
//test variables
nombre = "Benjamin";
var apellido = String;
apellido = "Rodriguez"
var dineroAhorrado = Number;
dineroAhorrado = 1000;
var deudas = Number;
deudas = 500;
var dineroReal = dineroAhorrado-deudas;

console.log("Nombre: "+nombre+" "+apellido)
console.log("Dinero real: "+dineroReal)

//test funciones
function presentation (name, lastname, nickname){
    completeName = name +" " + lastname;
    console.log("Mi nombre es "+completeName+", pero prefiero que me digas "+nickname+".")
};

presentation("Juan David", "Castro Gallego", "juandc");

//test condicionales

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar todos los cursos de Platzi Durante un año");
}

if (tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
} 
if (tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} 
if (tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de platzi durante un año");
} 
if (tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar todos los cursos de Platzi Durante un año");
}

let i = 0;
while (i < 5){
    console.log("El valor de i es: "+i)
    i++;
}

i = 10;
while (i >= 2){
    console.log("El valor de i es: "+i)
    i--;
}

/* var r = 0;
while (r == 0){
    let respuesta = prompt("¿Cuánto es 2 + 2?")
    if (respuesta == 4){
        console.log("Felicidades")
        r = 1;
    } else {
        console.log("Intentalo de nuevo")
    }
}
*/
var frutas = ["Manzana", "pera"];

function imprimirPrimerElemento (frutas){
    console.log(frutas.shift())
}
imprimirPrimerElemento(frutas)

var frutas = ["Manzana", "pera"];

function imprimirPrimerElemento (frutas){
   frutas.forEach(function(fruta){
    console.log(fruta)
   })
}
imprimirPrimerElemento(frutas)

var articulos = [
    {
        nombre: "Bici",
        costo: 3000
    },
    {
        nombre: "Tv",
        costo: 2500
    }
]

function imprimirElementoPorElementoObjeto (articulos){
    const arr = Object.values(articulos)
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

imprimirElementoPorElementoObjeto(articulos)

//Object.keys() //propiedades de elementos

const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: "Puedes tomar durante un mes",
    expert: "casi todos los cursos",
    expertduo: "tu y alguien mas todos"
}

//tiposDeSuscripciones['free']
//tiposDeSuscripciones.free //lo mismo para ambos

//const ejemplosSuscripcion = 'free'

//tiposDeSuscripciones[ejemplosSuscripcion]

function tipoSus (suscripcion){
    if (tiposDeSuscripciones[suscripcion]){
        return console.log(tiposDeSuscripciones[suscripcion]);
    }
    console.warn("Esa suscripción no existe")
}
tipoSus('free')

