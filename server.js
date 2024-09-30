const express = require('express');
const app = express();
import express from ('express');
export default app;





app.use(express.json());

//Definir as Rotas

app.use('/api',api);
const PORT = 3000;
app.listen(PORT,() => console.log('Servidor rodando na porta ${PORT}'));

// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`


