import { Text, Box, Link, Textarea, Flex, IconButton, Button } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

export function SignupMobilePartThree() {
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
        padding="2rem 0"
      >
        Passo 3 de 5
      </Text>
      <Text
          color="#F26419"
          fontSize="1rem"
          fontWeight="bold"
        >
          Senha cadastrada com sucesso!
      </Text>
      <Text
          color="#F26419"
          fontSize="1rem"
          fontWeight="bold"
          paddingBottom="1.5rem"
        >
          Agora precisamos te conhecer melhor.
      </Text>
      <Text
          color="#232126"
          fontSize="1rem"
          fontWeight="bold"
          paddingBottom="1rem"
        >
          Queremos saber um pouco sobre você.
        </Text>
      <Textarea
          color="#8B8B8C"
          fontSize="1rem"
          paddingBottom="2rem"
          placeholder="Conte um pouco sobre você, seus interesses e o que você ama"
          width="100%"
          rows={3}
        >
      </Textarea>
      <Flex
        width="100%"
        marginBottom="1rem"
        justifyContent="space-between"
        marginTop="2rem"
      > 
      <Link
        href="./signup-part-two"
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
          href="./signup-part-four"
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