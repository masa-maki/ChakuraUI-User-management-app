import { memo, FC, ReactNode } from 'react';
import { Box, Image, Text, Button, Icon } from '@chakra-ui/react';

import { MdSettings } from 'react-icons/md'


type Props = {
  children: ReactNode;
  mt: string;
  onClick: () => void;
};

export const SideButton: FC<Props> = memo((props) => {
  const { children, mt="0", onClick } = props;

  return (
    <Button
      bg="white"
      shadow="sm"
      colorScheme='gray'
      variant='outline'
      fontSize='1.0rem'
      _hover={{ opacity: 0.7 }}
      onClick={onClick}
      mt={mt}
      mb="2"
      w="100%"
      justifyContent="flex-start"
    >
      {children}
    </Button>
  );
});
