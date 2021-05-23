import { fork, all } from 'redux-saga/effects';
import questionsSagas from './container/question/sagas';

export default function* rootSaga() {
    return yield all([
        fork(questionsSagas),       
    ]);
}
