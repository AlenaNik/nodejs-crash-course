const express = require('express');

const app = express();


app.use('/new', (req, res) => {
    res.send('<h1>Hello from express!</h1>');
});


app.listen(3000);