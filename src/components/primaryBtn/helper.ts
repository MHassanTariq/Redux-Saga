import {DARK_GREEN, RED} from '../../utils/colors';

export function getBgColor(isAdd: boolean) {
  return isAdd ? DARK_GREEN : RED;
}
