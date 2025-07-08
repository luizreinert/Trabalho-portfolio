// Aguarda o carregamento da página
document.addEventListener('DOMContentLoaded', function() {
    // Pega o formulário de contato
    const formulario = document.getElementById('formulario-contato');
    
    // Adiciona evento de envio do formulário
    if (formulario) {
        formulario.addEventListener('submit', function(evento) {
            // Impede o envio padrão do formulário
            evento.preventDefault();
            
            // Pega os valores dos campos
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;
            
            // Validação básica
            if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            // Validação simples de email
            if (!validarEmail(email)) {
                alert('Por favor, insira um email válido.');
                return;
            }
            
            // Simula o envio da mensagem
            enviarMensagem();
        });
    }
});

// Função para validar email
function validarEmail(email) {
    // Expressão regular simples para validar email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Função para simular o envio da mensagem
function enviarMensagem() {
    // Esconde o formulário
    const formulario = document.getElementById('formulario-contato');
    formulario.style.display = 'none';
    
    // Mostra a mensagem de sucesso
    const mensagemSucesso = document.getElementById('mensagem-sucesso');
    mensagemSucesso.style.display = 'block';
    
    // Limpa o formulário
    formulario.reset();
    
    // Após 3 segundos, mostra o formulário novamente
    setTimeout(function() {
        formulario.style.display = 'block';
        mensagemSucesso.style.display = 'none';
    }, 3000);
}