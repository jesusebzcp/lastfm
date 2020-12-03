import React, { useContext, useEffect, useRef, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

//Logic
import { StoreContext } from '../../flux';
import {
  getArtists,
  resetSearch,
  searchArtistsAction,
} from '../../flux/artists/actions';
import { getTracks } from '../../flux/tracks/actions';

//UI
import { Colors, Fonts, Metrics } from '../../theme';

//Components
import TopArtists from '../../components/TopArtists';
import Search from '../../components/Search';
import Tracks from '../../components/Tracks';
import Pagination from '../../components/Pagination';

const Home = () => {
  const isMountedRef = useRef(null);

  const { state, artistsDispatch, tracksDispatch } = useContext(StoreContext);
  const { artistsState, tracksState } = state;
  const { artists, searchArtists } = artistsState;
  const { tracks } = tracksState;

  const [pagination, setPagination] = useState(1);
  const [word, setWord] = useState('');

  useEffect(() => {
    isMountedRef.current = true;

    if (word !== '') {
      searchArtistsAction(word, artistsDispatch);
    }
    return () => {
      return () => (isMountedRef.current = false);
    };
  }, [artistsDispatch, word]);

  useEffect(() => {
    isMountedRef.current = true;
    getArtists(artistsDispatch);
    getTracks(tracksDispatch, pagination);
    return () => {
      return () => (isMountedRef.current = false);
    };
  }, [artistsDispatch, pagination, tracksDispatch]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.backgroundColor} />
      <Text
        style={[
          Fonts.style.regular(Colors.light, Fonts.size.bigTitle, 'center'),

          { marginVertical: 10 },
        ]}
      >
        LastFm
        <Text
          style={[Fonts.style.regular(Colors.gray, Fonts.size.h6, 'center')]}
        >
          app
        </Text>
      </Text>
      <Search
        placeholder={'Busca una canción...'}
        setWord={setWord}
        word={word}
        searchArtists={searchArtists}
        resetSearch={resetSearch}
        dispatch={artistsDispatch}
      />
      {artists && artists.length > 0 && (
        <TopArtists
          title={'Artistas'}
          artists={artists}
          loading={artistsState.loading}
          getArtists={() => getArtists(artistsDispatch)}
        />
      )}
      {tracks && tracks.length > 0 && (
        <Tracks
          next={() => setPagination(pagination + 1)}
          setPagination={setPagination}
          pagination={pagination}
          tracks={tracks}
          loading={tracksState.loading}
          getTracks={() => getTracks(tracksDispatch)}
        />
      )}
      <View style={{ position: 'absolute', alignSelf: 'center', bottom: 40 }}>
        <Pagination
          pagination={pagination}
          next={() => setPagination(pagination + 1)}
          back={() => setPagination(pagination === 1 ? 1 : pagination - 1)}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    height: Metrics.screenHeight,
  },
});
export default Home;
