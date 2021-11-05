import React, { useContext } from 'react'

import { Button } from './styles'

import { ViewFinderContext } from '../../App'

export default function ViewFinder() {
  const value = useContext(ViewFinderContext)
  const setHours = value.hours[1]
  const setMinutes = value.minutes[1]
  const setSecounds = value.secounds[1]
  const setPaused = value.paused[1]

  function reset() {
    setHours('00')
    setMinutes('00')
    setSecounds('00')
    setPaused(true)
  }

  return (
    <Button onClick={reset}>Reset</Button>
  )
}