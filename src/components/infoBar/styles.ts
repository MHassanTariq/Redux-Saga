import {StyleSheet} from 'react-native';
import appStyles from '../../utils/appStyles';
import {DARK_GREEN} from '../../utils/colors';
import {INFO_SIZE} from '../../utils/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    borderBottomColor: DARK_GREEN,
    paddingBottom: 10,
  },
  infoContainer: {
    ...appStyles.centeredChildren,
  },
  headingText: {
    fontSize: INFO_SIZE,
    color: DARK_GREEN,
    fontWeight: 'bold',
  },
  countText: {fontSize: INFO_SIZE, color: DARK_GREEN},
});
export default styles;
