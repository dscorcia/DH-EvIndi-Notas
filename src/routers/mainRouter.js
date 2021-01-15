const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js');

router.get('/',mainController.index);
router.post('/',mainController.create);
router.get('/edit/:id',mainController.edit)
router.put('/edit/:id',mainController.update)
router.delete('/:id',mainController.destroy)

module.exports=router