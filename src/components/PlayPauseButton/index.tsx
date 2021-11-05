import React, { useContext } from 'react'

import { Button } from './styles'

import { ViewFinderContext } from '../../App'

export default function ViewFinder() {
  const value = useContext(ViewFinderContext)
  const [paused, setPaused] = value.paused

  return (
    <Button onClick={() => setPaused(!paused)}>{ paused ? 'play' : 'pause' }</Button>
  )
}