const express = require('express');
const router = express.Router();

const sitecontroller = require('../app/controllers/SiteController');

router.all('/*',(req,res,next) =>{

    req.app.locals.layout = 'main';

    next();

});
router.get('/', sitecontroller.index);
router.get('/dict', sitecontroller.dict);
module.exports = router;