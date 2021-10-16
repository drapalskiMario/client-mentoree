import {
  Text,
  Box,
  Input,
  Flex,
  IconButton,
  Button,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { FormEvent } from 'react'

export function SignupDesktopPartTwo({
  displayPartTwo,
  handleFormUser,
  setDisplayPartTwo,
  setDisplayPartThree,
  setDisplayPartOne,
}) {

  function nextStep(event: FormEvent) {
    event.preventDefault()
    if (event.target['password'].value !== event.target['confirmationPassword'].value) {
      window.alert('Confirmação de senha está diferente da senha informada')
    } else {
      setDisplayPartTwo('none')
      setDisplayPartThree('block')
    }
  }

  function previousStep() {
    setDisplayPartTwo('none')
    setDisplayPartOne('block')
  }
  return (
    <Box
      display={['none', 'none', displayPartTwo]}
      height="calc(100vh - (5rem + 6rem))"
      width="80%"
      margin="0 auto"
    >
      <Text fontSize="1rem" color="#BABABA" padding="3rem 0">
        Passo 2 de 5
      </Text>
      <Text
        color="#F26419"
        fontSize="2rem"
        fontWeight="bold"
        paddingBottom="2rem"
      >
        Olá Usuário. Vamos definir sua senha?
      </Text>
      <form onSubmit={nextStep}>
        <FormControl id="password" isRequired>
          <FormLabel
            color="#232126"
            fontSize="1.5rem"
            fontWeight="bold"
            paddingBottom=".5rem"
          >
            Digite sua senha
          </FormLabel>
          <Input
            placeholder="Digite aqui sua senha"
            height="2.25rem"
            width="47%"
            marginBottom="1rem"
            type="password"
            name="password"
            onChange={handleFormUser}
          />
        </FormControl>
        <FormControl id="confirmationPassword" isRequired>
          <FormLabel
            color="#232126"
            fontSize="1.5rem"
            fontWeight="bold"
            paddingBottom=".5rem"
          >
            Confirme sua senha
          </FormLabel>
          <Input
            placeholder="Digite aqui sua senha"
            height="2.25rem"
            width="47%"
            marginBottom="1rem"
            type="password"
            name="confirmationPassword"
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
