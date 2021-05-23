var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("You don't have access to this question api route");
  res.status(200).json({
    statusCode: 200, message: 'success', data:"You don't have access to this question api route", error: null, errorMessage: null,
  });
  next();
});

module.exports = router;
