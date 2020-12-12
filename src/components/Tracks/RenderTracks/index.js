import React from 'react';
import { Text, TouchableOpacity, Image, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

//Navigation Hooks
import { useNavigation } from '@react-navigation/native';

//UI
import { Colors, Fonts } from '../../../theme';

const RenderTracks = ({ item }) => {
  const navigation = useNavigation();

  const { image, name, artist } = item;
  const imageUrl = Object.values(image[0]);

  return (
    <TouchableOpacity
      style={styles.containerTrack}
      onPress={() => navigation.navigate('DetailTrack', { track: item })}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image style={styles.img} source={{ uri: imageUrl[0] }} />
        <View>
          <Text
            style={[Fonts.style.bold(Colors.light, Fonts.size.medium, 'left')]}
          >
            {name}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name={'user'} size={10} color={Colors.light} />

            <Text
              style={[
                Fonts.style.regular(Colors.gray, Fonts.size.tiny),
                { marginLeft: 2 },
              ]}
            >
              {artist.name}
            </Text>
          </View>
        </View>
      </View>
      <Icon name={'play'} size={15} color={Colors.light} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerTrack: {
    marginHorizontal: 20,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'space-between',
  },
  img: {
    height: 40,
    width: 40,
    backgroundColor: 'green',
    marginRight: 10,
  },
});
export default RenderTracks;
