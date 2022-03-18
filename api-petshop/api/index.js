const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')

app.use(bodyParser.json())

const roteador = require('../routes/fornecedores')
app.use('/api/fornecedores/', roteador)

app.listen(config.get('mysql.api.porta'), () => console.log("Rodando na porta 3000."))