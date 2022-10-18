import React from 'react';

import { View } from 'react-native';

import { Button } from '../../components/button';
import { QrCode } from '../../components/qrCode';
import { useHistoricalList } from './historicalList.hook';

export const HistoricalList = () => {
  const { itemList, onClick } = useHistoricalList();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 30,
      }}
    >
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
