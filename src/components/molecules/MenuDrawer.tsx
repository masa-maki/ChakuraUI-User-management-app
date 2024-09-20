import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Icon,
} from '@chakra-ui/react';
import { MdHomeFilled, MdEditNote, MdSettings, MdClose } from 'react-icons/md';
import { memo, FC } from 'react';
import { SideButton } from '../../atoms/button/SideButton';

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
  onClickLogout: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const {
    onClose,
    isOpen,
    onClickHome,
    onClickUserManagement,
    onClickSetting,
    onClickLogout,
  } = props;
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Box py="8" px="4">
              <SideButton onClick={onClickHome}><Icon as={MdHomeFilled} w={5} h={5} mr="2" />Dashboard</SideButton>
              <SideButton onClick={onClickUserManagement}><Icon as={MdEditNote} w={5} h={5} mr="2" />User Manager</SideButton>
              <SideButton onClick={onClickSetting}><Icon as={MdSettings} w={5} h={5} mr="2" />Setting</SideButton>
              <Divider borderColor="gray" my="2" />
              <SideButton onClick={onClickLogout}><Icon as={MdClose} w={5} h={5} mr="2" />Logout</SideButton>
            </Box>
            {/* <Button onClick={onClickHome} w="100%">
              TOP
            </Button>
            <Button w="100%" onClick={onClickUserManagement}>
              User list
            </Button>
            <Button w="100%" onClick={onClickSetting}>
              Setting
            </Button>
            <Button w="100%" onClick={onClickLogout}>
              Logout
            </Button> */}
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
