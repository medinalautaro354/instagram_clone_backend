const express = require("express");
const app = express();

app.use(require("./authentication"));
app.use(require('./health'))
app.use(require('./story'))
app.use(require("./commentary"))

module.exports = app;
