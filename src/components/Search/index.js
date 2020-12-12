import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Cancel from 'react-native-vector-icons/MaterialIcons';

//Theme
import { Colors, Fonts, Metrics } from '../../theme';

//Components
import ModalApp from '../ModalApp';
import ModalArtist from '../ModalArtist';

const Search = ({
  placeholder,
  setWord,
  searchArtists,
  word,
  resetSearch,
  dispatch,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [dataArtist, setDataArtist] = useState(null);

  const handleReset = () => {
    setWord('');
    resetSearch(dispatch);
  };
  const handleDetail = (artist) => {
    setOpenModal(true);
    setDataArtist(artist);
  };
  return (
    <>
      <View
        style={{
          position: 'relative',
          justifyContent: 'center',
        }}
      >
        {searchArtists.length > 0 ? (
          <TouchableOpacity
            onPress={() => handleReset()}
            style={{ position: 'absolute', zIndex: 2, right: 20 }}
          >
            <Cancel name={'cancel'} size={20} color={Colors.cancel} />
          </TouchableOpacity>
        ) : (
          <View style={{ position: 'absolute', zIndex: 2, right: 20 }}>
            <Icon name={'search'} size={15} color={Colors.gray} />
          </View>
        )}

        <TextInput
          placeholder={placeholder}
          placeholderTextColor={Colors.gray}
          selectionColor={Colors.primary}
          onChangeText={(text) => setWord(text)}
          style={{
            marginHorizontal: 10,
            borderRadius: 5,
            color: Colors.light,
            backgroundColor: Colors.dark,
            paddingTop: 10,
            paddingLeft: 10,
          }}
        />
      </View>

      {word !== '' && searchArtists && searchArtists.length > 0 && (
        <View
          style={{
            backgroundColor: Colors.dark,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            padding: 10,
            marginHorizontal: 10,
            position: 'absolute',
            width: Metrics.screenWidth - 20,
            zIndex: 3,
            bottom: Metrics.screenHeight / 3,
          }}
        >
          {searchArtists.map((artist, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleDetail(artist)}
              >
                <Text
                  style={[
                    Fonts.style.regular(Colors.gray, Fonts.size.small, 'left'),
                  ]}
                >
                  {artist.name}
                </Text>
                <View
                  style={{
                    borderWidth: 0.5,
                    borderColor: Colors.light,
                    opacity: 0.25,
                    marginVertical: 5,
                  }}
                />
              </TouchableOpacity>
            );
          })}
          <Text
            style={[
              Fonts.style.regular(Colors.light, Fonts.size.small, 'center'),
            ]}
          >
            {searchArtists.length} Results
          </Text>
        </View>
      )}
      <ModalApp
        open={openModal}
        close={setOpenModal}
        title={'Artist information'}
      >
        <ModalArtist artist={dataArtist} />
      </ModalApp>
    </>
  );
};

export default Search;
