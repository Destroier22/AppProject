function cadastrar_grupo(){
    console.log("Passei aqui")
    var groupName = document.querySelector("#groupName").value;
    var groupLeader = document.querySelector('#groupLeader').value;
    valida_dados(groupName, groupLeader) // Valida dados e retorna pagina de obreiros
}

function valida_dados(groupName, groupLeader){
    msg = "Grupo cadastro com sucesso!"
    alert(msg)
    location.href = "grupos.html"
}

function retorna_menu() {
    location.href = "menu.html"
}