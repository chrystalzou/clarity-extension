const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, '../public')));

const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`Listening on port ${port}!`));