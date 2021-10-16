import {
  Text,
  Box,
  Link,
  Textarea,
  Flex,
  IconButton,
  Button,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { FormEvent } from 'react'

export function SignupDesktopPartThree({
  displayPartThree,
  handleFormUser,
  setDisplayPartThree,
  setDisplayPartFour,
  setDisplayPartTwo,
}) {

    function nextStep(event: FormEvent) {
      event.preventDefault()
      setDisplayPartThree('none')
      setDisplayPartFour('block')
    }

    function previousStep() {
      setDisplayPartThree('none')
      setDisplayPartTwo('block')
    }

  return (
    <Box
      display={['none', 'none', displayPartThree]}
      height="calc(100vh - (5rem + 6rem))"
      width="80%"
      margin="0 auto"
    >
      <Text fontSize="1rem" color="#BABABA" padding="2.7rem 0">
        Passo 3 de 5
      </Text>
      <Text
        color="#F26419"
        fontSize="1.5rem"
        fontWeight="bold"
        marginTop="-1rem"
      >
        Senha cadastrada com sucesso!
      </Text>
      <Text
        color="#F26419"
        fontSize="1.5rem"
        fontWeight="bold"
        paddingBottom="2rem"
        marginTop="-0.5rem"
      >
        Agora precisamos te conhecer melhor.
      </Text>
      <form onSubmit={nextStep}>
        <FormControl id="about" isRequired>
          <FormLabel
            color="#232126"
            fontSize="1.5rem"
            fontWeight="bold"
            paddingBottom=".5rem"
          >
            Queremos saber um pouco sobre você
          </FormLabel>
          <Textarea
            color="#8B8B8C"
            fontSize="1rem"
            paddingBottom=".5rem"
            placeholder="Conte um pouco sobre você, seus interesses e o que você ama"
            width="47%"
            rows={7}
            name="about"
            onChange={handleFormUser}
          ></Textarea>
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
