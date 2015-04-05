var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('pages/home', {
    title: 'Cheap Host Ninja',
    intro: 'We offer a wide veriaty of hosting solutions, server management, website design and much much more'
  });
});

router.get('/about', function (req, res, next) {
  res.render('pages/about');
});

module.exports = router;