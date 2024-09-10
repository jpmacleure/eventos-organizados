const express = require('express');
const router = express.Router();
const autenticacaoController = require('../controllers/autenticacaoController');

router.get('/entrar', autenticacaoController.getEntrarView);
router.get('/registrar', autenticacaoController.getRegistrarView);
router.post('/registrar_usuario', autenticacaoController.postRegistrarUsuario);
router.post('/autenticar', autenticacaoController.postAutenticar);

module.exports = router;