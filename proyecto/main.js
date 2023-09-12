const inputUno = document.querySelector('#uno');
const inputDos = document.querySelector('#dos');
const inputTres = document.querySelector('#tres');
const inputCuatro = document.querySelector('#cuatro');
const inputCinco = document.querySelector('#cinco');
const inputTotal = document.querySelector('#total');
const inputCapital = document.querySelector('#capital');
const inputInteres = document.querySelector('#interes');
const inputTime = document.querySelector('#time');
const inputCompest = document.querySelector('#total-compuest');
const optionInteres = document.querySelector('#option-interes');
const optionTime = document.querySelector('#option-time');
const btn = document.querySelector('#btn-compuest');

inputUno.addEventListener('change', sumar);
inputDos.addEventListener('change', sumar);
inputTres.addEventListener('change', sumar);
inputCuatro.addEventListener('change', sumar);
inputCinco.addEventListener('change', sumar);
optionInteres.addEventListener('change', optionInteresValue);
optionTime.addEventListener('change', optionTimeValue);
btn.addEventListener('click', calcular);



function optionInteresValue() {
    return changeValue();
}
function calcular() {
    let int = inputInteres.value / inputCapital.value;
    let result = inputCapital.value * (1 + int) ** changeValue();
    let decimalOff = Math.floor(result);
    let capitalFinal = decimalOff.toLocaleString('en');
    inputCompest.setAttribute("placeholder", `${capitalFinal}`);
    console.log(Math.floor(capitalFinal));
}
function optionTimeValue() {
  console.log(optionTime.value);
  return changeValue();
}
function changeValue() {
    let interesValue = optionInteres.value;
    let timeValue = optionTime.value;
    if(interesValue == "Diary" && timeValue == "Monthly"){
        return inputTime.value * 30;
    } else if(interesValue == "Diary" && timeValue == "Annual") {
        return inputTime.value * 365;
    } else if (interesValue == "Monthly" && timeValue == "Annual") {
        return inputTime.value * 12;
    } else {
        return inputTime.value;
    }
}



function numbers() {
    let count =  [Number(inputUno.value),Number(inputDos.value),Number(inputTres.value),Number(inputCuatro.value),Number(inputCinco.value)];
    result = count.reduce((a,b) => a + b);
    return result;
}
function sumar() {
    inputTotal.setAttribute("placeholder",`${numbers()}`)
}


