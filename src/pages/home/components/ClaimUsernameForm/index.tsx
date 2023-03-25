import { Button, TextInput } from '@ui-ignite/react'
import { Form } from './styles'

import { ArrowRight } from '@phosphor-icons/react'

export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput prefix="call.com/" placeholder="seu-usuario" />
      <Button type="submit">
        Reservar usúario
        <ArrowRight />
      </Button>
    </Form>
  )
}
