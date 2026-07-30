function cadastrar() {
    var nome = document.getElementById("nome").value;
    var emailSalvo = document.getElementById("email").value;
    var idade = document.getElementById("idade").value;
    var senhaSalva = document.getElementById("senha").value;
    var confSenha = document.getElementById("confsenha").value;

    var usuario = {
        email: email, 
        senha: senha,
        nome: nome
    }
    
    
    var listaSalva = localStorage.getItem("listaUsuarios")
    var listaUsuarios = []
   

    if(nome == "" || senha == "" || idade == "" || email == "" || confSenha == "") {
        alert("Preencha todos os campos!")
    } else if(senha != confSenha) {
        alert("As senhas não correspondem!")
    } else {
        alert("usuario cadastrado!")
    }
}