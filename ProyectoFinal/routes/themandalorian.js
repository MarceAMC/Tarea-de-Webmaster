var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('themandalorian',{
    isThemandalorian: true
  });
});

module.exports = router;
