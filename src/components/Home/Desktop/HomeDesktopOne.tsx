import {
  Flex,
  Heading,
  Image,
  Input,
  IconButton,
  Button,
  Link,
  Text,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export function HomeDeskTopOne() {
  return (
    <Flex
      display={['none', 'none', 'flex']}
      flexDirection="column"
      alignItems="center"
      height="calc(100vh - 5rem)"
    >
      <Heading 
        marginTop="-2rem"
        width="60%"
        fontSize="2.5rem"
        color="#3E3D40"
        textAlign="center"
      >
        Encontre mentores, agende sessões e desenvolva seu potencial.
      </Heading>
      <Image
        src="/assets/images/HomeDesktopOne.png"
        margin="2rem auto"
        width="42,75rem"
        height="21.375rem"
      />
      <Flex 
        justifyContent="space-between"
        width="47%"
      >
        <Flex 
          width="75%"
          height="3rem"
        >
          <Input
            placeholder="Qual especialidade você procura?"
            variant="unstyled"
            height="100%"
            paddingLeft="1.5rem"
            backgroundColor="#F6F5F7"
          />
          <IconButton
            aria-label="Pesquisar"
            icon={<SearchIcon />}
            variant="unstyled"
            color="#595959"
            fontSize="1.5rem"
            height="100%"
            backgroundColor="#F6F5F7"
            _focus={{
              backgroundColor: '#ffffff',
            }}
          />
        </Flex>
        <Button
          width="25%"
          marginLeft="2rem"
          height="3rem"
          color="#ffffff"
          backgroundColor="#F26419"
          variant="unstyled"
          _focus={{
            backgroundColor: '#F26419',
          }}
        >
          <Link
            href="./search"
          >
            <Text
              fontSize="1.2rem"
            >
              Pesquisar
            </Text>
          </Link>
        </Button>
      </Flex>
    </Flex>
  )
}