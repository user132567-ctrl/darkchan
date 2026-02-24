const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, "public")));

// Rota principal → login
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

// Rota do fórum → chan
app.get("/forum", (req, res) => {
  res.sendFile(path.join(__dirname, "forum.html"));
});

// Tratamento de rota não encontrada
app.use((req, res) => {
  res.status(404).send("Página não encontrada");
});

// Inicializa servidor
app.listen(PORT, () => {
  console.log(`Servidor DARKCHAN rodando na porta ${PORT}`);
});