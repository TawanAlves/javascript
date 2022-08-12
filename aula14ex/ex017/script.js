  function contar(){
    var num = document.getElementById ('txtnum')
    var res = document.getElementById ('res')
    let tab = document.getElementById('seltab')
    //res.innerHTML = `numero digitado : ${n}`
    if(num.value.length == 0){
        window.alert ('[ERRO] Digite um número!')
    } else{
        var n = Number(num.value) 
        let c =1
        tab.innerHTML =''
        while (c <=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }

        /*for(var c = 1; c <= 10; c +=1){
            var m = n*c
                res.innerHTML = `${c} ${m}` 
            }*/
    }
}
    
