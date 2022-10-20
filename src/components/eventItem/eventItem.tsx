import React from 'react';

import { Text, View } from 'react-native';

interface EventItemInput {
  property: string;
  value: string;
}

export const EventItem: React.FC<EventItemInput> = (props) => {
  const { property, value } = props;

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Text
        style={{ fontWeight: 'bold', color: 'white', fontSize: 16 }}
      >{`${property}: `}</Text>
      <Text style={{ color: 'white', fontSize: 16 }}>{value}</Text>
    </View>
  );
};
