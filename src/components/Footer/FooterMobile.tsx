import { Flex, Image, Link, Box, Text } from '@chakra-ui/react'

export function FooterMobile({ displayActive }) {
  return (
    <Flex
      as="footer"
      display={[displayActive, displayActive, 'none']}
      backgroundColor="#F6F5F7"
      height="5rem"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Box width="85%">
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Image src="/assets/images/Logo.png" width="10rem" />
          </Box>
          <Flex>
            <Link>
              <Image
                src="/assets/images/LogoLinkedIn.png"
                width="1rem"
                height="1rem"
              />
            </Link>
            <Link>
              <Image
                src="/assets/images/LogoInstagram.png"
                width="1rem"
                height="1rem"
                marginLeft="1rem"
              />
            </Link>
          </Flex>
        </Flex>
        <Flex justifyContent="space-between" marginTop="0.5rem">
          <Text
            fontSize={['0.4rem', '0.7rem']}
            color="#080808"
            fontWeight="thin"
          >
            © 2021 - Mentoree, All rights reserved.
          </Text>
          <Text
            fontSize={['0.4rem', '0.7rem']}
            color="#080808"
          >
            contato@mentoree.com
          </Text>
        </Flex>
      </Box>
    </Flex>
  )
}
