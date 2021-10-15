import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Link,
} from '@chakra-ui/react'
import { Calendar } from 'react-modern-calendar-datepicker'
import { customCalendar } from '../../../styles/customCalendar'

export function SchedulePartOneMobile({ displayActive }) {
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
              alignItems="center"
              justifyContent="center"
            >
              <Heading fontSize="1rem" fontWeight="700" marginBottom="1rem">
                Selecione um dia e horário
              </Heading>
              <Calendar
                locale={customCalendar}
                calendarClassName="responsive-calendar"
              />
            </Box>
            <Link href="./schedule-part-two" width="100%" color="#fff">
              <Button
                marginTop="1.5rem"
                fontSize=".8rem"
                width="100%"
                height="2.5rem"
                background="#F26419"
                color="#FFFFFF"
                variant="unstyled"
                marginBottom="-0.5rem"
              >
                Quero agendar
              </Button>
            </Link>
            <Link href="./profile" width="100%" color="#3E3D40">
              <Button
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
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  )
}
