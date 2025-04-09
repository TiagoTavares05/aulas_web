"use strict";
const btnCalcular = document.getElementById("btnCalcular");
const btnSalvar = document.getElementById("btnSalvar");
const btnListar = document.getElementById("btnListar");
const btnlimpar = document.getElementById("btnLimpar");
const saida = document.getElementById("saida");
const arrNotasS = [];
const msgnotas = [];
let objNotasS = {};

let obterNota = (snota) => parseFloat(document.getElementById(snota).value)

function calcularMedia(notaP1, notaP2){
    return ((notaP1+2*notaP2)/3).toFixed(2);
}

function obterNotas(){
    const objNotas ={
        p1: parseFloat(p1.value),
        p2: parseFloat(p2.value)
    };
    return objNotas;
}

function exibirSaida(msg)
{
    return saida.textContent = msg;
}

let validarNota = (nota) => nota>=0 && nota<=10 ? nota = true : false; //isNAN() verifica se o valor não é número!!

function salvarNota(p1,p2,media){
    objNotasS = {
        p1: parseFloat(p1),
        p2: parseFloat(p2),
        media: parseFloat(media)
    }
    arrNotasS.push(objNotasS)
}

function listarNota(){
    for(let i = 0; i<arrNotasS.length; i++){
      saida.textContent = "P1: "+ arrNotasS[i].p1 + " P2: " + arrNotasS[i].p2 + " Media: " + arrNotasS[i].media
      msgnotas.push(saida.textContent)
    }
    const msg2 = msgnotas.join("<br>")
    document.getElementById("saida").innerHTML = msg2;
}

function limparNota(){
    arrNotasS.splice(0, arrNotasS.length)
    msgnotas.splice(0, msgnotas.length)
    exibirSaida("Lista limpa!!!")
    
}

function onClickCalcular (){
    const notas = obterNotas();
    if (validarNota(notas.p1) && validarNota(notas.p2)){
        const media = calcularMedia(notas.p1,notas.p2)
        exibirSaida(media)
    }
    else{
        exibirSaida("Erro ao calcular a media")
    }
}

function onClickSalvar (){
    const notas = obterNotas();
    if (validarNota(notas.p1) && validarNota(notas.p2)){
    salvarNota(parseFloat(notas.p1), parseFloat(notas.p2), calcularMedia(notas.p1,notas.p2))
    exibirSaida("Notas Salvas")
    }
    else{
        exibirSaida("Erro ao salvar")
    }
}

function onClickListar (){
    if(arrNotasS.length!=0){
        listarNota();
    }
    else{
        exibirSaida("Não existe notas salvas!!")
    }

}

function onClickLimpar()
{
    if(arrNotasS.length!=0){
        limparNota();
    }
    else{
        exibirSaida("Não existe notas para limpar!!")
    }
}

    btnCalcular.addEventListener("click", onClickCalcular);
    btnSalvar.addEventListener("click",onClickSalvar)
    btnListar.addEventListener("click",onClickListar)
    btnlimpar.addEventListener("click",onClickLimpar)
    


