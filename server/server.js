const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('./config/dbConfig');

const app = express();

const routes = require('./routes');

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes);


app.listen(port, () => console.log(`rodando na porta ${port}`));