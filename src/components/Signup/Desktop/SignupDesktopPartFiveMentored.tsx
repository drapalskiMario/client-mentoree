import {
  Text,
  Box,
  Select,
  Flex,
  IconButton,
  Button,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { FormEvent } from 'react'
import api from '../../../services/fetch-instace'

export function SignupDesktopPartFiveMentored({
  displayPartFiveMentored,
  setFormUser,
  formUser,
  setDisplayPartFiveMentored,
  setDisplayPartFour,
}) {

  async function createUser(event: FormEvent) {
    event.preventDefault()
    console.log(formUser)
    api
      .post('/users', formUser)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.response.data.message))
  }

      function previousStep() {
        setDisplayPartFiveMentored('none')
        setDisplayPartFour('block')
      }
  return (
    <Box
      display={['none', 'none', displayPartFiveMentored]}
      height="calc(100vh - (5rem + 6rem))"
      width="80%"
      margin="0 auto"
    >
      <Text fontSize="1rem" color="#BABABA" padding="3rem 0 3rem 0">
        Passo 5 de 5
      </Text>
      <Text
        color="#F26419"
        fontSize="1.5rem"
        fontWeight="bold"
        paddingBottom="3rem"
      >
        Encontre o mentor que se encaixe melhor com o que você procura.
      </Text>
      <form onSubmit={createUser}>
        <Box marginTop="2rem">
          <FormControl id="specialties" isRequired>
            <FormLabel
              color="#232126"
              fontSize="1.5rem"
              fontWeight="bold"
              paddingBottom=".5rem"
            >
              Quais especialidade você quer desenvolver?
            </FormLabel>
            <Select
              color="#8B8B8C"
              width="47%"
              marginBottom="5rem"
              size="lg"
              placeholder="selecione a especialidade"
              name="specialties"
              onChange={(event) => {
                formUser.specialties = event.target.value
                setFormUser(formUser)
              }}
            >
              <option value="Desing">Design</option>
              <option value="Desenvolvimento de Software">
                Desenvolvimento de Software
              </option>
              <option value="Marketing">Marketing</option>
              <option value="Vendas">Vendas</option>
            </Select>
          </FormControl>
        </Box>
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
            <Text fontSize="1rem">Finalizar</Text>
          </Button>
        </Flex>
      </form>
    </Box>
  )
}
