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
          py={{ base: 1, md: 2 }}
          px={{ base: 3, md: 5 }}
        >
            <Text textAlign="center" w="100%" fontSize="0.9rem">@ 2024 Masayuki</Text>
        </Flex>
        </>
    );
}