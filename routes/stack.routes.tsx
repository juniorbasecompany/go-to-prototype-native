import { ScreenC } from 'screens';
import { EventInfo } from 'screens/eventInfo';
import { HistoricalList } from 'screens/historicalList';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="historicalList" component={HistoricalList} />
      <Screen name="eventInfo" component={EventInfo} />
      <Screen name="screenC" component={ScreenC} />
    </Navigator>
  );
}
