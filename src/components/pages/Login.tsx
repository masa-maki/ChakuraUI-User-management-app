import { memo, FC, ChangeEvent, useState } from 'react';
import { Box, Flex, Heading, Input, Stack, Image, Show, Text } from '@chakra-ui/react';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import { useAuth } from '../../hooks/useAuth';

export const Login: FC = memo(() => {
  const { login, loading } = useAuth();

  const [userId, setUserId] = useState<string>('');
  const [userPwd, setUserPwd] = useState<string>('');

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);
  const onChangeUserPwd = (e: ChangeEvent<HTMLInputElement>) =>
    setUserPwd(e.target.value);

  const onClickLogin = () => login(userId, userPwd);

  return (
    <Flex align="center" justify="center" height="100vh"  id="login_wrapper" px="4" >
      <Flex direction='row-reverse' bg="white" height="90vh" w="900px"  borderRadius="md" shadow="md" sx={{ overflow: "hidden" }} >
      <Box bg="white" w="100%" p={4} sx={{display:"flex", alignItems: "center"}}>
        <Stack w="80%" m="auto">
          <Heading as="h1" size="lg" textAlign="center">
            <Image src="/Paw.svg" alt="M1 Manager" w="xl" mx="auto" />
          </Heading>
          {/* <Divider my={4} /> */}
          <Text align="left">Welcome to User management page.<br />
          (*For testing, you can type 1 to 10 for User ID. 10 is Admin ID. Password might be any string.)</Text>
          <Stack spacing={6} py={4} px={{base:'0', sm:'10'}}>
            <Input
              placeholder="User ID"
              value={userId}
              onChange={onChangeUserId}
            />
            <Input
              placeholder="Password"
              type={'password'}
              value={userPwd}
              onChange={onChangeUserPwd}
            />
            <PrimaryButton
              disabled={userId === '' || userPwd === ''}
              loading={loading}
              onClick={onClickLogin}
            >
              Login
            </PrimaryButton>
          </Stack>
        </Stack>
      </Box>
      <Show above='md' >
        <Box display={{base: "none"}}className="bgteal" bg="teal.300" w="100%" p={4} sx={{display:"flex", alignItems: "center"}} >
          <Stack w="80%" m="auto" sx={{color: "white"}}>
            <Image src="/login_image2.png" w="90%" m="auto" />
            <Heading className='font_round' px="2">Friendly Team starts here</Heading>
            <Text>Manage your team with this web app.</Text>
          </Stack>
        </Box>
      </Show>
      </Flex>
    </Flex>
  );
});
