//Função para validar o formulário
function validateForm(){
    //Obtém os valores dos campos de  input pelo ID
    let name = document.getElementById('name').value;

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    //Obtém o elemento para exibir mensagem de erro
    let errorMessage = document.getElementById('error-message');

    //limpa qualquer mensagem de erro anterior
    errorMessage.textContent = '';

    // Verifica se o campo "Nome" está vazio
    if (name === ''){
        //Exibe uma mensagem de erro e interrompe o envio do formulário
        errorMessage.textContent = 'Por favor, insira seu nome.';
        return false;  //retorna false para impedir o envio do formulário
    }

    //verifica se o campo "E-mail" está vazio
    if (email === ''){
        //Exibe uma mensagem de erro e interrompe o envio do formulário
        errorMessage.textContent = 'Por favor, insira o seu e-mail.';
        return false;
    }

     //verifica se o campo "senha" está vazio
    if (password === ''){
        //Exibe uma mensagem de erro e interrompe o envio do formulário
        errorMessage.textContent = 'Por favor, insira a sua senha.';
        return false;
    }

      //verifica se o campo "confirmar Senha" está vazio
    if (password !== confirmPassword ){
        //Exibe uma mensagem de erro e interrompe o envio do formulário
        errorMessage.textContent = 'As senhas não coincidem.';
        return false;
    }

    // Se todas as vericações forem bem-sucedidas, o formulário pode ser enviado
    return true; // permite o envio do formulário


}