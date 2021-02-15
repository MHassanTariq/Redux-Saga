import React from 'react';
import {SafeAreaView} from 'react-native';
import TodoList from './src/components/todoList';
import appStyles from './src/utils/appStyles';
import {Provider} from 'react-redux';
import configureStore from './src/store/store';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={appStyles.container}>
        <TodoList />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
