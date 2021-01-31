import React, { FC } from "react";
import { Modal, StyleSheet, View, TouchableOpacity } from "react-native";
import { colors } from "../../globals";


interface Props {
  visible: boolean;
  onClose: () => void;
}

export const CustomModal: React.FC<Props> = ({ visible, onClose, children }) => {
  return (
    <Modal
      animationType="slide"
      animated={true}
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.OverLay} onPress={onClose}/>
      {children}
    </Modal>
  );
};

const styles = StyleSheet.create({
  OverLay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.Black,
    opacity: 0.3,
  }
});
