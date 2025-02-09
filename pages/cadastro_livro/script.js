document.getElementById("livroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const isbn = document.getElementById("isbn").value;
    const editora = document.getElementById("editora").value;
    const condicao = document.getElementById("condicao").value;
    
    const livro = {
        titulo,
        autor,
        isbn,
        editora,
        condicao
    };
    
    console.log("Livro cadastrado:", livro);
    alert("Livro cadastrado com sucesso!");
});