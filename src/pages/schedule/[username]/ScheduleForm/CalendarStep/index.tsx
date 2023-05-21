import { Calendar } from '@/components/Calendar'
import {
  Container,
  TimePicker,
  TimePickerButton,
  TimePickerHeader,
  TimePickerList,
} from './styles'
import { useCallback, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { api } from '@/lib/axios'

interface Availability {
  possibleTimes: number[]
  availableTimes: number[]
}

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [availability, setAvailability] = useState<Availability | null>(null)
  const router = useRouter()

  const isDateSelected = !!selectedDate
  const username = String(router.query.username)

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describedDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null

  const getAvailabilityUserTimes = useCallback(async () => {
    const { data } = await api.get(`/users/${username}/availability`, {
      params: {
        date: dayjs(selectedDate).format('YYYY-MM-DD'),
      },
    })
    setAvailability(data)
  }, [selectedDate, username])

  useEffect(() => {
    if (!selectedDate) {
      return
    }

    getAvailabilityUserTimes()
  }, [selectedDate, getAvailabilityUserTimes])

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />
      {isDateSelected ? (
        <TimePicker>
          <TimePickerHeader>
            {weekDay}, <span>{describedDate}</span>{' '}
          </TimePickerHeader>
          <TimePickerList>
            {availability?.possibleTimes.map((hour) => (
              <TimePickerButton
                key={hour}
                disabled={!availability.availableTimes.includes(hour)}
              >
                {String(hour).padStart(2, '0')}:00h
              </TimePickerButton>
            ))}
          </TimePickerList>
        </TimePicker>
      ) : null}
    </Container>
  )
}
