const moment = require("moment");

function CalcularIdade( nascimento, atual ) {
  var idade = atual.getFullYear() - nascimento.getFullYear();
  return idade; 
}

function CalcularDiasProposta( proposta ) {
  const now = moment( new Date(), 'YYYY-MM-DD');
  const past = moment( proposta , 'YYYY-MM-DD');
  const days = past.diff(now, 'days');
  return days * -1;
}

module.exports = {
  CalcularIdade,
  CalcularDiasProposta
};