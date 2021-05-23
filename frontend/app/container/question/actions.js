import {
    GET_QUESTIONS,
    GET_QUESTIONS_SUCCESS,
    GET_QUESTIONS_FAILED,
} from '../../constants/action_types/common';

const getQuestions = data => ({
    type: GET_QUESTIONS,
    data,
});

const getQuestionsSuccess = response => ({
    type: GET_QUESTIONS_SUCCESS,
    response,
});

const getQuestionsFailed = error => ({
    type: GET_QUESTIONS_FAILED,
    error,
});

export {
    getQuestions,
    getQuestionsSuccess,
    getQuestionsFailed,
};
