import { Flex, Text, Box, Image, Heading } from '@chakra-ui/react'

export function HomeMobileTwo({ displayActive }) {
  return (
    <Flex display={displayActive} backgroundColor="#F6F5F7">
      <Box
        display={['block', 'block', 'none']}
        margin="1rem auto"
        width="85%"
        textAlign="center"
      >
        <Heading 
          color="#F26419"
          fontSize="1.2rem"
          fontWeight="bold"
          height="2rem"
        >Encontre seu mentor</Heading>
        <Text
          color="#232126"
          fontSize="1rem"
          fontWeight="medium"
        >
          Busque mentores com diversos perfis, conhecimentos e experiências,
          encontre aquele que tenha mais a ver contigo e o que você busca.
        </Text>
        <Image
          src="/assets/images/HomeMobileTwo.png"
          margin="1.5rem auto" 
        />
        <Heading 
          color="#F26419"
          fontSize="1.2rem"
          fontWeight="bold"
          height="2rem"
        >Agende sua mentoria</Heading>
        <Text
          color="#232126"
          fontSize="1rem"
          fontWeight="medium"
        >
          Agende sua mentoria 1:1 com o mentor que você escolheu e comece seu
          acompanhamento.
        </Text>
        <Image
          src="/assets/images/HomeMobileThree.png" 
          margin="1.5rem auto" 
        />
        <Heading 
          color="#F26419"
          fontSize="1.2rem"
          fontWeight="bold"
          height="2rem"
        >
          Desenvolva suas habilidades</Heading>
        <Text
          color="#232126"
          fontSize="1rem"
          fontWeight="medium"
        >
          Através das mentorias personalizadas, cada mentor pode te ajudar de
          várias formas a se desenvolver e fazer sua carreira decolar.
        </Text>
        <Image
          src="/assets/images/HomeMobileFour.png"
          margin="1.5rem auto"
        />
        <Heading 
          color="#F26419"
          fontSize="1.2rem"
          fontWeight="bold"
          height="2rem"
        >Seja Mentor</Heading>
        <Text
          color="#232126"
          fontSize="1rem"
          fontWeight="medium"
        >
          Ensine e tire dúvidas de profissionais de vários níveis durante as
          mentorias, uma forma de contribuir com a comunidade e aprender
          enquanto mentora.
        </Text>
        <Image
          src="/assets/images/HomeMobileFive.png"
          margin="1.5rem auto"
        />
      </Box>
    </Flex>
  )
}
