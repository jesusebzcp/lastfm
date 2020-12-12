import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import Modal from 'react-native-modal';
import Cancel from 'react-native-vector-icons/MaterialIcons';

//Ui
import { Colors, Fonts } from '../../theme';

const ModalApp = ({ open, children, close, title }) => {
  return (
    <>
      <Modal
        onSwipeComplete={() => close(false)}
        swipeDirection={['down']}
        isVisible={open}
        backdropColor={Colors.dark}
        useNativeDriver
        animationIn={'slideInUp'}
        animationInTiming={500}
        style={styles.Modal}
        onBackButtonPress={() => {
          close ? close(false) : console.log('not close');
        }}
        onBackdropPress={() =>
          close ? close(false) : console.log('not close')
        }
      >
        <View style={styles.containerTitle}>
          <TouchableOpacity style={styles.musk} onPress={() => close(false)} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text
              style={[
                Fonts.style.bold(Colors.light, Fonts.size.h6, 'left'),
                styles.title,
              ]}
            >
              {title}
            </Text>
            <TouchableOpacity onPress={() => close(false)}>
              <Cancel
                name={'cancel'}
                size={30}
                color={Colors.cancel}
                style={{ marginRight: 20 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>{children}</View>
      </Modal>
    </>
  );
};
export default ModalApp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    overflow: 'hidden',
  },
  Modal: {
    margin: 0,
    justifyContent: 'flex-end',
    zIndex: 99,
  },
  musk: {
    backgroundColor: Colors.dark,
    height: 7,
    width: 40,
    borderRadius: 4,
    alignSelf: 'center',
    zIndex: 1,
  },
  containerTitle: {
    paddingTop: 20,
    backgroundColor: Colors.backgroundColor,
    borderTopEndRadius: 12,
    borderTopStartRadius: 12,
  },
  title: {
    marginLeft: 10,
    marginVertical: 10,
  },
});
