function cadastrar_obreiro(){

    var login = document.getElementById('nome_obreiro').value; //'value' serve para escolher o que for escrito no campo
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;

    valida_dados(login, telefone, email) // Valida dados e retorna pagina de obreiros
}

function valida_dados(login, telefone, email){
    msg = "Obreiro cadastro com sucesso!"
    alert(msg)
    location.href = "obreiros.html"
}

function retorna_menu() {
    location.href = "menu.html"
}