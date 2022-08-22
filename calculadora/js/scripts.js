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
    //checar se o valor atual está vazio
    if(this.operacaoatualtxt.innerText === "" && operation !== "C"){
      //muda operação
      if(operacaopreviatxt.innerText !== ""){
        this.changeOperation(operation)

      }return;
    }
    //pegar valores atuais e anteriores
    let operationValue;
    let anterior = +this.operacaopreviatxt.innerText.split(" ")[0];
    let atual = +this.operacaoatualtxt.innerText;

  switch(operation){
    case "+":
      operationValue = anterior + atual;
      this.updateScreen(operationValue, operation, atual, anterior);
    break;
    case "-":
      operationValue = anterior - atual;
      this.updateScreen(operationValue, operation, atual, anterior);
    break;
    case "/":
      operationValue = anterior / atual;
      this.updateScreen(operationValue, operation, atual, anterior);
    break;
    case "*":
      operationValue = anterior * atual;
      this.updateScreen(operationValue, operation, atual, anterior);
    break;
    case "Del":
      this.processoDelOperator();
    break;
    case "CE":
      this.processolimparoperacaoatual();
    break;
    case "C":
      this.processolimpar();
    break;
    case "=":
      this.processoIgual();
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
  //mudança de operações
  changeOperation(operation){
    const mathOperations= ["*","/","+","-"];
    if(!mathOperations.includes(operation)){
      return;
    }
    this.operacaopreviatxt.innerText = this.operacaopreviatxt.innerText.slice(0, -1) + operation;
  }
  //deletar ultimo digito
  processoDelOperator(){
    this.operacaoatualtxt.innerText = this.operacaoatualtxt.innerText.slice(0,-1);
  }
  //limpar visor de baixo
  processolimparoperacaoatual(){
    this.operacaoatualtxt.innerText = "";
  }
  //limpar calculdora inteira
  processolimpar(){
    this.operacaoatualtxt.innerText = "";
    this.operacaopreviatxt.innerText = "";
  }
  processoIgual(){
    const operation =operacaopreviatxt.innerText.split(" ")[1];
    this.processOperation(operation);
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
