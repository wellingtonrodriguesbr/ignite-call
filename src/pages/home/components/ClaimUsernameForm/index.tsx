import { Button, Text, TextInput } from '@ui-ignite/react'
import { Form, FormAnnotation } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { ArrowRight } from '@phosphor-icons/react'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Nome de usuário precisa no mínimo de 3 letras.' })
    .regex(/^([a-z\\\\-]+)$/i, {
      message: 'O usuário só pode conter letras e hifens.',
    })
    .transform((username) => username.toLowerCase()),
})

type claimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<claimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  async function handleClaimUsername(data: claimUsernameFormData) {
    console.log(data)
  }

  return (
    <>
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
      <FormAnnotation>
        <Text size="sm">
          {errors.username
            ? errors.username.message
            : 'Digite o nome do usuário desejado.'}
        </Text>
      </FormAnnotation>
    </>
  )
}
