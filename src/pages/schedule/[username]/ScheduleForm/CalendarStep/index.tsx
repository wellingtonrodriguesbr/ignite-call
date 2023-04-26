import { Calendar } from '@/components/Calendar'
import {
  Container,
  TimePicker,
  TimePickerButton,
  TimePickerHeader,
  TimePickerList,
} from './styles'
import { useState } from 'react'
import dayjs from 'dayjs'

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const isDateSelected = !!selectedDate

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describedDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />
      {isDateSelected ? (
        <TimePicker>
          <TimePickerHeader>
            {weekDay}, <span>{describedDate}</span>{' '}
          </TimePickerHeader>
          <TimePickerList>
            <TimePickerButton>08:00h</TimePickerButton>
            <TimePickerButton>09:00h</TimePickerButton>
            <TimePickerButton>10:00h</TimePickerButton>
            <TimePickerButton>11:00h</TimePickerButton>
            <TimePickerButton>12:00h</TimePickerButton>
            <TimePickerButton>13:00h</TimePickerButton>
            <TimePickerButton>14:00h</TimePickerButton>
            <TimePickerButton>15:00h</TimePickerButton>
            <TimePickerButton>16:00h</TimePickerButton>
            <TimePickerButton>17:00h</TimePickerButton>
            <TimePickerButton>18:00h</TimePickerButton>
          </TimePickerList>
        </TimePicker>
      ) : null}
    </Container>
  )
}
