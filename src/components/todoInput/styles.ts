import {StyleSheet} from 'react-native';
import {DARK_GREEN} from '../../utils/colors';
import {TITLE_SIZE} from '../../utils/fonts';

const styles = StyleSheet.create({
  container: {
    borderBottomColor: DARK_GREEN,
    borderBottomWidth: 1,
    marginVertical: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: TITLE_SIZE,
    borderColor: DARK_GREEN,
    borderRadius: 5,
    borderWidth: 1,
    width: '70%',
    padding: 10,
  },
  btnStyle: {
    paddingHorizontal: 14,
  },
});
export default styles;
