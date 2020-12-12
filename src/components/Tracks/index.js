import React from 'react';
import { Text, FlatList, StyleSheet, View, RefreshControl } from 'react-native';

//Theme
import { Colors, Fonts } from '../../theme';
import { getTracks } from '../../flux/tracks/actions';
import FooterLoading from '../FooterLoading';
import RenderTracks from './RenderTracks';

const Tracks = ({
  tracks,
  loading,
  setPagination,
  pagination,
  dispatch,
  updateTracks,
}) => {
  const handlePagination = async () => {
    let paginated = pagination + 1;
    await getTracks(dispatch, paginated);
    setPagination(paginated);
  };

  const handleFooter = () => {
    return <FooterLoading loading={loading} />;
  };

  return (
    <View style={styles.container}>
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
        ListFooterComponent={() => handleFooter()}
        onEndReached={() => handlePagination()}
        onEndReachedThreshold={0.1}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => {
          return <RenderTracks item={item} />;
        }}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => updateTracks()}
          />
        }
      />
    </View>
  );
};

export default Tracks;

const styles = StyleSheet.create({
  container: { marginLeft: 10, paddingBottom: 280 },
});
