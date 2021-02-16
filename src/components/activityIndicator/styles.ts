import {StyleSheet} from 'react-native';
import appStyles from '../../utils/appStyles';

const styles = StyleSheet.create({
  centeredView: {
    ...appStyles.container,
    ...appStyles.centeredChildren,
  },
  modalView: {
    alignItems: 'center',
  },
});
export default styles;
