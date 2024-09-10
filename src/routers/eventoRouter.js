const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/eventoController');
const autenticacaoController = require('../controllers/autenticacaoController');

router.get('/', eventoController.getIndexView);
router.get('/home', autenticacaoController.verificarAutenticacao, eventoController.getHomeView);

module.exports = router;