// Rest juntar e Spread espalhar

// Usar rest como parametro de função

// Usar spread com objeto

const funcionario = { nome: 'Maria', salario: 12911}

const clone = { ativo: true,...funcionario}

console.log(clone)

// Usar spread com array

const grupoA = [ 'joao', 'bruna', 'lucas' ]
const grupoB = [ 'Maria', ...grupoA ]

console.log(grupoB)