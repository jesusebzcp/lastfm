import React, { useContext } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { StoreContext } from '../../flux';

//Theme
import { Colors, Fonts, Metrics } from '../../theme';

const Loading = () => {
  const { state } = useContext(StoreContext);
  const { uiState } = state;
  const { loading } = uiState;

  return (
    <>
      {loading && (
        <View style={styles.container}>
          <ActivityIndicator animating color={Colors.light} size={'large'} />
          <Text
            style={[
              Fonts.style.light(Colors.lightGray, Fonts.size.medium, 'center'),
              { marginVertical: 20 },
            ]}
          >
            Loading music....
          </Text>
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    position: 'absolute',
    height: Metrics.screenHeight,
    width: Metrics.screenWidth,
    justifyContent: 'center',
  },
});
export default Loading;
