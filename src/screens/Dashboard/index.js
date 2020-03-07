import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';

import Background from '~/components/Background';

export default function Dashboard() {
  return <Background />;
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Appointments',
  tabBarIcon: ({ tintColor }) => (
    <MaterialIcons name="event" size={20} color={tintColor} />
  ),
};
