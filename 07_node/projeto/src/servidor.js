const porta = 3003

const express = require('express')
const app = express()
const banco = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended : true})) //para cada requisição do express ele vai chamar o bodyparse e caso seja o formato urlencoded vai rodar essa funçaõ passada tratando ele para permitir a leiitura

// app.get('/produtos',(req,res,next)=>{
//     console.log('MIddleware 1...')  //simulando uma app middleware ele passa primeiro aqui antes de ir no outro
//     //next() --> sem o next não chama o procimo middleware e fica esperando constantemente
// })

app.get('/produtos', (req, res, next) => {
    res.send(banco.getProdutos()) //converter para JSON automaticamente
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(banco.getProduto(req.params.id))   //req.params é o local que fica os parametros que vieram da url
})

app.post('/produtos', (req, res, next) => {
    const produto = banco.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //converter para JSON automaticamente
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = banco.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //converter para JSON automaticamente
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = banco.excluirProduto(req.params.id)
    res.send(produto) //converter para JSON automaticamente
})


app.listen(porta, () => {
    console.log(`servidor executando na porta ${porta}.`);
})