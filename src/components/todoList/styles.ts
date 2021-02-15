import {StyleSheet} from 'react-native';
import {BLACK} from '../../utils/colors';
import {TUTORIAL_TEXT_SIZE} from '../../utils/fonts';

const styles = StyleSheet.create({
  container: {marginHorizontal: 10, flex: 1},
  mobxTutorial: {
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
