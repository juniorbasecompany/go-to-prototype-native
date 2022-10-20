import React from 'react';

import { View } from 'react-native';

import { Card } from '../../components/card';
import { useEventInfo } from './eventInfo.hook';

export const EventInfo = () => {
  const { data } = useEventInfo();

  return (
    <View
      style={{
        flex: 1,
        padding: 24,
        backgroundColor: '#FFFFFF',
      }}
    >
      {data.map((item: any, index: number) => {
        return <Card key={index} item={item} />;
      })}
    </View>
  );
};
