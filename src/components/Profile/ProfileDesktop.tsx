import {
  Flex,
  Box,
  Avatar,
  Heading,
  Text,
  Link,
  Image,
  Button,
  HStack,
} from '@chakra-ui/react'

export function ProfileDesktop() {
  return (
    <Flex
      display={['none', 'none', 'flex']}
      flexDirection="column"
      width="80%"
      margin="3rem auto"
    >
      <Flex justifyContent="center" alignItems="center">
        <HStack spacing="1rem">
          <Box
            display="flex"
            flexDirection="column"
            width="45%"
            alignItems="center"
          >
            <Avatar size="2xl" src="https://github.com/drapalskiMario.png" />
            <Heading
              marginTop="0.5rem"
              fontSize="2rem"
              color="#232126"
              fontWeight="700"
            >
              Mario Junior
            </Heading>
            <Text fontWeight="400">Técnico de Sistemas em Barbosa Mello</Text>
          </Box>
          <Text width="55%" fontWeight="400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit
            amet ultrices nibh, at tincidunt mi. Cras ultrices lacinia libero,
            ac iaculis dolor. Praesent pulvinar ultrices elit, et mattis nulla
            commodo ut. Vestibulum id tincidunt lectus. Vestibulum pellentesque
            convallis elit. Maecenas nec feugiat magna. Orci varius natoque
            penatibus et magnis dis parturient montes.
          </Text>
        </HStack>
      </Flex>
      <Flex flexDirection="column" width="85%" margin="3rem auto 1rem auto">
        <Heading fontSize="1.5rem" color="#232126" fontWeight="700">
          Especilidade
        </Heading>
        <Text
          width="35%"
          padding="1rem 0 1rem 0"
          textAlign="center"
          marginTop="1rem"
          fontSize="1rem"
          fontWeight="700"
          backgroundColor="#E5E4E5"
          borderRadius="0.5rem"
        >
          Desenvolvimento de Software
        </Text>
        <Link
          src="https://www.linkedin.com/in/mario-drapalski/"
          marginTop="1.5rem"
          display="flex"
          alignItems="center"
        >
          <Image
            src="/assets/images/LogoLinkedIn.png"
            width="2rem"
            height="2rem"
          />
          <Text
            marginLeft="0.8rem"
            fontSize="1rem"
            fontWeight="bold"
            color="#114A8C"
          >
            Linkedin
          </Text>
        </Link>
        <Flex
          width="100%"
        >
          <Link
            href="./schedule-part-one"
            margin="2rem auto 1rem auto"
            width="100%"
            textAlign="center"
            color="#fff"
          >
            <Button
              fontSize="1rem"
              height="3rem"
              background="#F26419"
              color="#FFFFFF"
              width="40%"
              variant="unstyled"
            >
              Quero agendar
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}
