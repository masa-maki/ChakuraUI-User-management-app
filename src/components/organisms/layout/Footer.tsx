import { Text, Flex } from "@chakra-ui/react";

export const Footer = () => {
    return ( 
        <>
        <Flex
          className="footer"
          as="nav"
          bg="teal.400"
          color="white"
          align="center"
          justify="space-between"
          padding={{ base: 3, md: 5 }}
        >
            <Text textAlign="center" w="100%">@ 2024 Masayuki</Text>
        </Flex>
        </>
    );
}