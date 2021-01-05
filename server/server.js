require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', process.env.PORT);
});