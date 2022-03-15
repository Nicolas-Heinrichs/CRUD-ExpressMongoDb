const express = require('express');
const router = express.Router();
const fruitCtrl = require('../controllers/fruit');
const auth = require('../middleware/auth');

router.get('/', auth, fruitCtrl.getAllFruit);
router.get('/name/:name', auth, fruitCtrl.getByName);
router.get('/id/:id', auth, fruitCtrl.getOneFruit);
router.post('/', auth, fruitCtrl.createFruit);
router.put('/:id', auth, fruitCtrl.modifyFruit);
router.delete('/:id', auth, fruitCtrl.deleteFruit);



module.exports = router;