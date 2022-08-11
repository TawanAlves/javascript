function contar(){
    var numi = document.getElementById ('txtin')
    var numf = document.getElementById ('txtfim')
    var contador = document.getElementById ('txtpasso')
    var res = document.getElementById('res')
    
    if(numi.value.length == 0 || numf.value.length == 0 || contador.value.length == 0){
        window.alert ('[ERRO] Verifique os espaços me branco!')
        res.innerHTML = 'Impossivel contar'
    }/*else if( Number(contador.value) < 1 || Number(numf.value) <= Number(numi.value)){
        window.alert ('[ERRO] As informações inseridas são inválidas!')
    }*/ else {
        res.innerHTML = 'Contando: '
        let i = Number(numi.value)
        let f = Number(numf.value)
        let p = Number(contador.value)
        if(p<=0){
            window.alert('Passo inválido')
        }
        if(i < f){
            //crescente
            for(var c = i; c <= f; c +=p)
                res.innerHTML += `${c} \u{1F449} ` 
            } else{
                decrescente
                for(var c = i; c >= f; c -=p){
                    res.innerHTML += `${c} \u{1F449} `       
            }
        }
        
        
    }
    
    
    
    
    
    

    
    
    //res.innerHTML = `inicio ${Number(numi.value)} fim ${Number(numf.value)} passo ${Number(contador.value)}`
}
