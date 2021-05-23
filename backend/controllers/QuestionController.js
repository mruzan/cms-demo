const ResponseService = require('../services/ResponseService');
const QuestionService = require('../services/QuestionService');

const QuestionController = {
  getByMode: async (req, res) => {
    try {     
      const response = await QuestionService.getByMode(req);
      
      ResponseService.success(res, response);
    } catch (error) {
      ResponseService.error(res, error);
    }
  },  
};

module.exports = QuestionController;
