import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import { memo, FC } from 'react';
import { SideMenu } from '../organisms/layout/SideMenu';

export const Setting: FC = memo(() => {
  return (
    <Flex id="main" direction="row-reverse" p="0" gap="4" >
      <Box p="8" w="100%">
        <Heading fontSize="1.6rem" mb="2" >Setting page</Heading>
        <Text>Coming soon...</Text>
      </Box>
      <SideMenu />
    </Flex>
  );
});
