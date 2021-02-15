import React from 'react';
import {Text, View} from 'react-native';
import {DONE, TODO, TOTAL} from '../../utils/strings';
import styles from './styles';

interface Props {
  total: number;
  completed: number;
  remaining: number;
}

const InfoBar: React.FC<Props> = ({total, completed, remaining}) => {
  function renderInfo(title: string, count: number) {
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.headingText}>{title}</Text>
        <Text style={styles.countText}>{count}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {renderInfo(TOTAL, total)}
      {renderInfo(DONE, completed)}
      {renderInfo(TODO, remaining)}
    </View>
  );
};
export default InfoBar;
