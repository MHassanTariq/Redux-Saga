import {AddTodoRequestAction, ADD_TODOS_REQUEST} from './types';
import {call, takeEvery, put} from 'redux-saga/effects';
import {addTodoOnServer} from './helper';
import {getAddTodoFailureAction, getAddTodoSuccessAction} from './actions';
import {Todo} from '../../../model';

function* handleAddTodo(action: AddTodoRequestAction) {
  try {
    const data: Todo = yield call(addTodoOnServer, action.todoTitle);
    console.log(data);
    yield put(getAddTodoSuccessAction(data));
  } catch (error) {
    put(getAddTodoFailureAction(error));
  }
}
export function* addTodoSaga() {
  yield takeEvery(ADD_TODOS_REQUEST, handleAddTodo);
}
