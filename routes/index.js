var express = require('express');
var router = express.Router();
var navbar = require('./navbar.js');
/* GET home page. */

//console.dir(require('./navbar.js'))
router.get('/', function (req, res, next) {
  res.render('pages/home', {
    title: 'Cheap Host Ninja',
    intro: 'We offer a wide veriaty of hosting solutions, server management, website design and much much more',
    products: [
      {
        catagory: {
          name: "VPS",
          short: "vps"
        },
        items: [
          {
            name: "Mircro VPS",
            short: "micro_vps",
            image: "micro_vps.png"
          },
          {
            name: "Medi VPS",
            short: "medi_vps",
            image: "medi_vps.png"
          },
          {
            name: "Advanced VPS",
            short: "advanced_vps",
            image: "advanced_vps.png"
          }
        ]
      }
    ]
  });
});
router.get('/about', function (req, res, next) {
  res.render('pages/about');
});

module.exports = router;