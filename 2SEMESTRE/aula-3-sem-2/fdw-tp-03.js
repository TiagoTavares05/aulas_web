"use strict";
//"Rafaela","Bianca", "Ricardo", "Marcela","Carlos"
/*
const arr = [];

arr.unshift("Rafaela");
arr.push("Marcelo");
arr.splice(1, 1, "Bianca", "Ricardo", "Marcela");
arr.splice(0, 0, "Carlos");
arr.splice(2, 1);
arr.pop();
arr.shift();
console.log(arr)
*/
[0]- Rafaela, [1] - Ricardo
// EX 02

a)
function contaOcorrencias(arr, nome)
    {
        let tamanho = arr.length
        let contador = 0
        let i = 0
        do{
            if(arr[i] == nome){
                contador= contador + 1
            }
            i = i + 1
            }while(i<tamanho)
        return contador
    
    }
let arr = ["Isabelle", "Tiago", "Isabelle", "Isabelle", "Tiago"];
console.log(contaOcorrencias(arr, "Isabelle"))

//b)
function AlteraElementos(arr, nomealterado, nome){
    let verifica;
    let newArr;
    let i = 0;
    newArr = arr.slice()
    do{
    if (newArr[i]== nomealterado){
       newArr.splice(i,1,nome)
       i++
    }
    else{
        i++
    }
    }while(i<arr.length)
    return newArr
}
let arr = ["Isabelle", "Tiago", "Tiago", "Isabelle"];
console.log(AlteraElementos(arr,"Tiago","Tiago Tavares"));

//c)

function IncluiElemento(arr,nome,ind){
    let newArr;
    newArr = arr.slice();
    if(ind<arr.length){
        newArr.splice(ind,0,nome)
        return newArr
    }
    else{
        return false
    }
}

let arr = ["Tiago", "Mauricio", "Juju","Andreia"]
console.log(IncluiElemento(arr,"Isabelle",1))*/

