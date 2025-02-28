const express = require('express');
const app = express();

const HOST = '0.0.0.0';
const PORT = 8081;

app.get('/', (req, res) => res.send('Hello, World!'));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
