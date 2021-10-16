import {
  Text,
  Box,
  Link,
  Select,
  Flex,
  IconButton,
  Button,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

export function SignupDesktopPartFiveMentored({ displayPartFiveMentored }) {
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
      <form>
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
            >
              <option value="Desing">Design</option>
              <option value="DesenvolvimentoDeSoftware">
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
