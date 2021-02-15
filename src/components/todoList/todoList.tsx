import React, {Component, Dispatch} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import SingleTodoRow from '../singleTodoRow';
import styles from './styles';
import TodoInput from '../todoInput/todoInput';
import {ADD_TODO, MOBX_TUTORIAL} from '../../utils/strings';
import appStyles from '../../utils/appStyles';
import InfoBar from '../infoBar';
import {Todo} from '../../model';
import {getFewTodosNumber} from './helper';
import {StoreState} from '../../store/root/rootReducer';
import {FetchTodosRequestAction} from '../../store/todos/fetch/types';
import {AddTodoRequestAction} from '../../store/todos/add/types';
import {getFetchTodoRequestAction} from '../../store/todos/fetch/actions';
import {getAddTodoRequestAction} from '../../store/todos/add/actions';
import {connect} from 'react-redux';
import {getUpdateTodoRequestAction} from '../../store/todos/update/actions';
import {UpdateTodoRequestAction} from '../../store/todos/update/types';
import {DeleteTodoRequestAction} from '../../store/todos/delete/types';
import {getDeleteTodoRequestAction} from '../../store/todos/delete/actions';

interface Props {
  addTodo: (title: string) => void;
  fetchTodos: () => void;
  updateTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
  todos: Todo[];
}

class TodoList extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.onRemove = this.onRemove.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.onAddTodo = this.onAddTodo.bind(this);
    this.renderTodos = this.renderTodos.bind(this);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  onRemove(todo: Todo) {
    this.props.removeTodo(todo);
  }

  onToggle(todo: Todo) {
    todo.completed = !todo.completed;
    this.props.updateTodo(todo);
  }

  onAddTodo(todo: string) {
    this.props.addTodo(todo);
  }

  renderTodos() {
    const todosRendering: JSX.Element[] = [];
    this.props.todos.forEach((todo) => {
      todosRendering.push(
        <SingleTodoRow
          key={todo.id}
          todo={todo}
          onRemove={this.onRemove}
          onToggle={this.onToggle}
        />,
      );
    });
    return (
      <ScrollView style={appStyles.container}>{todosRendering}</ScrollView>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TodoInput placeholder={ADD_TODO} onClickAdd={this.onAddTodo} />
        <InfoBar
          total={this.props.todos.length}
          completed={getFewTodosNumber(this.props.todos, true)}
          remaining={getFewTodosNumber(this.props.todos, false)}
        />
        {this.renderTodos()}
        <Text style={styles.mobxTutorial}>{MOBX_TUTORIAL}</Text>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (store: StoreState) => {
  return {
    todos: store.todos.todos,
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
