import { Calendar } from '@/components/Calendar'
import {
  Container,
  TimePicker,
  TimePickerButton,
  TimePickerHeader,
  TimePickerList,
} from './styles'

export function CalendarStep() {
  const isDateSelected = false

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar />
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
