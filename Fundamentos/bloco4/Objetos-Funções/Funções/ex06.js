
function soma(numero) {
    let soma = 0;

    for (let i = 1; i <= numero; i += 1) {
        soma = soma + i;
    }
    return soma;
}
console.log(soma(5));