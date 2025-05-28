// Criando um vetor.
const frutas = ['Maçã', 'Banana', 'Laranja']
console.log(frutas)

console.log('Exibindo todos os elementos dentro do vetor')
console.log(frutas)

console.log('\nExibindo apenas um elemento dentro do vetor.')
console.log(frutas[0])
console.log(frutas[2])

console.log('\nAdicionando elemento ao vetor.')
frutas.push('Uvas')
console.log(frutas)

console.log('\nRemovendo o primeiro elemento do vetor.')
frutas.shift()
console.log(frutas)

console.log('\nRemovendo o último elemento do vetor.')
frutas.pop()
console.log(frutas)

console.log('\nPercorrendo o vetor.')
frutas.forEach((fruta, index) => {
    console.log(`${index}: ${fruta}`)
})

for (let i = 1; i <= 5; i++) {
    
}