import { Flex, Text, Box, Image, Heading } from '@chakra-ui/react'

export function HomeMobileThree({ displayActive }) {
  return (
    <Flex display={displayActive}>
      <Box display={['block', 'block', 'none']} margin="1rem auto" width="85%">
        <Heading
          color="#F26419"
          fontSize="1rem"
          fontWeight="bold"
          height="2rem"
        >
          Onde trabalham nossos mentores?
        </Heading>
        <Image src="/assets/images/HomeMobileSix.png" margin="1rem auto" />
        <Heading
          color="#F26419"
          fontSize="1rem"
          fontWeight="bold"
          height="2rem"
        >
          O que é a Mentoree?
        </Heading>
        <Text
          color="#3E3D40"
          fontSize="1rem"
          fontWeight="medium"
          textAlign="justify"
        >
          A Mentoree é uma plataforma que ajuda pessoas que estão ou pretendem
          entrar no mercado tech a se desenvolverem, criando conexões e tornando
          o conhecimento mais acessível através dos nossos mentores.
        </Text>
        <Heading
          color="#F26419"
          fontSize="1rem"
          fontWeight="bold"
          height="2rem"
          marginTop="1rem"
        >
          Quanto custa?
        </Heading>
        <Text
          color="#3E3D40"
          fontSize="1rem"
          fontWeight="medium"
          textAlign="justify"
        >
          A Mentoree não cobra pelas mentorias, atualmente somos uma plataforma
          gratuita.
        </Text>
        <Heading
          color="#F26419"
          fontSize="1rem"
          fontWeight="bold"
          height="2rem"
          marginTop="1rem"
        >
          Por que a Mentoree?
        </Heading>
        <Text
          color="#3E3D40"
          fontSize="1rem"
          fontWeight="medium"
          textAlign="justify"
        >
          Somos uma plataforma dinâmica, que busca te ajudar a conquistar seus
          objetivos e te fazer crescer profissionalmente, contamos com vários
          mentores que farão sessões personalizadas e contribuirão bastante no
          seu desenvolvimento, e o melhor, sem custos.
        </Text>
      </Box>
    </Flex>
  )
}
