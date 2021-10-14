import { Flex, Text, Box, Image, Heading } from '@chakra-ui/react'

export function HomeDesktopTwo() {
  return (
    <Flex
      display={['none', 'none', 'flex']}
      flexDirection="column"
      backgroundColor="#F6F5F7"
    >
      <Flex
        margin="3rem auto"
        width="85%"
      >
        <Flex
          width="50%"
          flexDirection="column"
          alignItems="center"
        >
          <Heading
            color="#F26419"
            fontSize="2rem"
            fontWeight="bold"
            height="2rem"
          >
            Encontre seu mentor
          </Heading>
          <Text
            marginTop="2rem"
            width="80%"
            color="#232126"
            fontSize="1.25rem"
            fontWeight="medium"
            textAlign="center"
          >
            Busque mentores com diversos perfis, conhecimentos e experiências, encontre aquele que 
            tenha mais a ver contigo e o que você busca.
          </Text>
          <Image
            src="/assets/images/HomeDesktopTwo.png"
            margin="1.5rem auto"
          />
        </Flex>

        <Flex
          width="50%"
          flexDirection="column"
          alignItems="center"
        >
          <Heading
            color="#F26419"
            fontSize="2rem"
            fontWeight="bold"
            height="2rem"
          >
            Agende sua mentoria
          </Heading>
          <Text
            marginTop="2rem"
            width="80%"
            color="#232126"
            fontSize="1.25rem"
            fontWeight="medium"
            textAlign="center"
          >
            Agende sua mentoria 1:1 com o mentor que você escolheu e comece seu
            acompanhamento.
          </Text>
          <Image
            src="/assets/images/HomeDesktopThree.png"
            margin="1.5rem auto"
          />
        </Flex>
      </Flex>
      <Flex
        margin="3rem auto"
        width="85%"
      >
        <Flex
          width="50%"
          flexDirection="column"
          alignItems="center"
        >
          <Heading
            color="#F26419"
            fontSize="2rem"
            fontWeight="bold"
            height="2rem"
          >
            Desenvolva suas habilidades
          </Heading>
          <Text
            marginTop="2rem"
            width="80%"
            color="#232126"
            fontSize="1.25rem"
            fontWeight="medium"
            textAlign="center"
          >
            Através das mentorias personalizadas, cada mentor pode te ajudar de várias formas a se desenvolver e 
            fazer sua carreira decolar.
          </Text>
          <Image
            src="/assets/images/HomeDesktopFour.png"
            margin="1.5rem auto"
          />
        </Flex>

        <Flex
          width="50%"
          flexDirection="column"
          alignItems="center"
        >
          <Heading
            color="#F26419"
            fontSize="2rem"
            fontWeight="bold"
            height="2rem"
          >
            Seja Mentor
          </Heading>
          <Text
            marginTop="2rem"
            width="80%"
            color="#232126"
            fontSize="1.25rem"
            fontWeight="medium"
            textAlign="center"
          >
            Ensine e tire dúvidas de profissionais de vários níveis durante as mentorias, uma forma de contribuir 
            com a comunidade e aprender enquanto mentora.
          </Text>
          <Image
            src="/assets/images/HomeDesktopFive.png"
            margin="1.5rem auto"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
