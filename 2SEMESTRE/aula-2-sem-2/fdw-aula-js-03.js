"use strict";


//Declaração de função

function calcularMedia(p1, p2){
    let media = (p1+2*p2)/3;
    return media.toFixed(2);
}

// function soma(a,b){
//     let soma = a+b;
//     return soma;
// }

//Expressão de função

let soma= function (n1=0, n2=0){
    return n1+n2;
};

//Tem ponto e vírgula no final, pois a variável também está sendo declarada juntamente


// Função soma versão Seta
let somaV2=  (n1=0, n2=0) => n1+n2;





console.log("Média do aluno 1", calcularMedia(7.5, 5.5));
console.log("Média do aluno 2", calcularMedia(5.5, 5.5));
console.log("Média do aluno 3", calcularMedia(6.5, 5.5));

let mediaAluno4 = calcularMedia(6,6.5);
console.log("Média do aluno 4", mediaAluno4)


// let soma1= soma(7,9);
// console.log("A soma é: ", soma1)

console.log("Soma", soma(3,8))





