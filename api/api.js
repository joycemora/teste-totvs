const express = require('express');
const{getConfig,getData} = require('./config');
// src/api.js ou api.js
module.exports = function(req, res) {
    res.send('API is working!');
  };
  

const router = express.Router();
let users = [];

// Carregar dados iniciais

(async() => {
    const config = await getConfig();
    const data = await getData(); users = data;
    // Usar a variavel 'config' para aplicar permissões e limitações  conforme necessário
})();

// Usar a  case 1: cadastrar novo usuario com 1 ambiente 
router.post('/user', (req,res) =>{
    const newUser = req.body;
    users.push(newUser);
    res.status(201).send('Usuario criado');

});