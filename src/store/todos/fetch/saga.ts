import {call, put, takeLatest} from 'redux-saga/effects';
import {NETWORK_CONNECTIVITY_ERROR} from '../../../utils/strings';
import {getFetchTodoFailureAction, getFetchTodoSuccessAction} from './actions';
import {fetchTodosFromApi} from './helper';
import {FETCH_TODOS_REQUEST} from './types';

/**
 * This is handling the API call and managing the success and failure cases.
 * It also dispatches the action depending upon the API result.
 */
function* handleFetchTodos() {
  try {
    const data = yield call(fetchTodosFromApi);
    yield put(getFetchTodoSuccessAction(data));
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.message
      : NETWORK_CONNECTIVITY_ERROR;
    yield put(getFetchTodoFailureAction(errorMessage));
  }
}

export function* fetchTodoSaga() {
  yield takeLatest(FETCH_TODOS_REQUEST, handleFetchTodos);
}
