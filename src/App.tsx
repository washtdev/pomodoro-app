import React, { createContext, useState } from 'react'
import Particles, { HoverMode } from 'react-tsparticles'

import GlobalStyles from './global/GlobalStyles'

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
      <Particles canvasClassName="particles" options={{
        fpsLimit: 60,
        particles: {
          number: {
            value: 50
          },
          size: {
            value: 3
          },
          move: {
            enable: true
          },
          lineLinked: {
            enable: true
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: HoverMode.repulse
            }
          }
        }
      }} />
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
