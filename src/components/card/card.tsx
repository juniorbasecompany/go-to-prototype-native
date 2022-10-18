import React from 'react';

import { Text } from 'react-native';

import { getEventComponent } from '../../helpers/eventTypes';

export const Card = ({ item }: any) => {
  return (
    <Text
      style={{
        marginTop: 16,
        paddingTop: 10,
        width: '100%',
        height: 150,
        backgroundColor: '#0000ff',
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
      }}
    >
      {Object.keys(item.event.schema.properties).map(
        (property: string, propertyIndex: number) => {
          return getEventComponent(property, propertyIndex, item, property);
        }
      )}
    </Text>
  );
};
