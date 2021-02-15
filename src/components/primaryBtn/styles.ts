import {StyleSheet} from 'react-native';
import {WHITE} from '../../utils/colors';
import {BTN_TEXT_SIZE} from '../../utils/fonts';

const styles = StyleSheet.create({
  removeBtn: {
    borderRadius: 5,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeText: {
    fontSize: BTN_TEXT_SIZE,
    fontWeight: 'bold',
    color: WHITE,
    margin: 10,
  },
});
export default styles;
