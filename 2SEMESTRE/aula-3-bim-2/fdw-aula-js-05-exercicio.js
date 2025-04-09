//FUNCAO 1
/*

"use strict";



function RetornaIndice(nome, nb)
{
   return nome.indexOf(nb);
}

const nome = ["isabelle", "tiago", "danilo", "marcos", "gabriel", "daniel", "leo", "gabi"]

console.log(RetornaIndice(nome, "marcos"));

*/
// FUNCAO 2

/*
function ExcluirElemento(nome, nb)
{
    let index = nome.indexOf(nb);

    if(index!=-1)
    {
        return nome.splice(index,1);
    }   
    else 
    {
        return false;
    }
}

const nome = ["isabelle", "tiago", "danilo", "marcos", "gabriel", "daniel", "leo", "gabi"]

console.log(ExcluirElemento(nome, "marcos"));

console.log(ExcluirElemento(nome, "isabello"));*/

//FUNCAO 3
/*.
function ExcluirElemento(nome, nb)
{
    let index = nome.indexOf(nb);
    let newnome;
    newnome = nome.slice();

    if(index!=-1)
    {
        
        for (let i =0; i<nome.length; i++)
            {
                if (newnome[i]== nb)
                {
                    newnome.splice(i,1);
                }
            }
            return newnome;
    }   

    else 
    {
        return false;
    }

    
    
}

let nome = ["isabelle", "tiago", "marcos", "danilo", "marcos"];

console.table(ExcluirElemento(nome, "marcos"));
console.table(nome);

*/
/*

let existeAsenjo = arrayAmigos.includes("Asenjo");
console.log("Existe Asenjo no array? ", existeAsenjo)
*/

let ExisteElemento = (nome) => (nome.includes("marcos") == true)? 1:0;

let nome = ["isabelle", "tiago", "marcos", "danilo", "marcos"];

console.log(ExisteElemento(nome));

