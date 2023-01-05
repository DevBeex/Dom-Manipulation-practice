//manipulacion del dom desde javascript
const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const parrafito = document.querySelector('.parrafito')
const pid = document.querySelector('#pid')
const input = document.querySelector('input')

console.log(input.value)

console.log({h1, p, parrafito, pid, input})

//h1.innerHTML = 'Patito <br> feo'; //modificar todo el html
h1.innerText = 'texto' //modificar el h1
console.log(h1.getAttribute('pantalla'))//obtener el atributo
h1.setAttribute('class', 'rojo') //modificar clase o cualquier cosa
h1.classList.add('rojo');//anadir clase
h1.classList.remove('verde')//quitar clase

input.value = 456

const img = document.createElement('img')
console.log(document.createElement('img')); //consola
img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/3/32/Platzi.jpg')
console.log(img)

pid.innerHTML = "";
pid.append(img) 
