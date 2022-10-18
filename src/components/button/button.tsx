import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

interface ButtonInput {
  title: string;
  onPress: () => void;
}

export const Button: React.FC<ButtonInput> = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'blue',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        width: '80%',
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: '#fff',
          textAlign: 'center',
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
