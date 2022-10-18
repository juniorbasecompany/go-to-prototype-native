import React from 'react';

import { Text } from 'react-native';

import { getEventComponent } from '../../helpers/eventTypes';
import { styles } from './card.style';

export const Card = ({ item }: any) => {
  return (
    <Text style={styles.card}>
      {Object.keys(item.event.schema.properties).map(
        (property: string, propertyIndex: number) => {
          return getEventComponent(property, propertyIndex, item, property);
        }
      )}
    </Text>
  );
};
