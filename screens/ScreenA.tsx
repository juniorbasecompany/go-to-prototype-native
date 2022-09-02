import React from 'react';

import { Button, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export function ScreenA() {
  const navigation = useNavigation();
  function onNextScreen() {
    navigation.navigate('screenB');
  }

  return (
    <View
      style={{ flex: 1, backgroundColor: 'gray', justifyContent: 'center' }}
    >
      <Button title="Go to next screen" onPress={onNextScreen} />
    </View>
  );
}
