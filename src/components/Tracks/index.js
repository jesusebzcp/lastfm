import React from 'react';
import {
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

//Theme
import { Colors, Fonts } from '../../theme';

const Tracks = ({ tracks, loading, getTracks, next }) => {
  const navigation = useNavigation();

  const RenderTracks = ({ item }) => {
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
              style={[
                Fonts.style.bold(Colors.light, Fonts.size.medium, 'left'),
              ]}
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
  const renderFooter = () => {
    if (!loading) {
      return null;
    }
    return (
      <View
        style={{
          paddingBottom: 80,
        }}
      >
        <ActivityIndicator animating size="small" color={Colors.light} />
      </View>
    );
  };

  return (
    <View style={{ marginLeft: 10, paddingBottom: 280 }}>
      <Text
        style={[
          Fonts.style.bold(Colors.light, Fonts.size.medium, 'left'),
          { marginVertical: 10, marginLeft: 5 },
        ]}
      >
        Tracks
      </Text>
      <FlatList
        scrollIndicatorInsets={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled
        data={tracks}
        ListFooterComponent={() => renderFooter()}
        onEndReached={() => next()}
        onEndReachedThreshold={0.8}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => {
          return <RenderTracks item={item} />;
        }}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={() => getTracks()} />
        }
      />
    </View>
  );
};

export default Tracks;

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
