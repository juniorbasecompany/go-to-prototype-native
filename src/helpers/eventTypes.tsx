import React from 'react';

import { Text } from 'react-native';

import { Image } from '../components';

export const getEventComponent = (
  eventType: string,
  index: number,
  item: any,
  property: any
): any => {
  switch (eventType) {
    case 'text':
      return <></>;
    case 'image':
      return <Image key={index} src={item.event.info[property]} />;
    case 'maps':
      return <></>;
    default:
      return (
        <Text key={index}>
          {`${property}: ${item.event.info[property]}`}
          {'\n'}
        </Text>
      );
  }
};
