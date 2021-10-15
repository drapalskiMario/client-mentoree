import { EditIcon } from '@chakra-ui/icons'
import { Flex, Stack, Avatar, Box, Text, Input, Select, Button, Textarea, IconButton } from '@chakra-ui/react'

export function ProfileUpdateMobile ({displayActive}) {
  return (
    <Flex 
      display={displayActive}
      margin="1rem 0"
    >
      <Stack
        display={["flex", "flex", "none"]}
        width="90%"
        margin="0 auto 1.5rem auto"
        alignItems="center"
        spacing="1rem"
      >
        <Box
          display="flex"
          flexDirection="column"
          marginBottom="-1rem"
        >
          <Avatar
            size="xl"
            name="Mario Junior"
            src="https://github.com/drapalskiMario.png"
          />
          <IconButton
            width="40%"
            aria-label="Editar foto" 
            icon={<EditIcon />}
            position='relative'
            top="-2.5rem"
            left="4.5rem"
            borderRadius="full"
            opacity="0.8"
          />
        </Box>
        <Box
          border="0.5px solid #8B8B8C"
          borderRadius="5px"
          margin="-1rem"
        >
          <Text
            fontSize="0.7rem"
            paddingLeft="1rem"
            paddingTop="0.2rem"
            color="#8B8B8C
          "
          >
            Nome
          </Text>
          <Input
            fontSize="0.8rem"
            width="85vw"
            paddingLeft="1rem"
            border="none"
            variant="unstyled"
            defaultValue="Mario Cezar Drapalski Junior"
          />
        </Box>
        <Box
          border="0.5px solid #8B8B8C"
          borderRadius="5px"
        >
          <Text
            fontSize="0.7rem"
            paddingLeft="1rem"
            paddingTop="0.2rem"
            color="#8B8B8C"
          >
            Email
          </Text>
          <Input
            fontSize="0.8rem"
            width="85vw"
            paddingLeft="1rem"
            border="none"
            variant="unstyled"
            type="email"
            defaultValue="drapalskimario@gmail.com"
          />
        </Box>
        <Box
          border="0.5px solid #8B8B8C"
          borderRadius="5px"
        >
          <Text
            fontSize="0.7rem"
            paddingLeft="1rem"
            paddingTop="0.2rem"
            color="#8B8B8C"
          >
            Onde você trabalha atualmente
          </Text>
          <Input
            fontSize="0.8rem"
            width="85vw"
            paddingLeft="1rem"
            border="none"
            variant="unstyled"
            defaultValue="Construtora Barbosa Mello"
          />
        </Box>
        <Box
          border="0.5px solid #8B8B8C"
          borderRadius="5px"
        >
          <Text
            fontSize="0.7rem"
            paddingLeft="1rem"
            paddingTop="0.2rem"
            color="#8B8B8C"
          >
            Qual seu cargo?
          </Text>
          <Input
            fontSize="0.8rem"
            width="85vw"
            paddingLeft="1rem"
            border="none"
            variant="unstyled"
            defaultValue="Técnico de Sistemas"
          />
        </Box>
        <Box
          border="0.5px solid #8B8B8C"
          borderRadius="5px"
        >
          <Text
            fontSize="0.7rem"
            paddingLeft="1rem"
            paddingTop="0.2rem"
            color="#8B8B8C"
          >
            Qual seu nível
          </Text>
          <Select
            fontSize="0.8rem"
            width="85vw"
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
        <Box
          border="0.5px solid #8B8B8C"
          borderRadius="5px"
        >
          <Text
            fontSize="0.7rem"
            paddingLeft="1rem"
            paddingTop="0.2rem"
            color="#8B8B8C"
          >
            Qual seu LinkedIn?
          </Text>
          <Input
            fontSize="0.8rem"
            width="85vw"
            paddingLeft="1rem"
            border="none"
            variant="unstyled"
            type="url"
            defaultValue="https://www.linkedin.com/in/mario-drapalski/"
          />
        </Box>
        <Box
          border="0.5px solid #8B8B8C"
          borderRadius="5px"
        >
          <Text
            fontSize="0.7rem"
            paddingLeft="1rem"
            paddingTop="0.2rem"
            color="#8B8B8C"
          >
            Qual sua especialidade
          </Text>
          <Select
            fontSize="0.8rem"
            width="85vw"
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
          alignItems="center"
        >
          <Text
            textAlign="center"
            fontSize="0.7rem"
            paddingTop="0.2rem"
            color="#8B8B8C"
          >
            Conte um pouco sobre você, suas habilidades, experiências e hobbies.
          </Text>
          <Textarea
            borderColor="#8B8B8C"
            borderRadius="5px"
            width="85vw"
            fontSize="0.8rem"
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum ultricies quam. 
            Curabitur quis massa tellus. Quisque nibh magna, venenatis id pharetra sed, varius sed ligula. Aliquam a 
            consequat lorem. Ut placerat, leo sit amet molestie vestibulum, purus nulla maximus orci, at porta lectus 
            nibh id mi. Sed eu elementum ligula. Praesent quis scelerisque odio. Nulla sit amet tellus lobortis, cursus 
            risus eu, bibendum leo. Cras id sapien id ante imperdiet tincidunt vel sit amet risus. "
          />
          <Button
            color="#ffffff"
            backgroundColor="#F26419"
            width="50vw"
            fontSize="0.8rem"
            variant="unstyled"
            marginTop="2.5rem"
          > 
            Salvar Alterações
          </Button>
        </Box>
      </Stack>
    </Flex>
  )
}