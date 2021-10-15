import { Text, Box, Link, Input, Flex, IconButton, Button, Select } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

export function SignupMobilePartFiveMentor() {
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
        padding="1.5rem 0"
      >
        Passo 5 de 5
      </Text>
      <Text
          color="#F26419"
          fontSize="1rem"
          fontWeight="bold"
          paddingBottom="2rem"
        >
          Como você pode ajudar a comunidade?
      </Text>
      <Box>
        <Text
          color="#232126"
          fontSize="1rem"
          fontWeight="bold"
          paddingBottom="1rem"
        >
          Quais suas especialidade?
        </Text>
        <Select
          color="#8B8B8C"
          width="100%"
          marginBottom="2rem"
          size="md"
        >
          <option selected disabled>Selecione sua especialidade</option>
          <option value="Junior">Design</option>
          <option value="DesenvolvimentoDeSoftware">Desenvolvimento de Software</option>
          <option value="Marketing">Marketing</option>
          <option value="Vendas">Vendas</option>
        </Select>
      </Box>
      <Box>
        <Text
          color="#232126"
          fontSize="1rem"
          fontWeight="bold"
          paddingBottom="1rem"
        >
          Qual seu nível?
        </Text>
        <Select
          color="#8B8B8C"
          width="100%"
          marginBottom="1rem"
          size="md"
        >
          <option selected disabled>Escolha seu nível profissional</option>
          <option value="Junior">Junior</option>
          <option value="Pleno">Pleno</option>
          <option value="Sênior">Sênior</option>
        </Select>
      </Box>
      <Flex
        width="100%"
        marginBottom="1rem"
        justifyContent="space-between"
        marginTop="1.5rem"
      > 
      <Link
        href="./signup-part-four"
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
          href="#"
          color="#ffffff"
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