var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('episodioiii',{
    isEpisodioiii: true
  });
});

module.exports = router;
