//Quando o documento html for completamente carregado, executa a função anônima
document.addEventListener('DOMContentLoaded', function(){
    //carrega os itens do estoque quando a página é carregada 
    loadItems();

    //Adiciona um ouvinte de evento para o formulário de adicionar item
    //Quando o formulário for enviado, executa a função para adicionar o item
    document.getElementById('add-form').addEventListener('submit', function (event) {
        //Previne o comportamento padrão do formulário (recarregar a página)
        event.preventDefault();
        // chama a função para adicionar um item ao estoque
        addItem();
    });
});

// Função para carregar osa itens do estoque do servidor 
function loadItems() {
    //Faz uma requisição GET ao servidor para obter a lista de itens
    fetch('server.php?action=get-items')
    //converte a resposta recebida em formato JSON
    .then(Response => Response.json())
    //executa esta função quando os dados são carregados com sucesso
    .then(data => {
        //obtém o elemento HTML que contém a lista de itens
        const itemList = document.getElementById('item-list');
        //Limpa qualquer conteúdo anterior na lista de itens
        itemList.innerHTML= '';
        //Itera sobre cada item recebido do servidor
        data.forEach(item => {
            //cria um novo elemento de lista(<li>)
            const li = document.createElement('li');
            //Defiune o conteúdo de texto do item com o nome, quantidade e preço
            li.textContent = `${item.nome} - Quantidade: ${item.quantidade} - preço: R$ ${item.preco}`;
            //Adiciona o item criado à lista no HTML
            itemList.appendChild(li);
        })
    })
}

// Função para adicionar um item ao estoque
function addItem( ) {
    // Obtém o valor do campo de nome do item
    const nome = document.getElementById('nome').value;
    //Obtém o valor do campo de quantidade do item
    const quantidade = document.getElementById('quantidade').value;
    //Obtém o valor do campo de Preço do item
    const preco = document.getElementById('preco').value;

    //Faz uma requisição POST ao servidor para adicionar o novo item
    fetch('server.php?action=add_item', {
        
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        // converte os dados do item em uma string Json
        body: JSON.stringify({nome,quantidade,preco}),
    
    })

    .then(response => response.json())
    .then(data => {
        if(data.success) {
            loadItems();
            document.getElementById('add-form').reset();
        }else{
            alert('Erro ao adicionar item');
        }
    });

}