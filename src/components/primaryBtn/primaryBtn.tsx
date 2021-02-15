import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import {getBgColor} from './helper';
import styles from './styles';
interface Props {
  text: string;
  isAdd: boolean;
  onClick: () => void;
  btnStyle?: ViewStyle;
}
const PrimaryBtn: React.FC<Props> = ({text, isAdd, onClick, btnStyle}) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[
        styles.removeBtn,
        {backgroundColor: getBgColor(isAdd)},
        btnStyle,
      ]}>
      <Text style={styles.removeText}>{text}</Text>
    </TouchableOpacity>
  );
};
export default PrimaryBtn;
