import { Heading, Flex, Box, Link, Image } from '@chakra-ui/react'
export function SignupDesktop() {
  return (
    <Flex
      display={["none", "none", "flex"]}
      height="calc(100vh - (5rem + 6rem))"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        color="#3E3D40"
        fontSize="3rem"
        marginTop="-4rem"
        marginBottom="4rem"
      >
        Qual seu perfil?
      </Heading>
      <Flex
        width="80%"
        justifyContent="space-around"
      >
        <Link>
          <Box>
            <Image
              src="/assets/images/SignupMentor.png"
              widht="18rem"
              height="18rem"
              />
            <Heading
              textAlign="center"
              fontSize="2rem"
              color="#F26419"
              marginTop="1rem"
            >
              Sou Mentor
            </Heading>
          </Box>
        </Link>
        <Link>
          <Box>
            <Image
              src="/assets/images/SignupMentored.png"
              widht="18rem"
              height="18rem"
            />
            <Heading
              textAlign="center"
              fontSize="2rem"
              color="#F26419"
              marginTop="1rem"
            >
              Desejo Mentorias
            </Heading>
          </Box>
        </Link>
      </Flex>
      
    </Flex>

  )
}