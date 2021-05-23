import { takeEvery, put, call } from 'redux-saga/effects';
import httpRequests from '../../helpers/httpRequests';
import {
    GET_QUESTIONS,
} from '../../constants/action_types/common';
import {
    getQuestionsSuccess,
    getQuestionsFailed,
} from './actions';

export function* GetQuestions(data) {
    try {
        const results = yield call(httpRequests.getQuestions, data.data);
        
        if (results.status) {
            yield put(getQuestionsSuccess(results));
        } else {
            yield put(getQuestionsFailed(results.data.data));
        }
    } catch (error) {
        yield put(getQuestionsFailed(error));
    }
}

export default function* questionSagas() {
    yield* [
        takeEvery(GET_QUESTIONS, GetQuestions),
    ];
}
