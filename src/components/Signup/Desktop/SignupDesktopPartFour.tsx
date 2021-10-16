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

export function SignupDesktopPartFour({
  displayPartFour,
  handleFormUser,
  formUser,
  setDisplayPartFour,
  setDisplayPartFiveMentor,
  setDisplayPartFiveMentored,
  setDisplayPartThree,
}) {
  function nextStep(event: FormEvent) {
    event.preventDefault()
    if (formUser.isMentor === true) {
      setDisplayPartFour('none')
      setDisplayPartFiveMentor('block')
    } else {
      setDisplayPartFour('none')
      setDisplayPartFiveMentored('block')
    }
  }

  function previousStep() {
    setDisplayPartFour('none')
    setDisplayPartThree('block')
  }

  return (
    <Box
      display={['none', 'none', displayPartFour]}
      height="calc(100vh - (5rem + 6rem))"
      width="80%"
      margin="0 auto"
    >
      <Text fontSize="1rem" color="#BABABA" padding="2.5rem 0 2rem 0">
        Passo 4 de 5
      </Text>
      <Text color="#F26419" fontSize="1.5rem" fontWeight="bold">
        Muito legal!
      </Text>
      <Text
        color="#F26419"
        fontSize="1.5rem"
        fontWeight="bold"
        paddingBottom="2rem"
      >
        Nos conte sobre sua atividade profissional.
      </Text>
      <form onSubmit={nextStep}>
        <FormControl id="workplace" isRequired>
          <FormLabel
            color="#232126"
            fontSize="1.5rem"
            fontWeight="bold"
            paddingBottom=".5rem"
          >
            Onde você trabalha ou estuda
          </FormLabel>
          <Input
            placeholder="Ex: Gama Academy"
            height="2.25rem"
            width="47%"
            marginBottom="1rem"
            name="workplace"
            onChange={handleFormUser}
          />
        </FormControl>
        <FormControl id="job" isRequired>
          <FormLabel
            color="#232126"
            fontSize="1.5rem"
            fontWeight="bold"
            paddingBottom=".5rem"
          >
            Qual seu cargo?
          </FormLabel>
          <Input
            placeholder="Ex: UX Lead"
            height="2.25rem"
            width="47%"
            marginBottom="1rem"
            name="job"
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
