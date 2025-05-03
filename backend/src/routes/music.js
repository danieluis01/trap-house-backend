// Adicione aqui as rotas de músicaconst express = require('express');
const router = express.Router();

// Adicione aqui as rotas de música
router.get('/', (req, res) => {
  res.send('Listando todas as músicas');
});

router.post('/', (req, res) => {
  res.send('Criando uma nova música');
});

router.put('/:id', (req, res) => {
  res.send(`Atualizando música com ID ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.send(`Deletando música com ID ${req.params.id}`);
});

module.exports = router;
