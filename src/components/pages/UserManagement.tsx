/* eslint-disable react-hooks/exhaustive-deps */
import { memo, FC, useEffect, useCallback } from 'react';
import {
  Center,
  Heading,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
  Box,
  Flex,
} from '@chakra-ui/react';

import { UserCard } from '../organisms/user/UserCard';
import { useAllUsers } from '../../hooks/useAllUsers';
import { useSelectUser } from '../../hooks/useSelectUser';
import { UserDetailModal } from '../organisms/user/UserDetailModal';
import { useLoginUser } from '../../hooks/useLoginUser';
import { SideMenu } from '../organisms/layout/SideMenu';

export const UserManagement: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();
  console.log(loginUser);

  useEffect(() => getUsers(), []);
  // const userImageUrl = [new Array<string>(10).fill("https://picsum.photos/160")];
  const userImageUrl = [
    "https://fastly.picsum.photos/id/66/150/150.jpg?hmac=2cqd7x5UZVioa3Dh_Wk1VqZ8Er8YGzSrtiUMyXe350A",
    "https://fastly.picsum.photos/id/67/150/150.jpg?hmac=FIcUZGae9bPWr6Y_kg6h2fTgNxq501E1pu88LxK5-Mk", 
    "https://fastly.picsum.photos/id/68/150/150.jpg?hmac=th8Hnl1ahVopCkGnhzg0jTjXaDdKERDxRjFtPxBDABA", 
    "https://fastly.picsum.photos/id/69/150/150.jpg?hmac=ZL2zPhiuQR3XnOB_wA_yT42_x_FwKIoTPRedLfwxrZw", 
    "https://fastly.picsum.photos/id/70/150/150.jpg?hmac=S08PQdrXEG6LO85ctzxJhkySWsJOAcCpRLD2vh05FkQ",
    "https://fastly.picsum.photos/id/71/150/150.jpg?hmac=cPUz4Ot2fkz0TJybJ9NFlVExCvViNI8bNmub5RGjNUE",
    "https://fastly.picsum.photos/id/73/150/150.jpg?hmac=URHauVjblALeDYlC4z0MadUFPD24_w9RxWMiUu26Guw",
    "https://fastly.picsum.photos/id/74/150/150.jpg?hmac=Nkwpn5J-2MQbfrVDIudLW8y8J1K3U01RBQ7QMkLDtG0", 
    "https://fastly.picsum.photos/id/75/150/150.jpg?hmac=yowgzS97Om2QrmnaMLKwQTuJDL8riM9yRJgTpY7XuqA", 
    "https://fastly.picsum.photos/id/76/150/150.jpg?hmac=s6UjGsYCF9dUT5dJOmmxGCkE3nhucdJQK7GvrwHPxIE",
    "https://fastly.picsum.photos/id/77/150/150.jpg?hmac=ThX-NfyjCocVWpOdtGoV22j-iac727lSITn_WB0Julo"
  ];

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    [users, onSelectUser, onOpen]
  );
  return (
    <Flex id="main" direction="row-reverse" p="0" gap="4" >
      <Box p="8" w="100%">
      <Heading>User Manager</Heading>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} className="userlist">
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto" flex="1" minWidth="230px">
              <UserCard
                id={user.id}
                imageUrl={userImageUrl[user.id]}
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal
        user={selectedUser}
        isOpen={isOpen}
        onClose={onClose}
        isAdmin={loginUser?.isAdmin}
      />
      </Box>
      <SideMenu />
    </Flex>
  );
});
