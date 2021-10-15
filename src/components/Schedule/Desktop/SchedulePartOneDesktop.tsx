import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import { Flex, Box, Avatar, Heading, Text, Button, HStack, Link } from '@chakra-ui/react'
import { Calendar } from 'react-modern-calendar-datepicker'
import { customCalendar } from '../../../styles/customCalendar'

export function SchedulePartOneDestktop () {
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
              Selecione um dia e horário
            </Text>
            <Calendar
              locale={customCalendar}
              calendarClassName="responsive-calendar"
            />
          </Box>
        </HStack>
      </Flex>
      <Flex width="92%" justifyContent="flex-end">
        <Link href="./schedule-part-two" width="25%" color="#fff">
          <Button
            marginTop="4rem"
            fontSize="1rem"
            width="100%"
            height="3rem"
            background="#F26419"
            color="#FFFFFF"
            variant="unstyled"
          >
            Quero agendar
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}