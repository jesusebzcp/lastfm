import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

//Logic
import { StoreContext } from '../../flux';
import {
  getArtists,
  resetSearch,
  searchArtistsAction,
} from '../../flux/artists/actions';
import { getTracksInitial } from '../../flux/tracks/actions';

//UI
import { Colors, Fonts, Metrics } from '../../theme';

//Components
import TopArtists from '../../components/TopArtists';
import Search from '../../components/Search';
import Tracks from '../../components/Tracks';
import { setLoadingGlobal } from '../../flux/ui/actions';
import Loading from '../../components/Loading';

const Home = () => {
  const isMountedRef = useRef(null);

  const { state, artistsDispatch, tracksDispatch, uiDispatch } = useContext(
    StoreContext,
  );
  const { artistsState, tracksState } = state;
  const { artists, searchArtists } = artistsState;
  const { tracks } = tracksState;

  const [pagination, setPagination] = useState(1);
  const [word, setWord] = useState('');

  //Mount Component Data

  const getDateApi = useCallback(async () => {
    setLoadingGlobal(true, uiDispatch);
    await getArtists(artistsDispatch);
    await getTracksInitial(tracksDispatch);
    setLoadingGlobal(false, uiDispatch);
  }, [artistsDispatch, tracksDispatch, uiDispatch]);

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
    getDateApi();
    return () => {
      return () => (isMountedRef.current = false);
    };
  }, [getDateApi]);

  return (
    <>
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
            setPagination={setPagination}
            pagination={pagination}
            tracks={tracks}
            loading={tracksState.loading}
            dispatch={tracksDispatch}
            updateTracks={() => getTracksInitial(tracksDispatch)}
          />
        )}
      </View>
      <Loading />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    height: Metrics.screenHeight,
  },
});
export default Home;
