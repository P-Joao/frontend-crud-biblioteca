document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("locacaoForm").addEventListener("submit", function (event) {
        event.preventDefault();
        
        const livro = document.getElementById("livro").value;
        const cliente = document.getElementById("cliente").value;
        const funcionario = document.getElementById("funcionario").value;
        const data = document.getElementById("data").value;
        
        if (!livro || !cliente || !funcionario || !data) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }
        
        const locacao = {
            livro: livro,
            cliente: cliente,
            funcionario: funcionario,
            data: data
        };
        
        console.log("Locação cadastrada:", locacao);
        alert("Locação cadastrada com sucesso!");
        
        document.getElementById("locacaoForm").reset();
    });
});
