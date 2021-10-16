import {
  Box,
  Heading,
  IconButton,
  Flex,
  FormControl,
  Select,
  Image,
  Grid,
  Text,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import api from '../../services/fetch-instace'
import { useEffect, useState } from 'react'
import { AxiosResponse } from 'axios'

export default function SearchDesktop() {
  const [specialties, setSpecialties] = useState('all')
  const [mentors, setMentors] = useState(null)

  function selectMentors () {
    if (specialties === 'all') {
      api
        .get('/users/mentors')
        .then((response) => {
          setMentors(response.data)
        })
        .catch((error) => window.alert('Erro ao buscar mentores'))
    } else {
      api
        .get(`/users/mentors?specialties=${specialties}`)
        .then((response) => {
          setMentors(response.data)
        })
        .catch((error) => window.alert('Erro ao buscar mentores'))
    }
  }

  return (
    <Box display={['none', 'none', 'block']} margin="0 auto" width="90%">
      <Heading
        width="60%"
        margin="5rem auto 2rem auto"
        color="#F26419"
        fontSize="2.25rem"
      >
        Resultado da busca
      </Heading>
      <Flex
        width="60%"
        margin="16px auto 0.5rem auto"
        border="1px solid #8B8B8C"
        borderRadius=".25rem"
      >
        <FormControl>
          <Select
            placeholder="Buscar specialidade"
            fontSize="1.2rem"
            variant="unstyled"
            height="2.5rem"
            backgroundColor="#F6F5F7"
            onChange={(event) => setSpecialties(event.target.value)}
          >
            <option value="Desing">Design</option>
            <option value="Desenvolvimento de Software">
              Desenvolvimento de Software
            </option>
            <option value="Marketing">Marketing</option>
            <option value="Vendas">Vendas</option>
          </Select>
        </FormControl>

        <IconButton
          aria-label="Pesquisar"
          icon={<SearchIcon />}
          variant="unstyled"
          color="#595959"
          fontSize="1.5rem"
          backgroundColor="#F6F5F7"
          _focus={{
            backgroundColor: '#ffffff',
          }}
          onClick={selectMentors}
        />
      </Flex>
      <Grid
        marginTop="5rem"
        marginBottom="5rem"
        gridTemplateColumns="25% 25% 25% 25%"
      >
        {mentors ? (
          mentors.map((mentors) => (
            // eslint-disable-next-line react/jsx-key
            <Box width="95%" margin="0.5rem">
              <Image
                alt="Foto Mentor"
                src={mentors.image}
                borderRadius="1rem"
                width="100%"
                height="80%"
              />
              <Flex
                flexDirection="column"
                position="relative"
                top="-20"
                backgroundColor="#F26419"
                opacity="0.9"
                color="#ffffff"
                width="100%"
                borderRadius="0 0 1rem 1rem"
                height="5rem"
                padding="1rem"
                justifyContent="space-between"
              >
                <Heading
                  fontSize="1.2rem"
                  fontWeight="900"
                  paddingBottom="0.2rem"
                >
                  {mentors.name}
                </Heading>
                <Flex fontWeight="700">
                  <Text>{mentors.job}</Text>
                </Flex>
              </Flex>
            </Box>
          ))
        ) : (
          <Box color="#F26419" margin="3rem auto" width="90vw" textAlign="center" fontSize="2rem"> 
          Clique em lupa e realize sua pesquisa 
          </Box>
        )}
      </Grid>
    </Box>
  )
}
