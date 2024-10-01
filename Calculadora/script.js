//Função para adicionar números ou operadores ao display

function  appendToDisplay(value) {
// Obtém o elemento de display pelo Id 'display' e adiciona o valor clicando ao final
    document.getElementById('display').value += value;
}

// Função para calcular o resultadfo da expressão no display
function calculate( ) {
    try {
        // usa a função 'eval()' para avaliar a expressão matemática inserida no display
        //'eval()' tenta calcular a expressão  e retorna o resultado
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error){
        // caso ocorra um erro (ex.: expressão inválida), exibe a palavra "Erro " no display
        document.getElementById('display').value = 'Erro';
    }

    // Função para limpaR TODO O DISPLAY    
function clearDisplay( ) {
        //Define o valor do display como uma string vazia, limpando-o
        document.getElementById('display').value = '';
    }

    // fUNÇÃO PARA APAGAR O ÚLTIMO CARACTERE NO DISPLAY
function deleteLast( ) {
        //Obtém o valor atual do display
        let currentDisplay = document.getElementById('display').value;
        //Define o valor do display como ele mesmo, mas removendo o último caractre
        document.getElementById('display').value = currentDisplay.slice(0, -1);
    }
    
}