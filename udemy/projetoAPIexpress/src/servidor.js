const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => {
    res.send({ nome: "Notebook", preco: 1232.32 }) // converter para JSON automaticamente
} )

app.listen(porta, () => {
    console.log('Rodando')
})