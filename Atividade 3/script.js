// script.js

// Mensagens de texto
const MENSAGEM_ERRO = "Por favor, insira valores válidos para todas as notas.";
const INTERVALO_NOTAS = { min: 0, max: 10 };

function calcularMedia() {
    // Obter os valores das notas
    const nota1 = obterNota('nota1');
    const nota2 = obterNota('nota2');
    const nota3 = obterNota('nota3');

    // Verificar se os valores são válidos
    if (!nota1 || !nota2 || !nota3) {
        alert(MENSAGEM_ERRO);
        return;
    }

    // Calcular a média
    const media = (nota1 + nota2 + nota3) / 3;

    // Determinar o status do aluno
    const status = determinarStatus(media);

    // Exibir o resultado
    exibirResultado(media, status);
}

function obterNota(id) {
    const valor = parseFloat(document.getElementById(id).value);
    if (isNaN(valor) || valor < INTERVALO_NOTAS.min || valor > INTERVALO_NOTAS.max) {
        return null;
    }
    return valor;
}

function determinarStatus(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media < 4) {
        return "Reprovado";
    } else {
        return "Recuperação";
    }
}

function exibirResultado(media, status) {
    const resultado = `Média: ${media.toFixed(2)} - Situação: ${status}`;
    document.getElementById('resultado').textContent = resultado;
}

function toggleDarkMode() {
    const isDarkMode = document.getElementById('darkMode').checked;
    document.body.classList.toggle('dark-mode', isDarkMode);
}