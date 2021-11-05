import React, { ChangeEvent, useContext, useEffect } from 'react'

import { Container } from './styles'

import { ViewFinderContext } from '../../App'

export default function ViewFinder() {
  const value = useContext(ViewFinderContext)
  const [hours, setHours] = value.hours
  const [minutes, setMinutes] = value.minutes
  const [secounds, setSecounds] = value.secounds
  const [paused] = value.paused

  function format_hours(hour: string) {
    while (hour.length < 2) {
      hour = '0' + hour
    }

    if (hour.length > 2) {
      hour = hour.substring(1, 3)
    }

    setHours(hour)
  }

  function format_minutes(minute: string) {
    let minute_number = parseInt(minute)

    if(minute_number > 59) {
      const hour = Math.floor(minute_number / 60)
      format_hours((parseInt(hours) + hour).toString())
      minute_number = minute_number - hour * 60
      minute = minute_number.toString()
    }

    if(minute_number < 0) {
      const hour = Math.ceil(minute_number / 60) - 1
      format_hours((parseInt(hours) + hour).toString())
      minute_number = 60 + (minute_number % 60)
      minute = minute_number.toString()
    }

    while (minute.length < 2) {
      minute = '0' + minute
    }

    if (minute.length > 2) {
      minute = minute.substring(1, 3)
    }

    setMinutes(minute)
  }

  function format_secounds(secound: string) {
    let secound_number = parseInt(secound)

    if(secound_number > 59) {
      const minute = Math.floor(secound_number / 60)
      format_minutes((parseInt(minutes) + minute).toString())
      secound_number = secound_number - minute * 60
      secound = secound_number.toString()
    }

    if(secound_number < 0) {
      const minute = Math.ceil(secound_number / 60) - 1
      format_minutes((parseInt(minutes) + minute).toString())
      secound_number = 60 + (secound_number % 60)
      secound = secound_number.toString()
    }

    while (secound.length < 2) {
      secound = '0' + secound
    }

    if (secound.length > 2) {
      secound = secound.substring(1, 3)
    }

    setSecounds(secound)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const hour = parseInt(hours)
      const minute = parseInt(minutes)
      const secound = parseInt(secounds)

      if (!paused && (hour > 0 || minute > 0 || secound > 0)) {
        format_secounds((parseInt(secounds) - 1).toString())
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    <Container>
      <input
        onChange={(event: ChangeEvent<HTMLInputElement>) => format_hours(event.target.value)}
        className="number"
        value={hours} />
      <span className="separator">:</span>
      <input
        onChange={(event: ChangeEvent<HTMLInputElement>) => format_minutes(event.target.value)}
        className="number"
        value={minutes} />
      <span className="separator">:</span>
      <input
        onChange={(event: ChangeEvent<HTMLInputElement>) => format_secounds(event.target.value)}
        className="number"
        value={secounds} />
    </Container>
  )
}