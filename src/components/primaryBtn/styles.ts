import {StyleSheet} from 'react-native';
import appStyles from '../../utils/appStyles';
import {WHITE} from '../../utils/colors';
import {BTN_TEXT_SIZE} from '../../utils/fonts';

const styles = StyleSheet.create({
  removeBtn: {
    ...appStyles.centeredChildren,
    borderRadius: 5,
    marginVertical: 10,
    marginRight: 8,
    height: 40,
  },
  removeText: {
    fontSize: BTN_TEXT_SIZE,
    fontWeight: 'bold',
    color: WHITE,
    margin: 10,
  },
});
export default styles;
