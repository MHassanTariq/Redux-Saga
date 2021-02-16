import React from 'react';
import {Modal, View, ActivityIndicator, ViewStyle} from 'react-native';
import styles from './styles';

interface Props {
  show: boolean;
  modalStyle?: ViewStyle;
}

const ActivityIndicatorView: React.FC<Props> = ({show}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={show}>
      <View style={styles.centeredView}>
        <ActivityIndicator size={'large'} />
      </View>
    </Modal>
  );
};

export default ActivityIndicatorView;
