function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora= data.getHours()

    msg.innerHTML =`Agora são ${hora} Horas`;
    
    if (hora >= 0 && hora < 12){
        img.scr = 'ftmanha.png'
    }
    else if (hora >= 12 && hora < 18){
        img.scr = 'fttarde.png'
        //Boa tarde
    }
    else{
        img.scr = 'ftnoite.png'
        //Boa noite
    }
}
