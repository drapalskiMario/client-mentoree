import {
  Text,
  Box,
  Link,
  Input,
  Flex,
  IconButton,
  Button,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { FormEvent } from 'react'

export function SignupDesktopPartOne({
  displayPartOne,
  handleFormUser,
  setDisplayPartOne,
  setDisplayPartTwo,
  setDisplay,
}) {
  
  function nextStep(event: FormEvent) {
    event.preventDefault()
    setDisplayPartOne('none')
    setDisplayPartTwo('block')
  }

  function previousStep() {
    setDisplayPartOne('none')
    setDisplay('flex')
  }
  return (
    <Box
      display={['none', 'none', displayPartOne]}
      height="calc(100vh - (5rem + 6rem))"
      width="80%"
      margin="0 auto"
    >
      <Text fontSize="1rem" color="#BABABA" padding="3rem 0">
        Passo 1 de 5
      </Text>
      <form onSubmit={nextStep}>
        <FormControl id="name" isRequired>
          <FormLabel
            color="#232126"
            fontSize="1.5rem"
            fontWeight="bold"
            paddingBottom=".5rem"
          >
            Como você gosta de ser chamado?
          </FormLabel>
          <Input
            placeholder="Insira aqui seu nome"
            height="2.25rem"
            width="47%"
            marginBottom="1rem"
            name="name"
            onChange={handleFormUser}
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel
            color="#232126"
            fontSize="1.5rem"
            fontWeight="bold"
            paddingBottom=".5rem"
          >
            Qual seu email?
          </FormLabel>
          <Input
            placeholder="Digite aqui seu email"
            height="2.25rem"
            width="47%"
            marginBottom="1rem"
            type="email"
            name="email"
            onChange={handleFormUser}
          />
        </FormControl>
        <FormControl id="linkedIn" isRequired>
          <FormLabel
            color="#232126"
            fontSize="1.5rem"
            fontWeight="bold"
            paddingBottom=".5rem"
          >
            Qual seu linkedin?
          </FormLabel>
          <Input
            placeholder="Digite aqui seu linkedIn"
            height="2.25rem"
            width="47%"
            marginBottom="1rem"
            type="url"
            name="linkedIn"
            onChange={handleFormUser}
          />
        </FormControl>
        <Flex
          width="47%"
          marginBottom="1rem"
          justifyContent="space-between"
          marginTop="2rem"
        >
          <Flex alignItems="center">
            <IconButton
              aria-label="Voltar"
              icon={<ChevronLeftIcon />}
              height="3rem"
              backgroundColor="#ffffff"
              variant="unstyled"
              fontSize="2rem"
              onClick={previousStep}
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
          <Button
            width="12rem"
            height="3rem"
            color="#ffffff"
            backgroundColor="#F26419"
            variant="unstyled"
            marginTop="1rem"
            type="submit"
          >
            <Text fontSize="1rem">Continuar</Text>
          </Button>
        </Flex>
      </form>
    </Box>
  )
}
