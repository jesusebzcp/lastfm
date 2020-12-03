import React from 'react';
import {
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
  Image,
  View,
} from 'react-native';

//Theme
import { Fonts, Colors } from '../../theme';

const TopArtists = ({ artists, title }) => {
  const RenderArtists = ({ item }) => {
    const { image, name } = item;
    const imageUrl = Object.values(image[0]);
    return (
      <>
        <TouchableOpacity style={styles.containerArtist}>
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
                tintColor: `rgb(${Math.floor(Math.random() * 255)}, ${
                  5 * 5
                }, ${132})`,
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
      </>
    );
  };

  return (
    <View style={{ marginLeft: 10 }}>
      <Text
        style={[
          Fonts.style.bold(Colors.light, Fonts.size.medium, 'left'),
          { marginVertical: 10, marginLeft: 5 },
        ]}
      >
        {title}
      </Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        scrollEnabled
        data={artists}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => {
          return <RenderArtists item={item} />;
        }}
      />
    </View>
  );
};

export default TopArtists;

const styles = StyleSheet.create({
  containerArtist: {
    marginHorizontal: 10,
  },
});
