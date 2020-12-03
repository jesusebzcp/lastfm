import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

//Theme
import { Colors, Fonts, Metrics } from '../../theme';

const Pagination = ({ pagination, next, back }) => {
  return (
    <View
      style={{
        backgroundColor: Colors.backgroundColor,
        flexDirection: 'row',
        width: Metrics.screenWidth * 0.3,
        justifyContent: 'space-between',
        borderRadius: 15,
        height: 30,
        alignItems: 'center',
      }}
    >
      <TouchableOpacity onPress={() => back()}>
        <Icon
          name={'arrow-left'}
          size={25}
          color={pagination === 1 ? Colors.gray : Colors.light}
        />
      </TouchableOpacity>

      <Text
        style={[
          Fonts.style.bold(Colors.light, Fonts.size.medium, 'left'),
          { marginVertical: 10, marginLeft: 5 },
        ]}
      >
        {pagination}
      </Text>
      <TouchableOpacity onPress={() => next()}>
        <Icon name={'arrow-right'} size={25} color={Colors.light} />
      </TouchableOpacity>
    </View>
  );
};
export default Pagination;
