let num = [5, 8, 2, 9, 3]
num [4] = 99 //coloca numer o na posiç~ao 7
num.push(88) //adiciona número na últma posição


console.log(`__Nosso vetor é o ${num}`)
//console.log (`__O vetor tem ${num.length} posições`) //diz tamanho do vetor
//console.log(`__Ordenando: ${num.sort()}`) //coloca na ordem

for(let pos = 0; pos < num.length; pos++){
    console.log(`a posição ${pos} tem o vaçor ${num[pos]}`)
}
console.log(`  `)
console.log( num.indexOf(9) )//diz a posição q o 9 está
console.log( num.indexOf(1) )//coloca -1 se n tiver o número
console.log(`  `)
for(let pos in num ){
    console.log(`a posição ${pos} tem o vaçor ${num[pos]}`)
}