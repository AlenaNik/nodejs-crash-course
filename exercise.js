/* const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get('/users', (req, res, next) => {
    console.log('Sophon');
    res.sendFile(path.join(__dirname, 'views', 'users.html'));
});

app.post('/users', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

app.listen(3000);

 */

