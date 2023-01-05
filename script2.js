//manipulacion del dom desde javascript
const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')

//Lo que sucede aqui es concatenacion, lo que se guarda
//automaticamente es string, hay que convertirlos a num
function btnOnClickSum () {
    const sumInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: "+sumInputs;
}

function btnOnClickMinus () {
    const sumInputs = Number(input1.value) - Number(input2.value);
    pResult.innerText = "Resultado: "+sumInputs;
}

function btnOnClickDiv () {
    const sumInputs = Number(input1.value) / Number(input2.value);
    pResult.innerText = "Resultado: "+sumInputs;
}

function btnOnClickMult () {
    const sumInputs = Number(input1.value) * Number(input2.value);
    pResult.innerText = "Resultado: "+sumInputs;
}