import Head from 'next/head'
import { Button, Heading, MultiStep, Text, TextInput } from '@ui-ignite/react'
import { Container, Form, Header } from './styles'
import { ArrowRight } from '@phosphor-icons/react'

export default function Register() {
  return (
    <>
      <Head>
        <title>Registro | Ignite Call</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header>
          <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
          <Text>
            Precisamos de algumas informações para criar seu perfil! Ah, você
            pode editar essas informações depois.
          </Text>

          <MultiStep size={4} currentStep={1} />
        </Header>
        <Form as="form">
          <label>
            <Text size="sm">Nome de usuário</Text>
            <TextInput prefix="call.com/" placeholder="seu-usuário" />
          </label>

          <label>
            <Text size="sm">Nome completo</Text>
            <TextInput placeholder="Seu nome" />
          </label>

          <Button type="submit">
            Próximo passo
            <ArrowRight />
          </Button>
        </Form>
      </Container>
    </>
  )
}
