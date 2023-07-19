function Cadastrar(){

    var login = document.getElementById('login').value; //'value' serve para escolher o que for escrito no campo
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        alert('cadastro feito com êxito');
        location.href = "login.html"; //comando para redirecionar a página
    }else{
        alert('usuário ou senha incorretos');
    }
}