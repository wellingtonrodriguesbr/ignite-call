import Image from 'next/image'
import { Heading, Text } from '@ui-ignite/react'
import { Container, Hero, Preview } from './styles'

import calendarImg from '../../assets/calendar.png'
import bgHero from '../../assets/bg-hero.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda | Ignite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre."
      />
      <Container>
        <Image src={bgHero} alt="" fill />
        <Hero>
          <Heading as="h1" size="4xl">
            Agendamento Descomplicado
          </Heading>
          <Text size="xl">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>
          <ClaimUsernameForm />
        </Hero>
        <Preview>
          <Image
            src={calendarImg}
            alt="Imagem de um Calendário simbolizando a aplicação"
            height={442}
            quality={100}
            priority
          />
        </Preview>
      </Container>
    </>
  )
}
