import React from 'react';

import { BarCodeScanner } from 'expo-barcode-scanner';
import { Button, Text, View } from 'react-native';

import { useQrCode } from './qrCode.hook';

export interface QrCodeInput {
  navigateTo: keyof ReactNavigation.RootParamList;
}

export const QrCode: React.FC<QrCodeInput> = (props) => {
  const { hasPermission, scanned, onBarCodeScanned } = useQrCode(props);

  const askForCameraPermission = (): void => {
    throw new Error('Function not implemented.');
  };

  if (hasPermission === null) {
    return (
      <View>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button
          title={'Allow Camera'}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 300,
          width: 300,
          overflow: 'hidden',
          borderRadius: 30,
          backgroundColor: 'tomato',
        }}
      >
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : onBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </View>
    </View>
  );
};
