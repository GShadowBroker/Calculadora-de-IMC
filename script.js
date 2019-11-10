'use strict';

function calcularIMC() {

    let peso = document.querySelector('#peso').value;
    let altura = document.querySelector('#altura').value;
    let output = document.querySelector('#output');
    let description1 =  document.querySelector('#description1');
    let description2 = document.querySelector('#description2');
    let kg = document.querySelector('#kg');
    let lbs = document.querySelector('#lbs');
    let m = document.querySelector('#m');
    let ft = document.querySelector('#ft');
    let resultado = document.querySelector('.result');

    if (lbs.selected) { // converts lbs into kg
        peso = peso / 2.205;
    }
    if (ft.selected) { // converts in into m
        altura = altura / 3.281;
    }     

    let imc = (1.3 * peso / Math.pow(altura,2.5));

    if (!imc || imc == Infinity) {
        alert("Você não inseriu a sua altura e/ou peso!");
    } else {
        resultado.style.visibility = 'visible';
        output.textContent = replaceDot(imc.toFixed(1));
    }

    if (imc <= 16.9) {
        description1.textContent = "O seu IMC é considerado: MUITO ABAIXO DO PESO.";
        description2.textContent = "O que pode acontecer: Queda de cabelo, infertilidade, ausência menstrual.";
    } else if (imc > 16.9 && imc <= 18.4) {
        description1.textContent = "O seu IMC é considerado: ABAIXO DO PESO.";
        description2.textContent = "O que pode acontecer: Fadiga, stress, ansiedade."
    }  else if (imc > 18.4 && imc <= 24.9) {
        description1.textContent = "O seu IMC é considerado: PESO NORMAL.";
        description2.textContent = "O que pode acontecer: Menor risco de doenças cardíacas e vasculares.";
    } else if (imc > 24.9 && imc <= 29.9) {
        description1.textContent = "O seu IMC é considerado: ACIMA DO PESO.";
        description2.textContent = "O que pode acontecer: Fadiga, má circulação, varizes.";
    } else if (imc > 29.9 && imc <= 34.9) {
        description1.textContent = "O seu IMC é considerado: OBESIDADE GRAU I.";
        description2.textContent = "O que pode acontecer: Diabetes, angina, infarto, aterosclerose.";
    } else if (imc > 34.9 && imc <= 40) {
        description1.textContent = "O seu IMC é considerado: OBESIDADE GRAU II.";
        description2.textContent = "O que pode acontecer: Apneia do sono, falta de ar.";
    } else if (imc > 40) {
        description1.textContent = "O seu IMC é considerado: OBESIDADE GRAU III";
        description2.textContent = "O que pode acontecer: Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC.";
    }

    return imc.toFixed(1);
}

function replaceDot(number) {
    number = number.toString();
    number = number.split("");

    let arrC = number;

    for (let i=0; i<arrC.length; i++) {
        if (arrC[i] == ".") {
            arrC[i] = ",";
        }
    }
    
    arrC = arrC.join("");
    number = arrC;

    return number;
}

/*BOTÃO*/

let botão = document.querySelector('#button');
let voltar = document.querySelector('#voltar');
botão.addEventListener('mouseenter', mouseEnter(botão));
voltar.addEventListener('mouseenter',mouseEnter(voltar));


function mouseEnter(button) {
    button.style.cursor = 'pointer';
}

function esconderResultado() {
    let resultado = document.querySelector('.result');

    if (resultado.style.visibility === 'visible') {
        resultado.style.transition = '0s';
        resultado.style.visibility = 'hidden';
    }
}

function opacityON() {
    let resultado = document.querySelector('.result');

    resultado.style.transition = '1s';
    resultado.style.opacity = '0.5';
}
function opacityOFF() {
    let resultado = document.querySelector('.result');

    resultado.style.transition = '0.5s';
    resultado.style.opacity = '1';
}


/*PRACTICE*/

