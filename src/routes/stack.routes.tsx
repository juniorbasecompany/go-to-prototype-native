import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenC } from '../screens';
import { EventInfo } from '../screens/eventInfo';
import { HistoricalList } from '../screens/historicalList';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="historicalList"
        component={HistoricalList}
        options={{ title: 'Historical' }}
      />
      <Screen
        name="eventInfo"
        component={EventInfo}
        options={{ title: 'Events' }}
      />
      <Screen name="screenC" component={ScreenC} />
    </Navigator>
  );
}
