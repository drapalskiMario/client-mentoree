import { Box, Heading, Link, Text, Image } from '@chakra-ui/react'

export function SignupMobile () {
  return (
    <Box
      display={["flex", "flex", "none"]}
      flexDirection="column"
    >
      <Heading
        margin="1rem auto"
      >
        Qual seu perfil?
      </Heading>
      <Link
        margin="1rem auto"
        color="#F26419"
      >
        <Text
          textAlign="center"
          color="#F26419"
          fontWeight="bold"
        >
          Desejo Mentorias
        </Text>
        <Image 
          src="/assets/images/SignupMentoredMobile.png"
        />
      </Link>
      <Link
        margin="1rem auto"
        color="#F26419"
      >
        <Text
          textAlign="center"
          color="#F26419"
          fontWeight="bold"
        >
          Sou Mentor
        </Text>
        <Image 
          src="/assets/images/SignupMentorMobile.png"
        />
      </Link>
    </Box>
  )
}