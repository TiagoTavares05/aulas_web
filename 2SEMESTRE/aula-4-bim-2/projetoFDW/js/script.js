"use strict";


/*Este código será aperfeiçoada na próxima aula! */

//QUANDO LIGAR O HTML AO JS, O JS ENXERGARÁ A PÁGINA HTML COMO UM OBJETO. A PÁGINA TODA SERÁ UM OBJETO. ESSE OBJETO SE CHAMARA DOCUMENT. TODA VEZ QUE SE REFERIR AO HTML, UTILIZARÁ "DOCUMENT"

//MODELO DE OBJETOS DO DOCUMENTO (DOM) DOCUMENT OBJECT MODEL


//ESSA FORMA É "INCORRETA", MUITO LONGA 
//document.getElementById("saida").textContent = "Oi, mundo!";

//FORMA MAIS CORRETA, COERENTE
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const btnCalcular = document.getElementById("btnCalcular");
const saida = document.getElementById("saida");

//saida.textContent = "Oi, mundo2"

/*FUNÇÕES -------------------------------------*/

function obterP1(){
    return parseFloat(p1.value)
}

function obterP2(){
    return parseFloat(p2.value)  
}
function calcularMedia(notaP1, notaP2){
    return (notaP1+2*notaP2)/3;
}

function onClick (){

    const notaP1 = obterP1();
    const notaP2 = obterP2();
    const media = calcularMedia(notaP1,notaP2)
    saida.textContent = media.toFixed(2);
    //O PROBLEMA DISSO, É QUE notaP1 e notaP2 são objetos, então quando pedir para mostrar, irá mostrar NaN (not a number), adicionando o .value, le-se como numero. Porém, mesmo assim a média está errada, pois ele le o que voce escreve na caixa como string, então quando tiver soma, o valor é concatenado.
}

/*MANIPULADORES DE EVENTOS (EVENTO É QUANDO VOCÊ CLICA EM ALGUMA COISA NA TELA E ALGO ACONTECE, PODE SER PASSAR O MOUSE POR CIMA, EXISTEM VÁRIOS EVENTOS DIFERETES) ---------------------- */

    //O PRIMEIRO MÉTODO ESPERA POR UM EVENTO, nesse caso o "click"

    //A FUNÇÃO NÃO TEM PARAMETRO, O CLIQUE JÁ A CHAMA
    btnCalcular.addEventListener("click", onClick);
    
        /*
        function (){
            // FUNÇÃO DE CALLBACK. FUNÇÃO ANONIMA, NÃO TEM NOME. PODE SER ANONIMA PORQUE ELA É ATIVADA A PARTIR DE UM EVENTO. PODE TER NOME, PRINCIPALMENTE SE FOR NECESSÁRIO CHAMAR ELA MESMA "RECURSIVIDADE". SÓ PODE SER ANONIMA SE ESTIVER DENTRO DE OUTRA FUNÇÃO
            saida.textContent = "Oi, mundo!";
        }*/
    
    
    


