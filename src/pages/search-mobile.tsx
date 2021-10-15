import { Flex, Heading, Box, Image, Input, IconButton, Text, Link } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export default function SearchMobile() {
  return (
    <Flex 
      display={["flex", "flex", "none"]}
    >
      <Box
    display={['block', 'block', 'none']}
    margin="0 auto"
    width="85%"
    height="80vh"
  >
    <Heading
      fontSize="16px"
      font-family= "Nunito"
      fontWeight="bold"
      color="#232126"
      textAlign ="left"
    >
      Resultados de busca
    </Heading>

    <Flex
      margin="16px auto 0.5rem auto"
      border="1px solid #8B8B8C"
      borderRadius=".25rem"
    >
      <Input
        placeholder="Buscar por nome ou habilidade"
        fontSize="12px"
        variant="unstyled"
        height="2.5rem"
        paddingLeft="1rem"
        backgroundColor="#F6F5F7"
      />
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
    </Flex>
    <Box>
      <Image alt="mentor" src="/assets/images/SearchMobileOne.png" margin="1rem auto" width="100%" />
      <Box
      backgroundColor="#F26419"
      opacity= "0.9"
      position="absolute"
      padding="5%"
      top="60%"
      width="85%"
      borderBottomRadius="md"
      display="flex"
      >
      
        <Text color="#F6F5F7" margin="0.6rem 0.4rem"fontSize="16px">
          Kelvin Sodré
          <br/>
          <Text color="#F6F5F7"  fontSize="12px">
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
        >
      <Link>Ver mais</Link>
      </Text>
    </Box>
    </Box>
  
  </Flex>
  )
}