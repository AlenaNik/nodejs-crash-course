const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('Slash users');
    res.send('<h1>Dummy text users</h1>');
});

app.use('/', (req, res, next) => {
    console.log('Just slash');
    res.send('<h1>Nothing here</h1>');
});



app.listen(3000);