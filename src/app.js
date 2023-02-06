const http = require('http');
const getUsers = require('./modules/users');

// const url = new URL(request.url, 'http://127.0.0.1');
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000
;

const server = http.createServer((req, res) => {

    if(req.url === '/users'){
        res.statusCode = 200;
        res.statusMessage = 'OK';
        res.setHeader('Content-Type', 'application/json');
        res.write(getUsers());
        res.end();

        return;
    }

    if(req.url.startsWith('/hello=')){
        const name = req.url.split("=")[1];
        res.status = 400;
        res.statusMessage = "OK";
        res.setHeader('Content-Type', 'text/plain');
        res.write(`Hello ${name}`);
        res.end();
        return;
    }

    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello, World!');
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Сервер запущен по адресу http://${hostname}:${port}/`);
});