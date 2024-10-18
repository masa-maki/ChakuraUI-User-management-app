import { Flex, Divider, Icon } from '@chakra-ui/react';
import { memo, FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { SideButton } from '../../../atoms/button/SideButton';
// import { EditIcon, SettingsIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { MdHomeFilled, MdEditNote, MdSettings, MdClose } from 'react-icons/md';

export const SideMenu: FC = memo(() => {
    const history = useHistory();
  
    const onClickHome = useCallback(() => history.push('/home'), []);
    const onClickUserManagement = useCallback(
      () => history.push('/home/user_management'),
      []
    );
    const onClickSetting = useCal lback(() => history.push('/home/setting'), []);
    const onClickLogout = useCallback(() => history.push('/'), []);

    return (
      <>
      <Flex direction="column" borderRight="1px" borderColor="gray.300" maxW="14em" m="0" pt="8" pb="16" px="4" h="100vh" display={{ base: 'none', md: 'flex' }} sx={{ position: '-webkit-sticky', position: 'sticky', top: '0'}}>
        <SideButton onClick={onClickHome}><Icon as={MdHomeFilled} w={5} h={5} mr="2" />Dashboard</SideButton>
        <SideButton onClick={onClickUserManagement}><Icon as={MdEditNote} w={5} h={5} mr="2" />User Manager</SideButton>
        <SideButton onClick={onClickSetting}><Icon as={MdSettings} w={5} h={5} mr="2" />Setting</SideButton>
        {/* <Divider borderColor="gray.400" mt="2" mb="4" /> */}
        <SideButton onClick={onClickLogout} mt="auto"><Icon as={MdClose} w={5} h={5} mr="2" />Logout</SideButton>
      </Flex>
      </>
  );
});