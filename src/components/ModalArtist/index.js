import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

//Icons
import User from 'react-native-vector-icons/SimpleLineIcons';

//UI
import { Colors, Fonts, Metrics } from '../../theme';

//Components
import ModalApp from '../ModalApp';
import Button from '../Button';

const ModalArtist = ({ artist }) => {
  const [openModal, setOpenModal] = useState(false);
  const { listeners, url, name } = artist;
  return (
    <>
      <View style={styles.container}>
        <View style={styles.user}>
          <User name={'user'} size={40} color={Colors.light} />
          <View>
            <Text style={[Fonts.style.bold(Colors.light, Fonts.size.medium)]}>
              {name}
            </Text>
            <Text
              style={[Fonts.style.regular(Colors.lightGray, Fonts.size.medium)]}
            >
              Listeners: {listeners}
            </Text>
          </View>
        </View>
        <View style={styles.separtor} />
        <View style={{ marginVertical: 10 }}>
          <Button text={'Open the web'} action={() => setOpenModal(true)} />
        </View>
      </View>
      <ModalApp open={openModal} close={setOpenModal} title={name}>
        <View style={styles.containerWebView}>
          <WebView source={{ uri: url }} />
        </View>
      </ModalApp>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    height: Metrics.screenHeight / 4,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  user: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  containerWebView: {
    height: Metrics.screenHeight * 0.8,
  },
  separtor: {
    borderBottomColor: Colors.light,
    borderWidth: 0.5,
    marginVertical: 20,
    opacity: 0.25,
  },
});

export default ModalArtist;
