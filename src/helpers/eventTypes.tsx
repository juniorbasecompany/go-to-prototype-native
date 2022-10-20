import React from 'react';

import { Text, View } from 'react-native';
import { EventItem } from 'src/components/eventItem';

import { Image } from '../components/image';

export const getEventComponent = (eventType: string, value: any): any => {
  switch (eventType) {
    case 'text':
      return <></>;
    case 'image':
      return <Image src={value} />;
    case 'maps':
      return <></>;
    default:
      return <EventItem property={eventType} value={value} />;
  }
};
