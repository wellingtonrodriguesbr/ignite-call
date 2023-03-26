import { Button, TextInput } from '@ui-ignite/react'
import { Form } from './styles'

import { ArrowRight } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const claimUsernameFormSchema = z.object({
  username: z.string(),
})

type claimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm<claimUsernameFormData>()

  async function handleClaimUsername(data: claimUsernameFormData) {
    console.log(data)
  }

  return (
    <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
      <TextInput
        prefix="call.com/"
        placeholder="seu-usuario"
        {...register('username')}
      />
      <Button type="submit">
        Reservar usúario
        <ArrowRight />
      </Button>
    </Form>
  )
}
