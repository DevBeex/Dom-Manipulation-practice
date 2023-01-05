//manipulacion del dom desde javascript
const h1 = document.querySelector('h1')
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')

// form.addEventListener('submit', sumarInputsValue); //Mandar instrucciones cuando se realiza un evento, en este caso el click


// function sumarInputsValue (event) {
//     console.log({event})
//     event.preventDefault()
//     const sumInputs = Number(input1.value) + Number(input2.value);
//     pResult.innerText = "Resultado: "+sumInputs;
// }

btn.addEventListener('click', sumarInputsValue); //Mandar instrucciones cuando se realiza un evento, en este caso el click


function sumarInputsValue (event) {
    //console.log({event})
    //event.preventDefault()
    const sumInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: "+sumInputs;
}
