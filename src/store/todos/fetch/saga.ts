import {call, put, takeLatest} from 'redux-saga/effects';
import {getFetchTodoFailureAction, getFetchTodoSuccessAction} from './actions';
import {fetchTodosFromApi} from './helper';
import {FETCH_TODOS_REQUEST} from './types';

function* handleFetchTodos() {
  try {
    const data = yield call(fetchTodosFromApi);
    yield put(getFetchTodoSuccessAction(data));
  } catch (error) {
    put(getFetchTodoFailureAction(error));
  }
}

export function* fetchTodoSaga() {
  yield takeLatest(FETCH_TODOS_REQUEST, handleFetchTodos);
}
