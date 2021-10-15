import { Text, Box, Link, Input, Flex, IconButton, Button } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

export function SignupMobilePartTwo() {
  return (
    <Box
      display={['block', 'block', 'none']}
      width="85%"
      margin="0 auto"
      height="calc(100vh - 4rem)"
    >
      <Text
        fontSize="0.8rem"
        color="#BABABA"
        padding="2rem 0"
      >
        Passo 2 de 5
      </Text>
      <Text
          color="#F26419"
          fontSize="1rem"
          fontWeight="bold"
          paddingBottom="2rem"
        >
          Olá, Usuário. Vamos definir sua senha?
      </Text>
      <Box>
        <Text
          color="#232126"
          fontSize="1rem"
          fontWeight="bold"
          paddingBottom=".5rem"
        >
          Qual seu email?
        </Text>
        <Input
          placeholder="Digite aqui seu email"
          height="2.25rem"
          width="100%"
          marginBottom="1rem"
          type="email"
        />
      </Box>
      <Box>
        <Text
          color="#232126"
          fontSize="1rem"
          fontWeight="bold"
          paddingBottom=".5rem"
        >
          Qual seu linkedin?
        </Text>
        <Input
          placeholder="Digite aqui seu email"
          height="2.25rem"
          width="100%"
          marginBottom="1rem"
          type="url"
        />
      </Box>
      <Flex
        width="100%"
        marginBottom="1rem"
        justifyContent="space-between"
        marginTop="2rem"
      > 
      <Link
        href="./signup-part-one"
      >
       <Flex
          alignItems="center"
          >
          <IconButton
            aria-label="Voltar"
            icon={<ChevronLeftIcon/>}
            height="3rem"
            backgroundColor="#ffffff"
            variant="unstyled"
            fontSize="2rem"
          />
          <Text
            fontSize="1rem"
            color="#444444"
            fontWeight="bold"
            marginTop="0.5rem"
          >
            Voltar
          </Text>
        </Flex>
      </Link>
        <Link
          href="./signup-part-three"
        >
          <Button
            width="6.5rem"
            height="2.5rem"
            color="#ffffff"
            backgroundColor="#F26419"
            variant="unstyled"
            marginTop="1rem"
          >
            <Text
              fontSize="1rem"
            >
              Continuar
            </Text>
          </Button>
        </Link>
      </Flex>
    </Box>
  )
}