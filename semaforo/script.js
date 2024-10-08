// Inicializando a variável que controla qual luz está acesa
let luzAtul = 0; // 0 - vermelho, 1- Amarelo, 2- Verde

//Função que muda as luzes do semáforo
function  mudarLuz() {
    //Obtém as luzes pelos seus IDs
    const vermelho = document.getElementById('vermelho');
    const amarelo = document.getElementById('amarelo');
    const verde = document.getElementById('verde');

    // Remove a classe 'active' de todas as luzes (desliga todas)
    vermelho.classList.remove('active');
    amarelo.classList.remove('active');
    verde.classList.remove('active');

    // verifica qual luz deve estar acesa
    if (luzAtual === 0) {
        vermelho.classList.add('active');

    } else if (luzAtual === 1) {
        amarelo.classList.add('active');
    } else if (luzAzul === 2) {
        verde.classList.add('active');
    }

    // tualiza para a próxima luz (cíclico: 0 -> 1 -> 2 ->0)
    luzAtual = (luzAtual + 1 ) % 3; // Garante que vai voltar para a 0  vapós o 2
}

// Chama a função mudarLuz a cada 2 segundos
setInterval(mudarLuz, 2000 ); // Troca de luz a cada 2000ms (2 segundos)
