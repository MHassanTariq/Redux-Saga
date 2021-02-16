import React, {Dispatch, useCallback, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import SingleTodoRow from '../singleTodoRow';
import styles from './styles';
import TodoInput from '../todoInput/todoInput';
import {
  ADD_TODO,
  CANCEL,
  ERROR,
  RE_TRY,
  TUTORIAL_NAME,
} from '../../utils/strings';
import InfoBar from '../infoBar';
import {Todo} from '../../model';
import {getFewTodosNumber} from './helper';
import {StoreState} from '../../store/root/rootReducer';
import {
  FetchTodosRequestAction,
  FETCH_TODOS,
} from '../../store/todos/fetch/types';
import {AddTodoRequestAction} from '../../store/todos/add/types';
import {getFetchTodoRequestAction} from '../../store/todos/fetch/actions';
import {getAddTodoRequestAction} from '../../store/todos/add/actions';
import {connect} from 'react-redux';
import {getUpdateTodoRequestAction} from '../../store/todos/update/actions';
import {UpdateTodoRequestAction} from '../../store/todos/update/types';
import {DeleteTodoRequestAction} from '../../store/todos/delete/types';
import {getDeleteTodoRequestAction} from '../../store/todos/delete/actions';
import ActivityIndicatorView from '../activityIndicator';
import {showAlertWithTwoButtons} from '../../utils/helper';

interface Props {
  isLoading: boolean;
  error: string | null;
  todos: Todo[];
  addTodo: (title: string) => void;
  fetchTodos: () => void;
  updateTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
}

const TodoList: React.FC<Props> = ({
  isLoading,
  error,
  todos,
  addTodo,
  fetchTodos,
  updateTodo,
  removeTodo,
}) => {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const fetchData = useCallback(() => {
    fetchTodos();
  }, [fetchTodos]);

  useEffect(() => {
    if (error) {
      showAlertWithTwoButtons(ERROR, RE_TRY, fetchData, CANCEL, error);
    }
  }, [error, fetchData]);

  function onRemove(todo: Todo) {
    removeTodo(todo);
  }

  function onToggle(todo: Todo) {
    todo.completed = !todo.completed;
    updateTodo(todo);
  }

  function onAddTodo(todo: string) {
    addTodo(todo);
  }

  function renderTodoItem({item}: {item: Todo}) {
    return (
      <SingleTodoRow todo={item} onRemove={onRemove} onToggle={onToggle} />
    );
  }

  function renderTodos() {
    return (
      <FlatList
        data={todos}
        renderItem={renderTodoItem}
        keyExtractor={(_, index) => index.toString()}
      />
    );
  }

  return (
    <View style={styles.container}>
      <ActivityIndicatorView show={isLoading} />
      <TodoInput placeholder={ADD_TODO} onClickAdd={onAddTodo} />
      <InfoBar
        total={todos.length}
        completed={getFewTodosNumber(todos, true)}
        remaining={getFewTodosNumber(todos, false)}
      />
      {renderTodos()}
      <Text style={styles.tutorialText}>{TUTORIAL_NAME}</Text>
    </View>
  );
};

const mapStateToProps = (store: StoreState) => {
  return {
    todos: store.todos.todos,
    isLoading: store.loadingState[FETCH_TODOS],
    error: store.errorState[FETCH_TODOS],
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<
    | FetchTodosRequestAction
    | AddTodoRequestAction
    | UpdateTodoRequestAction
    | DeleteTodoRequestAction
  >,
) => {
  return {
    fetchTodos: () => {
      dispatch(getFetchTodoRequestAction());
    },
    addTodo: (title: string) => {
      dispatch(getAddTodoRequestAction(title));
    },
    updateTodo: (todo: Todo) => {
      dispatch(getUpdateTodoRequestAction(todo));
    },
    removeTodo: (todo: Todo) => {
      dispatch(getDeleteTodoRequestAction(todo));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
