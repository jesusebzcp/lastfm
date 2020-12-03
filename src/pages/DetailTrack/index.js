import React, { useCallback, useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WebView from 'react-native-webview';

//Logic
import { StoreContext } from '../../flux';
import util from '../../util';

//Ui
import { Colors, Fonts, Metrics } from '../../theme';

//Components
import Back from '../../components/Back';
import Button from '../../components/Button';
import TopArtists from '../../components/TopArtists';
import ModalApp from '../../components/ModalApp';

const DetailArtist = ({ route }) => {
  const { params } = route;
  const { track } = params;
  const { state } = useContext(StoreContext);
  const { artistsState } = state;
  const { artists } = artistsState;

  const [trackLike, setTrackLike] = useState(false);
  const [likesStorage, setLikesStorage] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleDisable = async () => {
    try {
      let likesSaveStorage = likesStorage.filter((t) => t.mbid !== track.mbid);
      await AsyncStorage.setItem('@likes', JSON.stringify(likesSaveStorage));
      setTrackLike(false);
    } catch (error) {
      console.log('error');
    }
  };

  const handleSave = async () => {
    try {
      let likesSaveStorage = likesStorage;
      likesSaveStorage.push(track);

      await AsyncStorage.setItem('@likes', JSON.stringify(likesSaveStorage));
      setTrackLike(true);
    } catch (error) {
      console.log('error', error);
    }
  };

  const getLikesDb = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem('@likes');
      if (!value) {
        return;
      }
      const arrayLikes = JSON.parse(value);
      const searchLike = arrayLikes.filter((t) => t.mbid === track.mbid)[0];
      setLikesStorage(arrayLikes);

      if (searchLike !== undefined) {
        setTrackLike(true);
      }
    } catch (error) {
      console.log('error', error);
    }
  }, [track.mbid]);

  useEffect(() => {
    getLikesDb();
  }, [getLikesDb]);
  console.log('openModal', openModal);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Back />
          <TouchableOpacity
            onPress={() => (trackLike ? handleDisable() : handleSave())}
          >
            <Icon
              name={trackLike ? 'heart' : 'heart-alt'}
              color={Colors.light}
              size={15}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.banner}>
          <Text
            style={[
              Fonts.style.bold(Colors.light, Fonts.size.bigTitle, 'center'),
            ]}
          >
            {track.name}
          </Text>
        </View>
        <View>
          <Text
            style={[
              Fonts.style.regular(Colors.light, Fonts.size.medium, 'left'),
              { marginTop: 20 },
            ]}
          >
            <Text
              style={[
                Fonts.style.bold(Colors.light, Fonts.size.medium, 'left'),
                { marginTop: 20 },
              ]}
            >
              Mbid:{' '}
            </Text>
            {track.mbid}
          </Text>
          <Text
            style={[
              Fonts.style.regular(Colors.light, Fonts.size.medium, 'left'),
            ]}
          >
            <Text
              style={[
                Fonts.style.bold(Colors.light, Fonts.size.medium, 'left'),
              ]}
            >
              Listeners:{' '}
            </Text>
            {track.listeners}
          </Text>
          <Text
            style={[
              Fonts.style.regular(Colors.light, Fonts.size.medium, 'left'),
            ]}
          >
            <Text
              style={[
                Fonts.style.bold(Colors.light, Fonts.size.medium, 'left'),
              ]}
            >
              Artist:{' '}
            </Text>
            {track.artist.name}
          </Text>
          <Text
            style={[
              Fonts.style.regular(Colors.light, Fonts.size.medium, 'left'),
            ]}
          >
            <Text
              style={[
                Fonts.style.bold(Colors.light, Fonts.size.medium, 'left'),
              ]}
            >
              Duration:{' '}
            </Text>
            {util.minToHours(track.duration)}
          </Text>
        </View>
        <View style={{ marginVertical: 40 }}>
          {artists && artists.length > 0 && (
            <TopArtists
              artists={artists}
              loading={artistsState.loading}
              title={'Recommended artists'}
            />
          )}
        </View>
        <View style={{ marginVertical: 20 }}>
          <Button text={'Detail'} action={() => setOpenModal(true)} />
        </View>
      </View>
      <ModalApp open={openModal} close={setOpenModal}>
        <WebView source={{ uri: track.url }} />
      </ModalApp>
    </>
  );
};
export default DetailArtist;
const styles = StyleSheet.create({
  container: {
    height: Metrics.screenHeight,
    backgroundColor: Colors.backgroundColor,
    paddingHorizontal: 20,
  },
  banner: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 20,
  },
});
