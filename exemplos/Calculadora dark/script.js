// Selecione o elemento HTML com o id 'inputBox' e armazena-o na variável 'input'.
let input = document.getElementById('inputBox');


// Seleciona todos os elementos HTML do tipo 'button' e armazena-os em 'buttons'.
let buttons = document.querySelectorAll('button');

// Inicializa uma string vazia para armazenar a entreda do usuário.
let string = "";

// Converte a coleção de botões em um array para que possamos percorrer sobre eles.
let arr = Array.from(buttons);

// Percorre sobre cada botão no array 'arr'.
arr.forEach(button => {

    // Adiciona um ouvinte de eventos de clique a cada botão.
    button.addEventListener("click", (e) => {
        // Verifica se o texto dentro do botão clicado é '='.
        if (e.target.innerHTML == '=') {

            // A função eval() é uma função JavaScript que avalia e executa dinamicamente o código. Quando a linha é executada, o JavaScript interpreta o conteúdo de string como uma expressão e a avalia. No exemplo dado, eval("2 + 2") resultaria em 4, porque ele calcula a soma.
            string = eval(string);

            // Define o valor da caixa de entrada 'input' como a nova string calculada.
            input.value = string;
        }
    }
})

