import React, {useState} from 'react';
import {Alert, TextInput, View} from 'react-native';
import {ADD, ALERT_TITLE} from '../../utils/strings';
import PrimaryBtn from '../primaryBtn/primaryBtn';
import styles from './styles';
interface Props {
  placeholder?: string;
  onClickAdd: (text: string) => void;
}
const TodoInput: React.FC<Props> = ({onClickAdd, placeholder}) => {
  const [text, setText] = useState('');
  function onAdd() {
    text ? onClickAdd(text) : Alert.alert(ALERT_TITLE);
    setText('');
  }
  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        placeholder={placeholder}
        onChangeText={setText}
        style={styles.text}
      />
      <PrimaryBtn
        isAdd={true}
        text={ADD}
        onClick={onAdd}
        btnStyle={styles.btnStyle}
      />
    </View>
  );
};
export default TodoInput;
