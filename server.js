const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Armazenamento simples em memória (pode ser substituído por banco de dados)
let posts = [
  { title: "Bem-vindo ao Fórum", content: "Este é o espaço para compartilhar ideias, códigos e discussões sobre hacking e tecnologia.", author: "Admin" },
  { title: "Primeira Discussão", content: "Qual sua opinião sobre segurança digital em 2026?", author: "user132567-ctrl" }
];

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// Rota para obter posts
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// Rota para adicionar novo post
app.post('/api/posts', (req, res) => {
  const { title, content, author } = req.body;
  if (!title || !content || !author) {
    return res.status(400).json({ error: "Preencha todos os campos!" });
  }
  const newPost = { title, content, author };
  posts.push(newPost);
  res.json(newPost);
});

// Rota padrão para login.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// Rota para forum.html
app.get('/forum', (req, res) => {
  res.sendFile(path.join(__dirname, 'forum.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
