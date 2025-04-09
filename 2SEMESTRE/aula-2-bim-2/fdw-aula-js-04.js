"use strict";

const arrayMix = [3, 5.5, "SI", true];
const arrayProfs = [];
arrayProfs [0] = "Asenjo";

arrayProfs.unshift("Guerra","Paz");

//Adiciona a partir do início, "Asenjo" passou para índice2

arrayProfs.push("Luiz", "Mauá", "Cordella")

//adiciona a partir do final, não remove nada

arrayProfs.shift()
//deleta o primeiro elemento e depois o retorna (para quem chamou), como ninguém chamou, não acontece nada, mas se o declarar em uma variável, retorna para a variável, nesse caso o primeiro elemento é "Guerra"

let elementoRemovido = arrayProfs.shift();
//remove "Paz"
console.log(elementoRemovido);


arrayProfs.pop();
//de popcorn. tira o último elemento

arrayProfs.splice(1, 1)
//método que remove o conteúdo do índice do primeiro número colocado no paramentro, o segundo número é a quantidade que será removido a partir do índice do primeiro número do parâmetro.
arrayProfs.splice(1,0, "Guerra", "Sobrino", "Cordella");

arrayProfs.sort()



console.table(arrayProfs);
//Monta uma tabela com indice e conteúdo


arrayMix [0] = 5
//Apesar do arrayMix ser const, essa linha não está errada, já que o que não pode ser redefinido é o array inteiro, mas pode-se alterar apenas o conteúdo de um determinado índice, também pode adicionar uma posição

let x = arrayMix[1];









// console.log(x);

// console.log (arrayMix)
// //diferente do c# que precisa de laço de repetição para mostrar todo o array, nesse caso, o array já é mostrado todo apenas com essa linha de código

// console.log("Tipo:", typeof(arrayMix));
// console.log("Elementos:",arrayMix.length);