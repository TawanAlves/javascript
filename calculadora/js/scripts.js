const operacaopreviatxt = document.querySelector("#operacao-previa")
const operacaoatualtxt = document.querySelector("#operacao-atual")
const buttons = document.querySelectorAll("#containerbt button")

class Calculator{
  constructor(operacaopreviatxt,operacaoatualtxt ){
    this.operacaopreviatxt = operacaopreviatxt;
    this.operacaoatualtxt = operacaoatualtxt;
    this.operacaoatual = "";
  }
  //adicionando digitos no visor
  addDigit(digit){
    //vendo se já tem ponto
    if(digit ==="." && this.operacaoatualtxt.innerText.includes(".")){
      return;
    }
    this.operacaoatual= digit;
    this.updateScreen()
  }

  //operações da calculadora
  processOperation (operation){
    //pegar valores atuais e anteriores
    let operationValue;
    let anterior = +this.operacaopreviatxt.innerText;
    let atual = +this.operacaoatualtxt.innerText;

    switch(operation){
      case "+":
      operationValue = anterior + atual;
      this.updateScreen(operationValue, operation, atual, anterior);
        break;
        default:
          return;

    }
  }
  //mudando valores da tela da calculadora
  updateScreen(
    operationValue = null, 
    operation = null, 
    atual= null, 
    anterior = null){
      console.log (operationValue, operation, atual, anterior);
      if(operationValue === null){
        this.operacaoatualtxt.innerText += this.operacaoatual;
      } else {
        //checar se o valor é xero, se sim apenas adicionar o valor atual
        if(anterior === 0){
          operationValue = atual;
        }
        //adicionar valor atual para "anterior"
        this.operacaopreviatxt.innerText = `${operationValue} ${operation}`;
        this.operacaoatualtxt.innerText = "";
      }
  }
}
const calc= new Calculator(operacaopreviatxt, operacaoatualtxt);

buttons.forEach((btn)=> {
  btn.addEventListener("click", (e) =>{
    const value = e.target.innerText;
       if(+value >=0 || value ==="." ){
       calc.addDigit(value);
      }else{
        calc.processOperation(value);
      }
  });
});
