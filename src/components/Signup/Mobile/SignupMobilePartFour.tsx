import { Text, Box, Link, Input, Flex, IconButton, Button } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

export function SignupMobilePartFour() {
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
        Passo 4 de 5
      </Text>
      <Text
          color="#F26419"
          fontSize="1rem"
          fontWeight="bold"
          marginTop="-0.5rem"
        >
          Muito legal!
      </Text>
      <Text
          color="#F26419"
          fontSize="1rem"
          fontWeight="bold"
          paddingBottom="1.5rem"
        >
          Nos conte sobre sua atividade profissional
      </Text>
      <Box>
        <Text
          color="#232126"
          fontSize="1rem"
          fontWeight="bold"
          paddingBottom=".5rem"
        >
          Onde você trabalha ou estuda?
        </Text>
        <Input
          placeholder="Ex: Gama Academy"
          height="2.25rem"
          width="100%"
          marginBottom="1rem"
          type="email"
        />
      </Box>
      <Box>
        <Text
          color="#232126"
          fontSize="1rem"
          fontWeight="bold"
          paddingBottom=".5rem"
        >
          Qual seu cargo?
        </Text>
        <Input
          placeholder="Ex: UX Lead"
          height="2.25rem"
          width="100%"
          marginBottom="1rem"
          type="url"
        />
      </Box>
      <Flex
        width="100%"
        marginBottom="1rem"
        justifyContent="space-between"
        marginTop="2rem"
      > 
      <Link
        href="./signup-part-three"
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