import React from 'react';
import { Modal, View, StyleSheet, TouchableOpacity } from 'react-native';
import Cancel from 'react-native-vector-icons/MaterialIcons';

//Theme
import { Metrics, Colors } from '../../theme';

const ModalApp = ({ children, open, close }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={open}
      onRequestClose={() => close(false)}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.cancel} onPress={() => close(false)}>
            <Cancel name={'cancel'} size={30} color={Colors.cancel} />
          </TouchableOpacity>
        </View>
        {children}
      </View>
    </Modal>
  );
};
export default ModalApp;

const styles = StyleSheet.create({
  container: {
    height: Metrics.screenHeight,
    marginTop: 100,
  },
  header: {
    backgroundColor: Colors.light,
    height: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  cancel: { marginRight: 20 },
});
