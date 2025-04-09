"use strict";

const cep = document.getElementById("cep");
const btnPesquisar = document.getElementById("btnPesquisar");
const saida = document.getElementById("saida");

//INTRODUÇÃO E REVISÃO DA AULA PASSADA


//NOSSA FORMA
/*

function Onclick()
{
    saida.textContent="Oi!";
}

btnPesquisar.addEventListener("click", Onclick)
*/

//FORMA DO SOBRINO COM CALLBACK

/*
btnPesquisar.addEventListener("click", 
    function (){
        saida.textContent = "Oi!"
    }
);*/

//FORMA RESUMIDA COM ARROW FUNCTION

/*
btnPesquisar.addEventListener("click", 
    () =>{
        saida.textContent = "Oi!"
    }
);*/

//MOSTRAR O CEP NA TELA

function obterCEP()
{
   return cep.value;
}

function exibirDadosCep(dadosJSON){
    if(!dadosJSON.erro){
        return `${dadosJSON.logradouro} - ${dadosJSON.bairro} <br> - ${dadosJSON.localidade} - ${dadosJSON.uf}`;
    } else{
        return `Cep inexistente`;
    }
}



async function Onclick()
{
    const urlcep= "https://viacep.com.br/ws/"+ obterCEP()+"/json/"
    saida.textContent = "";


    //OUTRA FORMA DE CONCATENAR A URL 'httpsviacep.com.br/ws/${obterCEP()}/json/'

    try{

    

    const resposta = await fetch (urlcep); //método de busca, busca o cep informado na url, retorna um objeto, uma promise

    if(!resposta.ok){
        throw new Error ("Erro ao buscar o CEP");
    }

    const dadosJSON = await resposta.json();

    //saida.innerText = exibirDadosCep(dadosJSON);
    saida.innerHTML = exibirDadosCep(dadosJSON);

    


    //saida.textContent = dadosJSON;
    //console.log(dadosJSON); //apenas para ver o que acontece no console
    //console.log(typeof dadosJSON); //apenas para ver o que acontece no console com o typeof

    } catch(erro){

            saida.textContent = `(falha ao buscar o CEP(${erro})`,erro;
    }
}

btnPesquisar.addEventListener("click", Onclick)
