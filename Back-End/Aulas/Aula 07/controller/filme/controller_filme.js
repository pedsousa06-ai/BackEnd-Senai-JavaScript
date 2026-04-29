/***************************************************************************************************************************************************************************************************************************
 * Objetivo: Arquivo responsável pela validação, tratamento e 
 *       manipulação para o CRUD de filmes
 * Data: 17/04/2026
 * Autor: Pedro
 * Versão: 1.0
 ***************************************************************************************************************************************************************************************************************************/

const config_message = require('../modulo/configMessages.js')
const filmeDAO = require('../../model/DAO/filme/filme.js')

const inserirNovoFilme = async function (filme, contentType) {
    try {
        let messageJson = JSON.parse(JSON.stringify(config_message))

        if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){

            let validar = await validarDados(filme)

            if (validar){
                return validar
            } else {
                let result = await filmeDAO.insertFilme(filme)

                if (result) {
                    messageJson.DEFAULT_MESSAGE.status      = messageJson.SUCCES_CREATED_ITEM.status
                    messageJson.DEFAULT_MESSAGE.status_code = messageJson.SUCCES_CREATED_ITEM.status_code
                    messageJson.DEFAULT_MESSAGE.message     = messageJson.SUCCES_CREATED_ITEM.message
                } else {
                    return messageJson.ERROR_INTERNAL_SERVER_MODEL
                }

                return messageJson.DEFAULT_MESSAGE
            }

        } else {
            return messageJson.ERROR_CONTENT_TYPE
        }

    } catch (error) {
        return config_message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

const atualizarFilme = async function(filme, id, contentType) {
    let messageJson = JSON.parse(JSON.stringify(config_message))

    try {
        if(id != '' && id != null && id != undefined && !isNaN(id)){

            if(String(contentType).toUpperCase() !== 'APPLICATION/JSON'){
                return messageJson.ERROR_CONTENT_TYPE
            }

            let resultBuscarID = await buscarFilme(id)

            if(resultBuscarID.status){
                let validar = await validarDados(filme)

                if(!validar){
                    filme.id = id

                    let result = await filmeDAO.updateFilme(filme)

                    if(result){
                        messageJson.DEFAULT_MESSAGE.status      = messageJson.SUCESS_UPDATED_ITEM.status      // ✅
                        messageJson.DEFAULT_MESSAGE.status_code = messageJson.SUCESS_UPDATED_ITEM.status_code // ✅
                        messageJson.DEFAULT_MESSAGE.message     = messageJson.SUCESS_UPDATED_ITEM.message     // ✅
                    
                        return messageJson.DEFAULT_MESSAGE
                    } else {
                        return messageJson.ERROR_INTERNAL_SERVER_MODEL
                    }
                } else {
                    return validar
                }
            } else {
                return resultBuscarID
            }

        } else {
            return messageJson.ERROR_REQUIRE_FIELDS
        }

    } catch(error) {
        console.log(error)
        return messageJson.ERROR_INTERNAL_SERVER_CONTROLLER

    }
}

const buscarFilme = async function(id) {
    let messageJson = JSON.parse(JSON.stringify(config_message))

    try {
        if(id == '' || id == null || id == undefined || isNaN(id)){
            messageJson.ERROR_BAD_REQUEST.field = '[ID INVÁLIDO]'
            return messageJson.ERROR_BAD_REQUEST
        } else {
            let result = await filmeDAO.selectByIdFilme(id)

            if(result){
                if(result.length > 0){
                    messageJson.DEFAULT_MESSAGE.status      = messageJson.SUCCES_RESPONSE.status
                    messageJson.DEFAULT_MESSAGE.status_code = messageJson.SUCCES_RESPONSE.status_code
                    messageJson.DEFAULT_MESSAGE.response.filme = result

                    return messageJson.DEFAULT_MESSAGE
                } else {
                    return messageJson.ERROR_NOT_FOUND
                }
            } else {
                return messageJson.ERROR_INTERNAL_SERVER_MODEL
            }
        }

    } catch (error) {
        return messageJson.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

const listarFilme = async function() {
    let messageJson = JSON.parse(JSON.stringify(config_message))

    try {
        let result = await filmeDAO.selectAllFilme()

        if(result){
            if(result.length > 0){
                messageJson.DEFAULT_MESSAGE.status          = messageJson.SUCCES_RESPONSE.status
                messageJson.DEFAULT_MESSAGE.status_code     = messageJson.SUCCES_RESPONSE.status_code
                messageJson.DEFAULT_MESSAGE.response.count  = result.length
                messageJson.DEFAULT_MESSAGE.response.filme  = result

                return messageJson.DEFAULT_MESSAGE
            } else {
                return messageJson.ERROR_NOT_FOUND
            }
        } else {
            return messageJson.ERROR_INTERNAL_SERVER_MODEL
        }

    } catch (error) {
        return messageJson.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

const excluirFilme = async function() {
    
    
    let messageJson = JSON.parse(JSON.stringify(config_message))
    
    try {
         // Valida se o ID foi fornecido e é numérico
        if (id == '' || id == null || id == undefined || isNaN(id)) {
            messageJson.ERROR_BAD_REQUEST.field = '[ID] INVÁLIDO'
            return messageJson.ERROR_BAD_REQUEST // 400
        }
    
        // Verifica se o filme existe antes de tentar deletar
        let resultBuscar = await buscarFilme(id)
    
        if (!resultBuscar.status) {
            return resultBuscar // 404 - Not found
        }
    
        // Aciona o DAO para deletar no banco
        let result = await filmeDAO.deleteFilme(id)
    
        if (result) {
            messageJson.DEFAULT_MESSAGE.status      = messageJson.SUCCES_DELETED_ITEM.status
            messageJson.DEFAULT_MESSAGE.status_code = messageJson.SUCCES_DELETED_ITEM.status_code
            messageJson.DEFAULT_MESSAGE.message     = messageJson.SUCCES_DELETED_ITEM.message
    
            return messageJson.DEFAULT_MESSAGE // 200
        }else {
             return messageJson.ERROR_INTERNAL_SERVER_MODEL // 500
            }
    
        } catch (error) {
            console.log(error)
            return messageJson.ERROR_INTERNAL_SERVER_CONTROLLER // 500
        }
    
    
}

const validarDados = async function(filme) {
    let messageJson = JSON.parse(JSON.stringify(config_message))

    if (!filme) {
        return messageJson.ERROR_BAD_REQUEST
    }

    if (filme.nome == '' || filme.nome == null || filme.nome == undefined || filme.nome.length > 80) {
        messageJson.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO'
        return messageJson.ERROR_BAD_REQUEST

    } else if (filme.data_lancamento == '' || filme.data_lancamento == null || filme.data_lancamento == undefined || filme.data_lancamento.length != 10) {
        messageJson.ERROR_BAD_REQUEST.field = '[data_lancamento] INVÁLIDO'
        return messageJson.ERROR_BAD_REQUEST

    } else if (filme.duracao == '' || filme.duracao == null || filme.duracao == undefined || filme.duracao.length < 5) {
        messageJson.ERROR_BAD_REQUEST.field = '[duração] INVÁLIDO'
        return messageJson.ERROR_BAD_REQUEST

    } else if (filme.sinopse == '' || filme.sinopse == null || filme.sinopse == undefined) {
        messageJson.ERROR_BAD_REQUEST.field = '[sinopse] INVÁLIDO'
        return messageJson.ERROR_BAD_REQUEST

    } else if (isNaN(filme.avaliacao) || filme.avaliacao.toString().length > 3) {
        messageJson.ERROR_BAD_REQUEST.field = '[avaliacao] INVÁLIDO'
        return messageJson.ERROR_BAD_REQUEST

    } else if (filme.valor == '' || filme.valor == null || filme.valor == undefined || isNaN(filme.valor)) {
        messageJson.ERROR_BAD_REQUEST.field = '[valor] INVÁLIDO'
        return messageJson.ERROR_BAD_REQUEST

    } else if (!filme.capa || filme.capa.length > 255) {
        messageJson.ERROR_BAD_REQUEST.field = '[capa] INVÁLIDO'
        return messageJson.ERROR_BAD_REQUEST

    } else {
        return false
    }
}

module.exports = {
    inserirNovoFilme,
    atualizarFilme,
    listarFilme,
    buscarFilme,
    excluirFilme
}

