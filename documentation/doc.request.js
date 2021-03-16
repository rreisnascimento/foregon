/**
 * @api {get} /request Lista Geral da Solicitações
 * @apiGroup Solicitações
 * @apiDescription Listagem Geral de Solicitações de Proposta de Crédito(s) em aberto(s).
 * @apiSuccessExample {json} Retorno 200
 * {
 *  "qtde": "Quantidade Registro(s): 1",
 *  "data": [
 *    {
 *     "accept": true,
 *     "_id": "604a3d9653289e34e82a0fc8",
 *     "name": "pedro alvares cabral",
 *     "email": "alvarescabral@gmail.com",
 *     "created": "2021-03-11T15:56:06.063Z",
 *     "__v": 0,
 *     "birthdate": "1980-03-23T00:00:00.000Z",
 *     "cpf": "12345678900",
 *     "phone": "44654321554",
 *     "updated": "2021-03-11T16:14:04.007Z"
 *     }
 *  ]
 * }
 * @apiSuccessExample {json} Retorno 400
 * {
 *  "message": "Não existe nenhum registro à ser apresentado!"
 * }
 * @apiSuccessExample {json} Retorno 500
 * {
 *  "message": "Aconteceu alguma problema: ${error}"
 * }
 */

/**
 * @api {post} /request Criar uma Solicitação
 * @apiGroup Solicitações
 * @apiDescription Rotina para Solicitação de Proposta de Crédito.
 * @apiSuccessExample {json} Envio
 * {
 *  "name": "pedro alvares cabral",
 *  "email": "alvarescabral@gmail.com"
 * } 
 * @apiSuccessExample {json} Retorno 201
 * {
 *  "sucess": true,
 *  "id": "60508bfdc5bf8e4e90458da9",
 *  "name": "pedro alvares cabral",
 *  "email": "alvarescabral@gmail.com",
 *  "created": "2021-03-16T10:44:13.922Z",
 *  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicm9nZXJpbyIsImVtYWlsIjoiZW1haWwiLCJpYXQiOjE2MTU4OTE0NTMsImV4cCI6MTYxNTkwNTg1M30.Zk64tig-lTlxJmDwAfvrW7Z3qbuASJY-P50s3RVZLTY"
 * }
 * @apiSuccessExample {json} Retorno 400
 * {
 *  "message": "É obrigatório informar o Nome Completo!"
 * }
 * @apiSuccessExample {json} Retorno 400
 * {
 *  "message": "É obrigatório informar um email Válido!"
 * }
 * @apiSuccessExample {json} Retorno 500
 * {
 *  "message": "Aconteceu alguma problema: ${error}"
 * }
 */

/**
 * @api {put} /update/:id Atualizar uma Solicitação
 * @apiGroup Solicitações
 * @apiDescription Rotina para atualizar uma Solicitação de Proposta de Crédito.
 * @apiSuccessExample {json} Envio
 * {
 *  "cpf": "12345678900",
 *	"birthdate": "2000-01-23",
 *	"phone": "44123458798"
 * } 
 * @apiSuccessExample {json} Retorno 200
 * {
 *  "sucess": true,
 *  "name": "pedro alvares cabral",
 *  "email": "alvarescabral@gmail.com",
 *  "cpf": "12345678900",
 *  "birthdate": "1980-03-23T00:00:00.000Z",
 *  "phone": "44123458798",
 *  "created": "2021-03-16T12:19:28.151Z",
 *  "updated": "2021-03-16T12:41:49.496Z"
 * }
 * @apiSuccessExample {json} Retorno 401
 * {
 *  "message": "Token informado não Autorizado!"
 * }
 * @apiSuccessExample {json} Retorno 500
 * {
 *  "message": "Aconteceu alguma problema: ${error}"
 * }
 */

 /**
 * @api {put} /update/term/:id Aceite do Termo
 * @apiGroup Solicitações
 * @apiDescription Rotina para atualizar o Termo de Aceitação da Proposta de Crédito.
 * @apiSuccessExample {json} Envio(true or false)
 * {
 *  "accept": "false"
 * } 
 * @apiSuccessExample {json} Retorno 200
 * {
 *  "sucess": true,
 *  "name": "pedro alvares cabral",
 *  "email": "alvarescabral@gmail.com",
 *  "cpf": "12345678900",
 *  "birthdate": "2000-01-23T00:00:00.000Z",
 *  "phone": "44123458798",
 *  "accept": false,
 *  "created": "2021-03-16T12:19:28.151Z",
 *  "updated": "2021-03-16T12:45:25.849Z"
 * }
 * @apiSuccessExample {json} Retorno 201
 * {
 *  "_id": "6050ae31b7e2328dc045a6d6",
 *  "productId": 20,
 *  "name": "pedro alvares cabral",
 *  "email": "alvarescabral@gmail.com",
 *  "birthdate": "2000-01-23T00:00:00.000Z",
 *  "cpf": "12345678900",
 *  "phone": "44123458798",
 *  "request": "2021-03-16T13:10:09.399Z",
 *  "created": "2021-03-16T13:10:09.402Z"
 * }
 * @apiSuccessExample {json} Retorno 401
 * {
 *  "message": "Token informado não Autorizado!"
 * }
 * @apiSuccessExample {json} Retorno 400
 * {
 *  "message": "O Usuário precisa ter pelo menos 18 anos e não mais de 65 anos!"
 * } 
 * @apiSuccessExample {json} Retorno 400
 * {
 *  "message": "O CPF informado não pode ter uma nova proposta por 90 dias!"
 * } 
 * @apiSuccessExample {json} Retorno 500
 * {
 *  "message": "Aconteceu alguma problema: ${error}"
 * }
 */