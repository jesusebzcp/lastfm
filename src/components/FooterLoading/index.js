import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

//UI
import { Colors } from '../../theme';

const FooterLoading = ({ loading }) => {
  return (
    <>
      {loading && (
        <View style={styles.container}>
          <ActivityIndicator animating size="small" color={Colors.light} />
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: { height: 120, paddingTop: 20 },
});
export default FooterLoading;
