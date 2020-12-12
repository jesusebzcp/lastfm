import React from 'react';
import { Text, FlatList, View } from 'react-native';

//Theme
import { Fonts, Colors } from '../../theme';

//Component
import RenderArtists from './RenderArtists';

const TopArtists = ({ artists, title }) => {
  return (
    <>
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
    </>
  );
};

export default TopArtists;
