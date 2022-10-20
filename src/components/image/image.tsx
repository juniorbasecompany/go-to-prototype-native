import React from 'react';

import { Image as ImageReactNative, View } from 'react-native';

interface ImageInput {
  src: string;
}

export const Image: React.FC<ImageInput> = (props) => {
  const { src } = props;

  return (
    <View style={{ flex: 1, marginTop: 15 }}>
      <ImageReactNative
        source={{ uri: src }}
        style={{ width: 60, height: 60, borderRadius: 30 }}
      />
    </View>
  );
};
