import React from 'react';

import { Image as ImageReactNative } from 'react-native';

interface ImageInput {
  src: string;
}

export const Image: React.FC<ImageInput> = (props) => {
  const { src } = props;

  return (
    <ImageReactNative
      source={{ uri: src }}
      style={{
        width: 80,
        height: 80,
      }}
    />
  );
};
