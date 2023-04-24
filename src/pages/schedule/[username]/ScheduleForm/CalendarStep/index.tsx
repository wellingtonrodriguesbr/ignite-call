import { Calendar } from '@/components/Calendar'
import {
  Container,
  TimePicker,
  TimePickerButton,
  TimePickerHeader,
  TimePickerList,
} from './styles'
import { useState } from 'react'

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const isDateSelected = !!selectedDate

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />
      {isDateSelected ? (
        <TimePicker>
          <TimePickerHeader>
            terça-feira <span>20 de setemebro</span>{' '}
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
