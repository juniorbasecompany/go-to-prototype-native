import React from 'react';

import { View } from 'react-native';

import { Button, QrCode } from '../../components';
import { useHistoricalList } from './historicalList.hook';
import { styles } from './historicalList.style';

export const HistoricalList = () => {
  const { itemList, onClick } = useHistoricalList();

  return (
    <View style={styles.container}>
      <QrCode navigateTo={'eventInfo'} />
      {itemList.map((item: any, index: number) => {
        return (
          <Button
            key={index}
            title={item.guid}
            onPress={() => onClick(item.guid)}
          />
        );
      })}
    </View>
  );
};
