import { Text, Box, Link, Input, Flex, IconButton, Button, Select } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

export function SignupDesktopPartFiveMentor() {
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
        padding="2.5rem 0 2rem 0"
      >
        Passo 5 de 5
      </Text>
      <Text
        color="#F26419"
        fontSize="2rem"
        fontWeight="bold"
        paddingBottom="1rem"
      >
        Como você pode ajudar a comunidade?
      </Text>
      <Box>
        <Text
          color="#232126"
          fontSize="1.5rem"
          fontWeight="bold"
          paddingBottom=".5rem"
        >
          Quais suas especialidade?
        </Text>
        <Select
          color="#8B8B8C"
          width="47%"
          marginBottom="2rem"
          size="lg"
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
          fontSize="1.5rem"
          fontWeight="bold"
          paddingBottom=".5rem"
        >
          Qual seu nível?
        </Text>
        <Select
          color="#8B8B8C"
          width="47%"
          marginBottom="1.5rem"
          size="lg"
        >
          <option selected disabled>Escolha seu nível profissional</option>
          <option value="Junior">Junior</option>
          <option value="Pleno">Pleno</option>
          <option value="Sênior">Sênior</option>
        </Select>
      </Box>
      <Flex
        width="47%"
        marginBottom="1rem"
        justifyContent="space-between"
        marginTop="2rem"
      >
        <Flex alignItems="center">
          <Link href="./signup-part-four">
            <IconButton
              aria-label="Voltar"
              icon={<ChevronLeftIcon />}
              height="3rem"
              backgroundColor="#ffffff"
              variant="unstyled"
              fontSize="2rem"
            />
          </Link>
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
          href="#"
          color="#ffffff"
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
              Finalizar
            </Text>
          </Button>
        </Link>
      </Flex>
    </Box>
  )
}