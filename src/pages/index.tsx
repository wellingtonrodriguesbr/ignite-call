import Head from "next/head";
import { Heading, Text } from "@ui-ignite/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Heading as="h1">Hello World!</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          reprehenderit alias esse, quibusdam laboriosam ratione dolorum minus
          molestias velit ex earum fuga incidunt, nulla culpa quaerat illo unde
          dolorem enim!
        </Text>
      </main>
    </>
  );
}
