const express = require("express");
const usuarios = require("./usuariosRoute.js");
const environments = require("./environmentsRoute.js");

module.exports = (app) => {
  app.use(express.json(), usuarios, environments);
};

// server.js ou index.js
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para JSON
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/teste-totvs', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Rotas
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
