const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const eventoController = require('../controllers/eventoController');
const autenticacaoController = require('../controllers/autenticacaoController');

// Configuração do storage do multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Define a pasta onde os arquivos serão armazenados
    cb(null, 'public/img/uploads/');
  },
  filename: (req, file, cb) => {
    // Personaliza o nome do arquivo, por exemplo, com a data atual e o nome original
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname); // Obtém a extensão do arquivo
    const fileName = `image-${uniqueSuffix}${extension}`; // Define o nome do arquivo
    cb(null, fileName); // Salva com o novo nome
  }
});

// Define o upload handler usando o multer
const upload = multer({ storage: storage });

router.get('/', eventoController.getIndexView);
router.get('/home', autenticacaoController.verificarAutenticacao, eventoController.getHomeView);
router.get('/cadastrar_evento', autenticacaoController.verificarAutenticacao, eventoController.getCadastrarEventoView);
router.post('/cadastrar_evento', autenticacaoController.verificarAutenticacao, upload.single('foto'), eventoController.postCadastrarEvento);

module.exports = router;