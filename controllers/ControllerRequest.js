const Model_Request = require("../models/ModelRequest");
const Model_Proposal = require("../models/ModelProposal");
const jwt = require("jsonwebtoken");
const utils = require("../functions/utils");
const validarCpf = require('validar-cpf');
const ModelRequest = require("../models/ModelRequest");

const getAllRequest = async (req, res) => {
  await Model_Request.find().then(response => {
    if (response.length > 0) {
      return res.status(200).send({ 
        qtde: response.length,
        data: response
      })
    } else {
      return res.status(400).send({ message: "Não existe nenhum registro à ser apresentado!" });
    };
  }).catch(error => {
    return res.status(500).send({ message: `Aconteceu alguma problema: ${error}`});    
  });
}

const createRequest = async (req, res) => {
  const tmpRequest = new Model_Request(req.body);
  if (!tmpRequest.name) {
    return res.status(400).send({ message: "É obrigatório informar o Nome Completo!" });
  } else if (!tmpRequest.email) {
    return res.status(400).send({ message: "É obrigatório informar um email Válido!" });
  } else {
    await jwt.sign({ name: tmpRequest.name, email: tmpRequest.email }, 
                     process.env.APP_KEY_SECRET, 
                     { expiresIn: '4h'}, (error, token) => {
      if (error) {
        return res.status(400).send({ message: `Erro: Falha Interna ao gerar Token(${error})`});
      } else {
        tmpRequest.save().then(response => {
          const { _id, name, email, created } = response;
          return res.status(201).send({ 
            sucess: true, 
            id: _id,
            name: name,
            email: email,
            created: created,
            token: token });
        }).catch(error => {
          return res.status(500).send({ message: `Aconteceu alguma problema: ${error}`});
        });  
      };
    });
  };
};

const updateRequest = async (req, res) => {
  const Id_Obj_Request = req.params.id;
  const { cpf, birthdate, phone } = req.body;

  let tmpBody = {};
  tmpBody.cpf = cpf;
  tmpBody.birthdate = birthdate;
  tmpBody.phone = phone;
  tmpBody.updated = new Date;
  await Model_Request.findByIdAndUpdate({ "_id": Id_Obj_Request }, tmpBody, { new: true }).then(response => {
    const { name, email, cpf, birthdate, phone, created, updated } = response;
    return res.status(200).send({ 
      sucess: true, 
      name: name,
      email: email,
      cpf: cpf,
      birthdate: birthdate,
      phone: phone,
      created: created,
      updated: updated });
  }).catch(error => {
    return res.status(500).send({ message: `Aconteceu algum problema: ${error}`});
  });
};

const updateTerms = async (req, res) => {
  const Id_Obj_Request = req.params.id;
  await Model_Request.findByIdAndUpdate({ "_id": Id_Obj_Request }, req.body, { new: true }).then(response => {
    const { _id, name, email, cpf, birthdate, phone, accept, created, updated } = response;
    if (accept) {
      if (!cpf) {
        return res.status(400).send({ message: "Dados Incompleto: CPF não informado!" });
      } else if (!birthdate) {
        return res.status(400).send({ message: "Dados Incompleto: Data de Nascimento não informado!" });
      } else if (!phone) {
        return res.status(400).send({ message: "Dados Incompleto: Telefone não informado!" });
      } else {

        Model_Proposal.find({ cpf: cpf }).then(resProposta => {
          if (resProposta.length == 0) {
            const CPF_verdadeiro = validarCpf( cpf );
            if (CPF_verdadeiro) {
              const idade = utils.CalcularIdade( birthdate, new Date );
              if (idade >= 18 & idade <= 65) {
  
                let objProposal = {};
                objProposal.productId = 10;
                objProposal.name      = name;
                objProposal.email     = email;
                objProposal.birthdate = birthdate;
                objProposal.cpf       = cpf;
                objProposal.phone     = phone;
                objProposal.request   = new Date;
                const tmpObj = new Model_Proposal(objProposal);
                tmpObj.save().then(response => {
                  ModelRequest.findOneAndDelete({ "_id": Id_Obj_Request }).then().catch();
                  return res.status(201).send( response );
                }).catch(error => {
                  return res.status(500).send({ message: `Aconteceu algum problema: ${error}`});
                });
  
              } else {
                return res.status(400).send({ message: "O Usuário precisa ter pelo menos 18 anos e não mais de 65 anos!" });
              };
            } else {
              return res.status(401).send({ message: "CPF informado inválido!"})
            };
          } else {
            const request = resProposta[0].request;
            const idade = utils.CalcularIdade( birthdate, new Date );
            const dias = utils.CalcularDiasProposta( request );
            if (idade < 18 & idade > 65) {
              return res.status(400).send({ message: "O Usuário precisa ter pelo menos 18 anos e não mais de 65 anos!" });
            } else if (dias < 90) {
              return res.status(400).send({ message: "O CPF informado não pode ter uma nova proposta por 90 dias!" });
            } else {

              let objProposal = {};
              objProposal.productId = 20;
              objProposal.name      = name;
              objProposal.email     = email;
              objProposal.birthdate = birthdate;
              objProposal.cpf       = cpf;
              objProposal.phone     = phone;
              objProposal.request   = new Date;
              const tmpObj = new Model_Proposal(objProposal);
              tmpObj.save().then(response => {
                return res.status(201).send( response );
              }).catch(error => {
                return res.status(500).send({ message: `Aconteceu algum problema: ${error}`});
              });
            };
          }
        }).catch(error => {
          return res.status(500).send({ message: `Aconteceu algum problema: ${error}`});          
        });
      };
    } else {
      return res.status(200).send({ 
        sucess: true,
        name: name,
        email: email,
        cpf: cpf,
        birthdate: birthdate,
        phone: phone,
        accept: accept,
        created: created,
        updated: updated
      });
    };
  }).catch(error => {
    return res.status(500).send({ message: `Aconteceu algum problema: ${error}`});
  });  
};

module.exports = {
  getAllRequest,
  createRequest,
  updateRequest,
  updateTerms
}