import {StyleSheet} from 'react-native';
import appStyles from '../../utils/appStyles';
import {BLACK} from '../../utils/colors';
import {TUTORIAL_TEXT_SIZE} from '../../utils/fonts';

const styles = StyleSheet.create({
  container: {
    ...appStyles.container,
    marginHorizontal: 10,
  },
  tutorialText: {
    alignSelf: 'center',
    fontSize: TUTORIAL_TEXT_SIZE,
    fontWeight: 'bold',
    marginTop: 20,
    borderColor: BLACK,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
  },
});
export default styles;
