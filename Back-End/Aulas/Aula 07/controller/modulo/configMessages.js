/**********************************************************************
 * Objetivo: Arquivo Respponsavel pela configuracao e paroniza~çao das mmensagens
 *  da API
 * Data: 17/04/2026
 * Autor: marcel
 * Versão: 1.0
 ************************************************************************/

//Padronização de cabeçalho para retorno des endpoint da API
const DEFAULT_MESSAGE = {
    api_description: 'API para gerenciar controles de filmes',
    development : 'Pedro Sousa',
    version: '1.0.4.26',
    status: Boolean,
    status_code: Number,
    response: {}

}

//Mensagem de Erro da API
const ERROR_BAD_REQUEST = {status: false, status_code: 400, message: 'Os dados enviados na requisição não estão corretos. '}

//mensagens de Sucesso da API
const SUCESS_CREATED_ITEM ={staus: 'true', status_code: 201, message: 'Registro inserrido com sucesso'}

module.exports = {
    DEFAULT_MESSAGE,
    ERROR_BAD_REQUEST,
    SUCESS_CREATED_ITEM
}