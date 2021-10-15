import { Text, Box, Link, Input, Flex, IconButton, Button } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

export function SignupDesktopPartOne() {
  return (
    <Box
      display={['none', 'none', 'block']}
      height="calc(100vh - (5rem + 6rem))"
      width="80%"
      margin="0 auto"
    >
      <Text
        fontSize="1rem"
        color="#BABABA"
        padding="3rem 0"
      >
        Passo 1 de 5
      </Text>
      <Box>
        <Text
          color="#232126"
          fontSize="1.5rem"
          fontWeight="bold"
          paddingBottom=".5rem"
        >
          Como você gosta de ser chamado?
        </Text>
        <Input
          placeholder="Insira aqui seu nome"
          height="2.25rem"
          width="47%"
          marginBottom="1rem"
        />
      </Box>
      <Box>
        <Text
          color="#232126"
          fontSize="1.5rem"
          fontWeight="bold"
          paddingBottom=".5rem"
        >
          Qual seu email?
        </Text>
        <Input
          placeholder="Digite aqui seu email"
          height="2.25rem"
          width="47%"
          marginBottom="1rem"
          type="email"
        />
      </Box>
      <Box>
        <Text
          color="#232126"
          fontSize="1.5rem"
          fontWeight="bold"
          paddingBottom=".5rem"
        >
          Qual seu linkedin?
        </Text>
        <Input
          placeholder="Digite aqui seu email"
          height="2.25rem"
          width="47%"
          marginBottom="1rem"
          type="url"
        />
      </Box>
      <Flex
        width="47%"
        marginBottom="1rem"
        justifyContent="space-between"
        marginTop="2rem"
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
        <Link
          href="./signup-part-two"
        >
          <Button
            width="12rem"
            height="3rem"
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