var idade = 33
console.log(`A sua idade é ${idade} anos.`)

if (idade<16){
    console.log('Não vota')
} else if (idade<18 || idade>65) {
    console.log('Voto Facultativo')
} else{ 
    console.log('Voto Obrigatório')
}