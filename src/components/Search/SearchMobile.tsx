import {
  Flex,
  Heading,
  Box,
  Image,
  Input,
  IconButton,
  Text,
  Link,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export default function SearchMobile({ displayActive }) {
  return (
    <Flex
      display={[displayActive, displayActive, 'none']}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Heading
        marginTop="2rem"
        fontSize="1rem"
        font-family="Nunito"
        fontWeight="bold"
        color="#232126"
        textAlign="left"
      >
        Resultados de busca
      </Heading>
      <Flex marginTop="2rem" width="80%">
        <Input
          placeholder="Buscar por nome ou habilidade"
          fontSize="12px"
          variant="unstyled"
          height="2.5rem"
          paddingLeft="1rem"
          backgroundColor="#F6F5F7"
        />
        <Link href="./search">
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
          />
        </Link>
      </Flex>
      <Image
        alt="mentor"
        src="https://api-mentoree.s3.sa-east-1.amazonaws.com/1634386097418.png"
        margin="1rem auto"
        width="80%"
      />
      <Box
        backgroundColor="#F26419"
        opacity="0.9"
        position="relative"
        top="-8rem"
        padding="5%"
        width="80%"
        borderBottomRadius="md"
        display="flex"
      >
        <Text color="#F6F5F7" margin="0.6rem 0.4rem" fontSize="16px">
          Kelvin Sodré
          <br />
          <Text color="#F6F5F7" fontSize="12px">
            UX Designer - Ifood
          </Text>
        </Text>
      </Box>
      <Text
        color="#F26419"
        fontSize="18px"
        lineHeight="27px"
        font-family="Nunito"
        textAlign="center"
        fontWeight="700"
        marginTop="-6rem"
        marginBottom="2rem"
      >
        <Link>Ver mais</Link>
      </Text>
    </Flex>
  )
}
