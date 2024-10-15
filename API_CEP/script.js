function consultarCep() {
    // Obtém o valor do campo
    const cep = document.getElementById('cep').value;
//verifica se o CEP tem 8 digitos
    if(cep.length !== 8){
        alert("Por favor, insira um CEP válido com 8 digitos.")
        return;
    }


const url= `https://viacep.com.br/ws/${cep}/json/`;
// faz uma requisição á api para ob eter vos dados do CEP
fetch(url)
    .then(response => response.json())
    .then(data =>{
        //verifica se o cep foi encontrado
        if(data.erro){
            alert("CEP não encontrado.")
            return;
        }

        document.getElementById('rua').textContent = data.logradouro;
        document.getElementById('bairro').textContent = data.bairro;
        document.getElementById('cidade').textContent = data.localidade;
        document.getElementById('estado').textContent = data.uf;
        })

    .catch(error => {
        console.error("Erro ao consultar o CEP:", error);
        alert("Ocorreu um erro ao consultar o CEP.");
    });
}