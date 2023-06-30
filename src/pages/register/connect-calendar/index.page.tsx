import { Button, Heading, MultiStep, Text } from '@ui-ignite/react'
import { signIn, useSession } from 'next-auth/react'
import { Container, Header } from '../styles'
import { ArrowRight, Check } from '@phosphor-icons/react'
import { AuthError, ConnectBox, ConnectItem } from './styles'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

export default function ConnectCalendar() {
  const session = useSession()
  const router = useRouter()
  const hasAuthError = !!router.query.error
  const isSignedIn = session.status === 'authenticated'

  async function handleNavigateToNextStep() {
    await router.push('/register/timer-intervals')
  }

  return (
    <>
      <NextSeo
        title="Conecte sua agenda | Ignite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre."
        noindex
      />
      <Container>
        <Header>
          <Heading as="strong">Conecte sua agenda!</Heading>
          <Text>
            Conecte o seu calendário para verificar automaticamente as horas
            ocupadas e os novos eventos à medida em que são agendados.
          </Text>
          <MultiStep size={4} currentStep={2} />
        </Header>

        <ConnectBox>
          <ConnectItem>
            <Text>Google Calendar</Text>
            {isSignedIn ? (
              <Button disabled size="sm">
                Conectado <Check />
              </Button>
            ) : (
              <Button
                variant="secondary"
                size="sm"
                onClick={() => signIn('google')}
              >
                Conectar <ArrowRight />
              </Button>
            )}
          </ConnectItem>
          {hasAuthError ? (
            <AuthError size="sm">
              Falha ao se conectar ao Google, verifique se você habilitou as
              permissões de acesso ao Google Calendar
            </AuthError>
          ) : null}
          <Button
            type="submit"
            onClick={handleNavigateToNextStep}
            disabled={!isSignedIn}
          >
            Próximo passo
            <ArrowRight />
          </Button>
        </ConnectBox>
      </Container>
    </>
  )
}
