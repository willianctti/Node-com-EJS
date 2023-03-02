const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/", function (req, res) {

    const itens = [
        {
            title: "T",
            message: "estando"
        },
        {
            title: "E",
            message: "sse"
        },
        {
            title: "S",
            message: "uper"
        },
        {
            title: "T",
            message: "este"
        }
    ]
    res.render("pages/index", {
        qualidades: itens,
    })
})

app.get("/sobre", function (req, res) {
    res.render("pages/about")
})

app.listen(8080)
console.log('Rodando')