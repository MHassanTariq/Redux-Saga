import {FetchTodoActions} from './fetch/types';
import {AddTodoActions} from './add/types';
import {UpdateTodoActions} from './update/types';
import {DeleteTodoActions} from './delete/types';

export type TodoActions =
  | FetchTodoActions
  | AddTodoActions
  | UpdateTodoActions
  | DeleteTodoActions;
