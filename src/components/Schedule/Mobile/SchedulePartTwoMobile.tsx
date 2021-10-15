import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Link,
  Textarea,
} from '@chakra-ui/react'

export function SchedulePartTwoMobile({ displayActive }) {
  return (
    <Flex display={[displayActive, displayActive, 'none']}>
      <Flex display={['block', 'block', 'none']} width="80%" margin="1rem auto">
        <Flex>
          <Stack width="100%" spacing="1rem" justifyContent="space-around">
            <Box display="flex" flexDirection="column" alignItems="center">
              <Heading
                marginTop="0.5rem"
                fontSize="1.2rem"
                color="#232126"
                fontWeight="700"
              >
                Agendamento de Mentoria
              </Heading>
              <Heading
                marginTop="1rem"
                fontSize="1rem"
                color="#232126"
                fontWeight="700"
              >
                Mario Junior
              </Heading>
              <Text fontSize="0.8rem" fontWeight="400">
                Técnico de Sistemas em Barbosa Mello
              </Text>
            </Box>
            <Box
              paddingTop="1rem"
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="start"
              justifyContent="start"
            >
              <Heading
                fontSize="1rem"
                fontWeight="700"
                marginBottom="1rem"
                display="flex"
              >
                Oi,
                <Text color="#F26419" marginLeft="0.25rem">
                  Mentora
                </Text>
                !
              </Heading>
              <Text textAlign="start" fontSize="0.8rem" fontWeight="400">
                Confira os dados do seu agendamento
              </Text>
              <Text
                textAlign="start"
                fontSize="0.9rem"
                fontWeight="600"
                margin="1rem 0 1rem 0"
              >
                Sobre o que você deseja falar nessa mentoria?
              </Text>
              <Textarea
                fontSize="0.8rem"
                placeholder="Escreva um pouco sobre você, suas dificuldades e o que gostaria de trabalhar na mentoria."
              />
              <Link href="./schedule-part-two" width="100%" color="#fff">
                <Button
                  marginTop="1.5rem"
                  fontSize=".8rem"
                  width="100%"
                  height="2.5rem"
                  background="#F26419"
                  color="#FFFFFF"
                  variant="unstyled"
                >
                  Quero agendar
                </Button>
              </Link>
              <Link href="./schedule-part-one" width="100%" color="#3E3D40">
                <Button
                  marginTop="0.5rem"
                  fontSize=".8rem"
                  width="100%"
                  height="2.5rem"
                  color="#3E3D40"
                  border="1px solid #E6E6E6"
                  variant="unstyled"
                >
                  Voltar
                </Button>
              </Link>
            </Box>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  )
}
