const http = require('http');
const getUsers = require('./modules/users');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {

    if(req.url === '/users'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(getUsers());
        res.end();

        return;
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello, World!');
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Сервер запущен по адресу http://${hostname}:${port}/`);
});