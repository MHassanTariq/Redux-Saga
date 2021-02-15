import {StyleSheet} from 'react-native';
import {GRAY, RED, WHITE} from '../../utils/colors';
import {BTN_TEXT_SIZE, TITLE_SIZE} from '../../utils/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: GRAY,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
  },
  titleContainer: {width: '70%', margin: 10, justifyContent: 'center'},
  title: {fontSize: TITLE_SIZE, fontWeight: 'bold'},
  removeBtn: {borderRadius: 5, backgroundColor: RED, marginVertical: 10},
  removeText: {
    fontSize: BTN_TEXT_SIZE,
    fontWeight: 'bold',
    color: WHITE,
    margin: 10,
  },
  strikeThrough: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    fontWeight: '500',
  },
});
export default styles;
