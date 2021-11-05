import React, { createContext, useState } from 'react';

import GlobalStyles from './global/GlobalStyles';

import { Container, PlayPauseButton, ResetButton, ViewFinder } from './components'

export const ViewFinderContext = createContext({} as any)

function App() {
  const value = {
    hours: useState('00'),
    minutes: useState('00'),
    secounds: useState('00'),
    paused: useState(true)
  }

  return (
    <>
      <GlobalStyles />
      <Container>
        <ViewFinderContext.Provider value={value}>
          <ViewFinder />
          <PlayPauseButton />
          <ResetButton />
        </ViewFinderContext.Provider>
      </Container>
    </>
  );
}

export default App;
