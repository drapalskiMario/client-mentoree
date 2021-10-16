import {
  Text,
  Box,
  Flex,
  IconButton,
  Button,
  Select,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { FormEvent } from 'react'
import api from '../../../services/fetch-instace'
import Router from 'next/router'

export function SignupDesktopPartFiveMentor({
  displayPartFiveMentor,
  setFormUser,
  formUser,
  setDisplayPartFiveMentor,
  setDisplayPartFour,
}) {
  function previousStep() {
    setDisplayPartFiveMentor('none')
    setDisplayPartFour('block')
  }

  async function createUser(event: FormEvent) {
    event.preventDefault()
    api
      .post('/users', formUser)
      .then((response) => {
        window.alert('Cadastro realizado com sucesso')
        setFormUser({})
        Router.push('./search')
      })
      .catch((error) => {
        window.alert('Erro ao cadastrar usuário')
        Router.push('./search')
      })
  }

  return (
    <Box
      display={['none', 'none', displayPartFiveMentor]}
      height="calc(100vh - (5rem + 6rem))"
      width="80%"
      margin="0 auto"
    >
      <Text fontSize="1rem" color="#BABABA" padding="2.5rem 0 2rem 0">
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
      <form onSubmit={createUser}>
        <FormControl id="especialties" isRequired>
          <FormLabel
            color="#232126"
            fontSize="1.5rem"
            fontWeight="bold"
            paddingBottom=".5rem"
          >
            Quais suas especialidade?
          </FormLabel>
          <Select
            color="#8B8B8C"
            width="47%"
            marginBottom="2rem"
            size="lg"
            placeholder="Selecione sua especialidade"
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
        <FormControl id="seniority" isRequired>
          <FormLabel
            color="#232126"
            fontSize="1.5rem"
            fontWeight="bold"
            paddingBottom=".5rem"
          >
            Quais seu nível?
          </FormLabel>
          <Select
            color="#8B8B8C"
            width="47%"
            marginBottom="2rem"
            size="lg"
            placeholder="Escolha seu nível"
            name="seniority"
            onChange={(event) => {
              formUser.seniority = event.target.value
              setFormUser(formUser)
            }}
          >
            <option value="Junior">Junior</option>
            <option value="Pleno">Pleno</option>
            <option value="Sênior">Sênior</option>
          </Select>
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
            <Text fontSize="1rem">Finalizar</Text>
          </Button>
        </Flex>
      </form>
    </Box>
  )
}
