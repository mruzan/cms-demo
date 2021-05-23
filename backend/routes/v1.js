const express = require('express');

const router = express.Router();
const QuestionController = require('../controllers/QuestionController');

// Home page
router.get('/', async (req, res) => {
  console.log("You don't have access to this question api route");
  res.status(200).json({
    statusCode: 200, message: 'success', data:"You don't have access to this question api route", error: null, errorMessage: null,
  });
});

router.get('/mode/:id/questions', QuestionController.getByMode);

module.exports = router;
