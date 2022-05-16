const express = require('express');
const router = express.Router();


var client_controller = require('../controllers/cliente.controller')


// clients controller (CRUD)
router.get('/cliente', client_controller.GETALL);
router.get('/cliente/:id', client_controller.GET);
router.post('/cliente', client_controller.CREATE);
router.patch('/cliente/:id', client_controller.UPDATE);
router.delete('/cliente/:id',client_controller.DELETE);


module.exports = router;