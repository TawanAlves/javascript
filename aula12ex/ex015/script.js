function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0|| Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //cria img dinamicamente
        img.setAttribute('id', 'foto')// cria id para img
        
        
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade < 10){
                //criança
                img.setAttribute('src', 'ftbebeh.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'ftjovemh.png')
            }else if(idade < 50){
                //adulto 
                img.setAttribute('src', 'ftadultoh.png')
            }else{
                //vei
                img.setAttribute('src', 'ftidosoh.png')
            }
        } 
        
        else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade < 10){
                //criança
                img.setAttribute('src', 'ftbebef.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'ftjovemf.png')
            }else if(idade < 50){
                //adulto 
                img.setAttribute('src', 'ftadultof.png')
            }else{
                //vei
                img.setAttribute('src', 'ftidosof.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)//adiciona elemento embaixo
        
    }
}