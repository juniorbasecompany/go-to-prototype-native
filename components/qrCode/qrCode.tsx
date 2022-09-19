import React from 'react';

import { BarCodeScanner } from 'expo-barcode-scanner';
import { Button, Text, View } from 'react-native';

import { useQrCode } from './qrCode.hook';
import { styles } from './qrCode.style';

export interface QrCodeInput {
  navigateTo: keyof ReactNavigation.RootParamList;
}

export const QrCode: React.FC<QrCodeInput> = (props) => {
  const { hasPermission, scanned, text, onBarCodeScanned } = useQrCode(props);

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
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : onBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </View>
    </View>
  );
};
