document.getElementById("clienteForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const telefone = document.getElementById("telefone").value;
    const status = document.getElementById("status").value;
    
    const cliente = {
        nome,
        cpf,
        telefone,
        status
    };
    
    console.log("Cliente cadastrado:", cliente);
    alert("Cliente cadastrado com sucesso!");
});