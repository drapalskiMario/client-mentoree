import { Flex, Image, Link, Button, HStack, Text } from '@chakra-ui/react'

export function NavBar() {
  return (
    <Flex
      as="nav"
      height={['4rem', '4rem', '5rem']}
      width="100vw"
      justifyContent="space-between"
      borderBottom={['1px solid #CBCACC', '1px solid #CBCACC', '2px solid #CBCACC']}
      align="center"
      padding="0 3rem"
    >
      <Link
        href="./"
      >
        <Image 
          src="/assets/images/Logo.png" 
          width={['10rem', '16rem']}
        />
      </Link>

      <Flex 
        display={['none', 'none', 'flex']}
        marginRight="1rem"
      >
        <HStack spacing="2rem">
          <Link margin="0 2rem">
            <Text
              fontSize="1.15rem"
              fontWeight="bold"
            >
              Encontrar mentor
            </Text>
          </Link>
          <Link 
            href="./signup"
            margin="0 2rem"
          >
            <Text
              fontSize="1.15rem"
              fontWeight="bold"
            >
              Seja um mentor
            </Text>
          </Link>
          <Button
            width="11rem"
            height="3rem"
            border="2px solid #F26419"
            color="#F26419"
            backgroundColor="#ffffff"
            borderRadius=".75rem"
            variant="unstyled"
          >
            <Link
              href="./login"
            >
              <Text
                fontSize="1.25rem"
              >
                Entrar
              </Text>
            </Link>
          </Button>
          <Button
            width="11rem"
            height="3rem"
            color="#ffffff"
            backgroundColor="#F26419"
            borderRadius=".75rem"
            variant="unstyled"
          >
            <Link
              href="./signup"
            >
              <Text
                fontSize="1.25rem"
              >
                Cadastrar
              </Text>
            </Link>
          </Button>

        </HStack>
      </Flex>
    </Flex>
  )
}
