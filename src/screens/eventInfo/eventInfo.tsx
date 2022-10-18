import React from 'react';

import { View } from 'react-native';

import { Card } from '../../components/card';
import { useEventInfo } from './eventInfo.hook';
import { styles } from './eventInfo.style';

export const EventInfo = () => {
  const { data } = useEventInfo();
  return (
    <View>
      <View style={styles.container}>
        {data.map((item: any, index: number) => {
          return <Card key={index} item={item} />;
        })}
      </View>
    </View>
  );
};
