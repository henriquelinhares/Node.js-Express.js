//Criando um servidor simples usando node.js


const express = require("express");

const app = express(); 

app.get('/', (req, res) => {
    res.send('Bem-vindo ao meu servidor!');
  });

  const porta = 3000; 

  app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
  });

  