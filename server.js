const express = require('express');
const path = require('path');
const app = express();

// Servir arquivos estáticos da raiz do projeto
app.use(express.static(path.join(__dirname)));

// Rota padrão para login.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// Rota para forum.html
app.get('/forum', (req, res) => {
  res.sendFile(path.join(__dirname, 'forum.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
