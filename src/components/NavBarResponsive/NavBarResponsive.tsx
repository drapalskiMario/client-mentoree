import { Flex, Image, Link, Button, HStack, IconButton, Text } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

export function NavBarResponsive({
  displayActive,
  changeDisplayActive,
  changeDisplayNavMobile,
}) {
  return (
    <Flex
      as="nav"
      height={['4rem', '4rem', '5rem']}
      width="100vw"
      justifyContent="space-between"
      borderBottom={['1px solid #CBCACC', '1px solid #CBCACC', '2px solid #CBCACC']}
      align="center"
      padding={["0 1rem", "0 1rem", "0 3rem"]}
      display={displayActive}
    >
      <Link
        href="./"
      >
        <Image 
          src="/assets/images/Logo.png" 
          width={['10rem', '16rem']}
        />
      </Link>

      <Flex 
        display={['none', 'none', 'flex']}
        marginRight="1rem"
      >
        <HStack spacing="2rem">
          <Link margin="0 2rem">
            <Text
              fontSize="1.15rem"
              fontWeight="bold"
            >
              Encontrar mentor
            </Text>
          </Link>
          <Link margin="0 2rem">
            <Text
              fontSize="1.15rem"
              fontWeight="bold"
            >
              Seja um mentor
            </Text>
          </Link>
          <Button
            width="11rem"
            height="3rem"
            border="2px solid #F26419"
            color="#F26419"
            backgroundColor="#ffffff"
            borderRadius=".75rem"
            variant="unstyled"
          >
            <Link>
              <Text
                fontSize="1.25rem"
              >
                Entrar
              </Text>
            </Link>
          </Button>
          <Button
            width="11rem"
            height="3rem"
            color="#ffffff"
            backgroundColor="#F26419"
            borderRadius=".75rem"
            variant="unstyled"
          >
            <Link
              href="./signup"
            >
              <Text
                fontSize="1.25rem"
              >
                Cadastrar
              </Text>
            </Link>
          </Button>

        </HStack>
      </Flex>

      <IconButton
        aria-label="Open Menu"
        marginRight="1rem"
        fontSize="2rem"
        icon={<HamburgerIcon />}
        color="#595959"
        display={['flex', 'flex', 'none']}
        backgroundColor="#ffffff"
        boxShadow="#ffffff"
        _hover={{
          backgroundColor: '#ffffff',
        }}
        _focus={{
          backgroundColor: '#ffffff',
        }}
        onClick={() => {
          changeDisplayActive('none')
          changeDisplayNavMobile('block')
        }}
      ></IconButton>
    </Flex>
  )
}
