import { memo, FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Flex,
  Heading,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import { MenuIconButton } from '../../../atoms/button/MenuIconButton';
import { MenuDrawer } from '../../molecules/MenuDrawer';

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const onClickHome = useCallback(() => history.push('/home'), []);
  const onClickUserManagement = useCallback(
    () => history.push('/home/user_management'),
    []
  );
  const onClickSetting = useCallback(() => history.push('/home/setting'), []);
  const onClickLogout = useCallback(() => history.push('/'), []);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.400"
        color="gray.50"
        align="center"
        justify="space-between"
        py={{ base: 2, md: 3 }}
        px={{ base: 3, md: 5 }}
      >
        <Flex display={{ base: 'block', md: 'none'}}>
          <MenuIconButton onOpen={onOpen} />
        </Flex>
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: 'pointer' }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: 'md', md: 'md' }}>
            <Image src="/Paw_white.svg" alt="M1 Manager" />
          </Heading>
        </Flex>
        <Flex>
          {/* Set User icon later */}
        </Flex>
        {/* <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: 'none', md: 'flex' }}
        >
        </Flex> */}
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
        onClickLogout={onClickLogout}
      />
    </>
  );
});
