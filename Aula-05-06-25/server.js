const http = require('http');


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); //200 é o status da página
    
    res.end('Hello, World - Node JS - Deu Certo!');
});

const port = 3000;

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});