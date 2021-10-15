import { Text, Box, Link, Input, Flex, IconButton, Button, Heading } from '@chakra-ui/react'

export function LoginMobile({ displayActive }) {
  return (
    <Flex display={displayActive}>
      <Box
        display={['block', 'block', 'none']}
        height="calc(100vh - (5rem + 6rem))"
        width="80%"
        margin="0 auto"
      >
        <Box
          padding="3.5rem 0"  
        >
          <Heading
            color="#F26419"
            fontSize="1.8rem"
            fontWeight="bold"
          >
            Bem vindo de volta!
          </Heading>
          <Text
            width="100%"
            fontSize="1rem"
            paddingTop="1rem"
            color="#232126"
            fontWeight="bold"
          >
            Conecte-se com vários profissionais da nossa comunidade.
          </Text>
        </Box>
        <Box>
          <Input
            borderColor="#8B8B8C"
            placeholder="Email"
            height="2.5rem"
            width="100%"
            marginBottom="1rem"
            type="email"
          />
        </Box>
        <Box>
          <Input
            borderColor="#8B8B8C"
            placeholder="Senha"
            height="2.5rem"
            width="100%"
            marginBottom="1rem"
            type="password"
          />
        </Box>
          <Link 
            href="#"
            color="#ffffff"
          >
            <Button
              width="100%"
              height="3rem"
              color="#ffffff"
              backgroundColor="#F26419"
              variant="unstyled"
              marginTop="1rem"
            >
              <Text
                fontSize="1.2rem"
              >
                  Entrar
              </Text>
            </Button>
          </Link>
          <Flex
            paddingTop="2rem"
            width="100%"
            justifyContent="center"
          >
            <Text>
              Não tem conta? Faça <Link color="blue" href="/signup">Cadastro!</Link>
            </Text>
          </Flex>
      </Box>
    </Flex>
  )
}