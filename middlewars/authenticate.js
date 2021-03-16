const jwt = require("jsonwebtoken");

function AuthenticateToken (req, res, next) {
  const tmpToken = req.headers['authorization'];
  if (tmpToken != undefined) {
    const tmpBearer = tmpToken.split(' ');
    var token = tmpBearer[1];
    jwt.verify(token, process.env.APP_KEY_SECRET, (erro, data) => {
      if (erro) {
        return res.status(401).send({ message: "Token informado não Autorizado!" });
      } else {
        next();        
      };
    });
  } else {
    return res.status(401).send({ message: "Token Vazio ou Inválido!"});
  };
}

module.exports = AuthenticateToken;