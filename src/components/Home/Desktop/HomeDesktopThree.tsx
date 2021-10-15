import { Flex, Box, Heading, Image, Text } from '@chakra-ui/react'

export function HomeDesktopThree() {
  return (
    <Flex
      display={["none", "none", "block"]}
    >
      <Box
        width="95%"
        margin="2rem auto"
      >
        <Heading
          color="#F26419"
          fontSize="2.25rem"
        >
          Onde trabalham nossos mentores?
        </Heading>
        <Image
          src="/assets/images/HomeDesktopSix.png"
        />
        <Flex
          justifyContent="space-between"
        >
          <Box
            width="33%"
          >
            <Heading
              color="#F26419"
              fontSize="2rem"
            >
              O que é a Mentoree?
            </Heading>
            <Text
              color="#3E3D40"
              fontSize="1.25rem"
              marginTop="1.25rem"
            >
              A Mentoree é uma plataforma que ajuda pessoas que estão ou pretendem entrar no mercado tech a se 
              desenvolverem, criando conexões e tornando o conhecimento mais acessível através dos nossos mentores.
            </Text>
          </Box>
          <Box
            width="30%"
          >
            <Heading
              color="#F26419"
              fontSize="2rem" 
            >
              Quanto custa?
            </Heading>
            <Text
              color="#3E3D40"
              fontSize="1.25rem"
              marginTop="1.25rem"
            >
              A Mentoree não cobra pelas mentorias, atualmente somos uma plataforma gratuita.
            </Text>
          </Box>
          <Box
            width="33%"
          >
            <Heading
              color="#F26419"
              fontSize="2rem"
            >
              O que é a Mentoree?
            </Heading>
            <Text
              color="#3E3D40"
              fontSize="1.25rem"
              marginTop="1.25rem"
            >
              Somos uma plataforma dinâmica, que busca te ajudar a conquistar seus objetivos e te fazer crescer 
              profissionalmente, contamos com vários mentores que farão sessões personalizadas e contribuirão bastante 
              no seu desenvolvimento, e o melhor, sem custos.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}