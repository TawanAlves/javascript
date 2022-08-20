/*const cliente1Nome = "Ricardo";
const cliente1CPF = 11122233309;
const cliente1Agencia = 1001;
const cliente1Saldo = 0;

const cliente2Nome = "Alice";
const client2Cpf = 88822233309;
const client2Agencia = 1001;
const client2Saldo = 0;

console.log(cliente1Nome);
*/
class Pessoa{
    _nome
    _idade
    _peso
    _altura
    _imc
    //método = dfunções ou comportamentos
    //métdo constutor
    constructor (nome, idade, peso, altura){
      this._nome = nome
      this._idade = idade 
      this._peso = peso
      this._altura = altura
      this._imc  = (this.peso / (this._altura * this._altura)).toFixed(2)
  }
  calculaImc(){
    return (this.peso / (this.altura* this._altura))
  }

    //et = pegar
    get nome(){
      return this.nome
    }
    //set = configurar
    set nome(novonome){
      this._nome = novoNome
    }
}
 
let pessoa1 = new Pessoa('Jorge', 40, 84.5, 1.83 )
let pessoa2 = new Pessoa('Joana', 23, 45, 1.63)
console.log("Nome"  + pessoa1.nome)
console.log("Idade" + pessoa1.idade)

/*pessoa1.nome ='Jorge'
pessoa1.idade = 40
pessoa1.peso = 84.5
pessoa1.altura = 1.83*/

// pessoa2.nome ='Joana'
// pessoa2.idade = 23
// pessoa2.peso = 45
// pessoa2.altura = 1.63

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa1.calculaImc)