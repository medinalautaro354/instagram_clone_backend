const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');
require('./config/config');

const {runSeeds} = require('./interactors/utils/seed_interactor');

app.use(bodyParser.json({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongoose.connect(process.env.ConnectionString,
    { useNewUrlParser: true, useCreateIndex: true },
    (err) => {
        if (err) throw err;

        console.log('Test BD ');

        if(process.env.RUN_SEED == 'true'){
            runSeeds();
        }

        process.env.RUN_SEED = false;
    });
//configuraicon de rutas
app.use(require('./routes/index'));

app.listen(process.env.PORT, () => {
    console.log(`Escuchando el puerto ${process.env.PORT}`);
});