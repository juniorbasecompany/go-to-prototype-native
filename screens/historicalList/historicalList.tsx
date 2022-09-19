import React from 'react';

import { Button } from 'components/button';
import { QrCode } from 'components/qrCode';
import { View } from 'react-native';

import { useHistoricalList } from './historicalList.hook';
import { styles } from './historicalList.style';

export const HistoricalList = () => {
  const { onClick } = useHistoricalList();
  return (
    <View style={styles.container}>
      <QrCode navigateTo={'eventInfo'} />
      <Button title={'Wine'} onPress={onClick} />
    </View>
  );
};
