const baseJoi = require('joi');
const extension = require('joi-date-extensions');

const Joi = baseJoi.extend(extension);

const Mood = require('../models/Mood');
const Question = require('../models/Question');
const { createValidateSchema } = require('../schemas/QuestionSchema');

const QuestionService = {
  getByMode: async (req) => {
    const moodId = req.params.id

    let query = { status: { $eq: Question.STATUS.ACTIVE } };
   

    try{
      const mood = await Mood.findOne({mood_id: moodId}).select('content smiley mood_id');
      const questions = await Question.find(query)
        .limit(5)
        .exec();
      const randomQuestions = questions.sort( () => Math.random() - 0.5);

      return { questions: randomQuestions, mood };
    }catch (e) {
      return e.message;
    }
  },
};
module.exports = QuestionService;
