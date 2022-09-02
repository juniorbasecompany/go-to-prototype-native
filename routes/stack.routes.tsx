import { ScreenA, ScreenB } from 'screens';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="screenA" component={ScreenA} />
      <Screen name="screenB" component={ScreenB} />
    </Navigator>
  );
}
