import React from 'react';

import { Image, Text, View } from 'react-native';

import { useEventInfo } from './eventInfo.hook';
import { styles } from './eventInfo.style';

export const EventInfo = () => {
  const { data } = useEventInfo();
  return (
    <View>
      <View style={styles.container}>
        {data.map((item: any, index: number) => {
          return (
            <Text style={styles.card} key={index}>
              {Object.keys(item.event.schema.properties).map(
                (property: string, propertyIndex: number) => {
                  return property === 'image' ? (
                    <Image
                      key={propertyIndex}
                      source={{ uri: item.event.info[property] }}
                      style={{
                        width: 80,
                        height: 80,
                      }}
                    />
                  ) : (
                    <Text key={propertyIndex}>
                      {`${property}: ${item.event.info[property]}`}
                      {'\n'}
                    </Text>
                  );
                }
              )}
            </Text>
          );
        })}
      </View>
    </View>
  );
};
