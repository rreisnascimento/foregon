const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
require("dotenv").config();
const Router_Request = require("./routers/RouterRequest");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.static("public"));
app.use('/request', Router_Request);

app.listen(3000, () => {
  console.log(`Aplicação (${process.env.APP_NAME}) Rodando na Porta: ${process.env.APP_PORT}`);
});