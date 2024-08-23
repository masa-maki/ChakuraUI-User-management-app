import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';
import { memo, FC } from 'react';

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
            <Button onClick={onClickHome} w="100%">
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
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
