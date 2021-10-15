import { Flex, Avatar, Heading, Text, Box, Link, Image, Button } from '@chakra-ui/react'


export function ProfileMobile({ displayActive }) {
  return (
    <Flex
      display={[displayActive, displayActive, 'none']}
      flexDirection="column"
      alignItems="center"
      width="85%"
      margin="1.5rem auto"
    >
      <Avatar
        size="lg"
        name="Mario Junior"
        src="https://github.com/drapalskiMario.png"
      />
      <Heading
        marginTop="0.5rem"
        fontSize="0.9rem"
        color="#232126"
        fontWeight="bold"
      >
        Mario Junior
      </Heading>
      <Text
        fontSize="0.8rem"
        textAlign="center"
        fontWeight="400"
      >
        Técnico de Sistemas em Barbosa Mello
      </Text>
      <Text
        marginTop="1.5rem"
        fontSize="0.75rem"
        fontWeight="400"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet
        ultrices nibh, at tincidunt mi. Cras ultrices lacinia libero, ac iaculis
        dolor. Praesent pulvinar ultrices elit, et mattis nulla commodo ut.
        Vestibulum id tincidunt lectus. Vestibulum pellentesque convallis elit.
        Maecenas nec feugiat magna. Orci varius natoque penatibus et magnis dis
        parturient montes.
      </Text>
      <Box
        width="100%"
        textAlign="start"
        marginTop="1.5rem"
      >
        <Heading
          fontSize="0.9rem"
          color="#232126"
          fontWeight="700"
        >
          Especilidade
        </Heading>
        <Text
          width="100%"
          padding="0.5rem 0 0.5rem 0"
          textAlign="center"
          marginTop="0.5rem"
          fontSize="0.75rem"
          fontWeight="700"
          backgroundColor="#E5E4E5"
          borderRadius="0.25rem"
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
            width="1.2rem"
            height="1.2rem"
          />
          <Text
            marginLeft="0.8rem"
            fontSize="0.75rem"
            fontWeight="bold"
            color="#114A8C"
          >
            Linkedin
          </Text>
        </Link>
        <Button
          fontSize="0.75rem"
          marginTop="2rem"
          width="100%"
          height="2.5rem"
          background="#F26419"
          color="#FFFFFF"
        >
          Quero agendar
        </Button>
      </Box>
    </Flex>
  )
}