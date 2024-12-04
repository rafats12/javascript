var num = [5,8,2,9,4]

num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

//para deixar mais organizado (percurso para exibição de um vetor)

/*
for (var pos=0 ; pos < num.length ; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

//Outro jeito de fazer

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}