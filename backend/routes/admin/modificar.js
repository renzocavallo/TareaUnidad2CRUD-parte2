var express = require('express');
var router = express.Router();

router.get('/volver',(req,res,next) => {
    res.redirect('/admin/novedades')
});

module.exports = router;