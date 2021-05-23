import {
    GET_QUESTIONS,
    GET_QUESTIONS_SUCCESS,
    GET_QUESTIONS_FAILED,
} from '../constants/action_types/common';

const initialState = {
    questions: [],
    questionsSuccess: false,
    questionsFailed: false,
};

export default function common(state = initialState, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return { ...state, questionsSuccess: false, questionsFailed: null, questions: [] };
        case GET_QUESTIONS_SUCCESS:
            return { ...state, questionsSuccess: true, questionsFailed: null, questions: action.response.data.data };
        case GET_QUESTIONS_FAILED:
            return { ...state, questionsSuccess: false, questionsFailed: action.error, questions: [] };        
        default:
            return state;
    }
}
