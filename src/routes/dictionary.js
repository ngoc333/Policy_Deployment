const express = require('express');
const router = express.Router();

let DictionaryController = require('../app/controllers/DictionaryController');
    
//router.use('/dictionary', DictionaryController.image);
router.get('/dictionary', DictionaryController.image);

module.exports = router;