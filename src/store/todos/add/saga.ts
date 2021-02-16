import {AddTodoRequestAction, ADD_TODOS_REQUEST} from './types';
import {call, takeEvery, put} from 'redux-saga/effects';
import {addTodoOnServer} from './helper';
import {getAddTodoFailureAction, getAddTodoSuccessAction} from './actions';
import {Todo} from '../../../model';

/**
 * This is handling the API call and managing the success and failure cases.
 * It also dispatches the action depending upon the API result.
 */
function* handleAddTodo(action: AddTodoRequestAction) {
  try {
    const data: Todo = yield call(addTodoOnServer, action.todoTitle);
    yield put(getAddTodoSuccessAction(data));
  } catch (error) {
    put(getAddTodoFailureAction(error));
  }
}
// This saga watches ADD_TODOS_REQUEST.
export function* addTodoSaga() {
  yield takeEvery(ADD_TODOS_REQUEST, handleAddTodo);
}
