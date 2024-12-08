//calculando fatorial

function fatorial (n){
    if (n == 1) {
        return 'O resultado é 0'
    } else {
        var fat = 1
        for (var c = n; c > 1; c--) {
            fat*=c
        }
        return fat
    }
}
console.log(fatorial(6))