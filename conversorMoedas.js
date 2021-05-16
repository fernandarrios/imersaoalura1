var valorEmDolarTexto = prompt("Qual o valor em dólar que você quer converter?")

//parsefloat para decimais e parseint para inteiros
var valorEmDolarNum = parseFloat(valorEmDolarTexto)

// operações: + somar; * multiplicar;
var valorEmReal = valorEmDolarNum * 5.50

//para o real aprecer com dois algarismos depois da vírgula.
var valorEmRealFixado = valorEmReal.toFixed(2)

alert(valorEmRealFixado)

