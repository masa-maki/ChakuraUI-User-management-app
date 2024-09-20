import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import { memo, FC } from 'react';
import { SideMenu } from '../organisms/layout/SideMenu';


export const Page404: FC = memo(() => {
  return (
    <Flex id="main" direction="row-reverse" p="0" gap="4">
      <Box p="8" w="100%">
        <Heading fontSize="1.6rem" mb="2" >Page404 page</Heading>
        <Text>This is a Page404 page</Text>
      </Box>
      {/* <SideMenu /> */}
    </Flex>
  );
});
