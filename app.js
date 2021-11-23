const express = require('express');
const app = express();

app.use(express.static('public'))

app.listen(3000, () => {
    console.log('Servidor Funcionando');

});
console.log(__dirname);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');

});

app.get('/registro', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');

});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');

});

app.get('/registro2', (req, res) => {
    res.sendFile(__dirname + '/views/registro2.html');

});

app.get('/login2', (req, res) => {
    res.sendFile(__dirname + '/views/login2.html');

});