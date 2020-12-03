import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

//Theme
import { Fonts, Colors, Metrics } from '../../theme';

const Button = ({ text, action }) => {
  return (
    <TouchableOpacity
      onPress={() => action()}
      style={{
        backgroundColor: Colors.secondary,
        width: Metrics.screenWidth - 40,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
      }}
    >
      <Text
        style={[Fonts.style.regular(Colors.light, Fonts.size.medium, 'center')]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;
