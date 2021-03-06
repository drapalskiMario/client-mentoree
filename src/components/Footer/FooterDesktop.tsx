import { Flex, Link, Image, Text, HStack } from '@chakra-ui/react'

export function FooterDesktop() {
  return (
    <Flex
      display={["none", "none", "flex"]}
      height="6rem"
      backgroundColor="#F6F5F7"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex
        width="80%"
        flexDirection="column"
        alignItems="center"
        marginLeft="6rem"
      >
        <Image
          src="/assets/images/Logo.png"
          width="20rem"
        />
        <Text
          fontSize="0.8rem"
          color="#080808"
        >
          © 2021 - Mentoree, All rights reserved.
        </Text>
      </Flex>
      <Flex
        width="20%"
        flexDirection="column"
        alignItems="center"
      >
        <HStack
          width="70%"
          justifyContent="flex-end"
          spacing="1.5rem"
        >
          <Link
            href="https://www.linkedin.com/"
          >
            <Image
              src="/assets/images/LogoLinkedIn.png"
              width="40px"
              height="40px"
            />
          </Link>
          <Link
            href="https://www.instagram.com/"
          >
            <Image
              src="/assets/images/LogoInstagram.png"
              width="40px"
              height="40px"
            />
          </Link>
        </HStack>
        <Text
          fontSize="1rem"
          marginTop="0.5rem"
          color="#080808"
          fontWeight="bold"
        >
          contato@mentoree.com
        </Text>
      </Flex>
    </Flex>
  )
}