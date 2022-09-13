const express = require('express');

const app = express();

app.get('/', (req, res) => res.status(200).send('<p style="color: darkgreen">Olá Mundo!</p>'));

module.exports = app;
