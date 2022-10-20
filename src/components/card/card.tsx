import React from 'react';

import { FlatList, View } from 'react-native';

import { getEventComponent } from '../../helpers/eventTypes';

export const Card = ({ item }: any) => {
  const events = Object.keys(item.event.schema.properties).map(
    (property: string, index: number) => {
      return { id: index, eventType: property, item };
    }
  );

  return (
    <View
      style={{
        backgroundColor: 'blue',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 10,
        flex: 1,
        flexDirection: 'row',
      }}
    >
      <FlatList
        data={events}
        renderItem={({ item }) =>
          getEventComponent(
            item.eventType,
            item.item.event.info[item.eventType]
          )
        }
      />
    </View>
  );
};
