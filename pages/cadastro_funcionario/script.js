document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("funcionarioForm").addEventListener("submit", function (event) {
        event.preventDefault();
        
        const nome = document.getElementById("nome").value;
        const cpf = document.getElementById("cpf").value;
        const status = document.getElementById("status").value;
        
        if (!nome || !cpf) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }
        
        const funcionario = {
            nome: nome,
            cpf: cpf,
            status: status
        };
        
        console.log("Funcionário cadastrado:", funcionario);
        alert("Funcionário cadastrado com sucesso!");
        
        document.getElementById("funcionarioForm").reset();
    });
});
