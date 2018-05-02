var express = require('express');
var router = express.Router();

/* GET home page. handled by angular*/
router.get('/', function(req, res, next) {
  // console.log("request: ");
  // console.log(req);
  // console.log("response: ");
  // console.log(res);
  res.render('index',{req,res});
});

module.exports = router;
