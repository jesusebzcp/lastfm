import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

//Theme
import { Colors } from '../../theme';

const Back = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name={'arrow-left'} color={Colors.light} size={15} />
    </TouchableOpacity>
  );
};

export default Back;
