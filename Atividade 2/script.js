function Gerarmedia(){
    const numero1 = parseFloat(document.getElementById('numero1').value)
    const numero2 = parseFloat(document.getElementById('numero2').value)
    const numero3 = parseFloat(document.getElementById('numero3').value)
    const numero4 = parseFloat(document.getElementById('numero4').value)

    const resultadoDiv = document.getElementById('Média')
    resultadoDiv.innerHTML = ''

    //juntar textos em html
    resultadoDiv.innerHTML += `<h2>Resultado da Média</h2>`	
    const soma = numero1 + numero2 + numero3 + numero4;
    const media = soma / 4;
    resultadoDiv.innerHTML = `<p>Média: ${media}</p>`

}


const gerarBotao = document.getElementById('gerarBotao')
gerarBotao.addEventListener('click', Gerarmedia)
