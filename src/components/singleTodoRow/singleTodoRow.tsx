import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Todo} from '../../model';
import {REMOVE} from '../../utils/strings';
import PrimaryBtn from '../primaryBtn/primaryBtn';
import {getBgColor, getTextStyle} from './helper';
import styles from './styles';
interface Props {
  todo: Todo;
  onRemove: (todo: Todo) => void;
  onToggle: (todo: Todo) => void;
}
const SingleTodoRow: React.FC<Props> = ({todo, onRemove, onToggle}) => {
  function onClickRemove() {
    onRemove(todo);
  }
  function onClickToggle() {
    onToggle(todo);
  }
  return (
    <TouchableOpacity
      onPress={onClickToggle}
      style={[styles.container, {backgroundColor: getBgColor(todo.completed)}]}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, getTextStyle(todo.completed)]}>
          {todo.title}
        </Text>
      </View>
      <PrimaryBtn text={REMOVE} onClick={onClickRemove} isAdd={false} />
    </TouchableOpacity>
  );
};
export default SingleTodoRow;
