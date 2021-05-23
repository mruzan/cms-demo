import { createSelector } from 'reselect';

const selectQuestionState = state => state.questions;

const selectGetQuestions = () => createSelector(
    selectQuestionState,
    currentState => currentState.questions,
);

const selectGetQuestionsFailed = () => createSelector(
    selectQuestionState,
    currentState => currentState.selectGetQuestionsFailed,
);

const selectGetQuestionsSuccess = () => createSelector(
    selectQuestionState,
    currentState => currentState.selectGetQuestionsSuccess,
);


export {
    selectGetQuestions,
    selectGetQuestionsFailed,
    selectGetQuestionsSuccess,
};
