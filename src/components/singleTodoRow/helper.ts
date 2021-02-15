import {LIME_GREEN, WHITE} from '../../utils/colors';
import styles from './styles';

export function getBgColor(isCompleted: boolean) {
  return isCompleted ? LIME_GREEN : WHITE;
}
export function getTextStyle(isCompleted: boolean) {
  if (isCompleted) {
    return styles.strikeThrough;
  }
}
