/*************************************************************************************************************************************************************
 * Api usando As atividades da missoes bem legais
 * Autor: Pedro
 * Data inicio: 18/03/2026
 ************************************************************************************************************************************************************/

const express = require("express")
const app = express()

const { 
    getListaDeEstados,
    getDadosEstados,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades
} = require("./modulo/fuction")



app.get("/estados", function(req, res) {
    res.json(getListaDeEstados())
})

app.get("/estado/:uf", function(req, res) {
    res.json(getDadosEstados(req.params.uf))
})

app.get("/capital/:uf", function(req, res) {
    res.json(getCapitalEstado(req.params.uf))
})

app.get("/regiao/:regiao", function(req, res) {
    res.json(getEstadosRegiao(req.params.regiao))
})

app.get("/capitais", function(req, res) {
    res.json(getCapitalPais())
})

app.get("/cidades/:uf", function(req, res) {
    res.json(getCidades(req.params.uf))
})




app.listen(2000, function() {
    console.log("servidor rodando na porta 2000")
})


