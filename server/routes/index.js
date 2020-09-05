const express = require("express");
const app = express();

app.use(require("./autentication"));

module.exports = app;
