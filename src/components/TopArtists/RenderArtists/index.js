import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

//UI
import { Fonts, Colors } from '../../../theme';

//Components
import ModalApp from '../../ModalApp';
import ModalArtist from '../../ModalArtist';

const RenderArtists = ({ item }) => {
  const { image, name } = item;
  const imageUrl = Object.values(image[0]);

  const [modalArtist, setModalArtist] = useState(false);
  const handleDetail = () => {
    setModalArtist(true);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.containerArtist}
        onPress={() => handleDetail()}
      >
        <View
          style={{
            alignItems: 'center',
          }}
        >
          <Image
            source={{ uri: imageUrl[0] }}
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              tintColor: `rgb(${Math.floor(
                Math.random() * 255,
              )}, ${Math.random()}, ${132})`,
            }}
          />
          <Text
            style={[
              Fonts.style.bold(Colors.light, Fonts.size.tiny, 'center'),

              { marginTop: 5 },
            ]}
          >
            {name}
          </Text>
        </View>
      </TouchableOpacity>
      <ModalApp
        open={modalArtist}
        close={setModalArtist}
        title={'Artist information'}
      >
        <ModalArtist artist={item} />
      </ModalApp>
    </>
  );
};
const styles = StyleSheet.create({
  containerArtist: {
    marginHorizontal: 10,
  },
});

export default RenderArtists;
