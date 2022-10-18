import React from 'react';

export const GoToContext = React.createContext({
  guid: '',
  addGuid: (value: string) => {},
});
