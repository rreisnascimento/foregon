define({ "api": [
  {
    "type": "get",
    "url": "/request",
    "title": "Lista Geral da Solicitações",
    "group": "Solicitações",
    "description": "<p>Listagem Geral de Solicitações de Proposta de Crédito(s) em aberto(s).</p>",
    "success": {
      "examples": [
        {
          "title": "Retorno 200",
          "content": "{\n \"qtde\": \"Quantidade Registro(s): 1\",\n \"data\": [\n   {\n    \"accept\": true,\n    \"_id\": \"604a3d9653289e34e82a0fc8\",\n    \"name\": \"pedro alvares cabral\",\n    \"email\": \"alvarescabral@gmail.com\",\n    \"created\": \"2021-03-11T15:56:06.063Z\",\n    \"__v\": 0,\n    \"birthdate\": \"1980-03-23T00:00:00.000Z\",\n    \"cpf\": \"12345678900\",\n    \"phone\": \"44654321554\",\n    \"updated\": \"2021-03-11T16:14:04.007Z\"\n    }\n ]\n}",
          "type": "json"
        },
        {
          "title": "Retorno 400",
          "content": "{\n \"message\": \"Não existe nenhum registro à ser apresentado!\"\n}",
          "type": "json"
        },
        {
          "title": "Retorno 500",
          "content": "{\n \"message\": \"Aconteceu alguma problema: ${error}\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/doc.request.js",
    "groupTitle": "Solicitações",
    "name": "GetRequest"
  },
  {
    "type": "post",
    "url": "/request",
    "title": "Criar uma Solicitação",
    "group": "Solicitações",
    "description": "<p>Rotina para Solicitação de Proposta de Crédito.</p>",
    "success": {
      "examples": [
        {
          "title": "Envio",
          "content": "{\n \"name\": \"pedro alvares cabral\",\n \"email\": \"alvarescabral@gmail.com\"\n}",
          "type": "json"
        },
        {
          "title": "Retorno 201",
          "content": "{\n \"sucess\": true,\n \"id\": \"60508bfdc5bf8e4e90458da9\",\n \"name\": \"pedro alvares cabral\",\n \"email\": \"alvarescabral@gmail.com\",\n \"created\": \"2021-03-16T10:44:13.922Z\",\n \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicm9nZXJpbyIsImVtYWlsIjoiZW1haWwiLCJpYXQiOjE2MTU4OTE0NTMsImV4cCI6MTYxNTkwNTg1M30.Zk64tig-lTlxJmDwAfvrW7Z3qbuASJY-P50s3RVZLTY\"\n}",
          "type": "json"
        },
        {
          "title": "Retorno 400",
          "content": "{\n \"message\": \"É obrigatório informar o Nome Completo!\"\n}",
          "type": "json"
        },
        {
          "title": "Retorno 400",
          "content": "{\n \"message\": \"É obrigatório informar um email Válido!\"\n}",
          "type": "json"
        },
        {
          "title": "Retorno 500",
          "content": "{\n \"message\": \"Aconteceu alguma problema: ${error}\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/doc.request.js",
    "groupTitle": "Solicitações",
    "name": "PostRequest"
  },
  {
    "type": "put",
    "url": "/update/:id",
    "title": "Atualizar uma Solicitação",
    "group": "Solicitações",
    "description": "<p>Rotina para atualizar uma Solicitação de Proposta de Crédito.</p>",
    "success": {
      "examples": [
        {
          "title": "Envio",
          "content": "{\n \"cpf\": \"12345678900\",\n\t\"birthdate\": \"2000-01-23\",\n\t\"phone\": \"44123458798\"\n}",
          "type": "json"
        },
        {
          "title": "Retorno 200",
          "content": "{\n \"sucess\": true,\n \"name\": \"pedro alvares cabral\",\n \"email\": \"alvarescabral@gmail.com\",\n \"cpf\": \"12345678900\",\n \"birthdate\": \"1980-03-23T00:00:00.000Z\",\n \"phone\": \"44123458798\",\n \"created\": \"2021-03-16T12:19:28.151Z\",\n \"updated\": \"2021-03-16T12:41:49.496Z\"\n}",
          "type": "json"
        },
        {
          "title": "Retorno 401",
          "content": "{\n \"message\": \"Token informado não Autorizado!\"\n}",
          "type": "json"
        },
        {
          "title": "Retorno 500",
          "content": "{\n \"message\": \"Aconteceu alguma problema: ${error}\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/doc.request.js",
    "groupTitle": "Solicitações",
    "name": "PutUpdateId"
  },
  {
    "type": "put",
    "url": "/update/term/:id",
    "title": "Aceite do Termo",
    "group": "Solicitações",
    "description": "<p>Rotina para atualizar o Termo de Aceitação da Proposta de Crédito.</p>",
    "success": {
      "examples": [
        {
          "title": "Envio(true or false)",
          "content": "{\n \"accept\": \"false\"\n}",
          "type": "json"
        },
        {
          "title": "Retorno 200",
          "content": "{\n \"sucess\": true,\n \"name\": \"pedro alvares cabral\",\n \"email\": \"alvarescabral@gmail.com\",\n \"cpf\": \"12345678900\",\n \"birthdate\": \"2000-01-23T00:00:00.000Z\",\n \"phone\": \"44123458798\",\n \"accept\": false,\n \"created\": \"2021-03-16T12:19:28.151Z\",\n \"updated\": \"2021-03-16T12:45:25.849Z\"\n}",
          "type": "json"
        },
        {
          "title": "Retorno 201",
          "content": "{\n \"_id\": \"6050ae31b7e2328dc045a6d6\",\n \"productId\": 20,\n \"name\": \"pedro alvares cabral\",\n \"email\": \"alvarescabral@gmail.com\",\n \"birthdate\": \"2000-01-23T00:00:00.000Z\",\n \"cpf\": \"12345678900\",\n \"phone\": \"44123458798\",\n \"request\": \"2021-03-16T13:10:09.399Z\",\n \"created\": \"2021-03-16T13:10:09.402Z\"\n}",
          "type": "json"
        },
        {
          "title": "Retorno 401",
          "content": "{\n \"message\": \"Token informado não Autorizado!\"\n}",
          "type": "json"
        },
        {
          "title": "Retorno 400",
          "content": "{\n \"message\": \"O Usuário precisa ter pelo menos 18 anos e não mais de 65 anos!\"\n}",
          "type": "json"
        },
        {
          "title": "Retorno 400",
          "content": "{\n \"message\": \"O CPF informado não pode ter uma nova proposta por 90 dias!\"\n}",
          "type": "json"
        },
        {
          "title": "Retorno 500",
          "content": "{\n \"message\": \"Aconteceu alguma problema: ${error}\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/doc.request.js",
    "groupTitle": "Solicitações",
    "name": "PutUpdateTermId"
  }
] });
