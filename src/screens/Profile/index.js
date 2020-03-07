import React from 'react';
import { View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

// import { Container } from './styles';

export default function Profile() {
  return <View />;
}

Profile.navigationOptions = {
  tabBarLabel: 'My profile',
  tabBarIcon: ({ tintColor }) => (
    <MaterialIcons name="person" size={20} color={tintColor} />
  ),
};
