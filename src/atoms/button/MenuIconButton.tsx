import { IconButton } from '@chakra-ui/react';
import { memo, FC } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';

type Props = {
  onOpen: () => void;
};

export const MenuIconButton: FC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label="Menu button"
      icon={<HamburgerIcon />}
      size="m"
      ml={4}
      variant="unstyled"
      display={{ base: 'block', md: 'none' }}
      onClick={onOpen}
    />
  );
});
