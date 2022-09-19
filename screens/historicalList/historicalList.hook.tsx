import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { GoToContext } from '../../contexts';

interface HistoricalListProps {
  onClick: () => void;
}

export const useHistoricalList = (): HistoricalListProps => {
  const context = React.useContext(GoToContext);
  const navigation = useNavigation();

  const handleOnClick = () => {
    context.addGuid('DD0492DB62E74C25BD9CF9969362D1F6');
    navigation.navigate('eventInfo');
  };

  return {
    onClick: handleOnClick,
  };
};
