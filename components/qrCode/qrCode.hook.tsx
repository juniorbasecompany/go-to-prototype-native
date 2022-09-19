import React from 'react';

import { BarCodeScanner } from 'expo-barcode-scanner';

import { useNavigation } from '@react-navigation/native';

import { GoToContext } from '../../contexts';
import { QrCodeInput } from './qrCode';

interface BarCodeScannedProps {
  type: string;
  data: string;
}

interface QrCodeProps {
  hasPermission: boolean | null;
  scanned: boolean;
  text: string;
  onBarCodeScanned: ({ type, data }: BarCodeScannedProps) => void;
}

export const useQrCode = ({ navigateTo }: QrCodeInput): QrCodeProps => {
  const context = React.useContext(GoToContext);
  const [hasPermission, setHasPermission] = React.useState<boolean | null>(
    null
  );
  const [scanned, setScanned] = React.useState(false);
  const [text, setText] = React.useState('Not yet scanned');
  const navigation = useNavigation();

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  };

  React.useEffect(() => {
    askForCameraPermission();
    setScanned(false);
  }, [scanned]);

  const handleBarCodeScanned = ({ type, data }: BarCodeScannedProps) => {
    setScanned(true);
    setText(data);
    navigation.navigate(navigateTo);
    context.addGuid(data);
    console.log('Type: ' + type + '\nData: ' + data);
  };

  return {
    hasPermission,
    scanned,
    text,
    onBarCodeScanned: handleBarCodeScanned,
  };
};
