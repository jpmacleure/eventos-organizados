const express = require('express');
const mustacheExpress = require('mustache-express');
const session = require('express-session')
require("dotenv").config();
const db = require('./db')

const app = express();

// Configura o renderizador
const VIEWS_PATH = __dirname + '/views';
app.engine('html', mustacheExpress(VIEWS_PATH + '/partials', '.html'));
app.set('view engine', 'html');
app.set('views', VIEWS_PATH);
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}))

// Define uso de sessão
app.use(session({
    secret: 'secret-token',
    name: 'sessionId',  
    resave: false,
    saveUninitialized: false
}))

// Define roteadores
const eventoRouter = require('./routers/eventoRouter');
const autenticacaoRouter = require('./routers/autenticacaoRouter');
app.use('/', eventoRouter);
app.use('/', autenticacaoRouter);

// Sincroniza o banco de dados
db.sync();

const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});