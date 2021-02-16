import {StyleSheet} from 'react-native';
import {GRAY} from '../../utils/colors';
import {TITLE_SIZE} from '../../utils/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: GRAY,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 0.85,
    margin: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: TITLE_SIZE,
    fontWeight: 'bold',
  },
  strikeThrough: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    fontWeight: '500',
  },
});
export default styles;
