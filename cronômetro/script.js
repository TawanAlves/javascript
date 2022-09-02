let segundos = 0;
let minutos = 0;
var intervalo;

function mostrardois(digit){
   if(digit < 10){
      return('0'+digit);
   }else{
      return (digit)
   }
}

function reset(){
   clearInterval ( intervalo);   
   segundos = 0;
   minutos = 0;
   document.getElementById('minutos').innerText =mostrardois(segundos);
   document.getElementById('segundos').innerText = mostrardois(minutos);
      
}

function start(){
   contar()
 intervalo =  setInterval(contar, 100);
}

function stop(){
   clearInterval ( intervalo);
}
function contar(){
   segundos++;
   document.getElementById('segundos').innerText=mostrardois(segundos);
   if(segundos == 59){
      minutos++;
      document.getElementById('minutos').innerText = mostrardois(minutos);
      segundos = 0;
      document.getElementById('segundos').innerText=mostrardois(segundos);
   }
  
}