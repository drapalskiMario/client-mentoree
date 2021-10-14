import { Box, Heading, Image, Flex, Input, IconButton, Button, Link } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export function HomeMobileOne({ displayActive }) {
  return (
    <Flex display={displayActive} marginTop="4rem">
      <Box
        display={['block', 'block', 'none']}
        margin="0 auto"
        width="85%"
        height="80vh"
      >
        <Heading
          height="4.75rem"
          marginBottom="2rem"
          fontSize="1.5rem"
          fontWeight="bold"
          color="#595959"
          textAlign="center"
        >
          Encontre mentores, agende sessões e desenvolva seu potencial.
        </Heading>
        <Image src="/assets/images/HomeMobileOne.png" margin="3rem auto" />
        <Flex
          margin="4rem auto 0.5rem auto"
          border="1px solid #8B8B8C"
          borderRadius=".25rem"
        >
          <Input
            placeholder="Qual especialidade você procura?"
            variant="unstyled"
            height="2.5rem"
            paddingLeft="1.5rem"
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
        <Button
          height="3rem"
          width="100%"
          color="#ffffff"
          backgroundColor="#F26419"
          variant="unstyled"
          _focus={{
            backgroundColor: '#F26419',
          }}
        >
          <Link>Pesquisar</Link>
        </Button>
      </Box>
    </Flex>
  )
}