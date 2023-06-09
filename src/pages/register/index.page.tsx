import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Button, Heading, MultiStep, Text, TextInput } from '@ui-ignite/react'
import { Container, Form, FormError, Header } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { api } from '@/lib/axios'
import { ArrowRight } from '@phosphor-icons/react'
import { AxiosError } from 'axios'
import { NextSeo } from 'next-seo'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Nome de usuário precisa no mínimo de 3 letras.' })
    .regex(/^([a-z\\\\-]+)$/i, {
      message: 'O usuário só pode conter letras e hifens.',
    })
    .transform((username) => username.toLowerCase()),
  name: z.string().min(3, { message: 'Digite seu nome completo.' }),
})

type registerFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<registerFormData>({
    resolver: zodResolver(registerFormSchema),
  })
  const router = useRouter()

  async function handleRegister(data: registerFormData) {
    try {
      await api.post('/users', {
        name: data.name,
        username: data.username,
      })

      await router.push('/register/connect-calendar')
    } catch (error) {
      if (error instanceof AxiosError && error?.response?.data?.message) {
        alert(error?.response?.data?.message)
        return
      }

      console.log(error)
    }
  }

  useEffect(() => {
    if (router.query?.username) {
      setValue('username', String(router.query?.username))
    }
  }, [router.query?.username, setValue])

  return (
    <>
      <NextSeo
        title="Crie uma conta | Ignite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre."
      />
      <Container>
        <Header>
          <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
          <Text>
            Precisamos de algumas informações para criar seu perfil! Ah, você
            pode editar essas informações depois.
          </Text>

          <MultiStep size={4} currentStep={1} />
        </Header>
        <Form as="form" onSubmit={handleSubmit(handleRegister)}>
          <label>
            <Text size="sm">Nome de usuário</Text>
            <TextInput
              prefix="call.com/"
              placeholder="seu-usuário"
              {...register('username')}
            />
            {errors.username ? (
              <FormError size="sm">{errors.username.message}</FormError>
            ) : null}
          </label>

          <label>
            <Text size="sm">Nome completo</Text>
            <TextInput placeholder="Seu nome" {...register('name')} />
            {errors.name ? (
              <FormError size="sm">{errors.name.message}</FormError>
            ) : null}
          </label>

          <Button type="submit" disabled={isSubmitting}>
            Próximo passo
            <ArrowRight />
          </Button>
        </Form>
      </Container>
    </>
  )
}
