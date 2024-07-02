



alert('Boas vindas ao jogo do número secreto');
var numeroMaximo = 5000;
var numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
var chute;
let tentativas = 1;


// enquanto

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 a ' + numeroMaximo);
    if (chute == numeroSecreto) {
        break;
    }  else {
        if (chute > numeroSecreto) {
        alert('O número secreto é menor que ' + chute);
        } else {
            alert('O número secreto é maior que ' + chute);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
    
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert('Isso ai! Você descobriu o número secreto ' + numeroSecreto + ' com ' + tentativas + ' ' + palavraTentativa);
// if (tentativas > 1 ) {
//    
// } else {
//    alert('Isso ai! Você descobriu o número secreto ' + numeroSecreto + ' com ' + tentativas + ' tentativa..');
// }


    