const mongoose = require("mongoose");

const URL = `mongodb://localhost:27017/${process.env.APP_DATABASE}`;

mongoose.connect(URL, 
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false }
);

module.exports = mongoose;