const express = require("express");
const app = express();

app.use(require("./autentication"));
app.use(require('./health'))

module.exports = app;
