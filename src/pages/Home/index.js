import React, { useContext, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

//Logic
import { StoreContext } from '../../flux';
import { getArtists } from '../../flux/artists/actions';

//UI
import Search from '../../components/Search';
import { Colors } from '../../theme';

const Home = () => {
  const { state, artistsDispatch } = useContext(StoreContext);
  console.log('state =>', state);
  useEffect(() => {
    getArtists(artistsDispatch);
  }, [artistsDispatch]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.backgroundColor} />
      <Search />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
});
export default Home;
