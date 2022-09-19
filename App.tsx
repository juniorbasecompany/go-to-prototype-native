import React from 'react';

import { GoToContext } from './contexts';
import { Routes } from './routes';

export default function App() {
  const [guid, setGuid] = React.useState<string>('');

  const addGuid = (value: string) => {
    setGuid(value);
  };

  return (
    <GoToContext.Provider value={{ guid, addGuid }}>
      <Routes />
    </GoToContext.Provider>
  );
}
