const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Hi from my server</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk)
        });
        req.on('end', () => {
           const parsedBody = Buffer.concat(body).toJSON();
           console.log(parsedBody);
        });
        fs.writeFileSync('new.txt', 'Dummy');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
        }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hi from my server</title></head>');
    res.write('<h1>Hey here</h1>');
    res.write('</html>');
    res.end();
}).listen(8080);