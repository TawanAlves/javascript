function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora= data.getHours()
    msg.innerHTML =`Agora são ${hora} Horas`;
    if (hora >= 0 && hora < 12){
        document.body.style.background = '#ffd760'
        img.src = 'ftmanha.png'
        //Bom dia
    }
    else if (hora >= 12 && hora < 18){
        document.body.style.background = '#ec9648'
        img.src = 'fttarde.png'
        //Boa tarde
    }
    else{
        document.body.style.background ='#223848'
        img.src = 'ftnoite.png'
        //Boa noite
    }
}
