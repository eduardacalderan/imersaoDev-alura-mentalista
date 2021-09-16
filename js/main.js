/* 
Nesta terceira aula da Imersão Dev, vamos criar uma jogo de adivinhação, onde o programa escolhe um número aleatório e nós vamos tentar acertar.

Adicionar um número de tentativas para a pessoa tentar acertar e imprimir a resposta no final.
Quando a pessoa errar, deixar na mensagem se o número chutado é maior ou menor que o número secreto.
*/

let secretNumber = parseInt(Math.random() * 11)

function kickNumber() {
  const enteredNumber = parseInt(document.querySelector('#value').value)
  console.log(enteredNumber)

  const result = document.querySelector('.result')
  let attempts = 3
  
  do { if (
    secretNumber !== enteredNumber &&
    secretNumber > enteredNumber &&
    secretNumber % 2 === 0
  ) {
    result.innerHTML =
      '<p>Você errou! O número secreto é maior do que o número digitado e é par.</p>'
    result.style.background = 'rgb(44, 2, 2, 0.79)'
    result.style.padding = '10px'
    result.style.borderRadius = '8px'
  } else if (
    secretNumber !== enteredNumber &&
    secretNumber > enteredNumber &&
    secretNumber % 2 !== 0
  ) {
    result.innerHTML =
      '<p>Você errou! O número secreto é maior do que o número digitado e é impar.</p>'
    result.style.background = 'rgb(44, 2, 2, 0.79)'
    result.style.padding = '10px'
    result.style.borderRadius = '8px'
  } else if (
    secretNumber !== enteredNumber &&
    secretNumber < enteredNumber &&
    secretNumber % 2 === 0
  ) {
    result.innerHTML =
      '<p>Você errou! O número secreto é menor do que o número digitado e é par.</p>'
    result.style.background = 'rgb(44, 2, 2, 0.79)'
    result.style.padding = '10px'
    result.style.borderRadius = '8px'
  } else if (
    secretNumber !== enteredNumber &&
    secretNumber < enteredNumber &&
    secretNumber % 2 !== 0
  ) {
    result.innerHTML =
      '<p>Você errou! O número secreto é menor do que o número digitado e é impar.</p>'
    result.style.background = 'rgb(44, 2, 2, 0.79)'
    result.style.padding = '10px'
    result.style.borderRadius = '8px'
  } else if (enteredNumber > 10 || enteredNumber < 0) {
    result.innerHTML = '<p>Digite um número válido (de 0 a 10).</p>'
    result.style.background = 'rgb(44, 2, 2, 0.79)'
    result.style.padding = '10px'
    result.style.borderRadius = '8px'
  } else {
    result.innerHTML = `<p>Você acertou, o número secreto é ${enteredNumber}!</p>`
    result.style.background = 'rgb(111, 183, 250)'
    result.style.color = 'black'
    result.style.padding = '10px'
    result.style.borderRadius = '8px'
  } 
 } while (attempts <=3 )
  
}
