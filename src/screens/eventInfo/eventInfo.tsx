import React from 'react';

import { Image, Text, View } from 'react-native';
import { Card } from 'src/components';

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
