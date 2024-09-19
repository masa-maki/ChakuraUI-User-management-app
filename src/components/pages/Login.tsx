import { memo, FC, ChangeEvent, useState } from 'react';
import { Box, Divider, Flex, Heading, Input, Stack, Image, flexbox, Show, Text } from '@chakra-ui/react';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import { useAuth } from '../../hooks/useAuth';

export const Login: FC = memo(() => {
  const { login, loading } = useAuth();

  const [userId, setUserId] = useState<string>('');

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);

  const onClickLogin = () => login(userId);

  return (
    <Flex align="center" justify="center" height="100vh"  id="login_wrapper" px="4">
      <Flex direction='row-reverse' bg="white" w="sm" height="90vh" w="900px"  borderRadius="md" shadow="md" sx={{ overflow: "hidden" }}>
      <Box bg="white" w="100%" p={4} sx={{display:"flex", alignItems: "center"}}>
        <Stack w="80%" m="auto">
          <Heading as="h1" size="lg" textAlign="center">
            <Image src="/Paw.svg" alt="M1 Manager" w="xl" mx="auto" />
          </Heading>
          {/* <Divider my={4} /> */}
          <p>Welcome to User management page.</p>
          <Stack spacing={6} py={4} px={10}>
            <Input
              placeholder="User ID"
              value={userId}
              onChange={onChangeUserId}
            />
            <Input
              placeholder="Password"
              type={'password'}
            />
            <PrimaryButton
              disabled={userId === ''}
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
            <Heading className='font_round'>Friendly Team starts here</Heading>
            <Text>Manage your team with this web app.</Text>
          </Stack>
        </Box>
      </Show>
      </Flex>
    </Flex>
  );
});
