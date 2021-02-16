import {Alert} from 'react-native';

export function showAlertWithTwoButtons(
  heading: string,
  positiveBtnText: string,
  onClickPositiveBtn: () => void,
  negativeBtnText: string,
  desc?: string,
  onClickNegativeBtn?: () => void,
) {
  Alert.alert(heading, desc, [
    {text: positiveBtnText, onPress: onClickPositiveBtn},
    {text: negativeBtnText, onPress: onClickNegativeBtn},
  ]);
}
