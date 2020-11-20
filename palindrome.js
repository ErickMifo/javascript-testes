/* Escreva um script que crie um array com 10000 palavras aleatórias entre 3 e 5 letras, e retorne
o número de palavras que são palindromes nesse array*/

const array = [];
var numPalindromes = 0

    while (array.length < 10000) {
        const criarPalavras = (length) => {
            var palavra = ''
            const letras = 'abcdefghijklmnopqrstuvwxyz';
            for ( var i = 0; i < length; i++ ) {
                palavra += letras.charAt(Math.floor(Math.random() * letras.length));
            }
            array.push(palavra);
        }
        criarPalavras(3)
        criarPalavras(4)
        criarPalavras(5)
    }


    // removendo o primeiro e o último elemento do array pois o mesmo possuia 10002
    array.pop()
    array.shift()


    array.forEach((item) => {
        if(item.split('').reverse().join('') === item ) {
            numPalindromes++
        }
        else {
            null
        }
    })

        console.log(array.length)