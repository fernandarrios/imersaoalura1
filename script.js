var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3
while (tentativas > 0) {
    var chute = parseInt(prompt("Digite um número de 0 a 10"))
    if (numeroSecreto == chute) {
      alert("Acertou!")
      break
    } else if (chute > numeroSecreto) {
      alert("O número secreto é menor.")
      tentativas--
    } else {(chute < numeroSecreto)
      alert("O número secreto é maior.")
      tentativas-- 
    }
}

if (chute != numeroSecreto){
    alert("Suas tentativas acabaram! O número secreto era: " + numeroSecreto)
    }


// Math.random() gera números aleatórios e 0 a menos que 1.
//"alert" abre a mensagem na tela do usuário. o "prompt" também. 
// o "documente.write" escreve na página, e podemos usar a tag de html para determinar o lugar no qual ele vai ficar.
// o "console.log" escreve no console do navegador, na parte de inspesionar elemento.