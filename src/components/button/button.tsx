import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

import { styles } from './button.style';

interface ButtonInput {
  title: string;
  onPress: () => void;
}

export const Button: React.FC<ButtonInput> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
