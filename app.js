const http = require('http');

http.createServer(function (req, res) {
   console.log(req.url, req.method, req.headers);
   res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hi from my server</title></head>');
    res.write('<h1>I\'m here</h1>');
    res.write('</html>');
    res.end();
}).listen(8080);