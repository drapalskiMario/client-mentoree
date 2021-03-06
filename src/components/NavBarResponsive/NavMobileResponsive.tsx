import {
  Flex,
  IconButton,
  Link,
  Button,
  Box,
  Text,
  Stack,
} from '@chakra-ui/react'
import { CloseIcon, ChevronRightIcon } from '@chakra-ui/icons'

export function NavMobileResponsive({
  displayNavMobile,
  setDisplayNavMobile,
  setdisplayActive,
}) {
  return (
    <Box
      display={[displayNavMobile, displayNavMobile, 'none']}
    >
      <Flex
        as="nav"
        width="100vw"
        height="5rem"
        justifyContent="end"
        alignItems="center"
      >
        <IconButton
          aria-label="Close Menu"
          margin="0 2rem"
          fontSize="1.5rem"
          color="#595959"
          icon={<CloseIcon />}
          backgroundColor="#ffffff"
          boxShadow="#ffffff"
          _hover={{
            backgroundColor: '#ffffff',
          }}
          _focus={{
            backgroundColor: '#ffffff',
          }}
          onClick={() => {
            setDisplayNavMobile('none')
            setdisplayActive('flex')
          }}
        ></IconButton>
      </Flex>

      <Flex
        flexDirection="column"
        height="8rem"
        justifyContent="space-between"
        alignItems="center"
        marginTop="2rem"
      >
        <Link
          width="80%"
          height="40%"
        >
          <Flex
            alignItems="center"
            justifyContent="space-between"
          >
            <Link href="./search">Encontre um mentor</Link>
            <IconButton
              aria-label="Encontre um mentor"
              icon={<ChevronRightIcon />}
              fontSize="3rem"
              color="#595959"
              backgroundColor="#ffffff"
              boxShadow="#ffffff"
              _hover={{
                backgroundColor: '#ffffff',
              }}
              _focus={{
                backgroundColor: '#ffffff',
              }}
            ></IconButton>
          </Flex>
        </Link>

        <Link
          href="./signup"
          width="80%"
          height="40%"
        >
          <Flex
            alignItems="center"
            justifyContent="space-between"
          >
            <Link
              href="./signup"
            >Seja um mentor</Link>
            <IconButton
              aria-label="Seja um mentor"
              icon={<ChevronRightIcon />}
              fontSize="3rem"
              color="#595959"
              backgroundColor="#ffffff"
              boxShadow="#ffffff"
              _hover={{
                backgroundColor: '#ffffff',
              }}
              _focus={{
                backgroundColor: '#ffffff',
              }}
            ></IconButton>
          </Flex>
        </Link>
      </Flex>

      <Flex marginTop="4rem" flexDirection="column" alignItems="center">
        <Button
          width="80%"
          height="3rem"
          border="1.5px solid #F26419"
          color="#F26419"
          backgroundColor="#ffffff"
          borderRadius=".75rem"
          variant="unstyled"
        >
          <Link
            href="./login"
          >
            Entrar
          </Link>
        </Button>

        <Button
          marginTop="1rem"
          width="80%"
          height="3rem"
          color="#ffffff"
          backgroundColor="#F26419"
          borderRadius=".75rem"
          variant="unstyled"
        >
          <Link
            href="./signup"
          >
            Cadastrar
          </Link>
        </Button>
      </Flex>
    </Box>
  )
}
