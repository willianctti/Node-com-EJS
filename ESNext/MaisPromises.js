let promessa = new Promise((CumprirPromessa) => {
    CumprirPromessa(['Willian', 'Lucas', 'Bruna'])
})

function primeiroElemento(array) {
    return array[0]
}

promessa
    .then(primeiroElemento)
    .then(primeiro => primeiro[0])
    .then(console.log)
    