

const cors = require('cors');

var cookieParser = require('cookie-parser');

const express = require('express');
const { produto } = require('./models');

const app = express();

app.set('view engine', 'ejs');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(cookieParser());


app.get('/listar', async function(req, res) {
  const produtos = await produto.findAll();
  res.json(produtos);

})

app.get('/cadastrar', async function(req, res) {
  res.render('cadastrar');
})
app.get('/', async function(req, res) {
  res.render("home")
})


app.post('/cadastrar', async function(req, res) {
  const _produto = produto.create(req.body)
  console.log(_produto)
  res.json(_produto)
})

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!')
});