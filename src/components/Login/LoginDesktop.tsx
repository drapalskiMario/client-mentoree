import { Text, Box, Link, Input, Flex, Button, Heading } from '@chakra-ui/react'

export function LoginDesktop() {
  return (
    <Box
      display={['none', 'none', 'block']}
      height="calc(100vh - (5rem + 6rem))"
      width="80%"
      margin="0 auto"
    >
      <Box
        padding="3.5rem 0"  
      >
        <Heading
          color="#F26419"
          fontSize="2.5rem"
          fontWeight="bold"
        >
          Bem vindo de volta!
        </Heading>
        <Text
          width="35%"
          fontSize="1.2rem"
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
          height="3rem"
          width="35%"
          marginBottom="2rem"
          type="email"
        />
      </Box>
      <Box>
        <Input
          borderColor="#8B8B8C"
          placeholder="Senha"
          height="3rem"
          width="35%"
          marginBottom="2rem"
          type="password"
        />
      </Box>
        <Link 
          href="#"
          color="#ffffff"
        >
          <Button
            width="35%"
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
          width="35%"
          justifyContent="center"
        >
          <Text>
            Não tem conta? Faça <Link color="blue" href="/signup">Cadastro!</Link>
          </Text>
        </Flex>
    </Box>
  )
}