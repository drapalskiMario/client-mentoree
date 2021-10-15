import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import {
  Flex,
  Box,
  Avatar,
  Heading,
  Text,
  Button,
  HStack,
  Link,
  IconButton,
  Textarea,
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

export function SchedulePartTwoDestktop() {
  return (
    <Flex
      display={['none', 'none', 'flex']}
      flexDirection="column"
      width="80%"
      margin="3rem auto"
    >
      <Flex>
        <HStack width="100%" spacing="1rem" justifyContent="space-around">
          <Box
            display="flex"
            flexDirection="column"
            width="45%"
            alignItems="center"
          >
            <Avatar size="2xl" src="https://github.com/drapalskiMario.png" />
            <Heading
              marginTop="0.5rem"
              fontSize="2rem"
              color="#232126"
              fontWeight="700"
            >
              Mario Junior
            </Heading>
            <Text fontWeight="400">Técnico de Sistemas em Barbosa Mello</Text>
          </Box>
          <Box
            paddingTop="3rem"
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Heading fontSize="1.2rem" fontWeight="700">
              Agendamento de Mentoria
            </Heading>
            <Text fontSize=".7rem" fontWeight="400" paddingBottom="1rem">
              Confira os dados do agendamento
            </Text>
          </Box>
        </HStack>
      </Flex>
      <Heading width="92%" fontSize="1rem" fontWeight="700" marginTop="4rem">
        Sobre o que você deseja falar nessa mentoria?
      </Heading>
      <Textarea
        width="92%"
        placeholder="Conta para nós."
        marginTop="1rem"
        rows={4}
      />
      <Flex
        width="92%"
        justifyContent="space-between"
        alignItems="center"
        marginTop="4rem"
      >
        <Flex alignItems="center">
          <Link href="./schedule-part-one">
            <IconButton
              aria-label="Voltar"
              icon={<ChevronLeftIcon />}
              height="3rem"
              backgroundColor="#ffffff"
              variant="unstyled"
              fontSize="2rem"
            />
          </Link>
          <Text
            fontSize="1rem"
            color="#444444"
            fontWeight="bold"
            marginTop="0.5rem"
          >
            Voltar
          </Text>
        </Flex>
        <Link width="25%" color="#fff">
          <Button
            fontSize="1rem"
            width="100%"
            height="3rem"
            background="#F26419"
            color="#FFFFFF"
            variant="unstyled"
          >
            Agendar
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}
