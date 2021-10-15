import { EditIcon } from '@chakra-ui/icons'
import { Flex, Stack, Avatar, Box, Text, Input, Select, Button, Textarea, IconButton } from '@chakra-ui/react'

export function ProfileDesktop () {
  return (
    <Flex
      display={['none', 'none', 'flex']}
      flexDirection="column"
      width="70%"
      margin="1rem auto 1rem auto"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignSelf="center"
        marginBottom="-1rem"
      >
        <Avatar
          size="2xl"
          name="Mario Junior"
          src="https://github.com/drapalskiMario.png"
        />
        <IconButton
          width="2%"
          aria-label="Editar foto"
          icon={<EditIcon />}
          position="relative"
          top="-3rem"
          left="6.5rem"
          borderRadius="full"
          opacity="0.8"
        />
      </Box>
      <Stack
        display="flex"
        width="90%"
        margin="0 auto 1.5rem auto"
        alignItems="start"
        spacing="1rem"
      >
        <Box border="0.5px solid #8B8B8C" borderRadius="5px">
          <Text
            fontSize="0.9rem"
            paddingLeft="1rem"
            paddingTop="0.2rem"
            color="#8B8B8C"
          >
            Nome
          </Text>
          <Input
            fontSize="1rem"
            width="30vw"
            paddingLeft="1rem"
            border="none"
            variant="unstyled"
            defaultValue="Mario Cezar Drapalski Junior"
          />
        </Box>
        <Box border="0.5px solid #8B8B8C" borderRadius="5px">
          <Text
            fontSize="0.9rem"
            paddingLeft="1rem"
            paddingTop="0.2rem"
            color="#8B8B8C"
          >
            Email
          </Text>
          <Input
            fontSize="1rem"
            width="30vw"
            paddingLeft="1rem"
            border="none"
            variant="unstyled"
            type="email"
            defaultValue="drapalskimario@gmail.com"
          />
        </Box>
        <Box border="0.5px solid #8B8B8C" borderRadius="5px">
          <Text
            fontSize="0.9rem"
            paddingLeft="1rem"
            paddingTop="0.2rem"
            color="#8B8B8C"
          >
            Onde você trabalha atualmente
          </Text>
          <Input
            fontSize="1rem"
            width="30vw"
            paddingLeft="1rem"
            border="none"
            variant="unstyled"
            defaultValue="Construtora Barbosa Mello"
          />
        </Box>
        <Box border="0.5px solid #8B8B8C" borderRadius="5px">
          <Text
            fontSize="0.9rem"
            paddingLeft="1rem"
            paddingTop="0.2rem"
            color="#8B8B8C"
          >
            Qual seu cargo?
          </Text>
          <Input
            fontSize="1rem"
            width="30vw"
            paddingLeft="1rem"
            border="none"
            variant="unstyled"
            defaultValue="Técnico de Sistemas"
          />
        </Box>
        <Box border="0.5px solid #8B8B8C" borderRadius="5px">
          <Text
            fontSize="0.9rem"
            paddingLeft="1rem"
            paddingTop="0.2rem"
            color="#8B8B8C"
          >
            Qual seu nível
          </Text>
          <Select
            fontSize="1rem"
            width="30vw"
            paddingLeft="1rem"
            border="none"
            variant="unstyled"
            defaultValue="Técnico de Sistemas"
          >
            <option selected> Selecione seu nível</option>
            <option value="Junior">Junior</option>
            <option value="Pleno">Pleno</option>
            <option value="Sênior">Sênior</option>
          </Select>
        </Box>
        <Box border="0.5px solid #8B8B8C" borderRadius="5px">
          <Text
            fontSize="0.9rem"
            paddingLeft="1rem"
            paddingTop="0.2rem"
            color="#8B8B8C"
          >
            Qual seu LinkedIn?
          </Text>
          <Input
            fontSize="1rem"
            width="30vw"
            paddingLeft="1rem"
            border="none"
            variant="unstyled"
            type="url"
            defaultValue="https://www.linkedin.com/in/mario-drapalski/"
          />
        </Box>
        <Box border="0.5px solid #8B8B8C" borderRadius="5px">
          <Text
            fontSize="0.9rem"
            paddingLeft="1rem"
            paddingTop="0.2rem"
            color="#8B8B8C"
          >
            Qual sua especialidade
          </Text>
          <Select
            fontSize="1rem"
            width="30vw"
            paddingLeft="1rem"
            border="none"
            variant="unstyled"
            defaultValue="Técnico de Sistemas"
          >
            <option selected> Selecione sua especialidade</option>
            <option value="Desing">Desing</option>
            <option value="DesenvolvimentodeSoftware">
              Desenvolvimento de Software
            </option>
            <option value="Marketing">Marketing</option>
            <option value="Vendas">Vendas</option>
          </Select>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="start"
          width="100%"
        >
          <Text
            textAlign="start"
            fontSize="1rem"
            fontWeight="bold"
            paddingTop="0.2rem"
            width="100%"
            marginBottom="1rem"
          >
            Conte um pouco sobre você, suas habilidades, experiências e hobbies.
          </Text>
          <Textarea
            borderColor="#8B8B8C"
            borderRadius="5px"
            fontSize="1rem"
            width="100%"
            rows={6}
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum ultricies quam.Curabitur quis massa tellus. Quisque nibh magna, venenatis id pharetra sed, varius sed ligula. Aliquam a consequat lorem. Ut placerat, leo sit amet molestie vestibulum, purus nulla maximus orci, at porta lectus nibh id mi. Sed eu elementum ligula. Praesent quis scelerisque odio. Nulla sit amet tellus lobortis, cursus risus eu, bibendum leo. Cras id sapien id ante imperdiet tincidunt vel sit amet risus. "
          />
          <Button
            color="#ffffff"
            backgroundColor="#F26419"
            fontSize="1rem"
            variant="unstyled"
            margin="2.5rem auto 0 auto"
            width="25%"
          >
            Salvar Alterações
          </Button>
        </Box>
      </Stack>
    </Flex>
  )
}