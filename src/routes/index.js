import React from 'react';
import { useSelector } from 'react-redux';

import createNavigator from './navigator';

export default function Routes() {
  const { signed } = useSelector(state => state.auth);

  const Navigator = createNavigator(signed);

  return <Navigator />;
}
