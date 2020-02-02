const express = require('express'); //importando módulo
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');


const app = express();

mongoose.connect('mongodb://127.0.0.1:27017');

app.use(cors());
app.use(express.json()); //configuração válida para todas as rotas
app.use(routes);


app.listen(3333);