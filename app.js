const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    const url = req.url;
    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Hi from my server</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message') {
        fs.writeFile('message.txt', 'One file is here', function (err) {
            if (err) throw err;
            console.log('file is created');
        })

    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hi from my server</title></head>');
    res.write('<h1>Hey here</h1>');
    res.write('</html>');
    res.end();
}).listen(8080);