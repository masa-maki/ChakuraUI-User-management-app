import { memo, FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
// import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import { LinkPanel } from '../../atoms/button/LinkPanel';
import { SideMenu } from '../organisms/layout/SideMenu';


export const Home: FC = memo(() => {
  const history = useHistory();
  const onClickUserManagement = useCallback(
    () => history.push('/home/user_management'),
    []
  );
  const onClickSetting = useCallback(
    () => history.push('/home/setting'),
    []
  );

  return (
    <>
    <Flex id="main" direction="row-reverse" p="0">
      <Box w="100%">
        <Box pos="relative" w="100%" sx={{aspectRatio: "5/1"}}>
          <Image src="/bg_image2.jpg" h="100%" w="100%" objectFit='cover' />
        </Box>
        <Box id="main" p="8">
          <Heading fontSize="1.6rem" mb="2" >
            Home page
          </Heading>
          <Text>
            Please select.
          </Text>
          <Stack direction={{base:'column', sm:'row'}} gap="4" maxW="800px" >
            <LinkPanel imgUrl="../../public/management_image.jpg" onClick={onClickUserManagement}>
              User Manager
            </LinkPanel>
            <LinkPanel imgUrl="../../public/setting_image.jpg" onClick={onClickSetting}>
              Setting
            </LinkPanel>
          </Stack>
          {/* <Divider borderColor="teal.500" mt="8" /> */}
          <Box mt="4" p="4" bg="white" borderRadius={8}>
            <Heading fontSize="xl" pb="2" my="2" borderBottom='1px' borderColor='gray.200'>News</Heading>
            <Text borderBottom='1px' pb="2" borderColor='gray.200'>
              2024.9.20  UI updated.
            </Text>
            <Text borderBottom='1px' pb="2" borderColor='gray.200'>
              2024.9.19  New feature released.
            </Text>
          </Box>
          {/* <h1>Home page</h1> */}
          {/* <p>This is a home page</p> */}
          {/* <PrimaryButton onClick={onClickUserManagement}>User List</PrimaryButton> */}
        </Box>
      </Box>
      <SideMenu />
    </Flex>
    </>
  );
});
